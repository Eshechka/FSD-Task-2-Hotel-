$('.date-dropdown').datepicker({
	// Можно выбрать только даты, идущие за сегодняшним днем, включая сегодня
    minDate: new Date(),
    // Парамтер {range: true} для выбора диапазона. В качестве разделителя дат будет использован multipleDatesSeparator
    range: true,
});