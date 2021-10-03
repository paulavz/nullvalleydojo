import React, { useContext } from "react";
import Comments from "../Comments";
import ButtonVote from "../ButtonVote";
import { VotationsContext } from "../../Context/VotationsContext";
import { resetVotation } from "../../Context/VotationsActions";
import { getVoteCount, getTotal } from "../../Helpers/votes";
import davidImage from "../../images/David Larousse.png";
import jonathanImage from "../../images/Jonathan Lowrie.png";
import "./app.css";

const App = () => {
  const { jonathan, david, dispatch } = useContext(VotationsContext);
  const totalVotation = jonathan.length + david.length;
  const totalJonathan = getTotal(
    getVoteCount(jonathan, "NEG"),
    getVoteCount(jonathan, "POS")
  );
  const totalDavid = getTotal(
    getVoteCount(david, "NEG"),
    getVoteCount(david, "POS")
  );
  const reset = () => {
    resetVotation(dispatch);
  };
  return (
    <div className="App">
      <div className="header navbar d-flex align-items-center flex-column">
        <h3>¡Null Valley te Necesita!</h3>
        <h2 className="text-center">
          Elige que dojo será el organizador de la próxima competencia de karate
        </h2>
      </div>
      {totalVotation === 10 ? (
        <div className="d-flex flex-column align-items-center">
          <div>Encuesta Terminada con 10 Votantes, reinicia la votación</div>{" "}
          <button onClick={reset} className="btn btn-primary btn-block">
            RESETEAR ENCUESTA
          </button>
        </div>
      ) : (
        <div className="text-center">Votos Totales: {totalVotation}</div>
      )}
      <div className="row">
        <div className="col-12 col-md-6 d-flex align-items-center flex-column">
          <h3>Vota por David Larousse</h3>
          <img
            className="app-image-david app-image"
            src={davidImage}
            alt="David Larousse"
          />
          <ButtonVote
            totalVotation={totalVotation}
            dispatch={dispatch}
            votefor={"David"}
          />
          <div>Votos: {totalDavid}</div>
        </div>
        <div className="col-12 col-md-6 d-flex align-items-center flex-column">
          <h3>Vota por Jonathan Lowrie</h3>
          <img
            className="app-image-jonathan app-image"
            src={jonathanImage}
            alt="Jonathan Lowrie"
          />
          <ButtonVote
            totalVotation={totalVotation}
            dispatch={dispatch}
            votefor={"Jonathan"}
          />
          <div>Votos: {totalJonathan}</div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 d-flex align-items-center flex-column">
          <Comments type="David" comments={david} />
        </div>
        <div className="col-12 col-md-6 d-flex align-items-center flex-column">
          <Comments type="Jonathan" comments={jonathan} />
        </div>
      </div>
    </div>
  );
};

export default App;
