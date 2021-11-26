---
title: Tim Benniks on playing, scaling and business in the Jamstack
date: '2020-06-08'
tags:
  - episode
  - season-2
audioFile: https://pinecast.com/listen/d77e3ef9-fb3c-4d46-b964-d706899258ac.mp3
description: This week we have the amazing Tim Benniks on the show. Tim is director of web development at Valtech, part of the Cloudinary media developer experts program, a speaker and much more. 
socialImage: /images/tim-benniks.png
---

## Quick show notes

* Our Guest: [Tim Benniks](https://timbenniks.nl/)
* What he'd like for you to see: [His YouTube interviews with notable developers](https://www.youtube.com/playlist?list=PLcoeeDyxakhWftd_LrcIx6b9Hxe0HLQdW)
* His JAMstack Jams: Lambda Functions | Connecting various technologies
* His Musical Jam: [Fantastic Negrito](https://fantasticnegrito.com/)

## Other Technologies Mentioned
* [Gridsome](https://gridsome.com)
* [NuxtJS](https://nuxtjs.org)
* [Jekyll](https://jekyllrb.com)

### Bryan Robinson  0:03  
Welcome friends to season two, That's My Jamstack. If you'd like season one, you'll get more of the same out of season two, me talking to developers and designers in our amazing community talking about their passions in and out of the Jamstack. 

### Bryan Robinson  0:15  
I'm your host, Bryan Robinson. And this week we have the amazing Tim Benniks on the show. Tim is director of web development at Valtech, part of the Cloudinary media developer experts program, a speaker and much more. 

### Bryan Robinson  0:27  
But before we dive into the interview, I want to welcome back into season two, our amazing season one sponsored TakeShape. Stick around after the episode to find out more about their content platform or head over to takeshape.io/thatsmyjamstack for more information. 

### Bryan Robinson  0:44  
Today, on the podcasts we have Tim. Tim, welcome. Thanks for coming on the podcast today.

### Tim Benniks  0:48  
Thanks so much. I'm really happy to be here. 

### Bryan Robinson  0:50  
Awesome. So can you tell us a little bit about yourself? What do you do for work? What do you do for fun? 

### Tim Benniks  0:54  
Yeah, sure. So as I said, my name is Tim Benniks and I was born in Amsterdam, but now I live in Paris. And here in Paris, I'm the director of web development at an agency called Valtech. Which is kind of a global agency where we do big platform builds, for big ecommerce and stuff like that. And so I'm doing a whole bunch of different web development things and the management and things like that. 

### Tim Benniks  1:21  
And what I do for fun changes all the time. Actually, I've been a lifelong musician, so that always stays. I always enjoy making music. But lately I've actually done a lot more content creation and I've been doing stuff like speaking in conferences, so I really enjoy that aspect now like figuring out what gear to use to record something actually being able to speak in front of a camera and not be boring, like so for fun I tried this kind of stuff now.

### Bryan Robinson  1:53  
Cool. Yeah, I definitely I can I can get behind that is once you go down the gear rabbit hole of like audio recording and video recording. There's there's no hope for you anymore.

### Tim Benniks  2:02  
This is a trap. And the worst is, as a musician, I've recorded a whole bunch in studios, but also at home back in Amsterdam. And then when we moved to Paris, I decided to either sell stuff or just gave it to friends who needed it. Because I was going to a small apartment, I couldn't make a lot of noise. So I had this nice stuff. And now that I'm back in a place where I can actually record, I don't have the stuff. And now I'm like, oh, but I don't like the cheap things, because I'm used to all this nice stuff now. So it's, it's a double trap for me.

### Bryan Robinson  2:35  
Nice. So what kind of what kind of music do you do? I mean, we'll talk about what you're into in terms of listening. But what kind of instruments do you play? Or what's your musical style?

### Tim Benniks  2:44  
So I'm a guitarist. And not much more. It's one of those like, if you ask me to sing, it will be awful. But on a guitar, I'm fine. And when I started out, I was like a session player. So I would play anything someone would like and i just i Like that. So I would be like, all over the place in all different kinds of things. But after a while, I noticed I just want to settle for something I really enjoyed, which was blues music, like the old school Chicago, 1960s blues, that's really where it's at. For me, I really enjoy that. And then when I'm on stage playing that it doesn't really matter anymore how technical you are. It's much more about the vibe and the feeling and timing and having fun. And now that I don't play as much if I grab a guitar now I just play that and I'm happy.

### Bryan Robinson  3:34  
Very cool. So obviously not music podcast, it's a Jamstack podcast, let's talk about like, what was your What was your entry point into the idea of the Jamstack? Or maybe it was static sites when you got into what what's your entry point?

### Tim Benniks  3:46  
This is years ago. Now the works jam stack were never uttered at that time. I'm kind of a dinosaur in our industry. And I'm really... I started with all the basics, right? Like what does HTML do and woah we have CSS now stuff like that. 

### Tim Benniks  4:02  
And so at one point, I found this thing called Jekyll and it's still around. And Jekyll is this static site generator. I think it's built in Ruby, I'm not even sure anymore. And it was also used for GitHub Pages back in the day. And I always made my own websites with this. 

### Tim Benniks  4:21  
Everything at work was always more enterprise level, or more creative or more, let's say let's do a campaign for Chanel. We wouldn't be doing this, we always had like, big enterprise system. So in my own time, I wanted to do something simple that had like super good performance and stuff like that. So I started with Jekyll and I used that for years. 

### Tim Benniks  4:42  
And at one point, of course, I was kind of forced into VueJS land because of work. And because I was also always a vanilla JS guy. And I really started to enjoy that more and more and then NodeJS became big and then suddenly there was Nuxt. So next year is kind of it looks like next year, so a little bit on the on the React side. And they had this way to generate your website statically. And of course, when that came out Jamstack existed. And I didn't know it was Jamstack, I just still generated my site statically because it was fast and it was all good. I could have cheap hosting. I didn't get hacked all of that. 

### Tim Benniks  5:24  
And my latest one is now that i i found Gridsome and if you're in Vue land Gridsome is great for Jamstack-like projects. And every time I need to to up something that has static content in it and maybe some microservices around it, I tend to use or Gridsome or Nuxt and then just fill it up with some data. And the rest would be way more fancy potentially. But this is still my base. So that's how I entered this this realm of awesome.

### Bryan Robinson  5:53  
Very cool. Yeah, like that. I think that's a for a certain generation of static site people, Jekyll is very much the entry point like that was that was my entry point. We've had a few guests on that said that that was there's all from that kind of background of, you know, I used to write HTML and CSS and I needed something a little bit more and it became Jekyll.

### Tim Benniks  6:13  
Yeah, I truly... I loved their template language and how that all fit together and it felt like black magic back then, because I didn't really care about how it was built. It just worked and it had like a CLI and that was new to me. And it's just pure gold at that time.

### Bryan Robinson  6:29  
Yeah, definitely. Cool. So So nowadays you're you're in Gridsome you're in Nuxt, how are you using it personally, but also like, are you using it professionally now? The Jamstack and Gridsome and all that good stuff. 

### Tim Benniks  6:41  
Well, this thing is clearly seeping into work now. So what I'm working on generally are big platforms. Let's say for a client like let's say, EasyJet, which is like a big airplane company or we have L'Oreal that has like 15 or 20 brands that all need websites. And like we have like 3-400 instances of websites in one system. So they all use this big enterprise stuff. And we are seeing more and more that the performance needs. And the KPIs for good websites nowadays are much closer to what a static Jamstack site would do. 

### Tim Benniks  7:19  
And also for business, right? Because we are also thinking about performance, scalability, cost uptime of servers. And so slowly but surely this is is going into the work life now. We don't really go fully Jamstack just yet. But things like microservices, lambda functions, cloud connections, things like that. They really come into the picture now. And it just kind of if I just give it a year, and most projects will be some sort of a Jamstack approach. I think

### Bryan Robinson  7:54  
That's awesome. Yeah, I did agency work for about six and a half years and managed a team and It was right before I got fully into the jam stack world. I had Jekyll blog and all that, but I really wish I had dug in and we had started working towards that when I was still in agency lands, I think it would been awesome.

### Tim Benniks  8:11  
Ah definitely, I'm in a place where there's this is still led by big business. And if you have a contract that you pay 2 million for a couple of years, you're not just going to say "Okay, how about we ditch that CMS system and now we go for something else." 

### Tim Benniks  8:26  
So what I have to do is find creative approaches to to give them the opportunity to want to change, but not that cost them too much money and that. Let's say we did this recently for Louie Vuitton, which is like a super fancy brand of luxury stuff in Paris. They have this old ecommerce system with like a monolith. And what we did for them is we they knew they wanted to change because one release was like 25 hours and it would not always go right it was fairly challenging and they wanted to release every week. So we lost half our week on releases not even coding. 

### Tim Benniks  9:04  
So what they said, we're just going to need to separate the front end from the back end. So we have more flexibility on doing front end changes, design things, A/B testing, stuff like that. And so we came up with a next system for them. That would be its indexing universal mode. So we're not really in jam stack land just yet. But these guys, they now have the opportunity to say okay, so we have this big ancient CMS system behind us, we built on top of that and API layer that goes to the NuxtJS. Now, we are suddenly in the position to say, let's swap this old system out for a new one that's cheaper and lighter. And then so we gave them the opportunity for innovation on their tech stack, and it's so much cheaper now. And they can do it hosted in the cloud rather than on like a co located server somewhere in the basement. Right. So all of that starts to work. And I'm quite sure that most of their content pages will be some sort of a statically generated system, where then their ecommerce pages are more Nuxt in Universal mode. And I'm seeing that for the future, I think.

### Bryan Robinson  10:14  
Awesome. That's really cool. So would you say that the NuxtJS and Gridsome are your jam in the Jamstack? Or, or what you know what sort of service or product is kind of what, what makes you love the Jamstack?

### Tim Benniks  10:28  
Um, what I like most is like, let's let's think because the Nuxt and the Gridsomes, and maybe even Gatsby, or all of those, they work really well. But they work so well they're like black magic. And they're almost commonplace now, which is totally cool, right? It just works. So what excites me more are things like lambda functions, and how do I connect extra things against this stuff that just already works really well. 

### Tim Benniks  10:56  
So for example, I've built this little app. I've built a couple of apps to just figure out what this cloud stuff does, like I did for a talk, I was preparing about Jamstack, I actually built an application that connects to my Strava server. So Strava is where if you do a bike ride or you're running, they track your pace and your GPS and stuff. But then, if you want to embed what you did on your blog, it didn't work well. But I was running marathons. So I wanted to write a story embed a training run and talk about it just because I'm a nerd. I like data, right? It didn't work. So I decided, Okay, I'm just going to build my own embed. And I will query Strava to get all the data and then I will show my run on a 3d WebGL globe and you can follow me live. 

### Tim Benniks  11:46  
Just good fun. And that teaches you WebGL, it teaches you about how time works on a globe and like how do you plot GPS, all that craziness, but what made it fun Was that I decided, Okay, I, I don't want to have one node or PHP server or whatever that gets me all the data and then renders the front end. No, I want to do this in the Jamstack way where I have a single page app that's statically rendered. But that still does AJAX calls or some sort of REST calls to get the data and so I came up with something like four or five lambda functions. We use Azure Functions for this, because where I work, we get a free Azure subscription, which is great. And these guys are running fast. They do a lot of cool stuff nowadays. 

### Tim Benniks  12:36  
And so I had to learn like how do these function as a service thing kind of work, but I managed to do my auth authentication with token exchange with one function to get the list of my activities with another function, and then to grab the data off an activity and morph it into another type of structure. sure that I could use in JSON, for my representation on the 3d globe, the funny thing is like you only log in once, right? So that or maybe twice, whatever. And you only get the list of all of your activities maybe once or twice, but then you can click on every activity and you get them a lot. So if you need to scale you, you only have to scale the one where you get the activity all the time, but they don't know about each other. You just have to give it a token, and it understands what to do. 

### Tim Benniks  13:32  
And I also added a little bit of cache in front. So but there was also a redistributed cache. So it was not centralized. So there was nothing central there. And if I wanted to change my login flow, or add maybe a twitter login or a Nike login, I could do that because I used those lambda functions. So at the moment, that's my jam to see how can I put this together? How can I orchestrate it and how can I have fun with it and especially having let's say Web hooks in between those things. Like they can suddenly do things on their own, without me actually orchestrate

### Bryan Robinson  14:06  
The robots taking over the world at that point. 

### Tim Benniks  14:10  
Oh, yes. Exactly. 

### Bryan Robinson  14:13  
So it's kind of the putting the pieces together and finding new and kind of expressive ways to build out fun applications. 

### Tim Benniks  14:20  
Exactly. And because at work, I have to do all these serious ecommerce things that also also, they all need to do this kind of stuff. But then they have extremely expensive monolithical systems that do this. But you know what, you don't really need it. Because if you want to scale a monolith come Christmas time, that's so hard to do that you have to put them on multiple servers, then you have load balancing, and then how do you maintain a session or a cookie, you have to share them between those systems, then you need to hire a company that does that for you. So that's so expensive and so bad for the environment. actually having these lambda functions that can scale indefinitely because they're so small Having your website as a static bunch of files, if you want to scale that you just put it in more places on the CDN. Right? So I really want to make sure that at work, this kind of thing starts to seep in. So it's not just playing anymore. This can be actual business.

### Bryan Robinson  15:15  
Yeah, and especially, especially the e-commerce that Christmas time example is 100%. Like, how do you scale that without spending thousands or hundreds of thousands of dollars in a short period of time? Well, you can do it in lambdas and small functions.

### Tim Benniks  15:29  
Yes, exactly. The only drawback is like, what we see in Jamstack is we tend to do this to simplify our lives, right? We don't want to have those older servers everywhere to keep stating the complicated stuff. But the drawback is you also have to orchestrate and maintain that all those small services keep working. And if one dies, what happens because you don't always notice, because if something is a monolith, the whole thing will likely die. In this case, it's just one island that silently drops off but you don't see it anymore. Which is pretty cool because it's very stable. But you're going to need to have some sort of a way to maybe deploy different versions of it or have a monitoring like if it's down or not like, there's all this extra stuff. So it's still probably expensive, but it's more of a one time thing.

### Bryan Robinson  16:18  
Yeah. Cool. So So what is your actual jam right now? What's your favorite song? What's your favorite musician? Where are you listening to right now?

### Tim Benniks  16:27  
So lately, I really, my dad actually put me on to this like, this is it's a little story that I that I have is like when I was young, in the Netherlands, in Amsterdam, where I grew up, you always take your bike to work as a young child, or not to work to school. That's what you do. So no school buses or whatever you just go, but my dad, when he had time insisted to take the car to bring us because then he could play us blues music. It was able to give us a sense of music and I love that so much. Now now that I'm 35, he still does that he still sends me stuff. So he sent me something called Fantastic Negrito which is quite modern approach to how you would play blues music. And it's very raw, and but it also kind of fits in a pop sense. He has a really cool political views, but it's also a gritty, it's a bit of like, I don't know, I cannot say that it's like Gary Clark, Jr. But what it means it's on the same kind of level. And it's kind of acceptable for people who are not blues fans. And I'm totally into this. And I can play a whole bunch of styles of music, but he has this energy that I just don't have, so I wouldn't be able to play that. And if it's something that's super technical, I can generally just practice until I have it with this guy that's just not there. It's all about the feeling. And this is why this is such a fantastic musician. So if you have the chance and you like blues, music or bit rock stuff, you should really try to listen.

### Bryan Robinson  18:02  
Amazing. Awesome. So is there anything that you'd like to promote something that you're doing that you want get out into the Jamstack community?

### Tim Benniks  18:09  
Actually, I would, and it's not specifically Jamstack focused. But recently, as I said, in the beginning, I've been I've been trying to record things and figure stuff out about content creation. And one of the things I I have always loved and now I'm trying to do is doing interviews with people a little bit like you are doing with me now, but then on YouTube, and I'm not here to just plug me in go to my channel. It's kind of more the people I get to interview. And because what we do is we go over how it has happened, that they are on the place where they are, like, how did they become so good at conference speaking or at teaching, or at, you know, open source contributing. 

### Tim Benniks  18:55  
So I have a whole bunch of VueJS core team members, I have developer advocates at Microsoft, like people who are quite far ahead of me, like they are on point like they're there for a while. And I'm lucky enough that they get they want to speak to me. And what we try to do is figure out how they got there. What is their story, and find kind of tips and tricks for people who aspire to do this, that they can do. Just the things that they say try it. And the most amazing stories come out that like, we would go to a cafe and drink something together, they wouldn't tell me and then on this interview based on a certain line of questions, or questioning, stuff comes out that I didn't know about, which is amazing. 

### Tim Benniks  19:40  
It's like there's people who were very depressed, couldn't get their job done and suddenly found this this way into tech and change their lives around or someone who was a single mom very young and didn't know what to do and is now the lead evangelist at Sitecore. Like these are amazing stories. So, what I would love to plug is just have a look at those interviews. And it's not just me, the guy who asked the questions, but listen to the people with their stories. I think that's worth your time if you're in our community.

### Bryan Robinson  20:14  
Yeah, definitely. That sounds that sounds amazing. Well, we'll put a link to that on the show notes. Awesome. Thanks. Very cool. Well, thanks for taking the time and and being on the show with us today. And I hope you keep doing amazing things both as your agency and then kind of your personal time.

### Tim Benniks  20:27  
Thanks a lot for that I had a blast being on.

### Bryan Robinson  20:31  
Thanks again to Tim for being on the show and to you, our dear listeners for taking the time out of your week to listen in and find out more about our amazing community. Before we get to our sponsor, be sure to like hearts star favorite or whatever in your podcast app of choice and spread the word about the amazing people doing awesome stuff in our community. 

### Bryan Robinson  20:50  
And now for our sponsor. If you listen to season one you're probably aware of TakeShape by now. But as a reminder, TakeShape is a content platform for the Jamstack. TakeShape has a headless content management system an easy to use GraphQL API, a static site generator and amazing new product called Mesh, a service that can tie together multiple API's into their handy GraphQL interface. If you're doing anything with content on the Jamstack, be sure to check them out at takeshape.io/thatsmyjamstack. 

### Bryan Robinson  21:20  
That's it for this week. Thanks again for listening and we'll see you back here for the next awesome episode.

Transcribed by https://otter.ai

Intro/outtro music by [bensound.com](https://bensound.com)