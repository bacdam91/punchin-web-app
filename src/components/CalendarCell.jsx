import React, { Component } from "react";
import Shifts from "./Shifts";

export default class CalendarCell extends Component {
	render() {
		let extraClassNames = "calendar-cell ";

		extraClassNames +=
			new Date(this.props.date.id).getDay() === 0 ? "sunday " : "";

		extraClassNames +=
			new Date(this.props.date.id).getMonth() ===
			this.props.currentMonthIndex
				? ""
				: "not-current-month";

		return (
			<div className={extraClassNames}>
				<div className="date-header">{this.props.date.date}</div>
				<Shifts shifts={this.props.shifts} />
			</div>
		);
	}
}
