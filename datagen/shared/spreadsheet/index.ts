import { Effect, pipe, Stream } from 'effect';
import PublicGoogleSheetsParser from 'public-google-sheets-parser';
import { Schema, ParseResult } from '@effect/schema';

const SPREADSHEET_ID = '15cbrElPVEvxMUN7BtWn3nXqgJUvPrY7MW6Xx4ePsyFY';
const SPREADSHEET_TAB_NAME = '명단';
const parser = new PublicGoogleSheetsParser(SPREADSHEET_ID, {
	sheetName: SPREADSHEET_TAB_NAME,
	useFormat: false
});

const Keys = {
	ORD: '[간단한 안내문] 탭을 확인해 주세요.      (복닥복닥한) 오후의 차 ',
	NICKNAME:
		'안녕하세요, 지나가는 돌멩이 seha입니다.   >> 컨퍼런스에 가고 싶었는데 떨어졌다. 떨어져서 아쉽고, 잿밥에 관심이 더 많았던 사람이 나만은 아니겠지?  그런 사람들이 모여서 함께 이야기하는 자리를 마련해 봅니다. 우리도 컨퍼런스에 가고 싶었어요, 실은 컨퍼런스보다 수다가 목적이었던 우리 올드비라서 뻘쭘하다고요? 30년차 올드비도 오십니다. 뉴비라면 더 좋습니다. 어쩌다 보니 대표님 협찬을 받아 음료와 장소는 (주)도서출판 인사이트에서 지원합니다. 인사하며 건넬 명함과 쉬지 않고 이야기할 수 있는 체력만 챙겨 오세요(명함 대용 메모지 비치 예정). (기획된 이벤트는 없으나 경품이 생기면 할 수도....) 장소 좌석 음료 일시 대상 목적 방식 💁 선생님들, 그냥 나가시면 곤란합니다. 명단 적고 가셔야죠! 이름/닉',
	TIME: '자연 그리고 옹기랑, 컨퍼런스 장소에서 7분 거리! 36~40석 / 테이블 7개 차, 주스, 커피(최대 100잔) 2024년 8월 2일 13:30 ~ 16:30 (컨퍼런스에 붙어도, 떨어져도) 여하튼 만나고 싶은 사람들 IT인들의 교류(이런 거 써야지 있어 보이겠지) 시트에 적힌 주제를 대주제로 분류해 각 테이블에 적어둘 예정입니다 언제 오세요?',
	SAYING: '될 수 있으면 참여 시간을 적어주세요. 한 번에 몰리면 ㅠ.ㅠ 기타 하고 싶은 말'
};

const Participants = Schema.Struct({
	ord: Schema.Number.pipe(Schema.propertySignature, Schema.fromKey(Keys.ORD)),
	nickname: Schema.String.pipe(Schema.propertySignature, Schema.fromKey(Keys.NICKNAME)),
	time: Schema.transformLiterals(
		['계속 쭈욱~', 'WHOLE'],
		['꼭 가겠지만 시간 미정', 'UNKNOWN'],
		// ISO-8601-1:2019
		['1:30 ~ 2:30', '13:30/14:30'],
		['2:30 ~ 3:30', '14:30/15:30'],
		['3:30 ~ 4:30', '15:30/16:30']
	).pipe(Schema.UndefinedOr, Schema.propertySignature, Schema.fromKey(Keys.TIME)),
	userTopic: Schema.String.pipe(
		Schema.UndefinedOr,
		Schema.propertySignature,
		Schema.fromKey('어떤 이야기를 함께 하고 싶으세요?')
	),
	saying: Schema.String.pipe(
		Schema.UndefinedOr,
		Schema.propertySignature,
		Schema.fromKey(Keys.SAYING)
	),
	social: Schema.String.pipe(
		Schema.UndefinedOr,
		Schema.propertySignature,
		Schema.fromKey('[선택사항] 소셜/이메일/소속 등')
	),
	topicTagged: Schema.String.pipe(
		Schema.UndefinedOr,
		Schema.propertySignature,
		Schema.fromKey('대화 주제 대분류')
	)
});

type Participants = Schema.Schema.Type<typeof Participants>;

export type SpreadSheetError = ReturnType<
	(typeof SpreadSheetErrors)[keyof typeof SpreadSheetErrors]
>;
const SpreadSheetErrors = {
	requestFailed: () => ({ kind: 'REQUEST_FAILED' }) as const,
	invalidTime: (content: string) => ({ kind: 'INVALID_TIME', content }) as const,
	parseFailed: (error: ParseResult.ParseError) => ({ kind: 'PARSE_FAILED', error }) as const
};

export const parseSpreadSheet = (): Stream.Stream<Participants, SpreadSheetError> =>
	pipe(
		Effect.tryPromise({
			try: () => parser.parse(),
			catch: () => SpreadSheetErrors.requestFailed()
		}),
		Stream.fromIterableEffect,
		Stream.filter((value) => Keys.NICKNAME in value),
		Stream.mapEffect((value) =>
			pipe(
				value,
				Schema.decodeUnknown(Participants),
				Effect.mapError(SpreadSheetErrors.parseFailed)
			)
		)
	);
