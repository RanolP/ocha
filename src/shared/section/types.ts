import type { ComponentType } from 'svelte';

export interface SectionType {
	id: string;
	name: string;
	Component?: ComponentType;
}
