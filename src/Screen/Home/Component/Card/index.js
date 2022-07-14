import React from "react";
import s from "./card.module.css";
import cardImg from "../../../../images/mahmud-ahsan-QqPcxfFKqfU-unsplash.png";
import Hot from "../../../../images/hot.svg";

function Card({ isHot }) {
	return (
		<div className={`${s.body} ${isHot ? s.isHot : ""}`}>
			<div className={s.flex}>
				<img src={cardImg} alt="" />
				{isHot && <img className={s.iconHot} src={Hot} alt="" />}
			</div>
			<p>Batu, East Java</p>
			<p className={s.i}>86 Destinations</p>
		</div>
	);
}

export default Card;
