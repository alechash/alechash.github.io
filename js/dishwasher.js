$.getJSON('/projects.json', function (data) {
    var formatteddata = data.reverse()
    var html = ''

    for (i = 0; i < formatteddata.length; i++) {
        var html = html + `
                <article class="post">
                    <div class="postimage">
                        <img class="postimg" src="/img/projects/${formatteddata[i].image}">
                    </div>
                    <span class="postmeta">
                        <h2 class="posttitle">${formatteddata[i].title}<a target="_blank" class="posturl"
                                href="${formatteddata[i].url}">${formatteddata[i].url.replace("https://", "").replace("http://", "").replace("www.", "")}</a>
                        </h2>
                        <p class="postabout">${formatteddata[i].about}</p>
                    </span>
                </article>`
    }

    document.getElementById('dishwasher').innerHTML = html
})