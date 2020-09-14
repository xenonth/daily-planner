function todaysDate() {
    var date = `${moment().format('dddd')}, ${moment().format('ll')}`;
    $("#currentDay").append(date);
}
todaysDate();


