interface IRouter {
    login: string;
    home: string;
    authLogin: string;
    authLogout: string;
    pokemon: string;
}

export const router : IRouter = {
    // app
    login: '/',
    home: '/home',

    // api
    authLogin: '/auth/login',
    authLogout: '/auth/logout',

    pokemon: '/pokemon',
}
