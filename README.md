# Excobot

**AEC Hackathon 6.2, Seattle (2019): winner, "Best Augmentation of New Tech on Old Tech" ($1,000 prize)**

Excobot is a team hackathon project that adds modern web control to a mini excavator: operators drive the tracks and the arm from a browser while watching a live camera feed from the machine.

My part was the **excavator control panel**, the web interface used to operate the machine.

## What's in this repo

| Folder | Contents |
|---|---|
| `Sensors/` | Python (Flask + OpenCV) live video streaming server and sensor manager running on the machine |
| `Mechatronic/` | CAD model of the mini excavator (STEP file) |
| `Presentation/` | Demo videos: web streaming, arm control and track control |
| `package.json` | Node/Express server dependencies |

## Demo videos

See the [Presentation folder](Presentation/) for the clips shown to the judges:
web streaming, arm control and tracks.

## Stack

Python, Flask, OpenCV, Node.js, Express, JavaScript

## About

[Chris Ihler](https://github.com/ChrisIhler) built this during the Galvanize Full Stack Web Development Immersive in Seattle. He now works as an AI implementation and automation consultant and is available on [Upwork](https://www.upwork.com/freelancers/chrisihler).
