$.getJSON('/projects.json', function (data) {
    var formatteddata = data.reverse()
    var html = ''
    var links = ''

    for (i = 0; i < formatteddata.length; i++) {
        links = ''
        links = `
            <div class="Subhead-actions"><a href="${formatteddata[i].url}" target="_blank" class="btn btn-sm btn-outline" role="button">${formatteddata[i].urlname}</a>
            </div>`

        if (formatteddata[i].url2) {
            links = links + `
            <div class="Subhead-actions ml-3"><a href="${formatteddata[i].url2}" target="_blank" class="btn btn-sm btn-outline" role="button">${formatteddata[i].url2name}</a>
            </div>`
        }

        var html = html + `
                <div class="p-3 border m-3 mb-0 rounded-2">
                    <div class="Subhead">
                        <div class="Subhead-heading">
                                ${formatteddata[i].title}
                        </div>
                        ${links}
                    </div>
                    <p class="pr-6">
                        ${formatteddata[i].about}
                    </p>
                    <img src='/img/projects/${formatteddata[i].image}' class='border rounded-2' style='max-height:300px;max-width:95%'>
                </div>`
    }

    document.getElementById('projects').innerHTML = html
})