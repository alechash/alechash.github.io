$.getJSON('/headers.json', function (data) {
    var formatteddata = data.reverse()

    var frame = formatteddata[Math.floor(Math.random() * formatteddata.length)];

    if (frame.root == true) {
        document.getElementById('tv').setAttribute('src', "/headers/" + frame.frame)
    } else {
        document.getElementById('tv').setAttribute('src', frame.frame)
    }
})