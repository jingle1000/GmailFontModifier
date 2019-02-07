document.addEventListener('DOMContentLoaded', function(){
    const sizeSlider = document.getElementById('fontSize');
    const fontHeading = document.getElementById('fontHeading');
    const changeBtn = document.getElementById('changeSize');

    let size = 12;

    sizeSlider.addEventListener('mousemove', function(){
        size = this.value;
        fontHeading.innerText = size;
    });

    changeBtn.addEventListener('click', function(){
        //send a message to the tab in which we clicked the button
        chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {todo: "changeSize", size:size});
        });
    })

});