const CELLS_IN_CALENDAR = 42;

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

function formatDate(dateData) {
	const year = dateData.getFullYear();

	const month =
		dateData.getMonth() + 1 < 10
			? "0" + (dateData.getMonth() + 1)
			: dateData.getMonth() + 1;

	const date =
		dateData.getDate() < 10 ? "0" + dateData.getDate() : dateData.getDate();

	return `${year}-${month}-${date}`;
}

module.exports.generateCalendar = (year, month) => {
	let datesArray = [];
	const monthIndex = Months.indexOf(month);

	const firstOfMonth = new Date(year, monthIndex, 1);
	const dayOfFirstOfMonth = firstOfMonth.getDay();
	const numberOfDays = new Date(year, monthIndex + 1, 0).getDate();

	prefillCalendar(dayOfFirstOfMonth, year, monthIndex, datesArray);
	fillCalendar(numberOfDays, year, monthIndex, datesArray);
	postfillCalendar(datesArray, year, monthIndex);

	return datesArray;
};

function postfillCalendar(datesArray, year, monthIndex) {
	const numberOfEmptyCells = CELLS_IN_CALENDAR - datesArray.length;
	for (let i = 1; i <= numberOfEmptyCells; i++) {
		const tempDate = new Date(year, monthIndex + 1, i);
		const dateWrapper = {
			id: formatDate(tempDate),
			fullYear: tempDate.getFullYear(),
			month: tempDate.getMonth(),
			date: tempDate.getDate()
		};
		datesArray.push(dateWrapper);
	}
}

function fillCalendar(numberOfDays, year, monthIndex, datesArray) {
	for (let i = 1; i <= numberOfDays; i++) {
		const tempDate = new Date(year, monthIndex, i);
		const dateWrapper = {
			id: formatDate(tempDate),
			fullYear: tempDate.getFullYear(),
			month: tempDate.getMonth(),
			date: tempDate.getDate()
		};
		datesArray.push(dateWrapper);
	}
}

function prefillCalendar(dayOfFirstOfMonth, year, monthIndex, datesArray) {
	for (let i = dayOfFirstOfMonth - 1; i >= 0; i--) {
		const tempDate = new Date(year, monthIndex, -i);
		const dateWrapper = {
			id: formatDate(tempDate),
			fullYear: tempDate.getFullYear(),
			month: tempDate.getMonth(),
			date: tempDate.getDate()
		};
		datesArray.push(dateWrapper);
	}
}
