import React, { createContext, useReducer, useEffect } from "react";
import VotationsReducer from "./VotationsReducer";

export const INITIAL_STATE = {
	jonathan: JSON.parse(localStorage.getItem("jonathan")) || [],
	david: JSON.parse(localStorage.getItem("david")) || [],
};

export const VotationsContext = createContext(INITIAL_STATE);

const VotationsContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(VotationsReducer, INITIAL_STATE);

	useEffect(() => {
		localStorage.setItem("jonathan", JSON.stringify(state.jonathan));
		localStorage.setItem("david", JSON.stringify(state.david));
	}, [state.jonathan, state.david]);

	return (
		<VotationsContext.Provider
			value={{ jonathan: state.jonathan, david: state.david, dispatch }}
		>
			{children}
		</VotationsContext.Provider>
	);
};

export default VotationsContextProvider;
