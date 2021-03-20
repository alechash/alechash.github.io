GitHubCalendar(".calendar", "alechash", {
    responsive: true
});

const projects = [{
    "title": "Search Engine",
    "url": "https://github.com/alechash/search-engine",
    "urlname": "GitHub",
    "image": "search-engine.png",
    "about": "This GitHub project is a fully functional web search engine and web crawler. It is fully open-source.",
    "class": "search_engine"
}, {
    "title": "Siddes",
    "url": "https://siddes.com",
    "urlname": "View",
    "url2": "http://siddes53vvrnwjjnfy34vvlfxivehycwkshol5fqdk7bekr5fpq5r7ad.onion",
    "url2name": "Onion URL (down)",
    "image": "Siddes.png",
    "about": "Siddes is a privacy first social media. As a solid supporter of the EFF, me and my brother have developed this for the last couple months and are excited to release it on January 1st, 2020!",
    "class": "siddes"
}, {
    "title": "Archivial",
    "url": "https://archivial.alecw.net",
    "urlname": "View",
    "image": "Archivial.png",
    "about": "A simple implementation of an internet archive hosted as a sub on my root domain. Check it out and link some archives. No account needed. Expect a cold start from my hoster.",
    "class": "archivial"
}, {
    "title": "Branches",
    "url": "https://br.alecw.net/",
    "urlname": "Visit (Work in Progress)",
    "url2": "https://br.alecw.net/alechash/branches",
    "url2name": "GitHub Repo",
    "image": "Branches.png",
    "about": "Branches is a small and developer-only social media where you can post and share code snippets.",
    "class": "branches"
}, {
    "title": "Better Mac Store",
    "url": "https://github.com/bruggg/bettermacstore",
    "image": "bms.svg",
    "about": "Branches is a small and developer-only social media where you can post and share code snippets.",
    "class": "branches"
}]

projects.reverse()

var projectsHtml = ``

for (i = 0; i < projects.length; i++) {
    projectsHtml = projectsHtml + `
            <div class="col-sm-6 col-xs-12 card-outer">
                <a href="${projects[i].url}" class="link" target="_blank">
                    <div class="card">
                        <div class="card-image"><img src="/assets/img/${projects[i].image}"></div>
                        <div class="card-title">${projects[i].title}</div>
                    </div>
                </a>
            </div>`
}

document.getElementById('projects').innerHTML = projectsHtml

document.getElementById("pgp_button").addEventListener('click', function () {
    document.getElementById("pgp").style.height = "unset"
    document.getElementById("pgp_button").style.display = "none"
})

setInterval(() => {
    document.getElementById('pageHeight').innerText = `this page is ${document.body.scrollHeight} pixels tall`
}, 1000);

var pullChain = document.getElementById("pull-chain");
var css = document.getElementById("css");
var graph = document.getElementById("graph");
var toggled = false

pullChain.addEventListener("click", function () {
    startTimer();
}, false);

function startTimer() {
    pullChain.classList.toggle("pulled");
    setTimeout(stopTimer, 500);
}

function stopTimer() {
    toggleLights();
    pullChain.classList.toggle("pulled");
}

function toggleLights() {
    if (toggled == true) {
        css.setAttribute('href', '/assets/css/index.css')
        graph.setAttribute('href', '/assets/css/dark_graph.css')
        toggled = false
    } else {
        css.setAttribute('href', '/assets/css/light.css')
        graph.setAttribute('href', '/assets/css/light_graph.css')
        toggled = true
    }
}