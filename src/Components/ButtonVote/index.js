import React, { useState } from "react";
import MyModal from "../MyModal";
import like from "../../images/icons/like.svg";
import dislike from "../../images/icons/dislike.svg";

const ButtonVote = ({ dispatch, votefor, totalVotation }) => {
	const [open, setOpen] = useState(false);
	const [typeVote, setTypeVote] = useState("");
	const onCloseModal = () => setOpen(false);
	const handleVote = (vote) => {
		setTypeVote(vote);
		setOpen(true);
	};
	return (
		<>
			<div className="buttonvote-icons p4 d-flex justify-content-center">
				{totalVotation <= 9 ? (
					<>
						<img
							onClick={() => {
								handleVote("POS");
							}}
							className="vote-icons"
							src={like}
							alt="Like"
						/>
						<img
							onClick={() => {
								handleVote("NEG");
							}}
							className="ms-4 vote-icons"
							src={dislike}
							alt="Dislike"
						/>
					</>
				) : null}
			</div>
			<MyModal
				votefor={votefor}
				typeVote={typeVote}
				totalVotation={totalVotation}
				onCloseModal={onCloseModal}
				open={open}
				dispatch={dispatch}
			/>
		</>
	);
};

export default ButtonVote;
