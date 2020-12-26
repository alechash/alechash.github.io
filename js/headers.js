$.getJSON('/headers.json', function (data) {
    var formatteddata = data.reverse()

    var frame = formatteddata[Math.floor(Math.random() * formatteddata.length)];

    if (frame.root == true) {
        document.getElementById('frame').setAttribute('src', "/headers/" + frame.frame)
    } else {
        document.getElementById('frame').setAttribute('src', frame.frame)
    }
})