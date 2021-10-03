import { INITIAL_STATE } from "./VotationsContext";

const VotationsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "VOTE_JONATHAN":
			return {
				...state,
				jonathan: [...state.jonathan, action.payload],
			};
		case "VOTE_DAVID":
			return {
				...state,
				david: [...state.david, action.payload],
			};
		case "RESET":
			return {
				jonathan: [],
				david: [],
			};
		default:
			return state;
	}
};

export default VotationsReducer;
