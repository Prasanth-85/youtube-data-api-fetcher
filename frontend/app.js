const input = document.getElementById("ip")
const body = document.querySelector("body")
const fetchedDetails = document.getElementById("videoDetails");

const apiKey=[YOUR_API_KEY]

async function work() {
    function extractVideoId(url) { 
        if (url.includes("v=")) {
            return url.split("v=")[1].split("&")[0]
        } else if (url.includes("youtu.be/")) {
            return url.split("youtu.be/")[1].split("?")[0]
        } else if (url.includes("live/")){
            return url.split("live/")[1].split("?")[0]
        } else if (url.includes("shorts/")){
            return url.split("shorts/")[1].split("?")[0]
        }else {
            return null;
        }
    }
    var ip = input.value
    var rvideoId = extractVideoId(ip)
    console.log(rvideoId)
    try {
        var request = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${rvideoId}&key=${apiKey}`)
        
        var response = await request.json()
        
        const videoTitle = response.items[0].snippet.title
        const channelTitle = response.items[0].snippet.channelTitle
        const videoId = rvideoId
        const channelId = response.items[0].snippet.channelId
        const publishedAt = response.items[0].snippet.publishedAt
        console.log(publishedAt)
        const viewCount = response.items[0].statistics.viewCount
        const likeCount = response.items[0].statistics.likeCount
        
        const videoDetails = {
            videoTitle,
            channelTitle,
            videoId,
            channelId,
            publishedAt,
            viewCount,
            likeCount
        }
        
        try {
            
            var request = await fetch("http://localhost:8080/video/save",{
                method : "POST",
                headers : {"Content-Type": "application/json"},
                body : JSON.stringify(videoDetails)
            })
            if (!request.ok) {
                const errorText = await request.text()
                alert(errorText)
                console.log(errorText)
                return;
            }

            var result = await request.json()
            fetchedDetails.classList.add("detailBox")
            fetchedDetails.innerHTML=
            `            
            <p><strong class="lable">Video Title</strong> <span class="value">${result.videoTitle}</span></p>
            <p><strong class="lable">Video ID</strong> <span class="value">${result.videoId}</span></p>
            <p><strong class="lable">Channel ID</strong> <span class="value">${result.channelId}</span></p>
            <p><strong class="lable">Channel Title</strong> <span class="value">${result.channelTitle}</span></p>
            <p><strong class="lable">Publication Time</strong> <span class="value">${result.publishedAt}</span></p>
            <p><strong class="lable">View Count</strong> <span class="value">${result.viewCount}</span></p>
            <p><strong class="lable">Like Count</strong> <span class="value">${result.likeCount}</span></p>
            `
            console.log(result)
            alert("Data Inserted Sucessfully")
            

        } catch (networkError) {
            alert("Can't connect to the Server")
        }

    } catch (error) {
        alert("Invalid URL")
    }
}
function clearInput() {
    document.getElementById("ip").value = ""
    location.reload()
}
