# Work Day Scheduler 

## GitHub Depository
https://github.com/josephptflanagan/200621-Work-Day-Scheduler

## Site URL
https://josephptflanagan.github.io/200621-Work-Day-Scheduler/

## Screenshot
https://github.com/josephptflanagan/200621-Work-Day-Scheduler/blob/master/assets/images/earliest-working-version.jpg

### Details
I started by creating the dynamically updated day of the week at the top of the page, and decided that I wanted to include the time as well, so I added a clock that keeps time.

I chose to dynamically generate the time blocks after seeing how much repeated code would be involved in both creating, and editing, the elements with HTML. 

I Generated the time blocks and with the contents intially held within a p element as I believe they look better than textareas, but when the text element is clicked on the p element converts into a textarea for editing, turning back into a p element when clicking off the text. 

I made the save buttons work such that they individually save the contents of each line, saving the index and text contents. when the page reloads it checks localstorage to see if each index is saved, if it doesn't contain a null value it fills the p elements that have saved content with that saved content.