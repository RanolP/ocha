// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
	// interface Error {}
	// interface Locals {}
	// interface PageData {}
	// interface PageState {}
	// interface Platform {}
}

declare namespace svelteHTML {
	import type { AttributifyAttributes } from 'unocss/preset-attributify';
	type HTMLAttributes = AttributifyAttributes;
}
