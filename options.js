document.addEventListener("DOMContentLoaded", function(){
    const limitInput = document.getElementById('limit');
    const saveButton = document.getElementById('saveLimit');
    const resetTotal = document.getElementById('resetTotal');

    chrome.storage.sync.get('limit', function(chromeStorage){
        limitInput.value = chromeStorage.limit;
    });

    saveButton.addEventListener('click', function(){
        chrome.storage.sync.get('limit', function(chromeStorage){
            var newLimit = 0;
            if (chromeStorage.limit) {
                newLimit = parseInt(chromeStorage.limit);
            }
            var amount = limitInput.value;
            if (amount) {
                newLimit = parseInt(amount);
            }
            chrome.storage.sync.set({"limit":newLimit});
            alert("Updated limit")
        });
    });
    resetTotal.addEventListener('click', function(chromeStorage){
        chrome.storage.sync.set({'total':0});
        alert("Total reset!");
    });
});