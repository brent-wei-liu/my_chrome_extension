chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log("Msg from the extension");
    if (request.greeting == "hello")
      getDoubanScore();
      sendResponse({farewell: "goodbye"});
  });

function getDoubanScore() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = handleStateChange; // Implemented elsewhere.
    xhr.open("GET", chrome.extension.getURL('https://www.google.com/'), true);
    xhr.send();
}

function handleStateChange() {
    console.log("AJAX readyState = " + this.readyState);
    if (this.readyState == 4) {
      console.log(this.status);
      console.log("resonseText = " + this.responseText);
    }
}