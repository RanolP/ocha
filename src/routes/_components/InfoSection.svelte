<script lang="ts">
	import KakaoMap from '$lib/images/kakaomap_logo.png';
	import NaverMap from '$lib/images/navermap_logo.png';
	import data from '@/data.gen.json';
</script>

<p>설문에는 총&nbsp;<font-bold text-orange>{data.length}명</font-bold>이 응답했어요.</p>
<p>
	만약&nbsp;방문하실&nbsp;계획이시라면, <font-bold text-blue
		>자연&nbsp;그리고&nbsp;옹기랑(<a
			href="https://place.map.kakao.com/1589298683"
			rel="noreferrer"
			target="_blank"
			><ruby align-bottom text-8 line-height-tight
				><img w-10 h-10 src={KakaoMap} alt="카카오맵 아이콘" /><rp>(</rp><rt text-foreground-2
					>카카오맵</rt
				><rp>)</rp></ruby
			></a
		>,
		<a href="https://map.naver.com/p/entry/place/1331918933" rel="noreferrer" target="_blank"
			><ruby align-bottom text-8 line-height-tight
				><img w-10 h-10 src={NaverMap} alt="네이버 지도 아이콘" /><rp>(</rp><rt text-foreground-2
					>네이버&nbsp;지도</rt
				><rp>)</rp></ruby
			></a
		>)</font-bold
	>으로 오시면&nbsp;돼요.
</p>
<div h-6></div>
<p>
	<font-bold text-yellow>좌석은&nbsp;36~40석, 테이블은&nbsp;7개</font-bold>가 준비되어&nbsp;있어요.
	기본&nbsp;제공&nbsp;음료는
	<font-bold text-green>총&nbsp;100잔</font-bold>이에요. 약간의&nbsp;간식이 있다곤&nbsp;하지만,
	<font-bold text-green>디저트</font-bold>&nbsp;메뉴가 필요하다면
	<font-bold text-green>개별&nbsp;구매</font-bold>를 추천해요.
</p>
<div h-6></div>
<p>
	각&nbsp;테이블에는 <font-bold text-gray>명함&nbsp;대용&nbsp;메모지</font-bold>가 있어요.
	필요할&nbsp;경우 사용하시면&nbsp;돼요.
</p>
<div h-6></div>
<p>
	입장&nbsp;시&nbsp;<font-bold text-yellow>입구</font-bold>에서
	<font-bold text-yellow>뽑기</font-bold>를&nbsp;해요.
</p>
<p>
	<font-bold text-green>카운터</font-bold>에&nbsp;가서
	<font-bold text-green>뽑기&nbsp;용지를 통</font-bold>에&nbsp;넣고,
	<font-bold text-green>주문&nbsp;음료</font-bold>를&nbsp;적어주세요.
</p>
<p>
	이후,
	<font-bold text-orange>음료를&nbsp;받아 원하시는&nbsp;테이블로</font-bold> 이동하시면&nbsp;돼요.
</p>
<p>선택할&nbsp;수&nbsp;있는 음료는 이런&nbsp;것들이 있어요.</p>
<div h-4></div>
<div overflow-x-auto max-w-screen>
	<table mx-auto text="5 md:6 lg:7" bg-background-2 inline-block shadow="~ [black] md">
		<tr>
			<th text-right>밀크</th>
			<td>딸기</td>
			<td>바나나</td>
			<td>파인애플</td>
			<td>블루베리</td>
		</tr>
		<tr>
			<th text-right>발효식초</th>
			<td>사과</td>
			<td>감귤</td>
			<td>키위</td>
			<td>파인애플</td>
		</tr>
		<tr>
			<th text-right>커피</th>
			<td>고소한 &times; ICE</td>
			<td>고소한 &times; HOT</td>
			<td>산미있는 &times; ICE</td>
			<td>산미있는 &times; HOT</td>
		</tr>
		<tr>
			<th text-right>차</th>
			<td>모과차</td>
			<td>생강차</td>
			<td>청귤차</td>
			<td>매실차</td>
		</tr>
	</table>
</div>

<style>
	th {
		@apply border-r-2 border-border-1;
	}
	th,
	td {
		@apply px-3 py-1;
	}
	tr:nth-of-type(2n) {
		@apply bg-table-row-even;
	}
	tr:nth-of-type(2n + 1) {
		@apply bg-table-row-odd;
	}
</style>
