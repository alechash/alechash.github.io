const projects = [{
    "title": "Ambiently",
    "url": "http://github.com/alechash/ambiently",
    "image": "ambiently.gif",
    "about": "Ambiently is a mobile iOS app that plays ambient sounds to help you focus or go to sleep.",
    "class": "ambiently"
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
