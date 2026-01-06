---
title: "Spinning cube"
slug: "spinning-cube"
summary: "Learning computer graphics and Go doing an interesting project"
thumbnail: "/images/spinning-cube/thumbnail.png"
hero: "/images/spinning-cube/hero.png"
pubDate: "Jan 06 2026"
updateDate: "Jan 06 2026"
category: "math, go"
---


I made this project inspired by the blog [Donut math: how donut.c works](https://www.a1k0n.net/2011/07/20/donut-math.html) and the great video [I Coded a 3D Spinning Donut](https://www.youtube.com/watch?v=74FJ8TTMM5E). I built it as part of my journey to learn Go and become a better engineer.

What surprised me the most was is how complex the world of computer graphics is, and how little appreciation I had to the field before this project. All the math required was very fun to learn. I think that once you put a bit of effort, it's not hard to understand, at least for this project. Thanks to the amazing videos that people make on youtube and the great blog of [a1k0n](https://www.a1k0n.net/2011/07/20/donut-math.html) for making learning so accesible. 

This project was made with Go with the [tcell](https://github.com/gdamore/tcell) package.

> I will not explain the math because I think I will not be able to do it better than the original blog mentioned above. However, if you need any help, feel free to contact me

If you look at the [source code](https://github.com/oliverTuesta/spinning-cube) you will notice that there are two directores in `cmd`: `cube3d` and `square2d`. I did it this way to iterate from the most basic up to the 3D spinning cube.

### How to run the project

Make sure you have [Go](https://go.dev/) installed

Clone the repo
```sh
git clone https://github.com/oliverTuesta/spinning-cube.git
```

Run the Square 2D
```sh
go run ./cmd/square2d
```
![Spinning square 2D](/images/spinning-cube/square.png)
Run the Spinning Cube
```sh
go run ./cmd/cube3d
```

![Spinning cube 3D](/images/spinning-cube/cube.png)
