import React, { Component } from "react";

export default class Shift extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	formatTime = dateTimeData => {
		const tempDateTime = new Date(dateTimeData);
		return `${
			tempDateTime.getUTCHours() < 10
				? "0" + tempDateTime.getUTCHours()
				: tempDateTime.getUTCHours()
		}:${
			tempDateTime.getUTCMinutes() < 10
				? "0" + tempDateTime.getUTCMinutes()
				: tempDateTime.getUTCMinutes()
		}`;
	};

	handleClickEdit = id => {
		console.log("Edit: " + id);
	};

	handleClickDelete = id => {
		console.log("Delete: " + id);
	};

	render() {
		return (
			<div className="shift">
				<div className="shift-detail">
					<span className=" mr-4 firstname">
						{this.props.shift.firstname}
					</span>
					<span className=" mr-4 start-date">
						{this.formatTime(this.props.shift.startDate)}
					</span>
					<span className=" mr-4 hyphen">-</span>
					<span className=" mr-4 end-date">
						{this.formatTime(this.props.shift.endDate)}
					</span>
					<div className="util-drawer">
						<button
							className=" mr-4 btn btn-edit"
							onClick={() => {
								this.handleClickEdit(this.props.shift._id);
							}}
						>
							<i className="fas fa-edit"></i>
						</button>
						<button
							className="mr4 btn btn-delete"
							onClick={() => {
								this.handleClickDelete(this.props.shift._id);
							}}
						>
							<i className="fas fa-trash-alt"></i>
						</button>
					</div>
				</div>
			</div>
		);
	}
}
