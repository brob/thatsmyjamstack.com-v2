---
title: Jayson J. Phillips on the early, intermediate and current eras of the Jamstack
date: '2020-06-23'
tags:
  - episode
  - season-2
audioFile: https://pinecast.com/listen/cd023d92-0d4c-42e6-b810-6c9b7d06b004.mp3
description:  In this week's episode, we chat with Jason J. Phillips, Director of Engineering at a 2U, boot camp instructor and a media developer expert. 
socialImage: /images/jayson-phillips.png
---

## Quick show notes

* Our Guest: [Jayson J. Phillips](https://jaysonjphillips.com/)
* What he'd like for you to see: [His Live coding on Twitch](https://twitch.tv/its_jay_phillz)
* His JAMstack Jams: Getting back to simplicity on the web | Tools like [Netlify](https://netlify.com)
* His Musical Jam: [Bootsy Collins - I'd Rather Be With You](https://www.youtube.com/watch?v=0tgYr03o3dE) | [Karen Harding - Say Something](https://www.youtube.com/watch?v=SiwgvQA8ksE)

### Bryan Robinson  0:05  
Hello, everyone, welcome to another fun packed episode of That's My Jamstack, the podcast where we ask that difficult question, what's your jam in the Jamstack? In this week's episode, we chat with Jason J. Phillips, Director of Engineering at a 2U, boot camp instructor and a media developer expert. 

### Bryan Robinson  0:23  
Before we dive into the episode, I wanted to mention our sponsor take shape, stick around after the interview to find out more about their content platform or head over to takeshape.io/thatsmyjamstack for more information.

### Bryan Robinson  0:41  
All right, Jason, thanks for being on the show with us today.

### Jayson J. Phillips  0:43  
Appreciate you, Bryan. Glad to be here.

### Bryan Robinson  0:45  
Cool. So tell us a little bit about yourself. What do you do for work? What do you do for fun?

### Jayson J. Phillips  0:49  
Yeah, so by day, I am a director of engineering for boot camp applications at 2U. We house a lot of boot camps web development. FinTech, UX, and a couple others through extension schools at universities. And so at night, I also teach web development and data visualization boot camps, most recently through the UC Berkeley Extension. And University of Denver was my most recent class.

### Bryan Robinson  1:18  
Cool. So you're doing actual technology for companies that are doing boot camps through schools? Is that right?

### Jayson J. Phillips  1:25  
Yeah. So the team that I that I oversee and manage runs a slate of applications that's for all parts of the learning aspect. So we build tools for instructing as we build tools for our students in our boot camps. We integrate LMS as for our learning platforms, so everything from the student is already enrolled to the student graduating, my team plays a role in their software journey.  It's never a dull moment, pretty awesome.

### Bryan Robinson  1:53  
So what do you do for fun outside? Obviously, if you're if you're teaching at nights too, then there's not a whole lot of room for that but what's what's your idea of fun.

### Jayson J. Phillips  2:00  
Yeah. So I tend to run far away from technology for fun. While I do enjoy programming and you know tinkering around on my off time, I tend to be away from the house. So hiking outdoor activities. I'm a big cyclist and runner. I'm still trying to eventually chip away at hopefully running for the half marathons in 50 states I've allowed nine states now. So yeah, I try to make up for all the sedentary sitting at the desk by running myself until I can't run anymore.

### Bryan Robinson  2:36  
Cool, so do you do like competitive or re you just doing it like those half marathons just to do the half marathons?

### Jayson J. Phillips  2:43  
Yes. So my tagline is I don't run fast I run far. So that not competitively but I definitely enjoy a lot of the runs for fun and just to beat my my own personal times and then doing some team adventure races. Like there's a series called Ragnar where it's a team of 12 split between two vans and you run 200 miles over 36 hours. 

### Bryan Robinson  3:09  
Wow. I'm out of breath for a mile. And that's about that's about as much as I can go. So that is super impressive.

### Jayson J. Phillips  3:15  
I mean, those races is all about the team. Because again, I run far not fast. So on the wrong team I can be probably very disruptive to a group, but it works out well.

### Bryan Robinson  3:26  
Very cool. So So tell us what was your kind of entry point into the idea of the Jamstack or into static sites or wherever you found your way into this cool community?

### Jayson J. Phillips  3:35  
Yeah, so I think the thing that hit me right away about Jamstack is that my first experience on the web, you know, was all static. Back in about 2001 2002, there was a popular platform called Graymatter written by this gentleman on Noah Gray, and it was written in Perl, but it it would take all your content, as text files and all your comments and actually generate static output for your site. So while the compilation step because it would recompile your entire site. So if you had thousands of pages as a blog, and you know, hundreds or thousands of comments, it would take forever. But once it was done, you had this beautiful site that just ran. It had the notion of templating. So I was like really one of the first experiences I ever got of playing around with a static site in any form. And so jumping back into like the modern era, I think it was around 2013. Before then I'd play around with Jekyll and Octopress for a couple years to replace the WordPress sites I've been working on. And then I dove into Wintersmith and Blacksmith was like some of the firt like early NodeJS, static site generators I've worked on.

### Bryan Robinson  4:46  
So I'm curious real fast, because this was actually a conversation I had the other day about Wintersmith and Metalsmith and all all those kinds of first node static site generators and kind of the idea of like, why didn't those take off? Whereas potentially, like, now we've got stuff like, you know, eleventy kind of taking that role. But then on top of that, you know, obviously Gatsby and, and Nuxt and all that. Do you have any thoughts on that? Like, having used that, I used it a little bit, and it was over my head at the time. But like, what, what do you think about that?

### Jayson J. Phillips  5:20  
Yeah, I think the barrier to entry lowered in terms of the setup, right, so I would say the first time I encountered Wintersmith and Blacksmith and a couple other of those types of sites, it was the same thing. It's like, Alright, this seems like a lot of configuration. I got these crazy Gulp processes or some other build process where now, especially with the advent of create react app and other tools, even in Angular and other ecosystems. It's much easier to get a common set of defaults that are a little bit opinionated, but enough that you don't have to mess with it to get started and you can kind of customize as you go, and I think that is what allowed Jekyll to take off when it first came out. Was that outside of a few hours sensible configuration in a YAML file, you could just write markdown and run it as default. It took very little in the way of getting started with it.

### Bryan Robinson  6:11  
Yeah, the configuration is definitely it was a it was a big pain. I mean, honestly, some days when you're just trying to work on a project real fast, it can still be a pain if you don't actually reach for all these tools.

### Jayson J. Phillips  6:20  
Yeah, I mean, it's, this is like the beauty of the the abstractions that we love building on top of, right, let's say, I really think it was just a maturing of the node ecosystem. And also just now we're within arm's length of a tool in almost any ecosystem now, but especially within JavaScript,

### Bryan Robinson  6:37  
in fact, like the cool thing is like we're seeing projects coming up that are like refactoring Jekyll like there's Bridgetown nowadays. That is, you know, trying to say all right, we need a modern Ruby static site generator and Jekyll is just been around the block a few too many times. Yeah, that's

### Jayson J. Phillips  6:53  
And I love to see it right. I think Jekyll for you know really brought static sites back into the forefront. And also outside of purely technical circles, you know, for other people to actually understand the care about it and see what the benefits were. So I think, you know, as we have these round Robins of, hey, this community is pushing that community ideas further And beyond that, who knows where we'll end up in 2025. It'll probably be something where we think the page gets created and the site's updated in like nanoseconds,

### Bryan Robinson  7:23  
hey, there's that there's a JavaScript library for for reading brain process. So who knows? So I'm also curious. So So you've been you've been doing static sites for a long time with with Graymatter kind of being that that first entry point way back in the day. My first entry point was a little bit later, a few years after that with movable type blue. I'm wondering like, like, obviously, we're way better than those systems were back then. I remember I had a blog. They had thousands of posts for newspaper I worked for and it was like a 40 minute compilation step to deal with that. Do you think? Do you think that that timing was kind of the the downside of the static stuff? And is that is that why you think maybe we went dynamic for a number of years and only now coming back with the speed that we've got?

### Jayson J. Phillips  8:13  
Yeah, I do think it had a lot to do with the company system, when b2, which was like the precursor to WordPress first came out, right, like it was competing with MovableType and a couple others at the time, and those were winning out. But then once someone saw that, hey, you could install this on a server and click a button and now you have a blog. And it starts out right away and you can add post right away. I think that's where the shine of the newness of this dynamic content sites came into play. And then I think there was also the piece of we didn't have, I think as advanced ways, generally available to structure content in static sites, whereas WordPress made that a bit easier to reason. So the tools like Drupal, where you could create structure around your content and understand like, what do I mean, when I'm creating a blog post? What do I mean when I'm creating a static page? And I think we will type in those tools as they moved along that over time, didn't have that really as well along with the long compilation steps.

### Bryan Robinson  9:17  
Well, I know even like, later in the game with WordPress at the agency I worked at, we use a plugin called Advanced custom fields, almost any WordPress site we built had that by default, because that structured data was so important. And WordPress, I mean, out of the box didn't give give you a whole lot of structured data. So I think that's an interesting thing as well. But that's that's seeing a resurgence as well in terms of like, we want granularly structured data.

### Jayson J. Phillips  9:42  
Yeah, and especially with a lot of the headless, headless CMS tools out. The awesome part is that there's a lot of different options that allow you to structure that content based on who's structuring it right. So like, with Sanity, you can reflect that in JavaScript files with other tools reflected in the CMS itself. So at the accessibility of structuring that content is really available to whatever type role needs that level of granularity to control it. So I think those tools also helped a lot. And, you know, even like, the pushes that we've had for Semantic Web and semantic structuring of content, even in just markup files and talking about what was it, like microformats, and all these other things, like a lot of that has kind of pushed us to where we are today.

### Bryan Robinson  10:28  
Totally agree. So So we've mentioned a lot of different technologies. We've mentioned a lot of different things from from honestly, the history of the past almost 19 years now. What what's kind of your jam in the Jamstack? What's your favorite service or product? Or maybe it's just a philosophy or a framework? Where are you digging on right now?

### Jayson J. Phillips  10:45  
Yeah, I think for me is getting back to this the simplicity of index page on the web. You know, like a lot of the things that we talked about, I that's what I enjoy most about the philosophies and the approaches of Jamstack You know, as an example, there was a client that I worked on back in 2008. For Fairmont International, a huge international chain of hotels. Every single page was its own index page. It was Yeah, every single page was a folder with an index page in it. For every single locale, language pair, they support it, which was over 50. So at any given moment, I was SFTPing like, hundreds of files, if we haven't changed a global header, and it wasn't a server side include, we had to change it on hundreds of pages. So I think just this approach that we can take these modern tools, and still come up with the simplicity of just another static page is super awesome. Outside of that, I am a huge fan of Netlify. We use it a lot at work to for like AV testing and for launching a bunch of previews for for our deploys for some of our front end applications that are built in react, which allows us to quickly test for UX changes Things like that. So, yeah, Netlify has been increasingly, I've been increasingly using a lot of the portfolio tools. So I, I dig it a lot for my personal blog and other things.

### Bryan Robinson  12:10  
It's really hard to beat. Just the fact that it's all in one like you want you want serverless function, no problem. You want forums, no problem. You want just simple deploy of an HTML page. No problem.

### Jayson J. Phillips  12:22  
Yeah. And I think also, even with stuff like forms, right, I think that solves a problem too, that we had back in the MovableType and other eras. And also in the first wave of static blogs, where we had to rely on Disqus or all these other external tools to get comments and then injected back into our sites. Now we have the full control of being able to build what we want, and or integrate suites. Like I know Gatsby studio is like kind of building up as well. Vercel has got a great, awesome set of tools, with Now or I guess they call that Vercel Now as well. But yeah, I think, you know, with these all in one suites that are leveraging these other platforms, they also make it easier for us to deal with lambda without having to jump into the AWS world and learn about security groups, everything else. So it's pretty awesome.

### Bryan Robinson  13:10  
I had never touched a serverless function until Netlify rolled out their functions, just because it was just too big a pain to go into the into the GUI interface and deal with all that nonsense. I was like, Oh, I have it in your GitHub repository. No problem.

### Jayson J. Phillips  13:23  
Yeah, just that that hole, just put it in a in a single folder. Let us know what folder it is. and it pulls up. I wish we had that when lambda was first being talked about, because that probably would have gotten a lot more adoption.

### Bryan Robinson  13:35  
That would probably be two or three years ahead of where we're at right now.

### Jayson J. Phillips  13:37  
Yeah. It's because I tried lamda once before that, and it was like, and it took me this long, a few years before and I just started playing with Netlify functions maybe like two weeks ago. So and I love how simple it is. Yeah,

### Bryan Robinson  13:52  
You can just a Hello World example takes you know, five minutes to get up and running. It's beautiful. So So how are you using these kind of Jamstack philosophies at work, you know, with all these boot camps, and also, you know, personally, you mentioned your, your blog, but but kind of browse through what you're what you're using right now and how things are going for you.

### Jayson J. Phillips  14:11  
Cool. Yeah, so. So at a previous job, we're using a lot of static page generation for our marketing site and letting that be cached in our system. So that marketing site was lightning fast. It was all static markup. And then we just use the API's for our back end financial platforms to integrate with authentication or integrate stock tickers, all those types of things. So what it enabled us to do was to quickly iterate on our marketing pages, and let the actual full, single page application stay on its own structure. And then it allows us to play with things like mono repos, which allowed us to have like share the common elements between all the different sites, but split architectures where needed at my current role one of our student facing platforms, we use the branch preview feature with Netlify to steady generate our sites and That's probably saved us, I can't tell you how many hours from our own QA process to now, and has made it so much easier to be able to switch between branches change, see the changes, see what changes look like in an integration branch before we actually roll that into master and release it. 

### Jayson J. Phillips  15:16  
So that's been super awesome. And then personally, so I do use Sanity.io for their headless CMS solution. I've really enjoyed having a clean interface to go in and write push a button and save it and push another button. And it goes off to the races to build everything. And so just this notion of my site can statically regenerate it whenever I want it to be like, it doesn't have to be recompiled unless I push that button also gives me an interesting level of control over content publishing that I didn't have before. Right, instead of me worrying about some systems timing. I can just say, all right, I release pages every Friday, but I can create my own editorial process around that before we statically build that site on the production. So that's been super awesome for me as well. 

### Bryan Robinson  15:59  
The whole idea of having an editorial process and all that is definitely something that is super powerful when it comes to especially like you mentioned, the deploy previews and all that, like you can send it, you can send preview links out to like, get feedback on a post before you launch it. 

### Jayson J. Phillips  16:12  
Yeah. And it makes it also makes code reviews, much more accessible and less obstructive, right. So if your reviews are really going to be around the functionality of the code, you can, instead of having to pull it down, you can review the code within GitHub, which is expanded their like code review tools a lot, and just the ease of reviewing code in the site. But then you have the fully launched version on that deploy branch, which, again, just makes that much easier. And then it allows you to do things like hey, I have a similar branch that we can wire up for the API so we can test that API changes. It's just it's just being able to split concerns where you need to at different parts of the process is pretty solid. 

### Bryan Robinson  16:54  
So out of curiosity, since since you're doing tech for a lot of these boot camps, and you're and you're teaching web development, Are these things being taught in the boot camps and in the classes? Or is it more traditional Dev, and then oh, by the way, don't forget, there's this new thing coming out, too. 

### Jayson J. Phillips  17:09  
So I think there's a mix. For our classes in particular, we do start with a static approach by telling them all about GitHub Pages and getting them used to that for their first set of sites. So for, I could say, probably their first 10 to 12 weeks, every homework, every page, every project they do is being deployed and GitHub Pages statically. And then we make the connection to them of the other tools later in the course. But we never actually get to come back and say, all right, you can launch here but when they get to their second or like end of class project, we have a lot of our students who end up deploying on Netlify or using like Firebase Hosting or even using Heroku and like static generating webpages and and just having it hosted via static folder. So some of the students end up deeper in Jamstack because of their own research, but they definitely get that hint of that throughout. course by talking about GitHub Pages and talking about what that means, and what Jamstack will be for them. 

### Bryan Robinson  18:06  
All right, well, so So let's talk about actual music now. What's your actual jam? Where are you listening to what's in your headphones on daily basis? 

### Jayson J. Phillips  18:12  
All right, so my favorite song of all time is Bootsy Collins, I Rather Be with You, there's just says something about that intro to I hear that anywhere I stop. And I just end up swaying slowly. As far as songs as I've been listening to you, like, for the last few months, is an artist by the name of Karen Harding, who had some, some really nice like Deep House hits, and one is called Say Something. And it's just a really kind of upbeat, quick, simple song that I hear it and it's like, Okay, I'm ready for the gym. Or I hear it and I'm ready for like, three hours of coding. Or I hear it and I'm like, Alright, 30 more minutes. I'll get on my live stream. Yeah, like it just it's my musical rebel. It's all I love that song.

### Bryan Robinson  18:59  
So, so Also, you know, what are you - What are you looking to promote right now? What What do you want to get out to the Jamstack? community? You know, what, what are you doing that you want to get out there?

### Jayson J. Phillips  19:06  
Yeah, I think first and foremost, which we're both members of, is the awesome media developer experts community. Yeah, we definitely want to make sure folks understand that they could join the discord even if they're not an expert, come join the community to talk about media, especially now that we are moving with heavy Jamstack and we're in that's gaining a lot of steam, that media handling and media expertise is going to be much more important because now image sizes matter when everything else on your page is code split and, and so much smaller. So now we need like a renewed focus on media. 

### Jayson J. Phillips  19:40  
The second thing is, you know, I've joined in toss my hat into the Twitch arena. I think for me, I'm sticking a gearing to towards really early stage to mid level engineering. So we'll talk about a lot of topics. I've been working on a movie Tracking site application just giving everyone a piece of functionality every week that we work on and on the stream. So that's been pretty awesome. So if you want to give a kid a follow up, come check it out. Jason J. Phillips, we'll make sure we give you some notes. But uh, yeah, that's, that's the things I've been up to recently that I've definitely want to get out there.

### Bryan Robinson  20:18  
Very cool. I love the live streaming community. I've been a part of it for a couple months now. And it's just absolutely amazing. And I'm glad that you're a part of it. And I'm gonna go click that. That little heart button here in a couple minutes.

### Jayson J. Phillips  20:30  
Yeah, definitely need to swing by, a few others, too. I've loved seeing the individuality amongst everyone. Yeah, when we're all talking about similar topics. It just makes that that ecosystem and that community so vibrant. And folks are so super supportive. It's like, if you're looking for like environments to to learn code, or to even stream code yourself, live streaming, especially on communities like Twitch and I think there's some fun Doing it on Mixer (editors note: Mixer just closed after recording) as well. It's, it's a good place to start and kind of get away from some of the toxicity you might see in other platforms. I don't doubt that it ends up on these platforms as well. But the communities right now are just so helping inclusive and like internally boosting each other, which is super dope.

### Bryan Robinson  21:19  
I love it. Like there's so little judgment that happens. Like, I'm not always the best, like hardcore programmer and I've actually had chat debug my code for me, it was great. It was like a beautiful moment.

### Jayson J. Phillips  21:30  
Yeah, I think the thing I love about that, is that, for my former students, I always model for them a lot that, you know, no matter how experienced you are, you're gonna make you're gonna make errors, you're gonna have bugs, right? The point is for us to kind of learn from those and not repeat it the same way. Right. And so, I do love that there's this freedom to just be yourself as an engineer on a live stream. Yeah. And, I mean, I've definitely had a moment where we were sitting in for 20 minutes trying to figure out why something wasn't working. And it literally was, I refer to the model in my code wrong. And I was like, Yeah, thanks. That's 20 minutes of me sweating and getting frustrated for no reason.

### Bryan Robinson  22:12  
And there is sweat involved. It's it's it can be nerve-wracking in front of in front of a crowd.

### Jayson J. Phillips  22:17  
Yeah, but it's a it's a it's a weird kind of scary freedom. or something. We're like, Jason, I don't get it. I'm like, I know. But there's just something also empowering when people do come in to chat. And you know, there's a message of support or a message of, hey, you missed something like just that. Automatic, like, leaving the house help is super awesome.

### Bryan Robinson  22:39  
Yeah. And like, it's just like sitting in a room with you know, with other developers thinking through a problem it can be just super helpful just to talk to somebody about even that somebody can't talk back. Yeah,

### Jayson J. Phillips  22:49  
and it's, and the community also isn't looking for like the super. Like wunderkind. I've been programming since I was two. So I never heard A bug in my C sharp, right? It's a lot of folks are just looking for folks who look like them or sound like them or have life experiences like them, and actually be able to see them writing code. And I think that's super empowering for all of us to play a role in. Because we don't know who were inspiring next, or who just needed that little bit of validation of, oh, Brian talked about his story. I will link to Brian's story. I could do this, right. And that that for me is like the, the main like, just thing that pulls me into education and into like, live streaming.

### Bryan Robinson  23:40  
Yeah. Or like, Hey, you know, Bryan spent 20 minutes finding a typo in his code. I've done that like five times, maybe I am a programmer.

### Jayson J. Phillips  23:47  
Or someone's like, Oh, I'm not a real programmer, but I'm building a tool to and this is a real thing that happened. I'm building a tool to screenshot my screen. Use OCR to look at my code. And then Tell me if there's better ways to write those functions. Like when you think you're not a real programmer, get out of here, you leave right now. Like, man, you should get on stream and I'm gonna follow you nervous now.

### Bryan Robinson  24:15  
I'm not a programmer, but I wrote this entire thing that honestly, I couldn't do. So that's, that's super impressive.

### Jayson J. Phillips  24:21  
Yeah, it's, uh, it's, it's, it's been amazing. So yeah. For folks out there, and especially in the Jamstack community, if you're looking to do that. Everybody's voices needed. You know, streamers, watch each other. People will watch each other stream. It's a super awesome thing.

### Bryan Robinson  24:36  
Yeah, definitely. Cool. So I appreciate you taking the time to be on the show with us today and to share your thoughts and experience so keep doing amazing things on the web in the Jamstack.

### Jayson J. Phillips  24:44  
Bryan, appreciate you. I love what you're doing here and thanks for having me on the show.

### Bryan Robinson  24:54  
Hey, everyone, it's Bryan again. I want to thank Jason again for being on the show and I want to take a moment to thank you are listening community is one of the many things that makes the Jamstack shine. And you all keep me coming back week after week. Before we get to our sponsor, be sure to like part star favorite or whatever in your podcast app of choice, and spread the word about the amazing people doing awesome stuff in our community. And now for our sponsor, if you listen to season one you're probably aware of take shape by now. But as a reminder, take shape is a content platform for the Jamstack take shape has a headless content management system, easy to use GraphQL API, a static site generator and an amazing new product called match a service that can tie together multiple API's into their handy graph qL interface if you're doing anything with content on the Jamstack Be sure to check them out at takeshape.io/thatsmyjamstack. That's it for this week. Thanks again for listening. And we'll see you back here for the next awesome episode.

Transcribed by https://otter.ai



Intro/outtro music by [bensound.com](https://bensound.com)