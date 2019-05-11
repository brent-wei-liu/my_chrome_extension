document.addEventListener('readystatechange', event => {
    if (event.target.readyState === 'interactive') {
        console.log("Not ready");
    }
    else if (event.target.readyState === 'complete') {
        console.log("Run!");
        getTitles();

        chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
          console.log(response.farewell);
        });
  }
});

function getTitles() {
    var x = document.getElementsByClassName("title-box");
    for (var i = 0; i < x.length; i++) {
      x[i].style.padding = "";
      var title = x[i].children[0].innerText
      console.log(title)
      var aTag = document.createElement('a');
      aTag.setAttribute('href',"https://movie.douban.com/subject_search?search_text=" + title);
      aTag.innerHTML = "douban";
      x[i].appendChild(aTag);
    } 
}






