$.getJSON('/projects.json', function (data) {
    var formatteddata = data.reverse()
    var html = ''

    for (i = 0; i < formatteddata.length; i++) {
        var html = html + `
                <div class="p-3 border m-3 mb-0 rounded-2">
                    <div class="Subhead">
                        <div class="Subhead-heading">
                                ${formatteddata[i].title}
                        </div>
                        <div class="Subhead-actions"><a href="${formatteddata[i].url}" target="_blank" class="btn btn-sm btn-outline" role="button">More</a>
                        </div>
                    </div>
                    <p class="pr-6">
                        ${formatteddata[i].about}
                    </p>
                    <img src='/img/projects/${formatteddata[i].image}' class='border rounded-2' style='max-height:300px'>
                </div>`
    }

    document.getElementById('projects').innerHTML = html
})