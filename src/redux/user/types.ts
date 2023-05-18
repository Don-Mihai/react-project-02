export interface IUser {
    id: string;
    login?: string;
    password?: string;
    birthDate?: string;
    email?: string;
    name: string;
    surname: string;
    userDescribe?: string;
    imgUrl?: string;
    themeUrl?: string;
    skills?: string[];
    activeRole?: ROLES | string;
}

export enum ROLES {
    ADMIN = 'ADMIN',
    DEVELOPER = 'DEVELOPER',
    CUSTUMER = 'CUSTUMER',
}

export type TCreateUser = Omit<IUser, 'id'>;

export interface IAuthUser {
    login: string;
    password: string;
}

export interface UserState {
    users: IUser[];
    currentUser: IUser;
}
