// edison january
setTimeout(() => {
	const tableHead = document.querySelectorAll('thead tr')[0];
	console.log(tableHead);
	const ths = tableHead.querySelectorAll('th');
	ths[2].innerText = 'Proposed increase';
	ths[4].innerText = '%Increase';

	const firstRow = document.querySelectorAll('tbody tr')[0];
	const secondRow = document.querySelectorAll('tbody tr')[1];

	const firstTds = firstRow.querySelectorAll('td');
	firstTds[1].innerText = '$184.22';
	firstTds[2].innerText = '$3.69';
	firstTds[3].innerText = '$187.90';
	firstTds[4].innerText = '2%';

	const secondTds = secondRow.querySelectorAll('td');
	secondTds[1].innerText = '$121.07';
	secondTds[2].innerText = '$2.42';
	secondTds[3].innerText = '$123.49';
	secondTds[4].innerText = '2%';
}, 100);

// edison march
setTimeout(() => {
	const tableHead = document.querySelectorAll("thead tr")[0];
const ths = tableHead.querySelectorAll("th");
ths[2].innerText = "Proposed increase";
ths[4].innerText = "%Increase";

const firstRow = document.querySelectorAll("tbody tr")[0];
const secondRow = document.querySelectorAll("tbody tr")[1];

const firstTds = firstRow.querySelectorAll("td");
firstTds[1].innerText = "$187.22";
firstTds[2].innerText = "$2.24";
firstTds[3].innerText = "$189.46";
firstTds[4].innerText = "1.2%";

const secondTds = secondRow.querySelectorAll("td");
secondTds[1].innerText = "$123.49";
secondTds[2].innerText = "$1.48";
secondTds[3].innerText = "$124.97";
secondTds[4].innerText = "1.2%";

}, 100)

// edison june
setTimeout(() => {
	const tableHead = document.querySelectorAll('thead tr')[0];
	const ths = tableHead.querySelectorAll('th');
	ths[2].innerText = 'Proposed increase';
	ths[4].innerText = '%Increase';

	const firstRow = document.querySelectorAll('tbody tr')[0];
	const secondRow = document.querySelectorAll('tbody tr')[1];

	const firstTds = firstRow.querySelectorAll('td');
	firstTds[1].innerText = '$189.46';
	firstTds[2].innerText = '$13.45';
	firstTds[3].innerText = '$202.91';
	firstTds[4].innerText = '7.10%';

	const secondTds = secondRow.querySelectorAll('td');
	secondTds[1].innerText = '$124.97';
	secondTds[2].innerText = '$8.77';
	secondTds[3].innerText = '$133.74';
	secondTds[4].innerText = '7.02%';
}, 100);

// edison oct
setTimeout(() => {
	const sections = document.querySelectorAll(".copy-block-text.black-text");
const sectionOne = sections[0].getElementsByTagName("h2")[0];
sectionOne.innerText = "Our Rates are Increasing on October 1, 2024";
console.log(sectionOne);

const tableHead = document.querySelectorAll("thead tr")[0];
const ths = tableHead.querySelectorAll("th");
ths[2].innerText = "Proposed increase";
ths[4].innerText = "%Increase";

const firstRow = document.querySelectorAll("tbody tr")[0];
const secondRow = document.querySelectorAll("tbody tr")[1];

const firstTds = firstRow.querySelectorAll("td");
firstTds[1].innerText = "$202.91";
firstTds[2].innerText = "$9.13";
firstTds[3].innerText = "$212.04";
firstTds[4].innerText = "4.5%";

const secondTds = secondRow.querySelectorAll("td");
secondTds[1].innerText = "$133.74";
secondTds[2].innerText = "$5.61";
secondTds[3].innerText = "$139.35";
secondTds[4].innerText = "4.2%";

}, 100)
