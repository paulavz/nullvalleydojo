import React from "react";
import { Modal } from "react-responsive-modal";
import Forms from "../Forms";
import "react-responsive-modal/styles.css";
import "./custom-modal.css";

const MyModal = ({
	totalVotation,
	open,
	typeVote,
	onCloseModal,
	votefor,
	dispatch,
}) => {
	return (
		<div>
			<Modal open={open} onClose={onCloseModal} center>
				<Forms
					typeVote={typeVote}
					votefor={votefor}
					totalVotation={totalVotation}
					onCloseModal={onCloseModal}
					dispatch={dispatch}
				/>
			</Modal>
		</div>
	);
};

export default MyModal;
