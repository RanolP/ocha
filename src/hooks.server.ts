import type { Handle } from '@sveltejs/kit';
import { COOKIE_NAME } from './shared/theme';

export const handle: Handle = ({ event, resolve }) => {
	let theme = event.cookies.get(COOKIE_NAME) ?? '';
	if (theme.startsWith('system-')) {
		theme = theme.replace('system-', '');
	}
	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%initial-theme%', theme)
	});
};
