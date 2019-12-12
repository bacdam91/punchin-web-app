import React, { Component } from "react";
import CalendarCell from "./CalendarCell";
import { generateCalendar } from "../services/rosterService";
import { getShifts } from "../services/shiftService";

const Months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];

const DaysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default class CalendarBody extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentMonth: "",
			currentMonthIndex: 0,
			calendar: [],
			shifts: []
		};
	}

	componentDidMount() {
		const now = new Date();
		const year = now.getFullYear();
		const month = now.getMonth();

		this.setState({
			currentMonth: Months[month],
			currentMonthIndex: month,
			calendar: generateCalendar(year, Months[month]),
			shifts: getShifts()
		});
	}

	datesAreSame = (date1, date2) => {
		return (
			date1.getFullYear() === date2.getFullYear() &&
			date1.getMonth() === date2.getMonth() &&
			date1.getDate() === date2.getDate()
		);
	};

	render() {
		return (
			<div className="container calendar">
				<div className="container calendar-header">
					{DaysOfWeek.map(day => {
						return (
							<div className="calendar-header-cell" key={day}>
								{day}
							</div>
						);
					})}
				</div>
				<div className="container calendar-body">
					{this.state.calendar.map(dateWrapper => {
						const shifts = this.state.shifts.filter(shift => {
							const shiftStartDate = new Date(shift.startDate);
							const calendarDate = new Date(dateWrapper.id);

							if (
								this.datesAreSame(shiftStartDate, calendarDate)
							) {
								return true;
							} else {
								return false;
							}
						});

						return (
							<CalendarCell
								currentMonthIndex={this.state.currentMonthIndex}
								key={dateWrapper.id}
								date={dateWrapper}
								shifts={shifts}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}
