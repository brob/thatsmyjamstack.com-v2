---
title: Sam Julien on authentication, Gatsby and the serverless methodology
date: '2020-01-07'
tags:
  - episode
audioFile: https://pinecast.com/listen/dd14d361-031c-4af2-9e93-a4e1b3623f00.mp3
description: Today, on the show, we have a speaker, author, teacher, and a developer relations engineer at Auth0, Sam Julien
socialImage: /images/sam-julien.png
---

## Quick show notes

* Our Guest: [Sam Julien](http://www.samjulien.com/)
* What he'd like for you to see: [Auth0 Community Forum](https://community.auth0.com/) | [His Gatsby Course on Thinkster](https://thinkster.io/tutorials/up-and-running-with-gatsby-intro) | [Get a Job in Tech](http://getajobin.tech)
* His JAMstack Jams: The methodology and not needing to stand up a server for every little thing
* His Musical Jam: ["Not" by Big Thief](https://www.youtube.com/watch?v=UIcVwH47uxQ)

## Other Technology Mentioned
* [Gatsby](https://www.gatsbyjs.org/)
* [Jekyll](https://jekyllrb.com/)
* [NextJS](https://nextjs.org/)
* [AirTable](https://airtable.com/)
* [Twilio](https://www.twilio.com/)

## Our sponsor this week: [TakeShape](https://takeshape.io/thatsmyjamstack)

## Transcript 

### Bryan Robinson  0:02  
Hello, everyone, and welcome to the first real episode of 2020 you're listening to That's My JAMstack, the podcast where we dare to ask the question, what is your jam in the JAMstack. I'm your host, Bryan Robinson. And today on the show, we have a speaker, author, teacher, a developer relations engineer at Auth0, Sam Julien. 

### Bryan Robinson  0:24  
I'm also pleased to welcome back to the show are sponsored TakeShape, find out more about their content platform after the episode or head over to takeshape.io/thatsmyjamstack for more information. 

### Bryan Robinson  0:39  
All right, Sam, thanks for joining us on the podcast today.

### Sam Julien  0:41  
Yeah, thanks. I'm really happy to be here.

### Bryan Robinson  0:43  
Cool. So tell us a little bit about yourself. What do you do for work? What do you do for fun? That sort of thing?

### Sam Julien  0:47  
Yeah. So I am a Developer Advocate engineer at Auth0, which is just sort of a fancy word for Developer Relations. And so basically, spend my time I'm doing a lot of interacting with developers who use Auth0 the product and then kind of taking that feedback back to the different teams. 

### Sam Julien  1:11  
And so I, I do a lot of speaking at events and things like that and working on basically combining x technology with Auth0 and trying to find the problems with it. 

### Sam Julien  1:22  
And then for fun, I actually live in a rural area of the Pacific Northwest. I live on 10 acres of land with my partner. And then we have some friends who also are in the own the land with us, and so they come up on weekends and stuff. And so we have, we have 20 chickens that we raise, and we're getting some eggs from and yeah, and so ever since moving on to this land that's sort of taken over as my hobby. I feel like I was a lot more interesting when I lived in Portland as far as like hobbies and activities but that's aside from taking care of the property.I see you  have a Breath of the Wild artwork on your wall. And that's basically my current hobby is playing Breath of the Wild.

### Bryan Robinson  2:13  
You could think almost a lifetime into that. So that'd be fine.

### Sam Julien  2:15  
Yeah, it's pretty crazy. I don't know if I'm gonna go ... So we only got a Switch a few months ago. And I don't know if I'm going to go for completion on it. But Amy is definitely. She's already I think she's already got like, 105 shrines or something. And she's, she's going for 100%. 

### Bryan Robinson  2:36  
You could spend a long time going for 100%. So you eat a lot of the eggs that you get fresh from the chickens?

### Sam Julien  2:43  
Well, we we just actually just started laying. Like a week ago, actually, we got them when they were chicks. And so I think we've almost got a dozen at this point. So we're probably going to start eating them pretty soon. There first ones are always kind of duds because they're like trying to figure it out and not fully formed. And so but I think we're just about there to start eating them.

### Bryan Robinson  3:10  
All right. Well, this is this is neither a chicken podcast nor a gaming podcast. Let's let's talk about the JAMstack a little bit, right.

Unknown Speaker  3:17  
Yeah, I suppose we should talk about the JAMstack.

### Bryan Robinson  3:20  
So what was kind of your entry point into this idea whether there was static sites back in the day, JAMstack nowadays? What's your what's your entry point?

### Sam Julien  3:28  
Well, I mean, aside from, you know, the, the, the real static site being like, index.html and everything. Aside from that, I would say my introduction to the JAMstack was through Gatsby, and my introduction to Gatsby was just through, umm... So before I was in Developer Relations at Auth0, I was on the content team. So I was writing tutorials and stuff and we sort of went through this process. The blog at Auth0 is in Jekyll, and there's sort of this ongoing debate internally of whether to migrate to Gatsby or not. And I don't, I don't know if they're going to end up doing it or not. Because you know how it is with wanting to rewrite a platform. It's like, it's like, is this a good idea? Like, legacy code is still, it still works. So. But uh, so anyway, so that's so some colleagues on that team, were telling me about Gatsby. 

### Sam Julien  4:24  
And so I started looking into it. And I kind of just like instantly fell in love with it and started messing around with it and building stuff with it and looking at everybody else's blogs and portfolios that they were making with it. And it just really like scratch the itch for me of both being a developer and a writer, and I just really liked it. So then that kind of led down the path of the rest of the jam stack and all that. I guess

### Bryan Robinson  4:51  
So, when you got into Gatsby, had you done a lot of react previously or was that new too?

### Sam Julien  4:56  
It was actually kind of my way into React. Because I, I'm historically an Angular developer, like I came from C# and then like C# and Angular kind of go really well together. And so I've done I had done a bunch of Angular over the last few years. And then, but Auth0 basically uses React almost exclusively internally. And so I was, it was already sort of on my list of things to learn. But Gatsby was sort of a nice, like way into react because it handled all the tooling and everything, since it's just, it's basically just a supercharged create react app. And so it sort of gave me this nice platform to just dig into react, while not having to kind of worry about the all the tooling involved. 

### Bryan Robinson  5:50  
it's also got, I think, I think, a pretty strong set of opinions to which helps kind of guide on best practices.

### Sam Julien  5:56  
Right, exactly. And an Angular like, angular has A ton of strong opinions. And so that's sort of what I was used to. I mean, it's sort of there's pros and cons to both approach both approaches. But I think when I was first starting to learn react when I joined Auth0, I was a little like dizzy by just how many different ways you can slice and dice react. And so Gatsby really did kind of help just kind of narrow the focus of like, here's like, a set of tools, like a ready made thing for you now just write some react and and figure it out, you know.

### Bryan Robinson  6:31  
So, how are you using the JAMstack professionally? I mean, I know you said that they're debating coming to Gatsby and they are on Jekyll. But you're not on that content team anymore. Are you doing some JAMstack type things and your developer relations that Auth0?

### Sam Julien  6:46  
Yeah, so I I, I'm sort of doing both stuff personally and professionally with it from the professional side at off zero. It's mostly I've been really kind of digging into What authentication looks like in the jam stack because it's kind of an interesting. It's an it's an interesting, new problem set, because it's sometimes it's more like a traditional web app. And sometimes it's more like just a single page application. And sometimes you have these serverless models that you have to authenticate and stuff like that. 

### Sam Julien  7:23  
So so I'm sort of in this research phase right now if like trying to build different prototypes with Gatsby or Next or you know, things like that and wrap my head around what the problem set looks like of like, when is it more like a traditional web app? When is it more like a spa? When is there sort of this in between weird case of serverless stuff and all that and so that's sort of what I'm doing now is is figuring out how Azzurro fits in with jam stack stuff and how we can make it easy for developers and that kind of thing. And then from the on the personal side of things, I'm using Gatsby to build, build, I'm rebuilding, I am rebuilding my own personal site with Gatsby, which is I still am not convinced it's a great idea, but I'm going to do it anyway. And, and, and then I built I loved Gatsby so much, but I, I couldn't find exactly like the way of teaching it that that I liked. And so I built a course for a platform called things through.io on Gatsby just sort of like getting started with Gatsby. And so that's minute sort of another side project endeavors this, this course and different content, I ended up doing a couple egghead lessons on some Gatsby stuff. And so that's sort of my Gatsby sort of fueling my side hustle as well as my day job right now.

### Bryan Robinson  8:57  
Cool. So uh, so what is kind of the thing that brings you to the JAMstack in terms of what do you love about it? What's your what's your jam in the JAMstack? 

### Sam Julien  9:07  
I really think this whole concept of not needing to pair a server with a front end is really nice. I just think that nowadays there there are so many different like SaaS products and like serverless products and things like that, that like, it seems like for a lot of cases other than complex enterprise stuff. You don't really need to spend a lot of time messing with building your own server and all of that, you know, it's just like, if you're just doing if you're pulling in data from outside, you know, like Twilio or wherever, you know, or AirTable or things like that. 

### Sam Julien  9:53  
Or if you're just making like a recently, a lot of developer relations as you know as building a lot of sample apps. And so recently I've been thinking I would always build like a little Express server to serve up data and stuff like that. And now I'm sort of like there's not really any point, I could just put this in a serverless function and reuse the same thing over and over again, and I don't really need it. So I'm really liking that, that the JAMstack has sort of opened up, like it's making so much stuff easier for a large a large percentage of apps that people need to build, you know what I mean?

### Bryan Robinson  10:31  
Yeah, and so so you come from like a C# background so you're obviously not afraid of server side languages. I myself, deathly afraid serverside languages, so kind of, do you have a point where you would go and spin up your own server now or are you going to just be going in this serverless way going forward?

### Sam Julien  10:49  
Well, I mean, I can see so like my my previous jobs were at like in doing like line of business applications for like bigger companies. One was like a finance company one was like a renewable energy nonprofit. So there, those places have a lot of complex business logic that has to happen, you know, with a bunch of data in a database where you have to manipulate and run a bunch of business rules and stuff like that. And to me that, that seems like kind of the obvious use case for like a real server where you actually, like, have a lot of stuff that has to interact with the database and, you know, sort of the more traditional route of, of servers and databases and all that. And so, but I think for a lot of modern stuff that's not enterprise level, the serverless JAMstack stuff works pretty well, you know, and especially with having node I mean, you can sort of just use JavaScript all the time and it's just things are just so much easier. It's It's really nice.

### Bryan Robinson  11:54  
Front End Dev and designer like me, like it just makes my life so much more pleasant

### Sam Julien  12:00  
Yeah, for sure. Definitely.

### Bryan Robinson  12:02  
So so the kind of the whole methodology of that is is where where you're going with your jam, right?

### Sam Julien  12:07  
Yeah, yeah. Basically the whole philosophy.

### Bryan Robinson  12:10  
Yeah. So. So in terms of serverless and all that, right, so you said you started exploring authentication in this world for all zero. How's that going? Because I'll be honest, I haven't done a whole lot of research into it yet.

### Sam Julien  12:24  
It's interesting. And one thing we can link to is one of our architects named Sandrino wrote this really cool article on NextJS and Auth0, but I mean, it's with Auth0, but it also anytime we write about Auth0, we try to also have things that are basically broad, more broad for authentication in general. But we're sort of figuring out that there's these like I said, sort of three different models basically, of like, sometimes it's more like a traditional web app because you're basically, if you're if you're doing everything server side, then it's sort of more like a traditional web app, right? Because you're, you're not really running anything in the browser. I mean, you're running it in the browser, but you're not. There's nothing dynamic happening in the browser. And so you would kind of go with the standard, standard web app approach. 

### Sam Julien  13:21  
And then there's things like Gatsby are sort of like Gatsby is interesting, because it's, it got its start as like a static site generator, but it's never actually like, holy a static site, right? Because it's still react, running, you know, like as a spa. And so that sort of this weird case where it's like, it's kind of a static site, but really, you would authenticate it just like you would a spa, pretty much. But then there's this like Next has this whole thing with the serverless deployment model. And from there, you sort of have to determine like where I need The authenticated data like do I need it when the page first renders? Or do I need it later? and Sandrino, you know, has some nice diagrams in that article that will do a better job of explaining it than I can in audio.

### Bryan Robinson  14:14  
Lovely Mouth Blogging as Dave Rupert would say

### Sam Julien  14:16  
Yeah, yeah. Yeah. So that stuff's really interesting. And I'm still sort of wrapping my head around at all and building out sample apps and stuff like that. But but it's, it's interesting. And it's definitely as the JAMstack continues to be as popular as it is more and more people will need to understand how to protect all their data and everything. 

### Bryan Robinson  14:39  
And Auth is probably the one of the biggest challenges to like adoption in the JAMstack right now to like, how do I protect pages when it's just static?

### Sam Julien  14:47  
Yeah, yeah. Yeah. Our architecture and content and developer relations at Auth0 have all been sort of mulling this over for a little while, because I think actually, for this article, Sandrino was talking to people outside and stuff because it's sort of like how do we want to do this? You know, like, what are the best practices here?

### Bryan Robinson  15:08  
Let's create some standards for it and kind of go

### Sam Julien  15:12  
Yeah, exactly.

### Bryan Robinson  15:15  
So let's let's talk musical jam now what are you listening to? what's what's your favorite song or musician or genre?

### Sam Julien  15:23  
I finally I have a great answer for this now and it's because So have you ever heard of the band Big Thief I have made so they on their last on their most recent album, their their single is called Not. And it's got it's like one of the my, like, favorite songs that I've heard in several years. Like there's something very emotional about it. That is just really awesome. And it's nice because I yeah, I just haven't I haven't felt that kind of like connection to a song. In a really long time so I've been I've been playing that a lot not by big thief. 

### Sam Julien  16:06  
Let's see what else what else have I been? I feel like as I get older I have less and less like emotional connection to things because I'm not young and nostagic anymore but let's see what am I've been listening to you other than that. I like Tool's new album a lot. I liked Angel Olsen's most recent album, I'm a really big Angel Olsen fan. She's sort of like the singer songwriter type, but her album couple years ago, called What was it called My Woman in 2016. That was a fantastic album, if you haven't listened to it.

### Bryan Robinson  16:46  
That's actually my favorite thing on the podcast other than learning about new technology is learning about all these like drastically different musical tastes and going and listening to what what everyone says.

### Sam Julien  16:53  
I love that. I think that's a really great when I saw that question in the invite. I was like, Oh, that's cool. That's Great I like that. I'd be curious, what's what's your current jam right now? What are you listening? 

### Bryan Robinson  17:05  
You turn the tables on me!

### Sam Julien  17:06  
I'm turning the tables 

### Bryan Robinson  17:07  
First time! You know, I just I'm behind the times always like that perpetually. But I just this past summer went and saw Hamilton, the touring company came around, and I didn't think I was going to... Like, I thought I would like it; like musical theater well enough, but like, I am in love with it. And it gets me going in the mornings like it really pumps me up. And then I go and research all the founding fathers and realize how horrible they were. But it it gets me going at least.

### Sam Julien  17:36  
Yeah, now, Hamilton; Amy was really into Hamilton. And so I kind of I'm like neutral towards musical theater. Like, I don't I don't dislike it. I don't you know, but Amy was really into it. And so when it came to Portland, I got us tickets and we went, and I'll admit, like, I loved it. I thought it was like it was not overrated at all like I kind of went into it expecting it to be a little overrated because it's so popular, but like, I thought it was fantastic. 

### Bryan Robinson  18:07  
There's a reason it won all those awards. 

### Sam Julien  18:08  
Yeah, I mean, some some things are hyped up because they're actually that great, you know, like, like Beyonce.

### Bryan Robinson  18:17  
Yeah, exactly. I found that running to it actually works really well, too. So I'm trying to get into running and that has just the right beat for how bad I am at running. So

Unknown Speaker  18:26  
Oh, yeah. Yeah, that's great. I am. I really I had seen In the Heights A long time ago. And so I already liked Lin-Manuel Miranda. But yeah, it's, it's a great yeah. If you ever have a chance, I don't know if In the Heights is still playing anywhere, but if you ever have a chance to see it, it's a really good one.

### Bryan Robinson  18:46  
I didn't even know he had written anything before that. And I researched what he had done was like, Oh, you've done this before. Okay.

### Sam Julien  18:51  
Yeah, yeah, he's Yeah, he's super talented. But that one is about like Washington Heights in New York and stuff like that. It's really great.

### Bryan Robinson  19:00  
For someone indifferent towards towards musical theater you you've got at least that much now.

### Sam Julien  19:05  
Yeah, that's true. I I kind of Yeah, I would say. Other than that though I'm I tend to be pretty neutral about about theater, I could take it or leave it. I respect it. And I respect that other people love it. It's just not it's just not my thing. Not my jam...

### Bryan Robinson  19:24  
All right. And so let me let me ask, Is there anything that you would like to promote? Get out to the JAMstack community? Anything that you're doing that you won't get out there?

### Sam Julien  19:30  
Yeah, I'll say on the on the professional side. Yeah, just keep an eye on Auth0 for JAMstack stuff because we're actively working on it. And, and if people have like input or things they want to talk about, we have a great community forum. So if you're running into authentication problems in JAMstack stuff, like definitely let us know because we're always kind of putting our ear to the ground and trying to figure out what problems people are having. So we can Try to solve them. 

### Sam Julien  20:02  
And then personally Yeah, the the Gatsby course on Thinkster. I'm really proud of it. I think it's a good course. And so that would be good. I'm also I just started, I'm starting this new project called Get a Job in Tech. I'm a self taught developer, I transitioned from finance. And I was lucky because I had some mentors that sort of shepherded me along the way, and not everybody has that. And so I'm starting this new, it's still really early, but basically, I plan on I'm already like, right, sending out emails and stuff and writing content for it, but it's basically to help people with the like, meta skills of getting your first job because I feel like a lot of people think, you know, they learned they learned some stuff on like, Free Code Camp or any any other great site on learning to code and then they sort of get stuck because they're like, okay, where's like, how do I actually get the Job, and you just sort of throw your resume up on a lot of places. And then you get these rejection letters that are like, you don't have any experience and you're like, no duh don't have any.

### Bryan Robinson  21:10  
It's a Junior position, come on!

Unknown Speaker  21:12  
Yeah, like literally, like, that's what it is like. And so there's all these skills of like, like learning in public with GitHub and stuff like that, that like, not many people really teach you, you know, like, there's sort of an art to getting or getting a job and that kind of thing. So that I've been really thinking about that lately. And so I started that up as a sort of a labor of love. And where's that it's get a job in dot tech, basically, I'll, I'll paste in the link. Yeah. And then and then basically, everything I do is tracked at SamJulien.com so you can always go there and I have an occasional email list and stuff like that. So if you ever want to keep up with talks I'm doing or lessons I'm publishing on egghead or thinkest or anything like that.

### Bryan Robinson  22:00  
Perfect. Yeah. Awesome. Well, thanks for taking the time to talk with us today and share your insights. And I hope that you keep doing awesome stuff at all zero and that your chickens eggs are delicious.

Unknown Speaker  22:09  
Thanks. Yeah. Thanks for having me. I really appreciate it.

### Bryan Robinson  22:12  
Yeah, no problem. All right. Well take care. 

### Bryan Robinson  22:18  
All right, it is sponsored time, I want to take a second and thank this week's sponsor TakeShape. TakeShape calls, their offering a content platform. And that's, that's really the best description. They have a handy CMS, a static site generator, and a simple GraphQL API all ready to use on the JAMstack.

### Bryan Robinson  22:35  
Beyond all that they also have new features coming in all the time, like their new Mesh product that allows you to mix and match data from multiple sources into one neat GraphQL interface. If all that sounds interesting, you be sure to go to takeshape.io/thatsmyjamstack to find out more. 

### Bryan Robinson  22:53  
And as always, I want to thank the JAMstack community for listening for responding on Twitter for talking about things in communities. Just for being an amazing place to work and to play and to spend my time. So if you like this podcast let me know by hitting the like, subscribe, all those good things and whatever podcast app you use, and until next week, keep doing amazing things and keep things jamming.

Transcribed by https://otter.ai

Intro/outtro music by [bensound.com](https://bensound.com)