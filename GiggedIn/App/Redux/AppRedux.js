import { createActions, createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    showModal: [""],
    hideModal: [""]
});
export default Creators;

export const INITIAL_STATE = Immutable({
    isShowModal: false
});

export const AppTypes = Types;
export const showModal = state => state.merge({ isShowModal: true });
export const hideModal = state => state.merge({ isShowModal: false });

export const reducer = createReducer(INITIAL_STATE, {
    [Types.SHOW_MODAL]: showModal,
    [Types.HIDE_MODAL]: hideModal
});
