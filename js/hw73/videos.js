(async function () {
    'use strict';

    async function fetchVideos(file) {
        const response = await fetch(file);
        const videos = await response.json();
        console.log(videos);
        return videos;
    }
    const videos = await fetchVideos('videos.json');

    videos.forEach(video => {
        const eachVideo = $(`<div class="display"></div>`).appendTo('#videoDisplay');

        eachVideo.append([`<h1>${video.name}</h1>`,
        `<img src="${video.image || "videos/videoBackground.jpeg"}">`]);
        eachVideo.click(function () {
            $('#videoPlay').attr('src', video.url)[0].play();
        });
        console.log(video);
    });






}());