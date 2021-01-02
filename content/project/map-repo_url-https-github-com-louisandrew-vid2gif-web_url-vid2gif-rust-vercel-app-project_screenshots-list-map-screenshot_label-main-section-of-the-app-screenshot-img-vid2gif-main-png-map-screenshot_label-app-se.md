---
project_name: Vid2GIF
project_gif:
  - gif: /img/vid2gif-desktop.mp4
project_screenshots:
  - screenshot_label: Main section of the app
    screenshot: /img/vid2gif-main.png
  - screenshot_label: App section when a video is uploaded
    screenshot: /img/vid2gif-uploaded.png
  - screenshot_label: Loading page to show when the video is being converted
    screenshot: /img/vid2gif-converting.png
  - screenshot_label: Page to show when the output GIF is converted
    screenshot: /img/vid2gif-output.png
techs:
  - React
  - TS
  - NextJS
  - Tailwind CSS
  - WASM
finished_date: 2021-01-02T10:52:35.162Z
desc: >-
  A web-based video to gif converter. The application is entirely based on a
  video-editing webassembly package called
  [ffmpeg.wasm](https://github.com/ffmpegwasm/ffmpeg.wasm) and highly inspired
  by fireship.io's
  [tutorial](https://www.youtube.com/watch?v=-OTc0Ki7Sv0&t=393s&ab_channel=Fireship).


  Unfortunately, the client side conversion can only run on specific browsers, because of a incompatibility issue that hasn't been solved yet (reference click [here](https://github.com/ffmpegwasm/ffmpeg.wasm/issues/106)). The client side conversion using ffmpeg.wasm could only run on browsers that are based on chrome (Google Chrome, Brave)


  And for other browsers such as Mozilla Firefox, the conversion had to be done server side. using yet another Ffmpeg Library called [fluent-ffmpeg](https://github.com/fluent-ffmpeg/node-fluent-ffmpeg) and [ffmpeg installer](https://github.com/kribblo/node-ffmpeg-installer#readme). This server side conversion is served using the NextJS API (Serverless function) and then the output file would be then uploaded into Cloudinary (cloud hosting service)


  The application is built with React, tailwind CSS as the CSS framework of choice and [FFMPEG](https://ffmpeg.org/) as the engine behind the video to gif conversion.
web_url: vid2gif-rust.vercel.app
repo_url: https://github.com/LouisAndrew/vid2gif
preview_desc: Simple video to gif converter. Powered by webassembly and highly
  inspired by fireship.io's tutorial
template_key: project
---
