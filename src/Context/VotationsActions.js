export const voteJonathan = (state, comments, dispatch) => {
	let isRepeat;
	state.map((val) => {
		if (val.nickname === comments.nickname) {
			isRepeat = true;
		}
		return val;
	});
	if (isRepeat) return;
	dispatch({ type: "VOTE_JONATHAN", payload: comments });
};

export const voteDavid = (state, comments, dispatch) => {
	let isRepeat;
	state.map((val) => {
		if (val.nickname === comments.nickname) {
			isRepeat = true;
		}
		return val;
	});
	if (isRepeat) return;
	dispatch({ type: "VOTE_DAVID", payload: comments });
};

export const resetVotation = (dispatch) => {
	dispatch({ type: "RESET" });
};
