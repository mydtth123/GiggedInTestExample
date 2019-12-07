import { createActions, createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    fetchingData: [""],
    setUserData: ["data"],
    userFailure:['']
});
export default Creators;

export const INITIAL_STATE = Immutable({
    userData: [],
    loading: false
});

export const UserDataTypes = Types;
export const fetchingData = state => state.merge({ loading: true });
export const setUserData = (state, { data }) => state.merge({ userData: data, loading: false });
export const userFailure = (state) => state.merge({loading: false });

export const reducer = createReducer(INITIAL_STATE, {
    [Types.FETCHING_DATA]: fetchingData,
    [Types.SET_USER_DATA]: setUserData,
    [Types.USER_FAILURE]:userFailure
});
