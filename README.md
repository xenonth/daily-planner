# Daily Planner
Thisapplication is designed to be used as a daily work planner by using the text box and to use the save data so if the page is refreshed the work planner can be reused.

![Plan Your Day](https://xenonth.github.io/homework_five/)


### Technologies Used:
For the layout of this project bootstrap was used in combination with Jquery and moment.js.  Moment.js was utilised to check the current time of the user's destination and based on their time the color of the table would change to inform the user if the planned slot has past, present or future. The past displays the color of grey, red for the present and red for the future.  In future updates there are plans to make this application more complete.  Local Storage is also used when data is placed into the input field when the page is reloaded the previous input will be reloaded if the save button is clicked.  Another update plan is inserting an icon in the save button.



### Approach
I tried to be clever and use a while or for loop to append and create the table which was not working so I opted for manual creation which is also reflected in the conditionals to test the time for what the current block is.  
By comparing the flat hour time against the current time causing the color change in the table sections.

Picture of an empty planner:
![Alt text](https://github.com/xenonth/homework_five/blob/master/assets/work-day-scheduler-late-arvo.png?raw=true "Full Plan")

but once filled out and refreshed or reopened the input fields will reapper with the same input value.

![Alt text](https://github.com/xenonth/homework_five/blob/master/assets/all-full.png?raw=true "Full Plan").

Any issues or questions contact the developer on the following: timothy.forbes259@gmail.com