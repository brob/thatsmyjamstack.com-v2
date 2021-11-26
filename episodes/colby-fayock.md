---
title: Colby Fayock On Mapping (like… the world), Gatsby, science and more 
date: '2020-02-11'
tags:
  - episode
audioFile: https://pinecast.com/listen/11022749-b789-42e9-bb3c-a047efc90f9e.mp3
description: On today's episode, we talked to Colby Fayock, a senior front end engineer with Element 84.
socialImage: /images/colby-fayock.png
---

## Quick show notes

* Our Guest: [Colby Fayock](https://www.colbyfayock.com/)
* What he'd like for you to see: [His blog posts](https://www.freecodecamp.org/news/author/colbyfayock/) 
  * His work to help JAMstackers use Leaflet: 
    * [His Gatsby Leaflet starter](https://github.com/colbyfayock/gatsby-starter-leaflet) 
    * [Getting started with Leaflet](https://www.freecodecamp.org/news/easily-spin-up-a-mapping-app-in-react-with-leaflet/)
    * [Santa tracker with leaflet](https://www.freecodecamp.org/news/create-your-own-santa-tracker-with-gatsby-and-react-leaflet/)
    * [NASA GIBS for map imagery](https://earthdata.nasa.gov/eosdis/science-system-description/eosdis-components/gibs)
* His JAMstack Jams: [Gatsby](https://gatsbyjs.com) | [Netlify](https://netlify.com) 
* His Musical Jam: [Patterns - Dangerous Intentions](https://open.spotify.com/album/2o4qkKpF7QKtZR3dzE5R5D)


## Our sponsor this week: [TakeShape](https://takeshape.io/thatsmyjamstack)

## Transcript 
### Bryan Robinson  0:02  
Welcome everyone to another episode of That's My JAMstack the podcast where we explore the inner psyche of JAMstackers everywhere asking the simple question, what's your jam in the JAMstack. On today's episode, we talked to Colby Fayock, a senior front end engineer with element 84. But before we dive into the interview, let me shout out to our sponsor take shape. Stick around after the episode to learn more about their content platform or head on over to take shape.io slash That's My JAMstack for more information.

### Bryan Robinson  0:31  
Colby thanks for being on the show today. 

### Colby Fayock  0:33  
Thanks for having me. 

### Bryan Robinson  0:33  
Alright, so let's let's start out tell us a little bit about yourself about what you do for work, what you do for fun, that sort of thing. 

### Colby Fayock  0:39  
Sure. So I'm a senior front end engineer and UX designer at Element84. For a little bit about us, we focused on bringing remote sensing and Life Sciences data to the cloud. So that's usually like satellite data and health data. But once that's in the cloud, that's kind of where I stepped in and put you eyes in front of that. So some things that I'm working on right now are a dashboard.

### Colby Fayock  0:59  
For testing a commercial satellite, and we're also working on a mapping interface for helping first responders tackle natural disasters like Wow, so like a big use case for that was working with people who were actually in it for the campfire California wildfires. 

### Bryan Robinson  1:16  
Oh, wow. Very cool. So I curiosity. You're building interfaces? Do you consider yourself more on the design side or more on the developer side, even though you're working in code, obviously. 

### Colby Fayock  1:27  
Yeah, so I definitely am more on the front end engineering side. It's kind of funny because I started off more on the design side, but as I kind of learned and learn, I've just slowly moved the needle to the engineering side. But that said, I still thoroughly enjoy both aspects of it. And usually I'm still the one doing the wires and such on the projects that we're working on. 

### Bryan Robinson  1:48  
Cool. Now, what do you do in your in your free time outside of work? 

### Colby Fayock  1:51  
So a lot of the times when we when we can figure it out, I like to travel with my wife. We just got back from a trip to Southeast Asia, which was pretty cool.

### Colby Fayock  2:00  
But aside from that, you know, I, I do really enjoy coding, but probably spent too much time watching TV movies. And lately, I've been trying to push myself to write more. So I've been putting a lot of articles up on Free Code Camp. And that actually inspired me from a co worker who kind of gave me the idea that, you know, there's a lot of ways to look at different articles, right, rather than I kind of had that imposter syndrome. But I'm able to get past that. And it's been successful. So far, 

### Bryan Robinson  2:27  
I'm a firm believer that anyone who's writing code can benefit from their own blog in the future. Like if you're if you're writing and you saw the problem, write about it, and then you Google it down the road, and you'll be the response. 

### Colby Fayock  2:39  
Right, exactly. That's a good book kind of way to bookmark your solutions. Exactly. 

### Bryan Robinson  2:43  
And so what's the what's the best place you've traveled or your favorite place to go when you're traveling?

### Colby Fayock  2:49  
You know, Southeast Asia was probably my craziest experience. And I say crazy just because it was so different from anything I've ever been to. But I've been to Brazil cuz my wife is Brazilian and

### Colby Fayock  3:00  
I really enjoy Brazil, the people, they're just so awesome. The food is amazing. 

### Bryan Robinson  3:04  
So that's probably one of my favorite places. Go and what's the what's the best Brazilian dish? 

### Colby Fayock  3:10  
Oh, man. Well, Brazilian barbecue for sure. Cuz I don't know if you've ever been to one of the Brazilian steak houses in the United States, but it's just incredible. 

### Bryan Robinson  3:19  
Nice. Very cool. So let's talk about the JAMstack a little bit. Obviously, that's what this podcast is all about. What was your entry point into this philosophy of the JAMstack or maybe static sites or wherever you want to call it? 

### Colby Fayock  3:30  
So it's kind of funny because I listened to a couple of the other podcasts and a lot of people seem to be getting into development from the old MySpace days. So when I was in high school, I would do the I would hack over divs on top of the profile, people saw me doing that and I actually made a little bit of a side hustle out of it, redesigning some people's profiles, but from there, you know, just creating Counter Strike Team pages for the teams I was on. 

### Colby Fayock  3:53  
But more on the professional side, you know, down the road. I worked at a an e commerce company called thinkgeek was a geeky niche products

### Bryan Robinson  4:03  
I've bought from thinkgeek in the past. 

### Colby Fayock  4:05  
Well, since then, they were bought out by GameStop. But we don't need to get into that. But it was interesting because they weren't a JAMstack site. But we were trying to cash the front, the front end so heavily, where it was just being served statically from fastly. But we redesigned the checkout and basically use the jam site principles of reaching out to their API's and stuff to build that. But it was definitely at the time, since it was still kind of a relatively newer idea for an architecture. It was rough to try to get the convinced that our engineers to support the API's to that fashion because it's traditionally a pearl house. So building out the that's how the pages were typically rendered. Yeah.

### Bryan Robinson  4:44  
And modernizing that stack would have been quite fun. 

### Colby Fayock  4:47  
Yeah, yeah. 

### Bryan Robinson  4:49  
So kind of so so from there. What what are you currently working and what are your favorite jams, tech technologies or philosophies? What are you using professionally and personally that sort of thing. 

### Colby Fayock  5:01  
Yeah. So, personally, when I'm bootstrapping sites, I usually just default to Gatsby. And that if I just because it's, it's so easy, you know, static sites are just much easier to manage from a resource perspective, in my opinion. And, you know, it's super cheap and other buzzwords, like infinitely scalable. But as a primary engineer, you know, I don't need to worry about figuring out the server side server side of things. So I just kind of dumped my static assets. I still have like two WordPress clients, but I've since moved them to lightsail, which has made it a little bit easier since it's more managed on the AWS side. And I joke about the buzzwords part of it, but really, that's compelling for from a customer perspective, right? Because being able to use those phrases like infinitely scalable, secure and cheap is just so valuable, 

### Bryan Robinson  5:46  
Especially on like, I'm bigger clients where they're like, worried what if I get a traffic spike? Is the server going to go down? 

### Colby Fayock  5:53  
Exactly, and it's a realistic scenario. And even if you have the most complex caching system, things can go wrong. So That's what, that's a big thing of what attracts me to it. But with Element 84, you know, it switches a little bit where we got most of it into s3 instead of using something like natla phi, but we're big AWS house. So JAMstack sites, kind of pulling those five fundamental pillars for AWS, which is like for good software architecture. So it makes it really easy to kind of push that 

### Bryan Robinson  6:24  
Hit me with the the five pillars for AWS, I'm not actually great with AWS. 

### Colby Fayock  6:29  
So I wrote this down because I had a feeling you would ask me. Operational Excellence security, which is a big one, real reliability, performance and cost optimization. So pretty much exactly. It takes the ticks the boxes of every single one of those. Yep. 

### Bryan Robinson  6:45  
Very cool. And so what are y'all doing other than obviously, if you're on AWS, you're pretty much jam packed at that point. How is element a for utilizing this kind of separation and how are you doing like mapping and stuff like that in a JAMstack world so interesting.

### Colby Fayock  7:00  
Maps kind of inherently fit into the whole static site idea. We use a library called leaflet which it attaches itself to a static element inside the DOM. So imagine just a div kind of like you would with a react app, right.

### Colby Fayock  7:14  
And it just kind of plays from there pulling in the API's for things like matte tiles, and any kind of data you want to visualize on the map. But really, we can build out these applications completely static and pull all those API's and stuff around on the client, just like a, you know, normal JAMstack app.

### Colby Fayock  7:31  
But it's, it's made it easy to kind of fit it in there. And it's tough with leaflet sometimes because it relies on the window. So if you're kind of building it within a react application, you kind of have to get some past some of those challenges like particularly Gatsby. When you compile, it runs the code, right? So the window is not available. The leaflet library assumes it is and you can run into competition areas with that. So it has its challenges, but it's it's interesting, and it's provided some really powerful stuff. Yeah. 

### Bryan Robinson  8:00  
And we were actually just talking on last week's episode about replacing create react app with Gatsby and how like one of the big hiccups is there's no window and Gatsby. 

### Colby Fayock  8:09  
Yeah, it's it's a real problem. And they provide a solution where you kind of set I I don't know what's actually happening, but you set the loaders to know in the in the web pack configuration that resolves it.

### Colby Fayock  8:22  
But of course, then you don't actually get the library for any kind of compilation but since it is just a client side only library it's it's okay for that particular piece. 

### Bryan Robinson  8:32  
Very cool. So let's let's talk about what is what is your actual jam and the JAMstack? What's going to keep you coming back JAMstack year after year? Going into the future? 

### Colby Fayock  8:41  
Yeah. So I think generally the amount of options that are coming up to just quickly spin things up like I kind of mentioned Gatsby Netlify I'm pretty sold on that combo right now, just because it's made my life so much easier to spin things up where both me and the 14 like we can focus on the things that are different, right? Like we don't have to spend our time bootstrapping the app, creating a custom web pack configuration and all that. So it really makes it lets us focus on things that are different. I advocate a lot for Netlify simply because of those kind of things. 

### Colby Fayock  9:13  
I think being able to play those tooling pieces heavily, just gives us a lot of power to push things forward.

### Bryan Robinson  9:21  
 Nice. And where do you kind of fall on, like static rendering on the server versus dynamic stuff, obviously doing mapping stuff, you're doing more stuff in the client? is there is there any way to offload that before built like during the build that you can kind of have the map in place before the client takes over? 

### Colby Fayock  9:37  
Not from my experience, mostly because of the window issues. But I haven't looked too much into that aspect of it just because the library so heavily rely on the window and the DOM.

### Colby Fayock  9:49  
But that said, like, just generally with rendering on the server versus pre compiling, I like pre compiling because it you're doing as much work as you can before that server hits, so

### Colby Fayock  10:00  
Anything you can do before the actual server request or, you know, serving them. statically is just ideal, in my opinion, talk about buzzwords. 

### Bryan Robinson  10:09  
And the five pillars performance is a big deal there.

### Colby Fayock  10:12  
 Exactly. I mean, just getting that first paint, you know, trying to avoid any kind of server processing before it hits the person in the browser is important. 

### Bryan Robinson  10:20  
Definitely. Uh, so so you're using leaflet for mapping, Gatsby and a lot of your prototyping anything else you're kind of exploring right now.

### Colby Fayock  10:30  
Nothing too heavily. We're building a component library based off of the leaflet of just trying to make things a little bit easier for people to interface with it because of some of the problems I mentioned. We're hoping to eventually open source that but you know, the whole, building something and open sourcing is isn't always as straightforward as you might want it to be.

### Colby Fayock  10:50  
But hooking the maps into other kind of data technologies, such as one particular pieces STACK API, which is already

### Bryan Robinson  10:59  
I wrote this down because I wouldn't remember the acronym, its spatial temporal asset catalog. So it's essentially Yes, it's essentially collecting metadata and the imagery along with the satellite imagery and provide it providing in a way that you can actually search on it. So being able to pull up those results, make dynamic searches on those maps is important to be able to help provide these people, like scientists ability to actually look at the data, right? So using tools like that helps us a lot 

### Bryan Robinson  11:25  
Cool. And I imagine like when you're talking about scientists, and we're talking about climate stuff, and we're talking about all these like, heavy big sets of data, like how do you how do you deal with that large of a scope in a modular kind of tinier way? 

### Colby Fayock  11:42  
Yeah, so probably our bread and butter with Element 84 is the data processing aspect of it. So that's a completely different component in built in our kind of architecture, where we have our data pipeline that pulls in and processes the data. Then we have a back end team which might be the same people that builds, like one particular instances, Elasticsearch, right putting that in front of the the main metadata repository. At which point for me, it's really just a bunch of API's that I'm able to search on. So coming from a UI perspective, I don't have to worry as much about those complexities. But it is interesting to see the pipeline of data coming through which we rely pretty heavily on Native AWS for goals. 

### Bryan Robinson  12:24  
So yeah, you're basically getting the Create your own like Big Data API set that you then just can go go home with and keep working on stuff. 

### Colby Fayock  12:33  
Exactly. Exactly. 

### Bryan Robinson  12:34  
Very cool. So let's, let's talk, let's talk music. What is your actual jam right now? What's your favorite song or musician? Are you jamming out to?

### Colby Fayock  12:43  
 Sure. So I am a huge blink 182 fan from the early days, so I'm still enjoying a lot of their music that they're putting out maybe not as much as some of the earlier stuff but a co workers would probably give me a hard time for saying this, but I still frequently jam out. So come and get it by Selena Gomez.

### Colby Fayock  12:57  
But on a serious note, A shout out to probably my favorite album. It's an older one called dangerous intentions from a group called patterns has like a really cool retro vibe to it that I really enjoy 

### Bryan Robinson  13:10  
Retro like 80s vibe?

### Colby Fayock  13:12  
I Yeah, I think so. Okay.

### Bryan Robinson  13:15  
Retro could be like 65. And that'd be cool, too. 

### Colby Fayock  13:17  
That's true. That's true. And at this point, probably 90s, right?

### Bryan Robinson  13:20  
Unfortunately, had a lot. I don't want to talk about it. feel weird inside.

### Colby Fayock  13:26  
Cool. So is there anything that you would like to promote to the tech community something you're doing or more in general? 

### Colby Fayock  13:31  
Yeah, generally I'm writing trying to write a lot. So checking out some of the articles I'm writing but you know, I'm, I feel really strongly about maps and being able to give a lot of power to people with the tools in their hand, right, so scientists and such. So to try and help get things started I created Gatsby starter just gets me started for leaflet. It's pretty much called, which is up on my GitHub. I can also post a link doesn't come with a ton of features yet, but it really allows people to easily spin up mapping application. And the biggest takeaway that I'm trying to push, and it's kind of like Chef Gusto, from Ratatouille where he says anyone could cook, I like to believe that anybody can create a map, right. So just being able to have people easily be able to spin up an app, it might put more power in somebody's hands that they didn't really have before. over the holidays I created based off of that starter, I created a Santa Tracker, which people had a good time with, it was cool being able to see some of my co workers spend time with their kids actually walking through the same santa tracker. so just be able to do fun things like that is powerful, and shows what you can do.

### Bryan Robinson  14:35  
And you completely destroyed my follow up question was just gonna be like, how do I get started in mapping, but so we'll, we'll throw it out that that that Gatsby started for the mapping. Is there any sort of like big hurdles to getting into leaflet or if you've got that starter? You can just kind of go to town with it. 

### Colby Fayock  14:52  
Yeah, I mean, once you get that, sorry, spun up. I have an example in there that it really just kind of zooms in on your current location if you allow it. Otherwise, I think it's D.C. Which is the area that I'm from.

### Colby Fayock  15:04  
But be able to take that example and apply it with leafless documentation, I think is probably the biggest bet there. And I'm hoping to do more writing on more complex leaflet applications. But generally, I think that's a good starting place. 

### Bryan Robinson  15:18  
Cool and I curiosity, you might not have an answer to it. Where, where could somebody go to find maybe some data sets that they could play with, especially around some of these more scientific topics with mapping? Are there any open data sets that they can explore? 

### Colby Fayock  15:31  
Yeah, so NASA, actually, I, at least through their Gibbs program, and I know some of their other programs, they make a ton of data openly available for anybody. So kind of just searching on that is a good way to get your just kind of get rolling in it. I know. There's also some other teams like blanking on the name. They provide some open data for disaster scenarios, which is powerful because they enable people to do things that will help others actually work with some of these disaster scenarios, which is some of the data that we use with the disaster relief efforts we're working on. 

### Bryan Robinson  16:10  
Very cool. All right. Well, I appreciate you taking the time and talk with us today. And I'm actually very, very interested to go dive into that Gatsby repo. I want to check that out. 

### Colby Fayock  16:18  
Yeah. Awesome. Let me know how it goes. 

### Bryan Robinson  16:21  
Thanks and keep doing amazing things. Awesome. Thank you.

### Bryan Robinson  16:26  
Thanks again to Colby for being on the show. And thanks again to you dear listeners for tuning in Week after week, be sure to leichhardt star or what have you in your podcast app of choice. And now it's sponsored time coming back this week is take shape. take shape is a content platform for the JAMstack. They've got a headless CMS, a static site generator and awesome graph. qL API is super simple to get started and to work with and if you're interested, you should head on over to take shape.io slash That's My JAMstack to sign up.

Transcribed by https://otter.ai

Intro/outtro music by [bensound.com](https://bensound.com)