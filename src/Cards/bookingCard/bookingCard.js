import "./bookingCard.scss"
import "../../blocks/Input/input"
import "../../blocks/twoCalendarRangePicker/twoCalendarRangePicker"
import {formatNumber, ruDeclination} from "../../common/functions";

$(".bookingCard").each(function () {
	const $bookingCard = $(this);

	const $dailyPrice = $bookingCard.find(".bookingCard__dailyPrice");
	const priceAmount = $dailyPrice.attr("data-dailyprice");
	const currency = $dailyPrice.attr("data-currency");
	const priceToShow = formatNumber(priceAmount, " ");
	writeFormattedDailyPrice($dailyPrice, priceToShow, currency);

	const $firstDatepicker = $bookingCard.find(".bookingCard__rangePicker " +
		".twoCalendarRangePicker__firstDatepicker " +
		".input__control_type_datepicker");
	const $secondDatepicker = $bookingCard.find(".bookingCard__rangePicker " +
		".twoCalendarRangePicker__secondDatepicker " +
		".input__control_type_datepicker");
	const $stayingCostRow = $bookingCard.find(".bookingCard__stayingCostRow");

	let priceData = {
		price: priceAmount,
		currency: currency,
		priceToShow: priceToShow,
		servicesData: 0,
		addServicesSum: 0,
		stayingSum: 0
	};
	const $totalCostSpan = $bookingCard.find(".bookingCard__summaryTotalCost");
	addRefreshCheckOnInputChange(
		$firstDatepicker,
		$secondDatepicker,
		$stayingCostRow,
		$totalCostSpan,
		priceData
	);

	setCurrentDate($firstDatepicker, $secondDatepicker);

	let $servicesEnumSpan = $bookingCard.find(".bookingCard__services");
	let $servicesSumSpan = $bookingCard.find(".bookingCard__servicesSum");

	const servicesData = getOverallServicesData($servicesEnumSpan, $servicesSumSpan, priceData);
	writeServicesToSpans($servicesEnumSpan, $servicesSumSpan, currency, servicesData);

	const $addServicesSumSpan = $bookingCard.find(".bookingCard__additionalServicesSum");
	priceData.addServicesSum = $addServicesSumSpan.attr("data-addServices");
});

function getTotalCost(priceData) {
	let totalCost = Number(priceData.stayingSum) + Number(priceData.servicesSum) + Number(priceData.addServicesSum);
	return totalCost > 0 ? totalCost : 0;
}

function writeTotalCost($totalCostSpan, priceData) {
	const totalBookingCost = getTotalCost(priceData);
	const formattedTotalBookingCost = formatNumber(totalBookingCost, " ");

	$totalCostSpan.text(`${formattedTotalBookingCost}${priceData.currency}`);
}

function setCurrentDate($firstDatePicker, $secondDatePicker) {
	const firstDatepickerData = $firstDatePicker.data("datepicker");
	const secondDatepickerData = $secondDatePicker.data("datepicker");

	let today = new Date();
	today = new Date(today.setHours(0, 0, 0, 0));

	firstDatepickerData.selectDate(today);
	secondDatepickerData.selectDate(today);
}

function writeFormattedDailyPrice($dailyPriceSpan, priceToShow, currency) {
	$dailyPriceSpan.text(`${priceToShow}${currency}`);
}

function getDaysFromDateRange(dateRange) {
	if (dateRange[0])
		return dateRange[1] ? (dateRange[1] - dateRange[0]) / (24 * 60 * 60 * 1000) : 0;
	return 0;
}

function writeStayingCostsToSpans($calculatingStayingCostSpan, $stayingSumSpan, priceData, daysCount) {
	let declinedPeriod = ruDeclination(daysCount, "Сут|ки|ок|ок");
	$calculatingStayingCostSpan.text(
		`${priceData.priceToShow}${priceData.currency}` +
		` х ${daysCount} ${declinedPeriod}`
	);
	priceData.stayingSum = priceData.price * daysCount;
	let sumToPrint = formatNumber(priceData.stayingSum, " ");
	$stayingSumSpan.text(`${sumToPrint}${priceData.currency}`);
}

function getOverallServicesData($servicesEnumSpan, $servicesSumSpan, priceData) {
	const servicesData = $servicesEnumSpan.attr("data-services");
	const services = JSON.parse(servicesData);

	let overallServicesCost = 0;
	let servicesString = "Сбор за услуги: ";
	for (const service of services) {
		overallServicesCost += service.cost;
		servicesString += `${service.name} ${Math.abs(service.cost)}${priceData.currency}, `
	}
	servicesString = servicesString.substring(0, servicesString.length - 2);
	priceData.servicesSum = overallServicesCost;
	overallServicesCost = overallServicesCost > 0 ? overallServicesCost : 0;

	return {text: servicesString, sum: overallServicesCost};
}

function writeServicesToSpans($servicesEnumSpan, $servicesSumSpan, currency, servicesData) {
	$servicesEnumSpan.text(servicesData.text);
	$servicesSumSpan.text(`${servicesData.sum}${currency}`);
}

function addRefreshCheckOnInputChange($firstDatePicker, $secondDatePicker, $stayingCostRow, $totalCostSpan, priceData) {
	function refreshCheckValuesOnDateChange(event) {
		const $calculatingStayingCostSpan = $stayingCostRow.children(".bookingCard__stayingCostCalculation");
		const $stayingSumSpan = $stayingCostRow.children(".bookingCard__stayingCostSum");
		const datePickerData = $(event.target).data("datepicker");
		//console.log(datePickerData.selectedDates);
		let daysCount = getDaysFromDateRange(datePickerData.selectedDates);

		writeStayingCostsToSpans(
			$calculatingStayingCostSpan,
			$stayingSumSpan,
			priceData,
			daysCount
		);

		writeTotalCost($totalCostSpan, priceData);
	}

	$firstDatePicker.change(refreshCheckValuesOnDateChange);
	$secondDatePicker.change(refreshCheckValuesOnDateChange);
}
