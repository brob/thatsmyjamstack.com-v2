---
title: REMIX! Tamas Piros on islands architecture, Astro and media usage
date: '2022-02-09'
tags:
  - episode
  - season-3
audioFile: https://pinecast.com/listen/ce235b3a-7b34-4abc-96a8-b89d2ecdcfbd.mp3
description:
socialImage: /images/placeholder.png
---

## Transcript
### Bryan Robinson 0:13  
Hello, everyone, welcome to another stacked episode of That's My Jamstack. The podcast where we ask that best-of-all question, what's your jam in the Jamstack. I'm your host, Bryan Robinson . And this week, we've got another. That's My Jamstack REMIX.

### Bryan Robinson 0:32  
We welcome back to the show Tamas Piros. Tamas Piro is a developer experience engineer at Cloudinary, and the founder and educator at Jamstack.training. Let's go ahead and dive in.

### Bryan Robinson 0:54  
All right, well, Tamas. Thanks so much for coming on the show again, how are you doing today? I'm doing well. Thank you very much for for having me. It's good to be back. Yeah, as I say so. So this is another one of our remix episodes where we're having a guest that was previously on two seasons ago, two years ago, almost to the day on this recording. We talked in 2019. Now, this will probably come out in January, and it's December right now, but it's almost two years. So I guess give us give us an update. What are you doing nowadays for work and for fun, and all that good stuff. 

### Tamas Piros  1:26  
Okay, so work didn't change that much. So if people listen to that episode, or people know who I am, then I still work at Cloudinary. The only thing that changed is that I am no longer a developer evangelist, but I am now a developer experience engineer, which is more, you know, esoteric, so to speak. It's a it's a fancy term describing pretty much the same stuff, in my opinion. But I like that now. I'm, I'm recognized as an engineer, which I am, as opposed to just, you know, someone thought that I was a priest, because I'm an eventually. 

### Bryan Robinson 1:58  
So evangelist was always a weird title in general. 

### Tamas Piros  2:01  
Yeah. Yeah. And and yeah, so it's just more described what I do. But yeah, in terms of that, you know, no, no real, real changes.

### Tamas Piros  2:09  
What I do for fun, I still do, you know, Jamstack, I see lots of stuff for Jamstack, I started to sort of look into what I label emerging technologies, which is, you know, not necessarily relevant to the Jamstack, you know, kind of things like rust or WebAssembly, that kind of stuff. In fact, I've done a lot of talks on web assembly in the past, you know, two years. And it's, it seems to be a very popular topic. But that's, you know, that's not related to jumps. So let's talk about that. Now.

### Bryan Robinson 2:37  
I feel like there's a lot of those emerging technologies play a role in the Jamstack. But it's not actually what a Jamstack person is going to be worrying about. It's just it's happening on the backend, like some of the systems get built in Rust for speed and some other stuff and WebAssembly, maybe one day, because like, that'll can compile down to JavaScript in the end, right.

### Tamas Piros  2:56  
Yeah, I mean, you know, WebAssembly, is what I like to say. And this was the title of my talk as well, which is supercharge your JavaScript into web assembly, right? So JavaScript has API's very similar to you know, you have a Fetch API, you have all these these browser API's. And so there's an API specifically for web assembly. And then you can just have a C++ project or projecting rust compiler down to WebAssembly. And then just to consume it using JavaScript within your browser. And in all these modern, all the modern browsers that are out there today can not only compile and work with JavaScript, but they can also do the same with WebAssembly. Right. So you get this built into every browser that that's out there today, which is pretty cool.

### Bryan Robinson 3:40  
Yeah. And so, so Cloudinary, so Cloudinary. And if I remember correctly, two years ago, you had just started a side project called Jamstack.training, right? How's that been going?

### Tamas Piros  3:50  
That's, that's, that's right. So yeah, I think when we first thought I had one course on there, which was a very generic sort of introduction to the Jamstack. You know, no tech involved, just just me explaining in, obviously, in terms of what the Jamstack is, and then decide became very popular, you know, in this two years, I know have, you know, very close to 2000 students, I have 11 courses up there. And all of those courses are still free.

### Tamas Piros  4:18  
 And I am now you know, sort of applying or making some changes to that site purely because I've been doing this for free for two years. And I'm using a platform, I have a domain these costs money. And I see that a lot of people love the content, I did experiment with adding the price tag to the courses. And then signups just literally stopped. So that wasn't that good. It wasn't working. And then ever since the courses are free again, I get the usual, you know, 356 10 signups per day, which is really nice. And so what I'm doing now is I am now accepting sponsors and I'm doing sponsorships. So, I did talk to some companies, but I'm just going to say this here as well, in this recording that if there's any company or anyone who wishes to sponsor, just like the training, I have three packages, you know, you can, you know, just put your logo on, you can have like a custom landing page, you can have your own video course, I can produce a video course for your produce and record a video course there's lots of options. So I would be, you know, I would love to have some conversation with people and organizations about this. And, and also, I'm, you know, in parallel to that, I'm recording a brand new course now. 

### Tamas Piros  5:40  
So I'm looking at Astro, which is a, an interesting tool. From from what I've seen, I'm putting together a sample application with it now. And then I'm going to create a another free video course about Astro, just covering these basics. And you know, I'm still not sure what I'm going to build, although I have an idea, Mike is going to be probably a very simple landing page, showcasing the capabilities of Astro. Nice.

### Bryan Robinson 6:06  
So I think it's relatively obvious just from this early part of the conversation, how you're using Jamstack philosophies, obviously, you're teaching a lot of them. And I'm assuming Jamstack training is built using Jamstack technologies, but I kind of want to sidetrack a little bit since you brought up Astro, I've only scratched the surface of Astro, I've done kind of my first lap in it as well, what kind of drew you to wanting to do some some coursework around that.

### Tamas Piros  6:30  
So what I tried to do as part of Jamstack.training was also to you know, pick a number of technologies that seems to be popular, or have the opportunity to become popular. And, and I kind of, you know, mixed and matched the, you know, static site generator with an API with a with a CMS and deployment platform. And then, you know, I said, let's use eleventy, with, you know, strappy and deploy it on on Netlify, for example. And, you know, the, the idea behind Jumpstarter training was always, you know, to teach people how to use technologies, as I said, that have the opportunity to become popular, and I see as shown to be super powerful. And I, you know, I really enjoyed the talk, I think it was I'm forgetting who did the tour, but it was part of the Jamstack conf a couple of months ago,transitional apps, the that one as well. But there was a very specific talk to about Astro, I think like he was like introduction, or introductory talk to Astro. And I looked at I thought this, this is good, this is powerful, you know, how it can bring, you know, react and view components and know JavaScript, and then, you know, have this whole island architecture. And I think, having a course about first of all explaining what this island architecture is, you know, how to do you know, static site generation, and how to just have a React component without JavaScript. And you know, these are very good learning points, especially for the Jamstack. So this is why, you know, I also choose to, to create a course on Astro.

### Bryan Robinson 8:04  
So you, you kind of name drop there, the islands architecture, what does that mean?

### Tamas Piros  8:09  
So the island architecture is really, you know, you defining, it's almost like an advanced way to think about component based development, right. So in component based development, you will have a Navigation component, you have a component for for an image carousel, you have a header, a footer, all the components that basically make up your page, almost like Lego pieces. And it's Island architecture, you kind of take that to the next level. That is this is just my view of it, and my sort of explanation of it. And so you now control whether a, you know, image Caruso, which, generally speaking has a lot of JavaScript involved, probably, you know, it's close to around maybe testing, you know, event handlers for clicks. So, you know, control whether that component or that component, Demetri relative components should be loaded at, you know, at load time at build time, you know, at an idle time. And you can very much control this using gasher, which is really nice. So, you can say, you can just drop in components that are purely for layout purposes. And you can say, well, those do not require JavaScript, and then you just delay the loading of a component that has JavaScript because either is you're not visible on first load. So it's, you know, it's not above the fold content. And so your initial load will also be very, very fast, right? Because you're now almost deferring JavaScript and a component that requires a JavaScript to a later point in time you're not blocking the main thread. And you're just classic web performance. Routers from from there

### Bryan Robinson 9:44  
every I feel like and that was that was kind of a setup question, right? Because I actually am super jazzed about islands architecture. I think it is. Like it's what I'm most excited about for 2022

### Tamas Piros  9:55  
Testing my knowledge then I feel like university.

### Bryan Robinson 9:59  
No, I was just kind of like what I was like, let's, let's let the guest actually speak and do the do the description. But you know, this, like this idea that like, the differing again, it's like, it's the idea that we have these best practices that I think we've all known about for a long time, about making sure that things load as fast as possible, get on the page as fast as possible, and then do extra stuff. But I feel like it's the promise of the frameworks, right? It's, it's what we, what they said a decade ago, like when react was first coming out. But like, finally realized, and something a little bit bigger, like, oh, you know, React is, is just the view layer for little components on your site. But what happened over the course of that decade, was we saw react and similar frameworks take over the entire site. And now I mean, even with stuff like with NextJs, and Nuxt, and all that, like seeing, seeing it transition in a way that still ships HTML over the pipe, but then becomes interactive, I feel like islands architecture with with Astro I think there's, I think it's called Isles there's a view or a view, similar concept called isles and, and slinky with the Levante. I think that these kinds of projects are kind of the future of how we're gonna be doing stuff, at least that's, that's my gut feeling on it right now, having built like, two demos, right?

### Tamas Piros  11:23  
Oh, that, you know, we're experts, we should put this in our CVs. I know, I think we are the, you know, the starting point of something incredible, you know, it's, as you said, you know, went from single page architectures to server side rendering to then, you know, mix and matching the two, and then, you know, server side plus hydration rehydration. And now we arrive to this, you know, Ireland architecture, first of all, we are in a time where everything gets developed really fast, and things move at a pace that I can't even, you know, comprehend. And we also in a in a state where we don't know what the next big thing is going to be, can only guess. And then, you know, we settle down or maybe say, you know, hey, use the island architecture is the next thing. And if we meet in a podcast a year from today, and we're like, oh, my coworkers so wrong. Or we would like yeah, we told you, it can go both ways. But you know, at this point of time, I really like the idea, and like, what Esther was trying to do and how they're trying to do it. But yeah, it will take time, you know, because not everyone is just going to build a blog or a, you know, like a steady website, because it's the almost like a de facto example for the Jamstack to be on the blog. I just wonder if there's, there's going to be more use cases for the likes of Astro. In terms of what's, you know, applications, we can develop, like, you know, what, if I want to do an E commerce site, what if I want to do, like, a social media site? Like, is that possible. But we'll see.

### Bryan Robinson 13:00  
I also kind of wonder if that ends up being the true use case of Astro, right, I feel like, like at this point. And again, Astro is super, I don't even think they're technically a beta yet, I think they're still kind of kind of alpha level. I wonder if we'll still reach for bigger tools like a next or like a Nuxt. For bigger, more application like experiences. But when you've got, again, like those islands, right, those little bits of interactivity that you want on like a fairly static site, like, there's so many, like, there's 1000s, probably of marketing websites, they get launched every day, right? There's always a new business, a bit new business needs like a five page brochure site. Most of that should be HTML, right, most of that needs to be HTML shipped down to the browser. But little bits of interactivity make it such a more polished experience. And having those scattered throughout the page sounds exactly like like what you want for that. But like, you can do, you could probably do big applications and asteroids kind of wonder if that's, if that's the end use case or not having having built I built a demo, that's like three pages. And each page has like, one bit of JavaScript on each. And it feels application asks, so like, I almost as I was working through it, I was like, should I be in next? Should I be in something different? But in the end, it just worked out fairly well. But I do I do wonder, I do wonder if it's just a new tool in our tool bag,

### Tamas Piros  14:26  
when I see value in having less choice is you know, just thinking about all these sort of companies that offer, you know, web development and web design services to, you know, to restaurants to as you said to you know, some sort of any sort of business. So in order for them to to get up and running and create a production ready website is now going to be super easy, right? Because they now have this tool. And they can also you know, if I go back to this idea about the components and how you can recreate reuse these components. Now imagine, if you own a business and you help restaurants, right, you could almost have a component written in React that does something very generic, maybe like, you know, displays the, the menu or the other drinks or allows you maybe embeds a map. And now you can just state a React component and put it into any astral project, you know, very easily. And so maybe that's that's the, you know, that's where the value is. And maybe it's not for large enterprises, but more for like, you know, smaller businesses trying to build websites for other smaller businesses

### Bryan Robinson 15:34  
also really enjoyed the philosophy. They've got around the multiple frameworks, right, like view, spelt, react. Yeah, all of them are like, first class citizens and Astro. And, I mean, theoretically, you can have a component that's a view component react, put its component on one page, that feels like you probably don't want to do that just for like a performance standpoint, like no matter how much they sit that down. But like, if you had a React company, let's I worked in an agency as a PHP agency, and we had a lot of people who were good at React. And then we were having to pivot. We had some turnover, we had some new people come on, that had different strengths. It was a completely new, like learning experience, like our new lead Dev was a view dev as opposed to reactive that we had before, we could still have been using Astro. Like if that this had existed back in the day, we would have just swapped out a few of the components to render the HTML at that point. So even that front end architecture, it's really just how we render the HTML, which is, I think, pretty exciting.

### Tamas Piros  16:35  
I think so I've been giving this some thought. And I would love to hear you know, if someone knows the answer to this, or if someone is, you know, actually involved in Astro and knows the answer to this. I love the fact that yes, I can have you know, react and view and swells in one project. My question is why, you know, it's not, it's great. But so here's the thing I remember many, many years ago, I wrote an article where I created a, an Angular components. And then angular had this for probably this, you have this feature whereby you can create, you can actually generate a web component based on an Angular component that you have. And then now that you have a web component, you can just use it as a web component. And I imported that into a view application. And it worked. And I wrote about this. I wrote a blog posts, I post into various pieces. And then the most common question comment I got was great. But why? Maybe so you create something in a language that you're familiar with. And then you can now put it into another project. Why do you learn but you know, what is the? Again, I love our show? And nothing, as far as I'm sure, you know, but what is the value that it adds that I can use multiple frameworks? I'm trying to figure this one out.

### Bryan Robinson 17:55  
Yeah, I think I think that idea of being able to add into one project is probably it's a little bit a little bit of a weird thing, right? Like I think that's that's a very like one off every once in a while, you might need this sort of thing. I think the power of that is an adoption power. Right? So if I'm, if I'm a view Dev, I can use Astro from react, Astro.

### Tamas Piros  18:20  
It doesn't matter what background I have, I'm going to end up having with a very sort of powerful slash performance static page. Yeah, I can I can see it because because I was thinking, you know, why would I have a React view swelled in one province clear, because I was thinking about that, like having everything in one project. And maybe you're right, it's have to think about just almost like silos? Maybe Maybe that's the answer.

### Bryan Robinson 18:45  
I mean, that the upside of individual frameworks in one project might be that, like, there's a really great component, that's NPM installable, the React version is okay. But the view version is amazing and has all these additional features, I can now use the View version on a page in my Astro build, and keep all my other stuff the same. Now, again, like there's probably some performance concerns around that if you if in your rendering it on the front end, right, if you're doing browser or client side stuff for that. But if you just want it for the display purposes, or to generate HTML, I can use this view thing and write no code and just adopt it. But that's me who I want to write as little code as possible. So let me let me npm install something and go,

### Tamas Piros  19:27  
No, I think, you know, developers, we like to reuse we like reusability.

### Bryan Robinson 19:33  
So this has been Kevin's circuitous talk that I wasn't expecting, but has been awesome. But I do want to make sure we kind of focus on anything that you consider to be your your current jam and the Jamstack. We're talking about maybe that future jam of yours, right? Because you haven't even really, like use it. I wrote about it yet. But what are you really digging on right now? I think two years ago, we talked big about back when the Jamstack was still an acronym, right? The A and the Jamstack and API's and that sort of thing. But But what are you digging on right now? I

### Tamas Piros  20:04  
API's? There's no, there's no change. You know, it's also because I work at a company that does, you know, you know, we work in inverted commas work with the API in the Jamstack. And actually, you know, last year I was part of the I don't know, if if you know, web Almanac, which is a, you know, this yearly have to call It's a yearly report by Google, written by, by community members. And so last year, I was authoring with a colleague of mine, the media extra two copies of the media chapter. So we kind of go through how media images and videos are being consumed on the web, and I just, you know, had the opportunity to review and read the draft for this year's media chapter. And every year, it's very clear that there's more media being consumed on the internet, video, so like a five or a 7% uptake. So this, like, it compared just bid last year, there's more demand for video. And then developers are actually, you know, delivering on that. And then you know, the same is true for images, you know, larger images, images ever, like if you, if you can tell me a website that has no image, then I just want to see that it's going to be probably a very, very old website, every single image website has images, right. And so what I what you know, my jam is to make people understand how important the visual web is, how important it is to to have visuals on the web, but more importantly, how to deliver these in the right way. Because, you know, the many image formats, you know, JPEG is still the most dominant image formats on the web, as concluded last year, and as completed this year in the report for web Omona. But there's Wi Fi, there's, you know, there's a VI F, they're much better ways to encode images, which will, just by doing that, it's going to give you a performance benefit. And now you've wrapped the Jamstack around this, which is all about static HTML and stuff that that's, you know, that's going to be the best website that you can deliver. So it's not just, you know, not just about, hey, that's, let's build everything's to statistical statically. But also, remember that you know, what you put in there in terms of the media sets, those are also going to be defining how performant your website is. And another example, and I'm just going to say this, because if someone listens, and if you use video, then just just notice, because it's, it has been a problem last year, it's still in the almanac report this year, the video element, great. It allows you to drop a video into any web site, you can specify the source element as a child to the video element. And you can specify multiple sources. And you can specify like an mp4, you can specify your web app, which is, you know, a more performance encoding for video. And the intention, you know, the intent behind this is amazing by developers, because they put an mp4 and a webcam, but they put it in this order. And the order matters because every single browser, most of the browser's are going to understand the mp4 file. And they're just going to play that they will never get to your optimized by them, which was your intention that if the browser's suppose that, and I want to play that, right, and there are some other interesting things, I think, if you just, you know, hide the video elements, that the browser will still download your video elements, right. So this is all these things that you know, people are not necessarily aware of. And because everyone talks about web performance, I think, you know, the majority of Jamstack projects are also about web performance. I just try to combine the two and make people understand that yes, Media Matters. It's there. And it's also the heaviest resource on the web today. It's not JavaScript. It's not fonts, it's not HTML. It's images and videos. Getting those right. Awesome, getting them wrong. It has a penalty

### Bryan Robinson 24:11  
i We spent like 1010 plus minutes talking about about islands architecture, which is all about shipping less JavaScript. And yeah, JavaScript bloat is a problem. But when you've got giant PNG is large JPEGs

### Tamas Piros  24:25  
75% is the amount of media that we ship on average. So that's the out of you know, all the JavaScript and HTML, CSS 75% is media assets, which is, you know, a massive proportion compared to just the JavaScript who don't want to ship.

### Bryan Robinson 24:42  
Cool. So so the jam is still API's, but the API is hopefully making things more performant. And obviously, media is one of the biggest things to do. And I know, I've gotten the chance to not have to think about some of this because I mean, in fairness, I've used Cloudinary Right and so like At least with my static images, I just put was it like format equals auto. And I get you know, what B,

### Tamas Piros  25:06  
you actually use one of our competitors. If you said, Well, you said, That's okay.

### Bryan Robinson 25:11  
So yeah, I just make up some text sometimes that's fine.

### Tamas Piros  25:14  
That's fine. That's fine. Yeah, so fo, so you basically, you know, you upload your assets to Cloudinary V also act as a CDs, we get, you know, you benefit from this global set of servers, which is one performance optimization by default, you then just add f on the scroll through into the URL. And what that does is, if you open that URL in Chrome, it will serve a web p, because that's the most optimal format for making this very simple, because they do analyze the image as well. And then if the analysis says, well, actually rendering this as a JPEG is thermal performance, we do the smaller size, we would do that. But then you take the same URL, you put it into Safari, which does not support Wi Fi, it's likely that you're going to get maybe a JPEG 2000, which is a more modern imaging coding compared to this, you know, at this point, ancient, you know, just standard JPEG. And then the benefit of that, and I think I, you know, two years ago, I said this is that, you don't need to worry about any of that, all you get is a URL, you put it into your project or use one of our SDKs. And then this is just going to work magically. So you don't need to manage the infrastructure. You don't need to worry about, you know, managing the CDN or anything. All of that is taken care of by by Cloudinary.

### Bryan Robinson 26:27  
Awesome. So we are starting to butt up against the end of the of the runtime here. So I do want to make sure we talk about the most important question, which is, what's your musical jam right now? What are you What are you listening to every day?

### Tamas Piros  26:40  
I think I said this two years ago, so very close to Christmas, right? So it's, I'm all for Christmas songs. I think I've been playing them for a couple of days now, you know, like Michael Palais, and Frank Sinatra and all the core classics, like the jingle bells and stuff. So I love them. And I also said J bobbing two years ago, and I'm still listening to Jay bow. He was, you know, a Colombian, reggaeton artist, and I still I still love what he does his music. So again, I'm sorry to say no changes.

### Bryan Robinson 27:11  
Well, the upside is the two years ago, I learned about an entire new genre of music with with the photon and actually did research into that back then. So I appreciate that. And yeah, J Balvin. Was was awesome. I've, I've listened a few times in the in the past couple years. I'll take it. Nice. And, and yeah. So as usual, I want and and like, give you a chance. If there's anything you want promote, obviously, we talked about Jamstack training, if that's what you want to kind of throw out there again.

### Tamas Piros  27:36  
Yeah, I'm not going to reiterate what I said, my training, you know, free training courses. And yeah, sponsors. I'm telling you, please, please come and see me.

### Bryan Robinson 27:46  
And we'll have all the ways to contact Mosh in the in the show notes. So be sure to reach out. Well, thanks so much for taking the time to talk with us today. It's been an amazing conversation. And I hope you keep doing amazing things both with Jamstack training and Cloudinary. And everywhere that you're doing cool stuff. Well, thank

### Tamas Piros  28:00  
you for having me. And let's not wait two years to do this again.

### Bryan Robinson 28:04  
Exactly. Let's let's make it an annual Christmas time thing, right? Yeah, that would be nice. Yeah. All right. Well, thanks so much. Thank you. Thanks again to our guest, and thanks to everyone out there listening to each new episode. If you enjoy the podcast, be sure to leave a review rating, Star heart favorite, whatever it is, and your podcast app of choice. Until next time, keep doing amazing things on the web. And remember, keep things jammy

Transcribed by https://otter.ai


Intro/outtro music by [bensound.com](https://bensound.com)