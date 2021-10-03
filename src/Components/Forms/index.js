import React, { useState, useContext } from "react";
import Winner from "../Winner";
import { useForm } from "../../Hooks/useForm";
import like from "../../images/icons/like.svg";
import dislike from "../../images/icons/dislike.svg";
import { VotationsContext } from "../../Context/VotationsContext";
import { evalValidation } from "../../Helpers/validators";
import { voteJonathan, voteDavid } from "../../Context/VotationsActions";

const Forms = ({ totalVotation, votefor, typeVote, onCloseModal }) => {
	const [formVotesValues, handleformInputChange] = useForm({
		message: "",
		nickname: "",
	});
	const { jonathan, david, dispatch } = useContext(VotationsContext);
	const [error, setError] = useState(false);
	const [info, setInfo] = useState("");
	const [end, setEnd] = useState(false);
	const { message, nickname } = formVotesValues;
	const runVote = () => {
		setError(false);
		let data = {
			message,
			nickname,
			vote: typeVote,
		};
		let validator = evalValidation(data);
		if (validator.error) {
			setError(true);
			setInfo(validator.info);
			return;
		}
		if (votefor === "David") {
			voteDavid(david, data, dispatch);
		}
		if (votefor === "Jonathan") {
			voteJonathan(jonathan, data, dispatch);
		}
		if (totalVotation < 9) {
			onCloseModal();
		} else {
			setEnd(true);
		}
	};
	const handleVote = (e) => {
		e.preventDefault();
		runVote();
	};
	const getIcon = () => {
		if (typeVote === "POS") {
			return <img className="mb-2 forms-icon" src={like} alt="Like" />;
		} else {
			return <img className="forms-icon" src={dislike} alt="Dislike" />;
		}
	};
	return (
		<div>
			{end ? (
				<Winner onCloseModal={onCloseModal} />
			) : (
				<div className="container d-flex flex-column align-items-center">
					<div className="vote-text">
						Voto {getIcon()} para {votefor}.
					</div>
					{error ? (
						<div className="alert alert-danger">{info}</div>
					) : null}
					<form className="col-8">
						<div className="form-group mt-2 mb-2">
							<input
								maxLength="8"
								type="text"
								className="form-control"
								placeholder="Nickname"
								name="nickname"
								value={nickname}
								onChange={handleformInputChange}
							/>
						</div>
						<div className="form-group mt-2 mb-2">
							<textarea
								maxLength="120"
								type="text"
								className="form-control"
								placeholder="Comentario"
								name="message"
								value={message}
								onChange={handleformInputChange}
							/>
						</div>
						<button
							onClick={handleVote}
							type="submit"
							className="btn btn-primary"
						>
							VOTAR
						</button>
					</form>
				</div>
			)}
		</div>
	);
};

export default Forms;
