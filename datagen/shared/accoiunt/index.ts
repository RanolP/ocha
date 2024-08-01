import type { Effect } from 'effect';

export interface AccountResolver {
	readonly matcher: RegExp;
	readonly tryResolve: (
		match: Record<string, string>
	) => Effect.Effect<Account, AccountResolutionError>;
}

export interface Account {
	username: string;
	displayName: string;

	bio?: string;
	profileImageUrl?: string;
}

export type AccountResolutionError = ReturnType<
	(typeof AccountResolutionErrors)[keyof typeof AccountResolutionErrors]
>;

export const AccountResolutionErrors = {
	requestFailure: () => ({ kind: 'REQUEST_FAILURE' }) as const,
	notFound: () => ({ kind: 'NOT_FOUND' }) as const
};

export * from './twitter';
