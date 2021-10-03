import React from "react";
import like from "../../images/icons/like.svg";
import dislike from "../../images/icons/dislike.svg";

const Comments = ({ type, comments }) => {
	const showSometimes = () => {
		if (comments.length === 0) {
			return <p className="text-center">Aún no hay comentarios</p>;
		} else {
			return null;
		}
	};
	const showIcon = (index) => {
		if (comments[index].vote === "POS") {
			return <img src={like} alt="Like" />;
		} else {
			return <img src={dislike} alt="Dislike" />;
		}
	};
	return (
		<div className="row comment-container-max">
			<p className="col-12 comments-title text-center">
				Comentarios para {type}
			</p>
			<div className="col-12">
				<ul className="comment-list">
					{comments.map((comment, i) => (
						<li
							className="comment-block"
							key={comment.nickname + i}
						>
							<div className="card">
								<div className="text-white card-header bg-primary d-flex justify-content-between">
									<div>{comment.nickname}</div>
									<div>{showIcon(i)}</div>
								</div>

								<div className="card-body">
									{comment.message}
								</div>
							</div>
						</li>
					))}
				</ul>
				{showSometimes()}
			</div>
		</div>
	);
};

export default Comments;
