import { setUserSession, defineOAuthAuth0EventHandler, sendRedirect } from "#imports";
import type { User } from "../../domains/user/entities";
import { type Option, isSome } from "fp-ts/es6/Option";
import type {H3Event} from "h3";
import { useContainer, userCreateKey, userQueryKey } from "../../utils/container";
import type { UserDto } from "@shared/models/user.dto"

type Auth0User = {
    user: {
        sub: string;
        email: string;
        name: string;
    }
}

const createUser = async (user: Auth0User['user']): Promise<User> => {
    const userCreate = useContainer().get(userCreateKey);
    return userCreate.createUser({
        authId: user.sub,
        name: user.name,
        email: user.email
    });
}

export default defineOAuthAuth0EventHandler({
    async onSuccess(event: H3Event, { user } : Auth0User) {

        const container = useContainer();
        const userQuery = container.get(userQueryKey);

        const userOpt: Option<User> = await userQuery.findByAuthId(user.sub);
        const userData = (isSome(userOpt)) ? userOpt.value: await createUser(user);

        const userDto = userData as UserDto;
        await setUserSession(event, {
            user: userDto
        });

        return sendRedirect(event, '/dashboard');
    },

    onError(event: H3Event, error: unknown) {
        console.error('Auth0 login error:', error);
        return sendRedirect(event, '/');
    }
});

