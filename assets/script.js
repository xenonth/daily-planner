// To display todays date
function todaysDate() {
    var date = `${moment().format('dddd')}, ${moment().format('ll')}`;
    $("#currentDay").append(date);
}
todaysDate();

// change table color based on the time of day
function tableColorChange () {

}
