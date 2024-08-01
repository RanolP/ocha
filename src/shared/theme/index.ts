import Cookies from 'js-cookie';

export const COOKIE_NAME = 'theme';

const MEDIA_QUERY = 'screen and (prefers-color-scheme: dark)';

export function setTheme(theme: 'dark' | 'system-dark' | 'system-light' | 'light') {
	Cookies.set(COOKIE_NAME, theme);
}

export function getThemeSetting(
	isDark?: boolean
): 'dark' | 'system-dark' | 'system-light' | 'light' {
	isDark ??= matchMedia(MEDIA_QUERY).matches;
	switch (Cookies.get(COOKIE_NAME)) {
		case 'dark':
			return 'dark';
		case 'light':
			return 'light';
		case 'system-dark':
		case 'system-light':
		default:
			return isDark ? 'system-dark' : 'system-light';
	}
}

export function getThemeApplied(isDark?: boolean): 'dark' | 'light' {
	isDark ??= matchMedia(MEDIA_QUERY).matches;
	switch (Cookies.get(COOKIE_NAME)) {
		case 'dark':
			return 'dark';
		case 'light':
			return 'light';
		case 'system-dark':
		case 'system-light':
		default:
			return isDark ? 'dark' : 'light';
	}
}

export function updateDom(isDark?: boolean) {
	document.documentElement.dataset.theme = getThemeApplied(isDark);
}

export function install() {
	const callback = ({ matches }: { matches: boolean }) => {
		setTheme(getThemeSetting());
		updateDom(matches);
	};
	callback(matchMedia(MEDIA_QUERY));

	const media = matchMedia(MEDIA_QUERY);
	media.addEventListener('change', callback);
	return () => media.removeEventListener('change', callback);
}
