var doubanScore;
document.addEventListener('readystatechange', event => {
    if (event.target.readyState === 'interactive') {
        console.log("Not ready");
    }
    else if (event.target.readyState === 'complete') {
        console.log("Run!");
        loadDoubanRating();

        chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
          console.log(response.farewell);
        });
  }
});

function loadDoubanRating() {
  console.log('Read score.json file!');
  const url = chrome.runtime.getURL('score.json');
  fetch(url)
    .then((response) => response.json()) //assuming file contains json
    .then((json) => doubanScore = json)
    .then(() => getTitles());
}

function getTitles() {
    var x = document.getElementsByClassName("title-box ");
    for (var i = 0; i < x.length; i++) {
      x[i].style.padding = "";
      var title = x[i].children[0].innerText
      console.log(title)
      var aTag = document.createElement('a');
      aTag.innerHTML = 'douban';
      aTag.setAttribute('href',"https://movie.douban.com/subject_search?search_text=" + title);
      if (title in doubanScore) {
        console.log(doubanScore[title]);
        aTag.innerHTML = doubanScore[title].rating;
      } 
      x[i].appendChild(aTag);
    } 
}






