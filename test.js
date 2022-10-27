const homeBt = document.getElementById("Home");
const generalBt = document.getElementById("General");
const ScienceBt = document.getElementById("Science");
const EntBt = document.getElementById("Entertainment");
const SportsBt = document.getElementById("Sports");
const TechBt = document.getElementById("Tech");
const searchBt = document.getElementById("Search");
const newsQuery = document.getElementById("newsSearch");
const newsType = document.getElementById("newsType");
const newsdetails = document.getElementById("newsDetails")
const apiKey = "pub_127222be8fb5f8700ce4ba79dce4f0334dda4";
const headlines = "https://newsdata.io/api/1/news?language=en&category=top&apikey=";
const general = "https://newsdata.io/api/1/news?language=en&country=in&category=politics&apikey=";
const science = "https://newsdata.io/api/1/news?language=en&category=science&apikey=";
const entertainment = "https://newsdata.io/api/1/news?language=en&category=entertainment&apikey=";
const sports = "https://newsdata.io/api/1/news?language=en&category=sports&country=in&apikey=";
const tech = "https://newsdata.io/api/1/news?language=en&category=technology&country=in&apikey=";
const search = "https://newsdata.io/api/1/news?q=";




var newsData = [];


window.onload = (function () {
    newsType.innerHTML = "<h4>Headlines</h4>";
    fetchHeadlines();
});

generalBt.addEventListener("click", function () {
    newsType.innerHTML = "<h4>General News</h4>";
    fetchGeneralNews();
});

ScienceBt.addEventListener("click", function () {
    newsType.innerHTML = "<h4>Science News</h4>";
    fetchScienceNews();
});
EntBt.addEventListener("click", function () {
    newsType.innerHTML = "<h4>Entertainment News</h4>";
    fetchEntertainmentNews();

});
SportsBt.addEventListener("click", function () {
    newsType.innerHTML = "<h4>Sports News</h4>";
    fetchSportsNews();
});
TechBt.addEventListener("click", function () {
    newsType.innerHTML = "<h4>Technology News</h4>";
    fetchTechNews();
});
searchBt.addEventListener("click", function () {
    newsType.innerHTML = "<h4>Search :" + newsQuery.value + "</h4>";
    fetchQueryNews();
});

const fetchHeadlines = async () => {
    const response = await fetch(headlines + apiKey);
    newsData = [];
    if (response.status >= 200 && response.status <= 299) {
        const myJson = await response.json();
        console.log(myJson);
        newsData = myJson.results;
    }

    displayNews();

}
const fetchGeneralNews = async () => {
    const response = await fetch(general + apiKey);
    newsData = [];
    if (response.status >= 200 && response.status <= 299) {
        const myJson = await response.json();
        console.log(myJson);
        newsData = myJson.results;
    }

    displayNews();

}
const fetchScienceNews = async () => {
    const response = await fetch(science + apiKey);
    newsData = [];
    if (response.status >= 200 && response.status <= 299) {
        const myJson = await response.json();
        console.log(myJson);
        newsData = myJson.results;
    }


    displayNews();
}
const fetchEntertainmentNews = async () => {
    const response = await fetch(entertainment + apiKey);
    newsData = [];
    if (response.status >= 200 && response.status <= 299) {
        const myJson = await response.json();
        console.log(myJson);
        newsData = myJson.results;
    }


    displayNews();

}
const fetchSportsNews = async () => {
    const response = await fetch(sports + apiKey);
    newsData = [];
    if (response.status >= 200 && response.status <= 299) {
        const myJson = await response.json();
        console.log(myJson);
        newsData = myJson.results;
    }


    displayNews();

}
const fetchTechNews = async () => {
    const response = await fetch(tech + apiKey);
    newsData = [];
    if (response.status >= 200 && response.status <= 299) {
        const myJson = await response.json();
        console.log(myJson);
        newsData = myJson.results;
    }

    displayNews();

}
const fetchQueryNews = async () => {

    newsData = [];
    if (newsQuery.value == null) {
        return;
    }
    const response = await fetch(search + encodeURIComponent(newsQuery.value) + "&apiKey=" + apiKey);


    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        console.log(myJson);
        newsData = myJson.results;
    }
    displayNews();
}

function displayNews() {
    newsdetails.innerHTML = "";
    if (newsData.length == 0) {
        newsdetails.innerHTML = "<h5>No details found</h5>";
        return;
    }
    newsData.forEach(news => {
        var date = news.pubDate.split("T");

        var col = document.createElement('div');
        col.className = "col-sm-12 col-md=4 col-lg-3 p-2 card";
        var card = document.createElement('div');
        card.className = "p-2";


        var img = document.createElement('img');
        img.setAttribute("height", "matchparent");
        img.setAttribute("Width", "100%");
        img.src = news.image_url;

        var cardBody = document.createElement('div');

        var newsHeading = document.createElement('h5');
        newsHeading.className = "card-title";
        newsHeading.innerHTML = news.title;


        var dateHeading = document.createElement('h6');
        dateHeading.className = "text-primary";
        dateHeading.innerHTML = date[0];

        var description = document.createElement('p');
        description.className = "text-muted";
        description.innerHTML = news.description;


        var link = document.createElement('a');
        link.className = "btn btn-dark";
        link.setAttribute("target", "_blank");
        link.href = news.link;
        link.innerHTML = "Read more";


        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(description);
        cardBody.appendChild(link);

        card.appendChild(img);
        card.appendChild(cardBody);
        col.appendChild(card);

        newsdetails.appendChild(col);


    })
}
