/*this script will only run on the url specified in the manifest!
On the url specified, we want the toolbar icon for the chrome 
extension to be highlighted when we are on that url. Content scripts cannot
use the chrome api to highlight the icon, we need to send a message to the event page
js file which will highlight the icon for us.
*/

chrome.runtime.sendMessage({todo:"showPageAction"});

//recive message from popup.js for changing font size
chrome.runtime.onMessage.addListener(function(request, sender, response){
    if (request.todo == "changeSize") {
        //get the font size from the message (slider value integer)
        var changeSize = request.size + "px";
        //modify the DOM on the webpage
        document.querySelector('html').style.fontSize = changeSize;
    }
});