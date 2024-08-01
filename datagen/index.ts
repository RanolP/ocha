import { Effect, Stream } from 'effect';
import { parseSpreadSheet } from './shared/spreadsheet';
import fs from 'node:fs/promises';

await Effect.runPromise(
	Effect.gen(function* () {
		const sheet = Array.from(yield* Stream.runCollect(parseSpreadSheet()));

		const path = `${process.cwd()}/src/data.gen.json`;
		yield* Effect.promise(() =>
			fs.writeFile(path, JSON.stringify(sheet, null, 2), { encoding: 'utf-8' })
		);

		console.log(`Successfully wrote ${sheet.length} entries.`);
	})
).catch((e) => {
	console.error(e);
});
