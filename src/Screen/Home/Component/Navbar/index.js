import React from "react";
import s from "./navbar.module.css";
import homeIcon from "../../../../images/home.svg";
import usaIcon from "../../../../images/iconUsa.svg";
import bellIcon from "../../../../images/bell.svg";
import avatar from "../../../../images/avatar.svg";
import arrowDown from "../../../../images/arrowDown.svg";

function Navbar() {
	return (
		<div className={s.body}>
			<div className={s.logo}>
				<img src={homeIcon} alt="" />
				<p>TripGuide</p>
			</div>
			<div className={s.item}>
				<div className={s.itemI}>
					<p className={s.i}>USD</p>
					<img className={s.iconI} src={usaIcon} alt="" />
					<img className={s.iconI} src={bellIcon} alt="" />
				</div>
				<div className={`${s.itemI} ${s.itemII}`}>
					<img
						className={s.i}
						className={s.icon}
						src={avatar}
						alt=""
					/>
					<p className={s.i}>Delowar</p>
					<img
						className={s.i}
						className={s.down}
						src={arrowDown}
						alt=""
					/>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
