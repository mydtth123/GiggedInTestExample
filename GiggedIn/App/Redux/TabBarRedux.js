import { createActions,  createReducer} from "reduxsauce";
import { tabData } from "../Services/GlobalMethod";
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  setSelectedTab: ["id"]
});
export default Creators;

export const INITIAL_STATE = Immutable({
  selectedTab: tabData[0].id
});

export const TabBarTypes = Types;
export const selectedTab = (state, { id }) => state.merge({ selectedTab: id });
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_SELECTED_TAB]: selectedTab
});
