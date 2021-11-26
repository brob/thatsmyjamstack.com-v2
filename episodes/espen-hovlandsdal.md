---
title: Espen Hovlandsdal on mixing static and dynamic, content management and more
date: '2020-06-16'
tags:
  - episode
  - season-2
audioFile: https://pinecast.com/listen/ac342cdb-4c61-434e-8ff4-af86a52b238b.mp3
description: This week, we have the amazing Espen Hovlandsdal, software engineer from Sanity.io
socialImage: /images/espen-hovlandsdal.png
---

## Quick show notes

* Our Guest: [Espen Hovlandsdal](https://twitter.com/rexxars)
* What he'd like for you to see: [Sanity.io](https://sanity.io)
* His JAMstack Jams: Mixing Dynamic and Static together | [NextJS](https://nextjs.org/)
* His Musical Jam: [Russian Circles](https://russiancirclesband.com/) | [Godspeed You! Black Emporer](https://godspeedyoublackemperor.bandcamp.com/) | [If These Trees Could Talk](https://open.spotify.com/artist/2GVzsXcXyU95u2EahzwqN7?autoplay=true&v=A)

### Bryan Robinson  0:03  
Hello, everyone and welcome to another exciting episode of That's my JAMstack - the podcast where we ask the fun filled question "What is your jam in the Jamstack?" I'm your host, Bryan Robinson. And this week, we have the amazing Espen Hovlandsdal from Sanity.io. 

### Bryan Robinson  0:17  
Before we dive into that interview, we'll welcome back our sponsor for this week TakeShape. Stick around after the episode to find out more information about their content platform or head over to TakeShape.io/thatsmyjamstack for more information. 

### Bryan Robinson  0:33  
Well, Espen, thanks for being on the show with us today.

### Espen Hovlandsdal  0:35  
Sure, glad to be here. 

### Bryan Robinson  0:37  
Cool. So can you tell us a little bit about yourself? What do you do for work? What do you do for fun, that sort of thing?

### Espen Hovlandsdal  0:41  
Sure. So my name is Espen. And I work as a software engineer at a company called Sanity.io. Most people will probably call Sanity, a headless CMS. But I tend to think of Sanity more as a platform for structured content. So we have like a hosted database in the cloud. And you got like an asset pipeline and a rich set of API's to talk to that database and to all like surrounding services. And of course, it's also got the actual open source, headless CMS that's based on React, which then talks to those API. So we're kind of a headless CMS built on the Jamstack. So it's been fun.

### Bryan Robinson  1:23  
Cool. So how would you How would you differentiate - since you said you like to think of it as a structured content or structured data platform - how would you differentiate that between that and a CMS?

### Espen Hovlandsdal  1:34  
So our API is kind of the first piece that we built. So we put a lot of effort into making sure that the API's are really like, great to work with. They're very flexible in terms of how you can query for data, how you mutate data that's based on like a very fine grained patch system. And you also have like transaction history. So you can go in and see all the changes that have happened over time to the document. And so it's sort of building the API first and then putting a sort of CMS on top of that, that talks to those API. So we sort of dog food all the all the API is through that product.

### Bryan Robinson  2:15  
Okay. Very cool. So so it's it's more of an API that happens to also have a product in front of it that is a CMS.

### Espen Hovlandsdal  2:21  
Yeah, kind of. Yeah.

### Bryan Robinson  2:22  
Very cool. So what do you do for fun? That's what you do for work. What were you doing in your free time?

### Espen Hovlandsdal  2:28  
I moved to San Francisco from Norway in August last year. So I've been sort of getting to know the city and the country. So that's been interesting. Now with the Corona lockdown and stuff. I've had less time to explore the city, but I've been playing a lot of video games for the past few weeks and also try not to do too much coding in my spare time, but that's like, I feel like I have a valid excuse for that these days. At least.

### Bryan Robinson  2:58  
True. Yeah, I can definitely understand that. What games are you playing right now?

### Espen Hovlandsdal  3:02  
I've been going back to The Witcher 3, which I'm quite fond of, and playing a lot of Civilization as well. 

### Bryan Robinson  3:10  
Civilization if you if you have spare time, and you just want to get rid of that third time, that's the game for you. 

### Espen Hovlandsdal  3:16  
Eight hours fly by; your whole weekend this there.

### Bryan Robinson  3:21  
So so obviously you're well versed and kind of in depth in the Jamstack world being part of a structured data company such as Sanity, but what was your entry point into the idea of the Jamstack or static sites?

### Espen Hovlandsdal  3:34  
Good question. Jamstack is kind of a loose term. So it's kind of hard to know what people put into that. But I guess when I was 13, and I made a bunch of like fan pages for all my favorite video games. So does that count that's like static HTML uploaded to an FTP right?

### Bryan Robinson  3:52  
When I was 13, I made fan sites for anime and all sorts of stuff. So hundred percent it counts. 

### Espen Hovlandsdal  3:59  
Joking aside it's, it's kind of funny how we went from all these, like, static HTML sites that were just super easy to host. And then, at some point, we, for some reason thought that everything had to be server rendered and dynamically generated. But, uh, yeah, I used to work at this. There's a newspaper company in like a large online newspaper in Norway, they had so much traffic that, uh, that they built this, they built and funded the Varnish project, which is like a cache layer in in the form of a reverse proxy. And even with that, in front front, we kind of embraced the concept of building as much as possible into static copies of pages. So I've been working in that kind of paradigm for quite a while.

### Espen Hovlandsdal  4:46  
But with like, more increasingly dynamic and complex pages, it's got gotten harder and harder to do, right until we got these static site generators. I think I think I started looking at it. Well, what most people think of as Jamstack back when Kyle Matthews started tweeting about building Gatsby, he was a huge fan of React ever since, like 2014. Yeah, when he when he started building Gatsby, he was tweeting all the while he was creating it about, like, why he chose to use GraphQL as a data layer and all the kind of choices that went with it. So I was kind of, I was really intrigued by it. And when I finally got a chance to try it out, I was just really impressed because it's kind of always what I wanted ever since I started with React, the ability to just build this static site in React and then have that mounted on the on the client side. So you can get that like dynamic stuff as well.

### Bryan Robinson  5:40  
Yeah. Best of Both Worlds in that. Yeah. Cool. So yeah. So you went you basically straight up static, like way back in the day with HTML, and maybe and some CSS thrown in through server side render and dealing with all the cache and then into the Gatsby from there.

### Espen Hovlandsdal  5:56  
Yeah, I was starting to work at Sanity and And I was following the Gatsby development. And initially, one of our community members made a source plugin for Gatsby. And I was really happy to see that. And then I discovered some really cool things that Gatsby plugins did like internally. So I saw some overlap there and some potential that we can improve the plugin with some of the core features of sanity. So I kind of built a our like official Sanity, the Gatsby plugin as well.

### Bryan Robinson  6:28  
Oh, very cool. And have you have you noticed a lot of like, community contributions in the Jamstack versus like server side world? Is it a different feeling? Are there more, fewer? Like what's that kind of feel? Like you said, like, the community actually first created that?

### Espen Hovlandsdal  6:46  
Yeah, it's been it's been really interesting to see a lot of contributions to both the Gatsby ecosystem especially, I mean, they're really, really good on getting contributions from people and really generous interest. of recognizing the work that's been done by people and sending swag and all kinds of stuff. And also would like frameworks like Next and Gridome and you see a lot of contributions. Not sure if there's a more, but I guess it's easier to get started with contributing to those frameworks since you've got it all running locally. And it's very easy to, like, run through the build and see that it works as expected. 

### Bryan Robinson  7:25  
Yeah, that makes sense. So how are you using, obviously, at Sanity, Sanity is a is a Jamstack company. But how are you using kind of philosophies both professionally and personally of the Jamstack?

### Espen Hovlandsdal  7:35  
Well, professionally, we're maintaining all these starter project templates and stuff. So we get to play with a lot of approaches to how you want to structure your data and how you want to pull that in and how you want to build these things. So we've got I've been playing with all sorts of stuff like Gatsby and Gridsome, Sapper, 11ty they've all got, like slightly different ways of approaching stuff. Like 11ty, For instance, has a, it's kind of one of my favorites right now, because because of this, like simple nature of it, it doesn't like lock you into anything. The only thing that I really, really appreciate you be using React just for that, because I'm so familiar with JSX. But apart from that, it's it's really refreshing to see a different take on the whole data just being whatever way you can get data from some service and then render static from that

### Bryan Robinson  8:32  
Those JavaScript data files are pretty great.

### Espen Hovlandsdal  8:34  
Yeah, absolutely. So yeah, it's a guess we try to build as much as possible using the static like, thought they went into, like our website is now running on next year's and I think we're trying to move as much as possible to using static statically generated things there. There are still a couple of reasons why dynamic content makes sense in terms of previewing drafts and all kinds of stuff, but for the main reason, for the main part, it's should be able to just work statically. Right. 

### Bryan Robinson  9:09  
So out of curiosity, you're you're working at kind of a big, structured data company, or maybe we can we can simplify and say a CMS for the, for the current question. That's typically been kind of the purview of a dynamically generated site and a server, you know, server rendered site. What are kind of the challenges that we that we face in kind of coming from traditional like server side stuff and moving into this static realm, like, what, what, what feels different, what feels the same between those?

### Espen Hovlandsdal  9:43  
Well, the big point is always going to be the build times. And when you're used to like the server rendered approach with your changes are just immediately visible. So I'm glad to see a lot of work has been been made. Now into Gatsby incremental builds and also Next is working on and Vercel is working on being able to invalidate data quite like granularly, so you be able to only regenerate the parts that actually changed. I think that's the probably the like, by far the biggest change in terms of differences on the actual client site is just so it's just a lot easier to host these things. Right. It's, it's probably one of my favorite features about the Jamstack is just the how easy it is, once you've got the site built to actually maintain it or not maintain, basically, you just let it run, right. Since it's all static, so that's been really cool.

### Bryan Robinson  10:45  
You said you used to work at a news organization. And you had to like do the heavy front end or the heavy you know, server cache with Varnish and all that. Do you foresee more news organizations going in this direction. I'm a little nerdy when it comes to news because I used to work in news as well. And we definitely had our own issues like we migrated to WordPress for blogs. And then we had a blog that kind of blew up. And it was its own fun adventure. But do you see the Jamstack as being an ideal space for news? Or is it more always going to still be in that kind of dynamic CMS range?

### Espen Hovlandsdal  11:23  
I think it's actually a pretty good fit. As long as you can work out the incremental builds. It's, it's there's no good reason why it shouldn't be just static content, especially when you've got these layered approaches like Next uses where you can have a app that's both, like partially server rendered, partially client rendered and partially statically built that's just like, the flexibility that gives you is just perfect because it allows you to send down just like a lot of pages or can be fully static, and for the ones that can't be at least you're able to like incremental Build your way out of the super dynamic realm and into a more static way of thinking. And I think the same is true for for Gatsby, and probably more frameworks coming up. Like I see the Vuepress is working on quite some, some quite impressive things where they ship like a tiny amount of JavaScript to the to the client. So that'll be interesting to see how that plays out over over time.

### Bryan Robinson  12:29  
Yeah, I love the idea with that, that they're, they're optimizing that kind of load you get from a too big JavaScript bundle, too, which is amazing. They're thinking about that.

### Espen Hovlandsdal  12:40  
Yeah, it's been one of the more like recent criticisms is just how much data you're sending back and forth. And for a lot of pages, you're just rendering the same, like you're getting a JSON blob and then rendering the same thing on the client, which is kind of wasteful if it's fully static, right. So being able to flag something as just being the system Just this won't change and don't rerender this part of the page, that's also going to be really nice to to get at some point built into the frameworks.

### Bryan Robinson  13:09  
So we've talked about a decent bit of stuff already but what would you say is kind of your your jam in the Jamstack, what's your favorite service or product or philosophy even what's gonna keep you coming back to the Jamstack year after year.

### Espen Hovlandsdal  13:21  
There's so many of these things now that I just kind of love to see the ecosystem grow and, and see all the like, different frameworks to inspire each other and kind of steal features from each other, which leads to quite a interesting space. Right now I'm really into NextJS. Just love all the, like I said, all the dynamic bits that you can combine with the static bits and also the sometimes I really do want some kind of server side logic. And the fact that that's sort of a first class citizen like built into versatile and it's just easy to deploy a static site, but with some, like server functions that are running serverless functions is, that's just great for most of my use cases,

### Bryan Robinson  14:08  
Especially when you can kind of combine in those serverless functions, and they're kind of co-located. They're not a separate thing.

### Espen Hovlandsdal  14:14  
Yeah, exactly. It's just so much easier to introspect what's going on and, and keep them all in the same repository.

### Bryan Robinson  14:20  
Cool. So it's kind of that that interplay, that you kind of see that as the future like the interplay between dynamic and static as the way we're gonna go forward. 

### Espen Hovlandsdal  14:29  
I think definitely. I can't see that it has any real drawbacks. When you have that amount of flexibility, you're, you can kind of pick and choose what you like, and easily migrate between those different paths if you need more or less dynamic content. So I really, really like that. And as long as we managed to like, stick to the ease of deployment and ease of running these things, it's probably going to be a be around for quite a while. It's kind of the future.

### Bryan Robinson  15:00  
Very cool. And I don't know if anyone has actually kind of put it in that way on the podcast yet. So I kind of have to ask, like, part of the beauty of the Jamstack is the resiliency. Do you see that that that future could have some issues around that? Or do you think that with the serverless stuff as long as you've shipped a solid serverless function, you should be safe?

### Espen Hovlandsdal  15:21  
Good question. I mean, there's a lot of lots lots of stuff to still figure out. I think there's best practices that are missing for a lot of these things, especially in terms of security, I find a lot of serverless functions are basically open to the public if you know the route sometimes. So educating and making some best practices for how to secure stuff and, and make things more resilient and also being able to easily see what's actually going on inside of these serverless functions. I'm not sure how many people are actually tracking like errors inside those functions and how often they're crashing. So I think there's a lot to be to be done still on, on educating people on this thing been, but in general, I'm very positive as to the future of these things.

### Bryan Robinson  16:13  
Yeah. I love the idea that they can interplay together so easily. It's a cool look towards the future. 

### Espen Hovlandsdal  16:19  
Yeah, absolutely. 

### Bryan Robinson  16:21  
So what would you say is your your actual jam right now your musical jam, what's your favorite song or musician that you're listening to right now? ,

### Espen Hovlandsdal  16:30  
I kind of listened to a bit of everything tends to be based on my mood. Lately, I've been listening to probably my favorite genre, which is post rock and post metal. So there's a lot of Russian Circles and Godspeed, You! Black Emperor, and If These Trees Could Talk, things like that, but I tend to go back and forth. I listen to a lot of old school dub and old school punk rock. Sometimes I need some metal just to get some frustration outs. Yeah, yeah, jump back and forth.

### Bryan Robinson  17:07  
Very cool. So is there anything that you'd like to promote that you're doing right now anything you'd like to ask for the Jamstack world as a whole?

### Espen Hovlandsdal  17:12  
Well, sanity.io, obviously, I really am in love with this product. Even though I work there. That's a that's not just a promotion, I really do think it's a great product. And also, we're hiring. So if you want a job, go check out Sanity.io

### Bryan Robinson  17:27  
So I'll make sure to post that link in the show notes. And I want to thank you for taking the time to come chat with us today and kind of share your perspective on the jam stack world.

### Espen Hovlandsdal  17:35  
Thank you. It's been a pleasure.

### Bryan Robinson  17:39  
Thanks again to Espen for being on the show. And to you all of our dear listeners for tuning in each week. Before we get to our sponsor, be sure to like heart star favorite or whatever in your podcast app of choice and spread the word about the amazing people doing awesome stuff in our community. 

### Bryan Robinson  17:55  
And now for our sponsor. If you listen to season one you're probably aware of TakeShape by now. But as a reminder, TakeShape is a content platform for the Jamstack. TakeShape has a headless content management system an easy to use GraphQL API, a static site generator and amazing new product called Mesh, a service that can tie together multiple API's into their handy GraphQL interface. If you're doing anything with content on the Jamstack, be sure to check them out at takeshape.io/thatsmyjamstack.

### Bryan Robinson  17:55  
That's it for this week. Thanks again for listening and we'll see you back here for the next awesome episode.  

Transcribed by https://otter.ai


Intro/outtro music by [bensound.com](https://bensound.com)