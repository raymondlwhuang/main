import { createReducer, on, Action } from '@ngrx/store';
import { initialUserState, UserState } from '../state/user.state';
import * as UserActions from '../actions/user.action';
import { User } from 'src/app/_models/user';

export const iniUserState = initialUserState();

export const userReducer = createReducer(
    iniUserState,
    on(UserActions.getUserAction,state=>state),
    on(UserActions.createUserAction,(state: UserState ,user : User)=>{
        return {...state,Users:[...state.Users,user],UserError:null};
    }),
    on(UserActions.successGetUserAction,(state: UserState ,{payload})=>{
        return {...state,Users : payload};
    }),
    on(UserActions.successCreateUserAction,(state: UserState ,{payload})=>{
        return {...state,Users:[...state.Users,payload],UserError:null};
    }),
    on(UserActions.deleteUserAction,(state: UserState ,{payload})=>{
        return {...{},Users:[...state.Users,state.Users.filter(user=>user.email!=payload)],UserError:null};
    }),
    on(UserActions.successDeleteUserAction,(state: UserState ,{payload})=>{
        return {...{},Users:[...state.Users,state.Users.filter(user=>user.email!=payload)],UserError:null};
    }),
    on(UserActions.errorUserAction,(state: UserState,error:Error)=>{
        return {...state,UserError:error};
    })
);

export function UserReducer (state: UserState | undefined,action:Action){
    return userReducer(state,action);
}