//Hours for the timetable.
var timeTable = {
    seventhHour: Number($('.7').text()),
    eighthHour: Number($('.8').text()),
    ninthHour: Number($('.9').text()),
    tenthHour: Number($('.10').text()),
    eleventhHour: Number($('.11').text()),
    twelthHour: Number($('.12').text()),
    thirteenthHour: Number($('.13').text()),
    fourteenthHour: Number($('.14').text()),
    fifteenthHour: Number($('.15').text()),
    sixteenthHour: Number($('.16').text()),
    seventeenthHour: Number($('.17').text()),
    eighteenthHour: Number($('.18').text()),
    nineteenthHour: Number($('.19').text()),
    twentyethHour: Number($('.20').text()),
    twentyfirstHour: Number($('.21').text()),
}

// To display todays date
function todaysDate() {
    var date = `${moment().format('dddd')}, ${moment().format('ll')}`;
    $("#currentDay").append(date);
}
todaysDate();

tableColorChange();
// change table color based on the time of day
function tableColorChange () {
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
        }

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
                    //table color change for 1500
    if (currentHour > timeTable.fifteenthHour) {
        //changing of colour to past
        $(".15").css({
            'background-color': '#d3d3d3',
            'color': 'white',
          })
          console.log('a');
          // changing of color to the present css
    } else if (currentHour == timeTablefifteenthHour) {
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
    // table color change for 1600

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
        // checking color background for 1700
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
            // checking color background for 11800
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
                // checking color background for 2000
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

                // checking color background for 2100
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

