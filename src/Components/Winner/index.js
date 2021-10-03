import React, { useContext } from "react";
import { VotationsContext } from "../../Context/VotationsContext";
import Comments from "../Comments";
import davidImage from "../../images/David Larousse.png";
import jonathanImage from "../../images/Jonathan Lowrie.png";
import { resetVotation } from "../../Context/VotationsActions";
import { getVoteCount, getTotal, calculateWinner } from "../../Helpers/votes";

const Winner = ({ onCloseModal }) => {
	const { jonathan, david, dispatch } = useContext(VotationsContext);
	const totalJonathan = getTotal(
		getVoteCount(jonathan, "NEG"),
		getVoteCount(jonathan, "POS")
	);
	const totalDavid = getTotal(
		getVoteCount(david, "NEG"),
		getVoteCount(david, "POS")
	);
	const winner = calculateWinner(
		"David Larousse",
		totalDavid,
		"Jonathan Lowrie",
		totalJonathan
	);
	const reset = () => {
		resetVotation(dispatch);
		onCloseModal();
	};
	const winnerResult = () => {
		switch (winner.result) {
			case 0:
				return (
					<div className="empate-text">
						La encuenta ha terminado en empate prueba reiniciarla
					</div>
				);
			case 1:
				return (
					<div className="d-flex flex-column align-items-center">
						<h4>¡Ha Ganado David Larousse!</h4>
						<span>
							Preparate para una competencia increible,
							felicidades a David
						</span>
						<img
							className="mt-2 mb-2 app-image-david app-image"
							src={davidImage}
							alt="David"
						/>
					</div>
				);
			case 2:
				return (
					<div className="d-flex flex-column align-items-center">
						<h4>¡Ha Ganado Jonathan Lowrie!</h4>
						<span>
							Preparate para una competencia increible,
							felicidades a Jonathan
						</span>
						<img
							className="mt-2 mb-2 app-image-jonathan app-image"
							src={jonathanImage}
							alt="Jonathan"
						/>
					</div>
				);
			default:
				return null;
		}
	};
	return (
		<div>
			<div>Resultado: {winner.message}</div>
			{winnerResult()}
			<Comments type="Jonathan" comments={jonathan} />
			<Comments type="David" comments={david} />
			<button onClick={reset} className="btn btn-block btn-success">
				RESETEAR ENCUESTA
			</button>
		</div>
	);
};

export default Winner;
