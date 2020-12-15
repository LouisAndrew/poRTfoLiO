---
project_name: Vid-to-GIF
project_gif:
  - gif: /img/desktop.mp4
    gif_mobile: /img/mobile.mp4
project_screenshots:
  - screenshot_label: Main section of the app
    screenshot: /img/main.png
    screenshot_mobile: /img/main_mbl.png
  - screenshot_label: Section of the app that shows the uploaded video
    screenshot: /img/uploaded.png
    screenshot_mobile: /img/uploaded_mbl.png
  - screenshot_label: Loading screen when converting the video into GIF
    screenshot: /img/converting.png
    screenshot_mobile: /img/converting_mbl.png
  - screenshot_label: Section of the app that shows the GIF output
    screenshot: /img/output.png
    screenshot_mobile: /img/output_mbl.png
  - screenshot_label: Error message being shown when app cannot be loaded
    screenshot: /img/error.png
    screenshot_mobile: /img/error_mbl.png
techs:
  - React
  - TS
  - Tailwind CSS
  - WASM
finished_date: 2020-12-14T18:08:05.223Z
desc: >-
  A web-based video to gif converter. The application is entirely based on a
  video-editing webassembly package called
  [ffmpeg.wasm](https://github.com/ffmpegwasm/ffmpeg.wasm) and highly inspired
  by fireship.io's
  [tutorial](https://www.youtube.com/watch?v=-OTc0Ki7Sv0&t=393s&ab_channel=Fireship).


  Unfortunately, this application is not really cross browser compatible, meaning it can only run on specific browsers, because of a incompatibilty bug that hasn't been solved yet (reference click [here](https://github.com/ffmpegwasm/ffmpeg.wasm/issues/106)). This app is merely a personal-experimental project trying out what webassembly could do on the front end.


  The application is built with React, tailwind CSS as the CSS framework of choice and ffmpeg.wasm as the engine behind the video to gif conversion.


  *PS: Screenshots provided for mobile devices were taken from a windows PC, because there aren't any mobile browser that compatible with the app right now.*
web_url: https://vid-to-gif.vercel.app/
repo_url: https://github.com/LouisAndrew/vid-to-gif
preview_desc: Simple video to gif converter. Powered by webassembly and highly
  inspired by fireship.io's tutorial. Not really compatible on all browser
template_key: project
---
