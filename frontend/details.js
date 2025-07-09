(async () => {
    var outer = document.getElementById("outer")
    try {

        var request = await fetch("http://localhost:8080/video/findAll")
        
        var response = await request.json()

        response.forEach(element => {
            var detailsbox = document.createElement("div")
            detailsbox.classList.add("detailBox")
            detailsbox.innerHTML=
            `
            <p><strong class="lable">Video Title</strong> <span class="value">: ${element.videoTitle}</span></p>
            <p><strong class="lable">Video ID</strong> <span class="value">: ${element.videoId}</span></p>
            <p><strong class="lable">Channel ID</strong> <span class="value">: ${element.channelId}</span></p>
            <p><strong class="lable">Channel Title</strong> <span class="value">: ${element.channelTitle}</span></p>
            <p><strong class="lable">Publication Time</strong> <span class="value">: ${element.publishedAt}</span></p>
            <p><strong class="lable">View Count</strong> <span class="value">: ${element.viewCount}</span></p>
            <p><strong class="lable">Like Count</strong> <span class="value">: ${element.likeCount}</span></p>
            `
            outer.append(detailsbox)
        });

    } catch (error) {
        alert("Can't connect to the Server")
    }
})()