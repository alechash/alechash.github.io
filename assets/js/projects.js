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
    "about": "Siddes is a privacy first social media. As a solid supporter of the EFF, me and my brother have developed this for the last couple months and are excited to release it on January 1 st, 2020!",
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
    "about": "The Better Mac Store is a better Mac App Store!",
    "class": "bms"
}, {
    "title": "Tvose",
    "url": "http://github.com/tvose/tvose",
    "image": "tvose.png",
    "about": "Tvose is a privacy first search engine with features of Google and a reward system like Brave. And, of course, the privacy of DuckDuckGo.",
    "class": "tvose"
}]

projects.reverse()

var projectsHtml = ``

for (i = 0; i < projects.length; i++) {
    projectsHtml = projectsHtml + ` <div class="card">
    <div>
        <span class="card_right">
            <a class="link no-decor" href="${projects[i].url}" target="_blank">
                <h1>${projects[i].title}</h1>
            </a><br><br>
            <p>${projects[i].about}</p>
            <br>
        </span>
        <span class="card_left">
            <img src="/assets/img/${projects[i].image}">
        </span>
    </div>
    </div>
    `
}

document.getElementById('cards').innerHTML = projectsHtml