import type { LoginCredentials, User } from "./user";

export interface userContextType {
    user: User | null;
    signIn: (credentials: LoginCredentials) => void;
}