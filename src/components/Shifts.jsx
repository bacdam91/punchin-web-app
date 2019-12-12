import React from "react";
import Shift from "./Shift";

const Shifts = props => (
	<div className="container shifts">
		{props.shifts.map(shift => {
			return <Shift key={shift._id} shift={shift} />;
		})}
	</div>
);

export default Shifts;
