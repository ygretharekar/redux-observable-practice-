import {createStore, applyMiddleware} from "redux";

import { combineEpics, createEpicMiddleware } from "redux-observable";

import { helloEpic, apiEpic } from '../epics/helloEpic';
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import {composeWithDevTools} from "redux-devtools-extension";
import reducer from "../reducers";

const rootEpic = combineEpics(
	helloEpic,
	apiEpic
);

const epicMiddleware = createEpicMiddleware();

export default initialState => {
	
	const store = createStore(
		reducer,
		initialState,
		composeWithDevTools(
			applyMiddleware(
				epicMiddleware,
				reduxImmutableStateInvariant()
			)
		)
	);
	epicMiddleware.run(rootEpic);
	return store;
}
