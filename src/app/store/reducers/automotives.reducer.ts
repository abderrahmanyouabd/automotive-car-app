import {createReducer, on} from "@ngrx/store";
import {Car, Cars} from "../../commonTypes";
import {onLoadAutomotivesSuccessAction} from "../actions/automotives.action";

export type InitialCars =  { cars: Cars; }
export const initialState: InitialCars = { cars: [] };


const automotivesReducer = createReducer(
  initialState, on(onLoadAutomotivesSuccessAction, (state,{ payload}) => ({...state, cars: [...state.cars, ...payload]})));

export {automotivesReducer}
