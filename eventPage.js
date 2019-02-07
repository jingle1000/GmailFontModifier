//recieve messages from the content script. This will allow the icon
//on the notification toolbar to be higlighted.
//learn more, go to: https://developer.chrome.com/extensions/runtime#event-onMessage
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    //request is all incoming requests for this eventPage
    if (request.todo == "showPageAction") {
        //get all tabs
        chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
            chrome.pageAction.show(tabs[0].id)
        });
    }
})

