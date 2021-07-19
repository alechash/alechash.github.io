const projects = [{
    "title": "Cryzza",
    "url": "http://cryzza.com",
    "image": "cryzza.svg",
    "about": "Cryzza makes software for cryptocurrency. From trackers to portfolios to price alerts.",
    "class": "cryzza"
}]

projects.reverse()

var projectsHtml = ``

for (i = 0; i < projects.length; i++) {
    projectsHtml = projectsHtml + `
    <a href="${projects[i].url}" class="card_link">
        <div class="card">
            <h2>${projects[i].title}</h2>
            <p>${projects[i].about}</p>
            <img src="/assets/img/${projects[i].image}" />
        </div>
    </a>
    `
}

document.getElementById('cards').innerHTML = projectsHtml
