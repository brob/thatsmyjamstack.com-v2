---
title: Obinna Ekwuno on the shift from engineering to the web, Gatsby and the incremental future
date: '2020-06-30'
tags:
  - episode
  - season-2
audioFile: https://pinecast.com/listen/c16b4f9e-2bdd-42b3-9f30-6fa3c658fb1c.mp3
description: On today's episode, we talked with the amazing Obinna Ekwuno is a software engineer for Gatsby, a media developer expert, egghead instructor and an accessibility advocate.
socialImage: /images/obinna-ekwuno.png
---

## Quick show notes

* Our Guest: [Obinna Ekwuno](https://twitter.com/Obinnaspeaks)
* What he'd like for you to see: [His Egghead videos](https://egghead.io/instructors/obinna-ekwuno)
* His JAMstack Jams: [Gatsby Cloud](https://www.gatsbyjs.com/) | [Netlify](https://netlify.com)
* His Musical Jam: [KOTA the Friend](https://www.youtube.com/watch?v=c_m-oayr1Ik&list=PLOrAbymFFtKHUhJ4LxQIQ1EhEgNj6odeJ&index=1) | [Fela Kuti](https://www.youtube.com/watch?v=cZL6cLAl7zc&list=PLiX3oB1RnepcfD4e17W8CKAzbeBM7SNUf&index=1)

## Transcript
### Bryan Robinson  0:03  
Hello, everyone, welcome to the next amazing episode of That's My Jamstack the podcast where we ask the age old question, what's your jam in the Jamstack? On today's episode, we talked with the amazing Obinna Ekwuno is a software engineer for Gatsby, a media developer expert, egghead instructor and an accessibility advocate. 

### Bryan Robinson  0:24  
Before we dive into that interview, let me take a second to thank our sponsor this week, TakeShape, stick around after the episode to find out more about their content platform, or head over to takeshape.io/thatsmyjamstack for more information. 

### Bryan Robinson  0:40  
Obinna, thanks for thanks for being on the podcast with us today.

### Obinna Ekwuno  0:44  
Happy to be here.

### Bryan Robinson  0:45  
Awesome. So tell us a little about yourself. What do you do for work? What do you do for fun? That kind of thing?

### Obinna Ekwuno  0:50  
Oh, um, so I am a software engineer at GatsbyJS. I work on the DevRel team. I originally joined Gatsby to work on the learning team. Like building stuff with like documentation, writing some documentation and working on like plugin automating workflows and like all of those interesting stuff, trying to like make like documentation better for like people to, like, get more information out of out of Gatsby. But now I work on like the DevRel team, which is like really cool, because like, I still do some of the learning work, but like also, like more DevRel right now. Um, that's what I do for work.

### Obinna Ekwuno  1:25  
For fun, like, I like to write poetry. So I just, you know, write poems, hang out my friends. I I started getting into gaming a few months ago, my friend gave me his ps4 to like, try out some games. So yeah, that's that's what I do for fun right now.

### Bryan Robinson  1:41  
So what kind of poetry are you writing?

### Obinna Ekwuno  1:44  
I'm mostly like mostly melancholic poems like just, you know, I'm just writing I'm documenting like, life as a Nigerian boy growing up in Nigeria and you know, just just, you know, writing more for my myself, my future self done, like anybody really

### Bryan Robinson  2:01  
Awesome, I believe of everyone that we've, we've talked to you're the first person who said that poetry is what you do in your spare time. So that's, that's awesome. 

### Obinna Ekwuno  2:09  
Thank you. 

### Bryan Robinson  2:10  
And then with Gatsby, so you said you were originally on the learning team and the devrel team. That's been an interesting thing that I've heard about Gatsby, what's the main difference between, say, the Education team and and DevRel? Because I've always felt that those kind of overlap in some ways?

### Obinna Ekwuno  2:26  
Yeah. So like, there's not like so much difference is because when working out like when I was working on like, the learning team, because we're still trying to like flesh out the DevRel team at Gatsby, so learning was more like, you know, writing documentation, speaking, podcasts, all of those interests interfacing, like the community, so it was kind of like, it was more like DevRel but then at the same time, like actually having to write documentation as part of your job. But, so like, that's like, those, those are like the, the parts are like overlapped but like so that's why it was really easy for to transition from like learning things. There. Because like it was just same thing I started doing originally, but like, you know, with like, Oh, this is not what you're supposed to do full time.

### Bryan Robinson  3:07  
So let's, let's talk about the the Jamstack a little bit. So what was your entry point into this idea of the Jamstack? Or maybe your static sites? How did you kind of enter this world?

### Obinna Ekwuno  3:16  
Yeah, so, um, I think that was like, two years ago, when I had been writing, like, React for a bit. And, you know, it was really, um, it was really because I had to, I don't, I didn't have like a traditional entry into like tech. 

### Obinna Ekwuno  3:30  
I studied engineering in school, and like, it was really in uni. And like, it was really confusing to like, learn how to code. So I was writing, like, React after learning, like a lot of JavaScript. And then, you know, someone just came up one day while I was like, hanging out my friends from computer science, and they were like, hey, look at this cool stuff called Gatsby. Like, what is like The Great Gatsby like the movie, like who would name something who would never framework out of like a movie, but then you know, that then I you know, got into like the documentatioon. And you know, just really just kept going from there. So like Gatsby was like my first introduction to like, oh, when I saw that I think the thing that really got me into it was seeing that I didn't have to like worry about routes anymore. The whole the whole put put the file in the page folder and becomes a router. It got it got me. I was like, What? Yes, this is how I want to build

### Bryan Robinson  4:20  
It definitely. Like I when I got my first intro into like some of the React stuff. I just, I didn't want to handle routing. That was like the worst thing about building a single page application. And now with Gatsby is just drag and drop almost 

### Bryan Robinson  4:33  
So when you were studying at university, you said you were like software engineering. Were you specifically looking to get into went into the web world? Or were you looking to do other things with that?

### Obinna Ekwuno  4:44  
So um, I was studying electronics and computer engineering, and you know, like having having so I was doing more of like, smaller electronics like, you know, smaller sector boards, how do waveforms work, all of those things. Interesting stuff that I never really paid attention to. Well, but the thing is like with me, like naturally, I'm just really I'm really curious. So at first I didn't even want to like I didn't know what tech was about, I just really just wanted to be a network engineer. So I was learning a lot about TCP and IPs and network layers and all those like interesting stuff, Voice over IP, you know, the cool things for me at that time, then, I got into like tech, when one of my, my classmates was because I was just going to like, the classes to get my degree, like because I was good at math and physics. And you know, engineering just came like, Oh, that's what you're supposed to do. 

### Obinna Ekwuno  5:34  
But then when I really go into like, my classmate taught me to write HTML. And I learned HTML, I was like, Oh, my God, then I go, I go to CSS and I'm like, what's sorcery is this? How, how does this happen? You know, so I've always I think the thing that really got me here was like, always wanting to because everything excites me with like, when it comes to like tech, so like, always know, what's the next thing I can do? How can I use this in another way? So like, that's like, what's really interesting That's, that's what really got me into like, where I am now. 

### Bryan Robinson  6:03  
Very cool. So obviously working at Gatsby, your day to day deals a lot with the Jamstack. But how specifically, are you using the Jamstack professionally? How are you using it personally? What are you kind of doing nowadays?

### Obinna Ekwuno  6:15  
Yeah, so um, I first like my, like building on stuff like Jamstack was like kind of building stuff for Gatsby was how I got to like the Jamstack. I like now because like, I work on the on the documentation. So like before, you have to actually write documentation, you kind of need to like test out or you're writing about and actually know if it works. So that's like most of the stuff that I do professionally with the Jamstack. So maybe if you're trying to document how a plugin works like you're actually running up a Gatsby, you're firing up a Gatsby demo site, trying to like implement this plugin, seeing use cases, questions that people might have about implementation and all of those like cool stuff. And mostly on testing out tutorials. When you write, you're trying to write a tutorial on how to use this With Gatsby, I would have to, like, you know, have to understand how this works, and then test it out, build it out and then write the documentation for that. So that's like how I work with it professionally. Um, and mostly just like educating people on it. 

### Obinna Ekwuno  7:13  
Personally, I have I have a personal sites that have I have been working my friend always laughs at me every time I mentioned my personal site, because I've been working on this site for like, for like, the past year. And the reason why I haven't really competed is that every time I feel like it's ready, I see some other thing I learned. I work on like, Oh, I want to add this to my site and then I just keep I keep test using it to test stuff. I do recent thing that is really getting me excited is Gatsby recipes. So like that's what I was like, oh, cool, how do I you know, just out of curiosity, how do I remove everything in the Gatsby config js and try to make try to see if I can make like a recipe out of like all of those things. So that's so that's how I use it personally, just I use my I use my site, as like a testing field for everything.

### Bryan Robinson  8:02  
Very cool. I've actually seen a lot recently about how your personal site should be your, like development garden. Like you shouldn't think of it as like a final final place for things that just you should be pruning it and planting new seeds and all sorts of stuff. It's a cool analogy.

### Obinna Ekwuno  8:18  
A good a good example would be this a colleague of mine, Josh. Josh writes a lot about his, um, his like, on this personal site and he adds like a bunch a lot of like, awesome features on that. And like I just whenever I think of my personal site, I'm like, I want I want my sites look like Josh is on. Because he just, you know, he works on like the cloud team, I got to be and then every new awesome feature that's coming up, he just uses a site to test it out. So yeah,

### Bryan Robinson  8:48  
So obviously you're working at Gatsby, but what what would you say kind of your jam in the Jamstack?What's your favorite service or product? Or maybe it's like a philosophy what what do you enjoy the most about the idea of the Jamstack

### Obinna Ekwuno  9:00  
I love that like the Jamsttack community is kind of like it because it's like relatively new, per se. It's like a place where people, you know, the entry level is like, it's not it's not so high. And like the community is really willing to like help people learn more about it because the community is actually just green. I think of like the the companies actually like leveraging of the Jamstack like Netlify, for example. It's like a company started in 2014. Gatsby gate became a company in 2018. Most, most of the technologies that we're using and stuff that we're still figuring out how do we want to make this like, for like, the, what's the code for like community, so I love that, like, the Jamstack community is really, um, it's really trying its best to educate and curious people along and make things simpler. 

### Obinna Ekwuno  9:46  
Um, my favorite service at this time and I don't mean to sound salesy, but then I really am in love with like Gatsby cloud, to be honest, because like, like, it's done like, I mean, the first time I heard about it, I thought it was I thought something else, like I don't know what it was, but like right now I'm just appreciating what's like what it does, we like build times and how it helps what's it called: developers like interface with content creators and all of that. I also really love Netlify, because like, I could host stuff without even without even understanding what CI and CD, like all of those DevOps, whatever related, you know, and I just really love that like, um, another thing I love about the Jamstack is like, the thing it does with so I can have different services coming to like a website's site without having to like worry about how those services run under the hood. Like I could host images on Cloudinary. do stuff like Gatsby, try new stuff for like, Auth0, you know, just what I need into where it is.

### Bryan Robinson  10:51  
So out curiosity, so obviously run the speed of Gatsby Cloud is kind of important. It's obviously tooled up to run Gatsby? But kind of how have you been feeling? That's a relatively new product. And I don't actually know a whole lot about it like, What? What's been kind of some of the biggest advantages that you've seen playing with it?

### Obinna Ekwuno  11:11  
Yeah, so, um, Gatsby cloud launched like last year. And like, we recently just shipped a new feature called incremental builds, which is like, really what excites me the most, because what incremental builds offices, so usually whenever you have to, like build, like a site, you know, static sites are fast, like relatively fast, depending on how much data you have, like there. It's, it's fast, but then gets me with incremental builds is trying to like push the limits of what we actually call fast. 

### Obinna Ekwuno  11:43  
So incremental builds, like what Gatsby does is also you've built a site, and then cool you build a site in like 22 seconds. That's all right. And then you want to make like a content change. So for example, you kind of do like a content change and then usually what will happen is that your site will be Build for every content change you make. But then what incremental builds offers is that for every content change, it really just compares, like the difference between the first build, and like the new edits that you've done. So I like to think of it in the react and the virtual DOM, um, play of how hot reloads of like, Oh, we measure what's what, what change versus what was, and then just build whatever changed. And that will reduce like, build time. 

### Obinna Ekwuno  12:25  
So you could have like, the first build is 22 seconds, the next build can be five seconds. And when you think obviously, like five, six pages, it's, it's, you know, it's cool, but then think of it in like 1000 pages, that that would save you like a lot of time and Gatsby also launched something will it build, which is like, a, like a benchmark site to see, to kind of know how many so if I had like 2000 pages on my on my sites, how long would it theoretically take to build this? So you can actually see that and then yeah, that's that's really wasteful. To me like, and it's awesome when you get the opportunity to walk for a product that you really like love that really just makes you happy. So yeah, definitely.

### Bryan Robinson  13:09  
Yeah. And that's like one of the one of the biggest naturally one of the biggest arguments, but one of the one of the strongest arguments against some, like the static site generation stuff is, well, you know, it's great for little toy sites. But when you get editor, enterprise sites with thousands of pages, it can take forever. But if it's incremental, and it's only generating one new page when you do that, that's beautiful.

### Obinna Ekwuno  13:29  
Exactly. Yeah. That's what makes me happy about that's what I love about the Jamstack. Like, we're always just trying to look for new ways to make things better. So when you so when you think when you think this cannot go past this level, boom, it's something else.

### Bryan Robinson  13:44  
Always kind of standing on the last iteration, and making it better for the for the developer to work with it but also, because it's so powerful and because like the Jamstack is so so quick for performance and all sorts of stuff ends up making the the end user happier, too. 

### Bryan Robinson  14:01  
So what's your what's your actual jam right now? What is what's in your headphones where you listen to or your favorite artists? what's what's going on there?

### Obinna Ekwuno  14:08  
So, um, um, cuz because like I write like a little poetry, I tend to listen to a lot of like, poets. Mostly I listened to poetry but like, also listen to rap because I like I call it conscious rap was kind of like those kind of rap songs where actually you kind of feel like you're in tune with the artists. And it's not just the beat that you're listening to. So currently, right now, I listen to a lot of Kota the Friend which is like he's he's like an independent artists out of New York. You know, he's rapping about, you know, trying to raise his son, you know, and all of like those really deep stuff and like I really resonate with him. I also listened to a lot of Fela - Fela Kuti, which, which for me, is is like education because like, cause Fela, Fela like comes from like, a place of What's it called, um, being African and being in Africa, so I'm over a more of a introspective person. So I like to like just listen to people that actually just take time to block out the noise. And like, put all of like all the noise aside and just really just be real with you. So that's so I listen to a lot of different fella could see Kendrick Lamar? Yeah, most of like, yeah, my, my music. My taste in music is actually just very random.

### Bryan Robinson  15:29  
Yeah, sure. No, that's me. I think everyone's got, you know, the the certain artists that they that they really like, and they can span multiple, multiple types of music. So I really appreciate like the idea that like, getting in tune with the artists because that's always that's always like a nice thing to be able to like hear someone that is is as introspective or as thoughtful as you are.

### Obinna Ekwuno  15:53  
Yeah. Thank you.

### Bryan Robinson  15:55  
Cool. So So is there anything that you would like to promote that you're doing anything you want get out to the gym. That community as a whole.

### Obinna Ekwuno  16:01  
Yeah, so I tried to like I try to like create like content because, um, because like I'm really curious so I just really just try to like put stuff together and just you know, I blog a lot on on LogRocket. And then also like I recently go into screencasting so I'm like doing all of that to egghead and I just make community resources because I feel like I really feel like as much as the information should be free as much as like you know, content creators actually need like some support but then yeah, that's it just just put out the content because like people because I love like the community really helped me while I was transitioning from being you know, solving a lot of math that I honestly didn't know that I think of it honestly didn't care about. You're just solving a lot of math and then moving towards like a computer science like background understanding abstract syntax tree all of those like awesome stuff like that. My my friends helped me like understand like, it was for my community resources. So I really just, you know, make resources on egghead basically any blog that would like allow me to, I used to write a lot on Scotch. That that was like the first place to actually like, wrote stuff on. Yeah.

### Bryan Robinson  17:12  
Cool. So as you're kind of transitioning from, from kind of written stuff to the screencasting a, how's that been for you and be? How did you learn? Like when you said, like, all these community resources were important. Did you read more? Or are you more of like a visual learner and followed like, screencasts like what you're doing now?

### Obinna Ekwuno  17:31  
Oh, so I'm transitioning from like, transitioning from the roots into like, screencasting. So writing was like, it comes natural to me. Because like, because like, I write a lot of forms. But then screencasting was something I was like what I did a lot of like, a lot of like, you know, iterations with Zac. Zac works at Egghead. Shout out to Zack because that really helped me because I I would do a video I did have like, oh no this. This is nice and I could say, Oh, no, because you know, people are watching this on your phones, and all of that. So, it was it was really frustrating. But then it got to the point where, you know, Zac, Zac had a lot of corrections for me. And I was like, ah, maybe this isn't for me. And then one night, I'm just laying down and I and I say to myself, you know, it really just boils down to how bad you really want to, like, do something to be honest. And then, you know, I just, I just go to did the recording once and sent it to Zac. And he was like, awesome. I was like, What? 

### Obinna Ekwuno  18:28  
So, so that and from there, like, I just, I have like, two videos, I don't know. And I have like, three more coming, you know, just really just looking for how to like, do that. And then I think the second question was, how did I? How was it for me learning to code? Yeah. So um, I first like I started off with like the under law. I did this under law training, where I can't remember I'm talking about my work, and then our learning community. So like, they really just go a lot of mentors and I told us Oh, you know, you're learning HTML today, I did a lot of like Google sponsored things on Udacity. And then at some point, like the visual, the visual learning wasn't really working for me because all I got was like, the perspective of people. And I wanted to, like, understand how it worked. So I, I, I started reading like documentation. Like even right now, like I'm learning I'm learning a bit of like view. So before going into like funding masters or trying to find like a course on Udemy I'm trying to get like documentation because I because as much as I don't think every documentation is that great like this, this this has been a really good experience like so I'm more of like, I like to read documentation and then get opinions, listen to podcasts, you know, talk to people all that so that's that's how I learn and and learnings are continuous for me. Because like, I don't I don't really feel like there's a place where you get to be like Oh, yes now and I I know it's all

### Bryan Robinson  20:01  
I know everything now!

### Obinna Ekwuno  20:02  
Yeah. Yeah.

### Bryan Robinson  20:05  
Nice. Well, as you said, like even with the technologies that we're all kind of playing with, there's always something new like, you know, react with hooks A few years ago, Gatsby now has recipes. Like there's always something new. 

### Obinna Ekwuno  20:16  
Before create react app, there was Webpack, configuring Webpack for like a react. I did I did that. And then I was like, No, I never went back again.

### Bryan Robinson  20:27  
Cool. Well, I appreciate you taking the time to talk with us today and kind of share your stories. And I hope you keep doing some amazing things at Gatsby and writing more amazing poetry and stuff.

### Obinna Ekwuno  20:36  
Thank you. Thank you so much for having me. Appreciate it.

### Bryan Robinson  20:40  
Thanks again to Obinna for the great conversation. And thanks to you our dear listeners for tuning in Week after week. Before we get to our sponsor, be sure to like heart star favorite or whatever in your podcast app of choice and spread the word about the amazing people doing awesome stuff in our community. 

### Bryan Robinson  20:58  
And now for our sponsor, if you listen to season you're probably aware of TakeShape by now. But as a reminder TakeShape is a content platform for the Jamstack. take shape has a headless content management system an easy to use GraphQL API, a static site generator and amazing new product called Mesh - a service that can tie together multiple API's into their handy GraphQL interface if you're doing anything with content on the Jamstack Be sure to check them out at take shape.io slash That's My Jamstack. 

### Bryan Robinson  21:27  
That's it for this week. Thanks again for listening. And we'll see you back here for the next awesome episode.

Transcribed by https://otter.ai

Intro/outtro music by [bensound.com](https://bensound.com)