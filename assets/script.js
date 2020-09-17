// To display todays date
function todaysDate() {
    var date = `${moment().format('dddd')}, ${moment().format('ll')}`;
    $("#currentDay").append(date);
}
todaysDate();

// Adding a btn to the last field.
 var saveBtn = $('<button></button>')
// When clicked elements in the input field are saved to local storage
saveBtn.on("click", function (event) {
  event.preventDefault();
  console.log(`${$("input").innerHTML}`)
 //localStorage.setItem('agenda', `${$("input").content}`);  
});

$(".svBtn").append(saveBtn);

//Hours for the timetable.
var timeTable = {
    seventhHour: 0700,
    eighthHour: 0700,
    ninthHour: 0900,
    tenthHour: 1000,
    eleventhHour: 1100,
    twelthHour: 1200,
    thirteenthHour: 1300,
    fourteenthHour: 1400,
    fifteenthHour: 1500,
    sixteenthHour: 1600,
    seventeenthHour: 1700,
    eighteenthHour: 1800,
    nineteenthHour: 1900,
    twentyethHour: 2000,
    twentyfirstHour: 2100,
}




//Following are individual functions for time comaparison with moment.js compared to the hour value.
tableColorChangeSeven ();

tableColorChangeEight ();

tableColorChangeNine();

tableColorChangeTen();

tableColorChangeEleven();

tableColorChangeTwelve();

tableColorChangeThirteen();

tableColorChangeFourteen();

tableColorChangeFifteen();

tableColorChangeSixteen();

tableColorChangeSeventeen();

tableColorChangeEighteen();

tableColorChangeNineteen();

tableColorChangeTwenty();

tableColorChangeTwentyone();

// change table color based on the time of day
function tableColorChangeSeven () {
      var currentHour = Number(`${moment().format('H')}00`);
        console.log(currentHour);
    console.log(timeTable.seventhHour);
      // table color change for 7 am 
    if (currentHour > timeTable.seventhHour) {
        //changing of colour to past
        $(".7").css({
            'background-color': '#d3d3d3',
            'color': 'white',
          })
          console.log('a');
          // changing of color to the present css
    } else if (currentHour == seventhHour) {
        $(".7").css({            
                'background-color': '#ff6961',
                'color': 'white',
          });
          console.log('b');
        } else if (currentHour < seventhHour) {
            //changing of color to future
            $(".7").css({
                'background-color': '#77dd77',
                'color': 'white',
          });
          console.log('c');
        }
}

function tableColorChangeEight() {
      var currentHour = Number(`${moment().format('H')}00`);
        console.log(currentHour);
    console.log(timeTable.seventhHour);
      // table color change for 7 am 
    if (currentHour > timeTable.eighthHour) {
        //changing of colour to past
        $(".8").css({
            'background-color': '#d3d3d3',
            'color': 'white',
          })
          // changing of color to the present css
    } else if (currentHour == timeTable.eighthHour) {
        $(".8").css({            
                'background-color': '#ff6961',
                'color': 'white',
          });

        } else if (currentHour < timetable.eighthHour) {
            //changing of color to future
            $(".8").css({
                'background-color': '#77dd77',
                'color': 'white',
          });

        }
}
function tableColorChangeNine () {
          var currentHour = Number(`${moment().format('H')}00`);
    //table color change for 9 am
    if (currentHour > timeTable.ninthHour) {
        //changing of colour to past
        $(".9").css({
            'background-color': '#d3d3d3',
            'color': 'white',
          })
          console.log('a');
          // changing of color to the present css
    } else if (currentHour == timeTable.ninthHour) {
        $(".9").css({            
                'background-color': '#ff6961',
                'color': 'white',
          });
          console.log('b');
        } else if (currentHour < timeTable.ninthHour) {
            //changing of color to future
            $(".9").css({
                'background-color': '#77dd77',
                'color': 'white',
          });
          console.log('c');
        }
}
function tableColorChangeTen() {
        var currentHour = Number(`${moment().format('H')}00`);
        //table color change for 10 am
        if (currentHour > timeTable.tenthHour) {
            //changing of colour to past
            $(".10").css({
                'background-color': '#d3d3d3',
                'color': 'white',
              })
              console.log('a');
              // changing of color to the present css
        } else if (currentHour == timeTable.tenthHour) {
            $(".10").css({            
                    'background-color': '#ff6961',
                    'color': 'white',
              });
              console.log('b');
            } else if (currentHour < timeTable.tenthHour) {
                //changing of color to future
                $(".10").css({
                    'background-color': '#77dd77',
                    'color': 'white',
              });
              console.log('c');
            }
}
function tableColorChangeEleven () {
        var currentHour = Number(`${moment().format('H')}00`);
                //table color change for 11 am
    if (currentHour > timeTable.eleventhHour) {
        //changing of colour to past
        $(".11").css({
            'background-color': '#d3d3d3',
            'color': 'white',
          })
          console.log('a');
          // changing of color to the present css
    } else if (currentHour == timeTable.eleventhHour) {
        $(".11").css({            
                'background-color': '#ff6961',
                'color': 'white',
          });
          console.log('b');
        } else if (currentHour < timeTable.eleventhHour) {
            //changing of color to future
            $(".11").css({
                'background-color': '#77dd77',
                'color': 'white',
          });
          console.log('c');
        }
}
function tableColorChangeTwelve () {
        var currentHour = Number(`${moment().format('H')}00`);
            //table color change for 12 am
    if (currentHour > timeTable.twelthHour) {
        //changing of colour to past
        $(".12").css({
            'background-color': '#d3d3d3',
            'color': 'white',
          })
          console.log('a');
          // changing of color to the present css
    } else if (currentHour == timeTable.twelthHour) {
        $(".12").css({            
                'background-color': '#ff6961',
                'color': 'white',
          });
          console.log('b');
        } else if (currentHour < timeTable.twelthHour) {
            //changing of color to future
            $(".12").css({
                'background-color': '#77dd77',
                'color': 'white',
          });
          console.log('c');
        }
}
    function tableColorChangeThirteen () {
            var currentHour = Number(`${moment().format('H')}00`);
            //table color change for 13 am
    if (currentHour > timeTable.thirteenthHour) {
        //changing of colour to past
        $(".13").css({
            'background-color': '#d3d3d3',
            'color': 'white',
          })
          console.log('a');
          // changing of color to the present css
    } else if (currentHour == timeTable.thirteenthHour) {
        $(".13").css({            
                'background-color': '#ff6961',
                'color': 'white',
                
          });
          console.log('b');
        } else if (currentHour < timeTable.thirteenthHour) {
            //changing of color to future
            $(".13").css({
                'background-color': '#77dd77',
                'color': 'white',
          });
          console.log('c');
          return;
        }
    }
    function tableColorChangeFourteen () {
            var currentHour = Number(`${moment().format('H')}00`);
                    //table color change for 1400
    if (currentHour > timeTable.fourteenthHour) {
        //changing of colour to past
        $(".14").css({
            'background-color': '#d3d3d3',
            'color': 'white',
          })
          console.log('a');
          // changing of color to the present css
    } else if (currentHour == timeTable.fourteenthHour) {
        $(".14").css({            
                'background-color': '#ff6961',
                'color': 'white',
          });
          console.log('b');
        } else if (currentHour < timeTable.fourteenthHour) {
            //changing of color to future
            $(".14").css({
                'background-color': '#77dd77',
                'color': 'white',
          });
          console.log('c');
        }
    }
    function tableColorChangeFifteen () {
            var currentHour = Number(`${moment().format('H')}00`);
                    //table color change for 1500
    if (currentHour > timeTable.fifteenthHour) {
        //changing of colour to past
        $(".15").css({
            'background-color': '#d3d3d3',
            'color': 'white',
          })
          console.log('a');
          // changing of color to the present css
    } if (currentHour == timeTable.fifteenthHour) {
        $(".15").css({            
                'background-color': '#ff6961',
                'color': 'white',
          });
          console.log('b');
        } else if (currentHour < timeTable.fifteenthHour) {
            //changing of color to future
            $(".15").css({
                'background-color': '#77dd77',
                'color': 'white',
          });
          console.log('c');
        }
    }
    // table color change for 1600
    function tableColorChangeSixteen () {
            var currentHour = Number(`${moment().format('H')}00`);
    if (currentHour > timeTable.sixteenthHour) {
        //changing of colour to past
        $(".16").css({
            'background-color': '#d3d3d3',
            'color': 'white',
          })
          console.log('a');
          // changing of color to the present css
    } else if (currentHour == timeTable.sixteenthHour) {
        $(".16").css({            
                'background-color': '#ff6961',
                'color': 'white',
          });
          console.log('b');
        } else if (currentHour < timeTable.sixteenthHour) {
            //changing of color to future
            $(".16").css({
                'background-color': '#77dd77',
                'color': 'white',
          });
          console.log('c');
        }
    }
        // checking color background for 1700
        function tableColorChangeSeventeen () {
                var currentHour = Number(`${moment().format('H')}00`);
        if (currentHour > timeTable.seventeenthHour) {
            //changing of colour to past
            $(".17").css({
                'background-color': '#d3d3d3',
                'color': 'white',
              })
              console.log('a');
              // changing of color to the present css
        } else if (currentHour == timeTable.seventeenthHour) {
            $(".17").css({            
                    'background-color': '#ff6961',
                    'color': 'white',
              });
              console.log('b');
            } else if (currentHour < timeTable.seventeenthHour) {
                //changing of color to future
                $(".17").css({
                    'background-color': '#77dd77',
                    'color': 'white',
              });
              console.log('c');
            }
        }
        function tableColorChangeEighteen() {
                var currentHour = Number(`${moment().format('H')}00`);
            // checking color background for 1800
            if (currentHour > timeTable.eighteenthHour) {
                //changing of colour to past
                $(".18").css({
                    'background-color': '#d3d3d3',
                    'color': 'white',
                  })
                  console.log('a');
                  // changing of color to the present css
            } else if (currentHour == timeTable.eighteenthHour) {
                $(".18").css({            
                        'background-color': '#ff6961',
                        'color': 'white',
                  });
                  console.log('b');
                } else if (currentHour < timeTable.eighteenthHour) {
                    //changing of color to future
                    $(".18").css({
                        'background-color': '#77dd77',
                        'color': 'white',
                  });
                  console.log('c');
                }
        }
          function tableColorChangeNineteen () {
                  var currentHour = Number(`${moment().format('H')}00`);
                // checking color background for 1900
            if (currentHour > timeTable.nineteenthHour) {
                //changing of colour to past
                $(".19").css({
                    'background-color': '#d3d3d3',
                    'color': 'white',
                  })
                  console.log('a');
                  // changing of color to the present css
            } else if (currentHour == timeTable.nineteenthHour) {
                $(".19").css({            
                        'background-color': '#ff6961',
                        'color': 'white',
                  });
                  console.log('b');
                } else if (currentHour < timeTable.nineteenthHour) {
                    //changing of color to future
                    $(".19").css({
                        'background-color': '#77dd77',
                        'color': 'white',
                  });
                  console.log('c');
                }
          }
                // checking color background for 2000
                function tableColorChangeTwenty () {
                        var currentHour = Number(`${moment().format('H')}00`);
            if (currentHour > timeTable.twentyethHour) {
                //changing of colour to past
                $(".20").css({
                    'background-color': '#d3d3d3',
                    'color': 'white',
                  })
                  console.log('a');
                  // changing of color to the present css
            } else if (currentHour == timeTable.twentyethHour) {
                $(".20").css({            
                        'background-color': '#ff6961',
                        'color': 'white',
                  });
                  console.log('b');
                } else if (currentHour < timeTable.twentyethHour) {
                    //changing of color to future
                    $(".20").css({
                        'background-color': '#77dd77',
                        'color': 'white',
                  });
                  console.log('c');
                }
                }

                // checking color background for 2100
                function tableColorChangeTwentyone () {
                        var currentHour = Number(`${moment().format('H')}00`);
            if (currentHour > timeTable.twentyfirstHour) {
                //changing of colour to past
                $(".21").css({
                    'background-color': '#d3d3d3',
                    'color': 'white',
                  })
                  console.log('a');
                  // changing of color to the present css
            } else if (currentHour == timeTable.twentyfirstHour) {
                $(".21").css({            
                        'background-color': '#ff6961',
                        'color': 'white',
                  });
                  console.log('b');
                } else if (currentHour < timeTable.twentyfirstHour) {
                    //changing of color to future
                    $(".21").css({
                        'background-color': '#77dd77',
                        'color': 'white',
                  });
                  console.log('c');
                }
              } 

