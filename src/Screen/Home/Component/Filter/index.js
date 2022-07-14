import React from "react";
import hotelIcon from "../../../../images/hotel.svg";
import flightIcon from "../../../../images/flight.svg";
import arrowIcon from "../../../../images/arrowDownline.svg";
import carIcon from "../../../../images/car.svg";
import tranferIcon from "../../../../images/tranfer.svg";
import s from "./filter.module.css";

function Filter() {
	return (
		<div className={s.body}>
			<div className={s.content}>
				<div className={s.top}>
					<div className={s.topLeft}>
						<div>
							<img src={hotelIcon} alt="" />
							<p>Hotel</p>
						</div>
						<div>
							<img src={flightIcon} alt="" />
							<p>Flight</p>
						</div>
						<div>
							<img src={carIcon} alt="" />
							<p>Car Rental</p>
						</div>
					</div>
					<div className={s.topRight}>
						<div>
							<p>Round trip</p>
							<img src={arrowIcon} alt="" />
						</div>
						<div>
							<p>Round trip</p>
							<img src={arrowIcon} alt="" />
						</div>
					</div>
				</div>
				<div className={s.bodyI}>
					<div>
						<p>Location</p>
						<p className={s.i}>Where are you from?</p>
					</div>
					<span className={s.tf}>
						<img className={s.tfi} src={tranferIcon} alt="" />
					</span>
					<div>
						<p>Check in</p>
						<p className={s.i}>Add Date</p>
					</div>
					<span className={s.tf}>
						<img className={s.tfi} src={tranferIcon} alt="" />
					</span>
					<div>
						<p>Check out</p>
						<p className={s.i}>Add date</p>
					</div>
					<button>Search</button>
				</div>
			</div>
		</div>
	);
}

export default Filter;
