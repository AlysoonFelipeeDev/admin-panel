export interface User {
    id: string | number, 
    name: string,
    email: string,
    password: string
    role: 'admin' | 'member'
};

export type LoginCredentials = Pick<User, 'email'> & {password: string}

export type AuthUser = {
    user: User;
    accessToken: string
}