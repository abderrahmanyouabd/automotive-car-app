import {createAction, props} from "@ngrx/store";
import {Cars} from "../../commonTypes";

export const onLoadAutomotives = '[CarList Component] on Load Automotives';
export const onLoadAutomotivesSuccess = '[CarList Component] on Load Automotives Success';
export const onLoadAutomotivesFailure = '[CarList Component] on Load Automotives Failure';


const onLoadAutomotivesAction = createAction(onLoadAutomotives);
const onLoadAutomotivesSuccessAction = createAction(onLoadAutomotivesSuccess, props<{payload: Cars}>());
const onLoadAutomotivesFailureAction = createAction(onLoadAutomotivesFailure, props<{message: string}>());

export {onLoadAutomotivesFailureAction, onLoadAutomotivesSuccessAction, onLoadAutomotivesAction}
