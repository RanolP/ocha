import { Effect, pipe } from 'effect';
import { Rettiwt } from 'rettiwt-api';
import { AccountResolutionErrors, type AccountResolver } from '.';

const rettiwt = new Rettiwt();
export const TwitterResolver: AccountResolver = {
	matcher: /^https?:\/\/(?:twitter\.com|x\.com)\/(?<username>[^\s/]+)/,
	tryResolve: ({ username }) =>
		pipe(
			Effect.tryPromise({
				try: () => rettiwt.user.details(username),
				catch: () => AccountResolutionErrors.requestFailure()
			}),
			Effect.flatMap((user) =>
				Effect.fromNullable(user).pipe(Effect.mapError(() => AccountResolutionErrors.notFound()))
			),
			Effect.map((user) => ({
				username,
				displayName: user.fullName,
				bio: user.description,
				profileImageUrl: user.profileImage
			}))
		)
};
