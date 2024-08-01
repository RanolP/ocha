import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetTagify,
	presetUno,
	transformerCompileClass,
	transformerDirectives,
	transformerVariantGroup
} from 'unocss';
import extractorSvelte from '@unocss/extractor-svelte';
import type { Theme } from 'unocss/preset-uno';
import { presetTheme } from 'unocss-preset-theme';
import OpenColor from 'open-color';
import { mix } from 'polished';

export default defineConfig({
	theme: {
		fontFamily: {
			base: 'Hahmlet Variable',
			sans: 'IBM Plex Sans KR'
		}
	},
	extractors: [extractorSvelte()],
	presets: [
		presetUno(),
		presetAttributify(),
		presetIcons({
			extraProperties: {
				display: 'inline-block',
				'vertical-align': 'middle'
			}
		}),
		presetTagify(),
		presetTheme<Theme>({
			theme: {
				light: {
					colors: {
						'foreground-1': OpenColor.gray[9],
						'foreground-2': OpenColor.gray[7],

						'background-1': OpenColor.gray[0],
						'background-2': OpenColor.gray[2],
						'background-3': OpenColor.gray[3],

						'border-1': OpenColor.gray[6],

						'table-row-even': mix(0.1, OpenColor.indigo[5])(OpenColor.gray[2]),
						'table-row-odd': mix(0.25, OpenColor.indigo[5])(OpenColor.gray[3]),

						orange: OpenColor.orange[6],
						blue: OpenColor.blue[6],
						yellow: OpenColor.yellow[6],
						green: OpenColor.green[6],
						gray: OpenColor.gray[6]
					}
				},
				dark: {
					colors: {
						'foreground-1': OpenColor.gray[2],
						'foreground-2': OpenColor.gray[4],

						'background-1': OpenColor.gray[9],
						'background-2': OpenColor.gray[8],
						'background-3': OpenColor.gray[7],

						'border-1': OpenColor.gray[6],

						'table-row-even': mix(0.1, OpenColor.indigo[5])(OpenColor.gray[9]),
						'table-row-odd': mix(0.1, OpenColor.indigo[5])(OpenColor.gray[8]),

						orange: OpenColor.orange[4],
						blue: OpenColor.blue[4],
						yellow: OpenColor.yellow[4],
						green: OpenColor.green[4],
						gray: OpenColor.gray[6]
					}
				}
			},
			selectors: {
				light: '[data-theme=light]',
				dark: '[data-theme=dark]'
			}
		})
	],
	transformers: [transformerVariantGroup(), transformerDirectives(), transformerCompileClass()]
});
