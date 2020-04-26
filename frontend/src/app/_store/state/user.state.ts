import { User } from 'src/app/_models/user';


export interface UserState {
    Users : Array<User>;
    UserError : Error;
}

export const initialUserState = (): UserState =>{
    return {Users: Array<User>(),UserError: null};
} 