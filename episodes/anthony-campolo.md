---
title: Anthony Campolo on full-stack serverless frameworks
date: '2021-01-19'
tags:
  - episode
  - season-2
audioFile: https://pinecast.com/listen/ec278f91-4112-4fd4-94e1-4cb8033eb91d.mp3
description: This week we have Anthony Campolo. A full stack web developer and RedwoodJS advocate.
socialImage: /images/anthony-campolo.png
---

## Quick show notes

* Our Guest: [Anthony Campolo](https://twitter.com/ajcwebdev)
* What he'd like for you to see: [FS Jam](https://twitter.com/fsjamorg) - Full stack Jamstack
* His JAMstack Jams: [RedwoodJS](https://redwoodjs.com/)
* His Musical Jams: Radiohead | Bon Iver

## Transcript
### Bryan Robinson  0:14  
Hello, everyone, welcome to another episode of That's My Jamstack, the podcast where we ask that not so tricky question, what's your jam in the Jamstack? I'm your host, Bryan Robinson. And this week we have Anthony Campolo. A full stack web developer and RedwoodJS advocate.

### Bryan Robinson 0:40  
All right, Anthony. Well, thanks for coming on the show with us today. How are you doing? 

### Anthony Campolo  0:43  
I'm doing great. Thanks for having me. I'm a big fan of the podcast. So it's great to be here. 

### Bryan Robinson  0:47  
Excellent. I appreciate it. So tell us a little bit about yourself. What do you do for work? What do you do for fun? 

### Anthony Campolo  0:52  
Yeah, absolutely. So I am a bootcamp student. Someone who is kind of coming to programming from a different area of life, I was originally a music teacher, and then also ran a performing arts summer camp for about four years, and just decided that I wanted to try something else out. And you know, that the journey I got to, to coding is, is long and winding, which we'll talk about a little bit as we as we go on. But um, right now I am at lambda school, and learning full stack web development. And so yeah, that's where I'm at. Right, so your lambda school, you do that kind of full time for a small cohort, right? Yeah. So they have a full time and a part time program. So full time is a nine month program. And then part time is an 18 month program. So I actually started full time, and then switch to part time. So I've, I've done a little bit of both, it kind of just depends on you know, if you're also working to support yourself as well, or if you can really do it kind of full time. So yeah, it's, it's it's nice, because they have that flexibility. So people can kind of choose the schedule that that fits for them. Very cool. 

### Bryan Robinson  2:03  
So what do you do outside of obviously, now you're learning to code what's, what's your idea of fun nowadays? 

### Anthony Campolo  2:09  
Yeah. So I've gotten just really into open source. And it's the type of thing where I'm doing it both to to eventually help my my career, but it is something that I've really enjoyed. And I've learned a lot about RedwoodJS. In particular, I've spent a lot of time blogging about it. And I've also given a couple meetup talks about it. I did one at Jamstack Denver, and another one for GraphQL Texas. And I'm also now doing some some podcasts. I got both Jamstack podcasts done by Bryans. So that's good. And yeah, so that's kind of where where I'm at now, I'm really kind of deep into into the redwood world. 

### Bryan Robinson  2:51  
Very cool. Very cool. So obviously, you're a bootcamp student. So you're picking up development as you go along. But what was kind of your entry point into this idea of the Jamstack? Was it Redwood? Or was it something something else in the past? 

### Anthony Campolo  3:03  
Yeah, so it definitely was way before Redwood and already kind of being familiar with with the Jamstack beta easier to kind of get what Redwood was was going for. But to take it back a little bit. I originally before I was doing any web development stuff, I was actually learning like data science and machine learning stuff, is what I was first trying to get into. And a lot of people who do that type of research, they have their own personal websites as well to talk about the stuff they're working on. And there's a couple where I would scroll the bottom and it would say it was created with Jekyll. And so Jekyll is funny enough static site generator created by the creator of Redwood, Tom Preston-Warner. And so I think that was probably the first time I ever had heard of the term static site. And I ended up not going that route. I ended up just making a WordPress website when I was first getting into like blogging. But then once I started to transition more into web development and learning JavaScript and react in particular that I learned about Gatsby, and so I spun up a Gatsby blog. And I listen to a lot of podcasts. So out here podcast with, with Kyle from from Gatsby, or I'm Matt from Netlify. And so I was I was hearing all these all these people like talking about these ideas, and it was just kind of floating around. So it was it's been a kind of a slow, slow roll into it. But it's definitely it's just like it's a huge, massive thing that's just there. And if you kind of pay attention, it's hard not to poke that bubble every now and then. 

### Bryan Robinson  4:38  
Exactly. And so so you said that you were kind of when you're getting into development you were doing you know more on the machine learning side and stuff so that like more computer science II stuff, what's kind of your, your, your plan, where do you want to go with web development, kind of in a post bootcamp world and all that? 

### Anthony Campolo  4:52  
Sure. Right now, I mean, I'm really into just kind of like the, the dev advocacy side of it, because I really enjoy creating. In the tutorials, I enjoy going out and talking about these things. And my background as an educator kind of fits really well in that in that niche. And there's you know, there's different kind of corners that that people go for. There's some are kind of more education, focus, some are more outreach, focus, some are more about like, bringing feedback back from the community. And so redwoods been cool, because all the kind of mechanisms for feedback are already in place. So I see myself more just like getting out and explaining it to people like, what is this? How does it work, and then that's like, kind of the whole role that I've kind of monopolized.

### Bryan Robinson  5:41  
Nice, you've got kind of that that arts background, which definitely helps when it's like framing the story of how to do that education, too, that's always a handy thing to kind of have in your tool belt. 

### Anthony Campolo  5:50  
Yeah, you definitely need to be able to put things into a narrative for people to really want to, like, pay attention, especially for technical things. But I find that the history of this thing is is so fascinating. And I've actually spent a lot of time writing about kind of this transition from static site generators into the Jamstack. And now even like the Jamstack is turning into something else that we're not quite sure what it is yet. Because we've we've gotten rid of the acronym and now Jamstack is stands for nothing. And it's just kind of like an architecture. And so I'm really interested in those kind of ideas of like, Where is the Jamstack going?

### Bryan Robinson  6:27  
Definitely I think, I think that there are so many new technologies kind of coming out Redwood being among them next JS having like, all these new ideas around what static and and like, server side and what these different pieces bring to the table and how they can kind of be intermingled? I'm kind of curious, like, how does Redwood see itself? Cuz I know it's a it's a full stack front end kind of application builder. But what what's the community kind of see in terms of like, where it's going?

### Anthony Campolo  6:54  
Yeah, so it's called a full stack serverless framework for the Jamstack. So you have the Jamstack part, which is about having your front end be just static assets that you can serve from a globally distributed CDN. And then the full stack part is, how do we get those same benefits attached to the database and the back end? So it's about how do we also get that back end to be distributed globally, which, like fauna, db is doing a lot of really interesting research there. And then you have the serverless part of it, which is, how do you get your whole application to be sort of smushed into just these like AWS, lamda handlers, or, you know, Google Cloud Functions or Azure Functions. So the back end is set up in a way. So it's easily deployable to these sort of Functions as a Service serverless back ends. So it's, and then also, I didn't even mention graph QL. Like graph qL, is kind of what ties the two together. And then so there's a lot of there's a lot of tech that goes into it. And it takes a long time to kind of wrap your head around, which is why I like spent a lot of time writing about it and talking about it. And you know, I have hours and hours of material about it at this point. 

### Bryan Robinson  8:15  
How are you kind of pursuing kind of redwood right now? Like professionally, personally, what what are you building with it? What what are the applications that you kind of see optimized around what Redwood can do?

### Anthony Campolo  8:26  
Yeah, so the first thing I did was just go through the tutorial. And this is what I would really recommend everyone who is getting into this, you should just go through the whole tutorial and kind of build out that project because they started with what they call tutorial driven development, which is sort of a play on README driven development, which is another term Tom was using a while ago. And the idea being that you create the tutorial, and then you build the framework to make the tutorial work. And so it's, it's a really crucial part of it. And now that I've kind of gone through that, it what it does is it has you deploy to Netlify for your front end, and then Heroku for your back end, does that have a Postgres database, so I'm really interested in kind of like other deploy targets and other databases you can link it up to so I wrote an article about how to connect it to fauna dB. And then that was also deployed on Vercel. And then there's other people who are doing work with like, the serverless framework, and like Azure, Postgres. So I'm interested in kind of like, now that I know how to build out a redwood project is like, what are the different ways we can deploy it? And what are the different ways that we can get it out actually, onto the internet?

### Bryan Robinson  9:43  
Yeah, and like, how can we do that that database structure because that's, you know, traditionally what's always been the fun challenging aspect of the Jamstack is like, how do you get that third party data and, and if you're having it be your own database at that point, like a Heroku, Postgres kind of idea. That's not that doesn't necessarily fit in with some of the other Jamstack ideals, whereas a Fanta DB type solution might and like serverless functions and lambda might over like, you know, hosting elsewhere. How is that going? How does that feel in terms of ripping out a Postgres server and installing a no SQL server or maybe a third party data API of some other sort,

### Anthony Campolo  10:21  
it's really interesting. And another thing you have to consider this is, what we haven't talked about yet is Prisma. And Prisma, is, it's called a query builder. So it's a little bit like an ORM, but a little bit lower level. And that's what you use to do a lot of your database work for like Postgres, or MySQL, or like SQL Lite. So as I said, when you go through the regular tutorial, you you eventually have a Postgres database, and you're using SQL lite and development. And Prisma is what you use for like your migrations and a bunch of stuff like that. So you have to rip out Prisma to use fauna. So that's actually kind of the biggest thing you have to consider is do you need the functionality that Prisma gives you. And you know, some people don't, because they're, they've never used it, they don't even they don't even know what what it does so. But once you kind of learn Redwood, through the tutorial, you learn it with Prisma. So it can be easy, or can be hard to kind of tell where the two, actually where the line is between the two. Because redwoods csli actually reaches into Prisma c li and what do you do Redwood commands, some of them are actually Prisma commands. So So for me, I actually learned a lot through the fata project in terms of just like, Where is the boundary between Redwood and Prisma. And so that's kind of the thing you're gonna have to, to figure out if you want to decide which kind of route you want to go with with your database when you're using Redwood 

### Bryan Robinson  11:52  
It's interesting, like one things I've kind of seen in the Jamstack world in general, but with some of the conversations around Redwood is this idea that opinionated frameworks aren't a bad thing. So like, you know, Gatsby comes with its unique flavor of react. And it's tightly coupled with GraphQL. Redwoods coming with its own brand new things, I've actually heard it favorably compared to, to rails in a lot of ways. Like, it allows you to create things very quickly, if you're doing it in their opinionated way. It seems like we're going a lot in that direction. So that if you have a set of opinions that you like, you can find some sort of tooling around it. And seems like Redwood is kind of settling into a very specific niche there. 

### Anthony Campolo  12:34  
Absolutely. This is a big thing with other frameworks that are compared to a lot you have like Blitz is now they're like rails inspired, opinionated, full stack framework. And then you have Bison, by Chris ball, which is a really interesting projects that is still pretty new, and is up and coming. But it's Yeah, I like it. Because it's nice to have options, as nice for me as a beginner to be able to see a stack put together. And so even if, you know, I ended up moving away from Redwood and doing other things, just learning how the redwood stack was put together, is has given me things that I can take from for the rest of my career. So it's not about like, this is the one true way to do kind development so much is like, here's a way that we think works for us through our experience as as developers and taking bits and pieces from different frameworks they've used in the past and, and the rails comparison is interesting, because I think this can actually trip some people up. And they think of redwood, like rails. And so they think, you know, whatever advantages or disadvantages rails has, Redwood will have those same advantages and disadvantages, but actually, it was made to contrast rails in certain ways as well, there are things that Tom doesn't like about rails that he specifically is trying to do different. So I think that's, that's an important thing to note, too, is that, that don't get hung up, like too much on the rails thing is that it's rails inspired in the sense that it wants to have like, a happy path. But what that happy path is, is not the same thing as rails.

### Bryan Robinson  14:12  
Yeah, and definitely, you know, what I mentioned that I it's, it takes the positive side of like being able to scaffold quickly and build quickly from the rails ideology and kind of runs with that. I think it's really, really interesting that, you know, coming from, you know, Tom's kind of rails background and working on various things in the past, he's been able to bring that sort of hard knocks education into what he built. I think that I mean, you mentioned that I think you're exactly right, that it's one of the best ways to learn is to take a very opinionated framework, and see how somebody has set it up somebody who has, you know, decades of experience, you then get to learn from those decades of experience, which I think is a very, very powerful tool.

### Anthony Campolo  14:54  
Absolutely. Yeah. Yeah, it's been fun. And it's not just Tom to like actually Peter, Peter pastorius he's worked on a lot more of the code than then Tom has. And I say he's kind of like the Rosetta Stone of this project is that it came out of the work that Peter and Tom were doing on chatter bug. And so they were, you know, doing react and graph qL, and all that kind of stuff. And they and they wanted to put together a framework that would work for that, that would give them the same sort of benefits they had from rails, but with this new technology,

### Bryan Robinson  15:28  
I'm gonna date myself a little bit here, and I'm not too afraid of that, I suppose. But, uh, one of one of my biggest learning experiences, and this has been a decade ago now was actually I primarily use jQuery back in the day, as many people who were, you know, doing web development a decade ago were doing. And the biggest thing I learned was when I actually read through the code of jQuery and dissected how it worked, which was Mind you, like, five years after just using the framework is like diving in and saying, Oh, that's how JavaScript callbacks work, or Yeah, like other pieces that I hadn't experienced and hadn't had to write because of jQuery, I then was able to learn by reading it. And I think that that a lot can be said about, you know, these new frameworks, and that as well, it's like, learn how to use it, you know, get it system under your belt, and then like, wait, no, now, how did they write that? How does that function and like, it just, there's so many education opportunities?

### Anthony Campolo  16:27  
Yeah, it's a weird time getting in now. Because learning things like react, like, I know that I should try and like read through the React source code, but it's, it's hard. And it's really hard to even know, like, what what to get out of that. And, you know, they also talk about how you can't really do View Source anymore, because of how much all the all this stuff gets minified and spit out. So yeah, it's really hard to even know like, you're using all these tools and where it even break in to try and figure out how they how they work. Luckily, it's like Doc's have gotten a lot better. So really, like, you should just read through, you know, the, the React docs front to back, and I find most people they don't even do that. But um, yeah, back in the day, where you could just go read through the source code, I think that's, um, it's not really a thing you can do very much these days. That's fair.

### Bryan Robinson  17:15  
Yeah, I guess there's also like, the idea of like, all the code splitting that we do to whereas, you know, jQuery used to be, you know, one directory with like, you know, 10 files in it, nothing, nothing major, you know, now, if I were to rewrite jQuery, it would be 100 files, you know, 150 files just to do that same functionality. And the same can easily be said for, you know, react and for the for the meta frameworks built on top of it.

### Anthony Campolo  17:39  
Meta frameworks and meta meta frameworks, because there's now frameworks built on top of frameworks, like Blitz and bison are built on top of next. So I find that really interesting how you have all these different layers, like further and further layers of abstraction with frameworks built on top of frameworks, it's, it's super fascinating.

### Bryan Robinson  17:57  
You can go back and in like the first dozen or so episodes of the podcast, like I was talking with a bunch of Gatsby people, a few next people, I would ask, like, how do you refer to this? Because it's not a static site builder anymore. That's not what this is, is not a static site generator. And they're like, Oh, you know, it's an application framework. And then a guest, I had second half the sea for a season. Like, oh, Google is calling it meta framework. I was like, you know, that makes sense, a framework on top of a framework. But yeah, then we've now got meta meta frameworks, which is exciting, but the language feels a little tortured about it.

### Anthony Campolo  18:32  
Yeah, I know, Jason Lengstorf was calling Gatsby a content mesh. At one point, which I thought that was a really fascinating term, especially because of how it uses graph QL. And this idea of kind of, like, you have this one universal middle layer between your back ends and your front ends. And so you can create whatever front you want, and then pull in whatever combination of back ends you want. And, yeah, that's the thing that I found really interesting with with Redwood is, is just when you have graph qL baked in from the start, like what you can kind of do with that what kind of power that gives you it's, I really liked graph QL. But that's been the thing. I've enjoyed learning the most out of redwood, for sure.

### Bryan Robinson  19:09  
It's definitely way better than then going and getting the entire, like, Jason return response from an API that has, you know, dozens of things that you don't need inside of it. I'll always appreciate what graph qL did around that.

### Anthony Campolo  19:23  
Yeah. And it's one of those things where I imagine a lot back end people are like, graph qL is not simpler. It's much more challenging. It just seems like it's simpler once it's set up. So yeah, I definitely sympathize with with people who who think you know, it's a huge startup cost. But I think that the benefit that your your front end gets from just being able to have really flexible queries is is just you know, it's really high. Definitely.

### Bryan Robinson  19:49  
So I think I can make some assumptions here. But what would you say that your jam in the Jamstack is I'm assuming Redwood and graph qL but Want to leave the door open whatever else you want to say in here? Anything goes.

### Anthony Campolo  20:03  
Yeah, I mean, that's definitely what I've invested the most time into into learning and to communicating. But I am really fascinated by the the entire ecosystem. And I'm starting to learn a little bit of like Nuxt cuz I'm really interested in view three with like the composition API and how all the changes are going to come in with that. I'm really interested in spelt and like sapper, and I just heard about elder which is supposedly like the new static site generator thing for for spelt. That's supposed to be really good. So yeah, red wood is definitely like my bread and butter right now. But I'm constantly expanding out and try to look at what else is out there and, and other ways to do things. Because I find that for me, that's the best way for me to learn is to compare different ways of, of doing things. And then you have in one framework, and it doesn't have something and other framework has to figure out how to implement it myself. And very cool.

### Bryan Robinson  21:02  
So what's your actual jam right now? What's your musical jam work? What's your favorite song or musician? What's in your earphones?

### Anthony Campolo  21:08  
Yeah, so I used to be a full time professional musician. So music is obviously a big thing for me. My favorite band has always been Radiohead, going back to like I first got into them around when in rainbows came out, which was like 2007. So that is my favorite band ever since then. I really enjoy Bone Iver. I first got into him back when his first album came out. And his career has just been incredible to see now he's like, he's Kanye West albums. And he's been nominated for Grammys and all that. And then like, just 90s indie rock. So like new book hotel, Modest Mouse, built a spill, you know that that whole kind of scene? That was always really influential to me. So yeah, those are some of my favorite bands and artists.

### Bryan Robinson  21:55  
Very cool. All right. And is there anything that you would like to promote something you're doing? You log out to the Jamstack? world at large?

### Anthony Campolo  22:01  
Yeah, so there's this thing called Fs jam. So full stack Jamstack. It's, um, you know, it's what Redwood is, is going under right now. And a friend of mine, Christopher burns, he is kind of creating, like an organization around this. So the Twitter handle is Fs jam o RG. So Fs jam org, and we'll be putting out some content and possibly even getting a podcast going. So yeah, that'll be something to look for.

### Bryan Robinson  22:32  
Very cool. So something to stay tuned for, as they say in the industry. Right.

### Bryan Robinson  22:37  
Well, thank you, Anthony, so much for coming on the show today. And I hope you keep doing amazing stuff with red wood, but also beyond as you're saying, like, there's so much to learn and so much to to write in, right,

### Anthony Campolo  22:46  
Totally. Yeah, thank you for having me. It's been a blast. I'm always really enjoying the content you put out and I've learned a lot. So continue to do what you're doing.

### Bryan Robinson  22:54  
I appreciate it. Thanks again to Anthony. And thanks to everyone out there listening week after week. If you enjoy that podcast, be sure to leave a star heart review, rating, whatever, in your podcast app of choice. Until next time, keep doing amazing things on the web and keep things jammy

Transcribed by https://otter.ai


Intro/outtro music by [bensound.com](https://bensound.com)