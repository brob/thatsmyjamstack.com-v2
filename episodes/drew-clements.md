---
title: Drew Clements on performance, simplicity, and getting to the fun parts
date: '2021-01-05'
tags:
  - episode
  - season-2
audioFile: https://pinecast.com/listen/adf3bb7b-1006-4ca2-8958-43fb1a1e1ff5.mp3
description: This week, we have Drew Clements, a front end developer for Foster Commerce.
socialImage: /images/drew-clements.png
---

## Quick show notes

* Our Guest: [Drew Clements](https://twitter.com/drewclemcr8)
* What he'd like for you to see: [Protege.dev](https://protege.dev) - A job board for Junior devs
* His JAMstack Jams: The simplicity of the Jamstack that allows you to "get to the fun part"
* His Musical Jams: Fall Out Boy, Pop Punk from the late 90s, early aughts (you know, like the Tony Hawk Pro Skater 1 soundtrack!)

## Transcript
### Bryan Robinson  0:14  
Hello, everyone, welcome to another episode of That's My Jamstack, the podcast where we ask the time tested question, what's your jam and the jam stack? I'm your host, Bryan Robinson. And this week, we have Drew Clements, a front end developer for Foster Commerce.

### Bryan Robinson  0:39  
All right, Drew. Well, thanks for being on the show with us today. 

### Drew Clements  0:42  
Thank you for having me. 

### Bryan Robinson  0:44  
Awesome. So tell us a little bit about yourself. What do you do for work? What do you do for fun, that sort of thing? 

### Drew Clements  0:48  
Well, again, my name is Drew Clements. I'm a front end developer with Foster Commerce. We use view a lot on the front end. For fun. I like to play video games. I play guitar. I play paintball. Although I haven't played in a year or two since we've had our first kid.

### Bryan Robinson  1:06  
Yeah, I have I have many hobbies that I have that I have not done nearly as much in the past five years since I had since I had mine. So I totally get that. Yeah. So So what sorts of video games do you play video games?

### Drew Clements  1:18  
I mostly play a bunch of first person shooters. I'm really big on the latest Call of Duty right now. PUBG, all those fun things. 

### Bryan Robinson  1:26  
And then you say you're at foster commerce. So I assume that's, that's an e commerce agency or developer. What do you actually do there? 

### Drew Clements  1:35  
So we build e commerce solutions for a multitude of clients. Cool. And you say you say mostly in Vue nowadays. Yeah, we for the front end, we use view. And in the last few projects, we've started roping in graph QL. with it. 

### Bryan Robinson  1:51  
Okay, very cool. So So obviously, we're using some some semi Jamstack things, at least when it comes to Vue and GraphQL. But what would you say is kind of your entry point into the world of Jamstack? Where did you kind of get into it? 

### Drew Clements  2:04  
The entry point for me was when I wanted to probably like a bunch of other developers, I wanted to build myself a blog, because I told myself, if I built it, I would actually write.

### Drew Clements  2:14  
So when I was looking at, you know, different options for how to do that, I came across things like Gatsby in similar frameworks, I didn't really know much about it, I really just kind of dove in headfirst.

### Bryan Robinson  2:27  
Nice. And so so out of curiosity, you you did the technology, you learn the technology to do the thing, right to write the blog. Now I've been through three blogs before I successfully actually started writing, were you able to actually overcome that hurdle and write on the blog.

### Drew Clements  2:41  
I wrote two articles on the blog. That was about as far as I've made it here was here recently, I've been using the dev.to for some of my writing, but I'm actually in the process of rebuilding my blog, I'm not redesigning it. I've already gone down that rabbit hole. But I'm rebuilding it. So I'm gonna be able to use the dev.to platform, kind of as the CMS for my Jamstack Bog

### Bryan Robinson  3:09  
Very nicely, because they they at least there's an RSS feed. And there's probably some other stuff that you can get out of that right. 

### Drew Clements  3:14  
Oh, yeah. 

### Bryan Robinson  3:15  
Very cool. So so what what kind of technology brought you into the Jamstack? So you said you started researching blog platforms? I think you mentioned Gatsby. But you're also in Vue land. So what are you using nowadays? In terms of that? Or what technologies are you researching? Right now?

### Drew Clements  3:30  
I'm researching ways I can make Nuxt as Jamstack as possible. I really, I really liked the view framework. And Nuxt, I guess, I guess that's server side view. But there, there are some stuff, you can put some things you can do to it. To make it a little more Jamstack. Ease, I'm really trying to look into two ways I can do that. That's part of the research for rebuilding my blog site. It's how I can implement some of those things.

### Bryan Robinson  3:56  
Get it get a static as possible. Like it's as quick as possible, I think. Yeah, I think they're doing a lot of stuff right now around around static routes and stuff like that. So that should be that should be a good investment there.

### Drew Clements  4:06  
I think. Yeah, it's gonna be a lot of fun when I'm still in the kind of the reading and looking around phase I'm, I'm ready to jump into it that

### Bryan Robinson  4:14  
nice. So. So that's kind of personally how you're using the Jamstack. Are you bringing any of that back into your work in e commerce? Or are you primarily working on just a front end with kind of some stationary back ends in place?

### Drew Clements  4:27  
I haven't really had the chance to bring that into any of the professional products that we're working on. A lot of the ones they're just they're larger complex builds that I think we actually within let me backtrack that a little bit within the last week. Within the last week, we've discovered that one of the sites we're building would probably actually benefit from being a Jamstack site. But at this point that the deadlines to close for us

### Bryan Robinson  4:54  
to make that pivot. Yeah, my favorite thing, from what I worked at agencies is discovering a new technology. you're discovering a new a new way of doing something, and really wanting to use it on a client project and then realizing No, we have like, you know, three more weeks left in this project. Okay, quite do that now. So out of curiosity, what you know, without specifics what what kind of things with the Jamstack bring to that project? Is it about like performance, security, flexibility.

### Drew Clements  5:21  
In this case, it would be performance, it's the, there's not a lot of interactivity on the site, there's just a lot of content being generated from a CMS. So from, from a user's perspective, if we could just, you know, grab all that at build time, or whatever that process ends up being, and just generate the static assets of it and hand it to them rather than rather than, you know, there being the front end spa process of it. It would just, it would just give the users a whole lot better experience.

### Bryan Robinson  5:51  
Yeah. And I feel I feel like probably one of the one of the biggest sectors in the web industry that could do well to adopt Jamstack. is e commerce. I feel like some of the tooling isn't quite there yet. Like there are Jamstack type tools for e commerce, but they all feel like they lag behind the the bigger players.

### Drew Clements  6:10  
Yeah, that's, that's one of the things we've been seeing is that it'll be like a nine out of 10 thing like, it has nine of the things we really would like to have. But the 10th one that it's missing, is the one that we absolutely need. Yeah.

### Bryan Robinson  6:24  
I also feel that not just from a Jamstack perspective, but oftentimes just just doing client work like that one thing that we have to have can't use x, y or z framework.

### Drew Clements  6:33  
Yeah. Cool. So

### Bryan Robinson  6:34  
what would you say is your as your current kind of jam in the Jamstack. So obviously, using view or and playing with Nuxt. But what what kind of service or product or philosophy is really keeping you engaged in the way the Jamstack works?

### Drew Clements  6:49  
For me, I would have to say, the the simplicity, or I guess, relative simplicity of the Jamstack philosophy. I remember when I was first starting out, and I wanted to build my own blog. And like, kind of when I was just starting to get like a confident grasp on the front end. I was like, man, I still have to learn all of this back end technologies to actually build something. But then, you know, when I found Gatsby, and I think I looked at Jekyll and Hugo, a couple of other things like that, you know, that just kind of discovered that I could build stuff without having to become a full fledged full stack developer. And maybe part of that was even true before the Jamstack came about. But the Jamstack was, what kind of opened my eyes to that.

### Bryan Robinson  7:35  
Yeah. And there's so many services out there that make it so that you like, even if you just had a static site generator, like, like you mentioned, with Hugo, with Jekyll, you can produce a really nice site. But then if you want to add additional functionality, there's just, there's so many ways to do it without having to, it's gonna sound bad, but without having to learn that like extra piece of technology that the back end requires you want a database, you can just push schema less data to something like fauna DB or something like that. You can just push it out there and have have a cool back end with no, no real effort.

### Drew Clements  8:04  
Yeah. And I was never against learning the backend technologies. I was just so anxious to get something out there that I wanted to do and as quick as possible in it. At that point, it was like, it was something else I'd have to do before I could do the fun part. And I was just really anxious to get to the fun part.

### Bryan Robinson  8:20  
Yeah, definitely. And I mean, myself, being a front end developer in general, I remember, had a portfolio site. This was years and years ago, now that I happen to know a little bit about Python and Django. And so I wrote it in Django, which is, you know, a Python framework. And it works nicely. And it was a learning experience. And then a year later, I needed to update it, I realized that whatever I'd done a year before, had made it so just wasn't going to work. If I push the code live. I was like, oh, okay, I, I can't do anything without breaking both my CMS and breaking my live site. Oh, there's this static thing. I can just like, I think like, immediately after that I rewrote my portfolio in HTML and CSS. Like, I didn't even have a static site generator. It's like, I can't have this happen again. Yeah. But yeah. And then kind of progressing into these other tools that allow that just allow front end developers to flourish? I think, hmm. 

### Drew Clements  9:13  
Yeah, I think the the first iteration of my, of my blog was it was statically generated. And then the the content was just static within it. It wasn't coming from CMS. But then after, you know, I've learned a little bit in that first part of the process. So then when I got all developers do when I rebuilt it again, the second time I integrated the, I think I'm using the Netlify CMS into it. And then you know, part three, that's going to be coming out sometime, probably not before the end of the year is going to have the dev.to integration into it. So it's kind of has been like a building process the entire time. Always add, add one more thing to it, like as I go,

### Bryan Robinson  9:56  
I think that's that's such a great way of getting into things like listening That and realizing that was kind of my process into the Jamstack to where I was like, Alright, I need a static static content, I can do that, Okay, I'm gonna use a static site generator and my content will be markdown. No problem, okay. Netlify, CMS allows me to have a CMS that deals with my markdown beautiful, oh, there are these API based things that I can do even better. And so like, I feel like you just you pick up a new piece of technology every step along the way, until you get something that really is almost like, you could give that to a client and they'd be perfectly happy with it.

### Drew Clements  10:30  
Yeah, absolutely. That was, the only reason I'm considering going to the dev to thing is just so I can, you know, write once publish in both. Right now, if I want to write it. If I want it to be on my dev account and my blog, I have to either copy and paste or write it twice. So this is, I guess, kind of a, an automation feature.

### Bryan Robinson  10:55  
Yeah. Well, and in fact, like they even have some automation, but it doesn't fully work. So like my RSS feed goes into dev dot two. But I still have to touch every every article, I still have to go back and like, Oh, this syntax highlighting didn't work, or, oh, this image is pulling my version of the image, I need to upload it to dev dot two for my own bandwidth. And yeah, if I wrote it in dev dot two, and then brought it to my site that would that would automate most of the problems away I think.

### Drew Clements  11:22  
Yeah, that's, that's the part I'm really excited to get to get into.

### Bryan Robinson  11:25  
authoring in one place is definitely the way to go.

### Drew Clements  11:28  
Yeah.

### Bryan Robinson  11:29  
Cool. So let's talk a little bit about music right now. So what is your actual real life jam? What's your favorite song or musician? What's in your earphones?

### Drew Clements  11:36  
It rotates fairly often. Like I have a huge Spotify playlist that keeps me pretty satiated throughout the day. And that that covers anything from like, you know, Fall Out Boy pop punk to like some really heavy metal stuff. But you're here lately, I've been on like a late 90s, early aughts, skate punk kick. So I've been listening to a lot a lot of Goldfinger the mighty mighty bosstones XSR 71. Kind of like the Tony Hawk Pro Skater one soundtrack you chalk it up to that

### Bryan Robinson  12:08  
that is that is pretty much the the perfect analogy for my my my late teens was Tony on the Tony Hawk video game soundtrack because that was that was very energizing. So listen to that on Spotify and then whatever, like the Spotify automation AI brings your way.

### Drew Clements  12:26  
Yeah, pretty much do you

### Bryan Robinson  12:28  
find Do you find that certain types of music because because you just listed out some pretty varied styles there from like, you know, heavy metal to you know, ska and punk from the from the late 90s. Do you find that some of the music does better at various things for you? Like do you do you focus better with like, hardcore metal? Or do you focus better with with ska or punk?

### Drew Clements  12:51  
I think it's kind of a situational thing. So like I noticed in the morning, I'll usually start out with kind of more of the in the punk mode or sometimes out there on like some lo fi hip hop when I'm getting started in the morning. Then like if I'm like, if I'm like really focused and in the zone, like out there on some metal and it just, you know, blinders on heads down.

### Bryan Robinson  13:13  
And one thing I'll give I'll give you a warning about actually, so I just discovered this I use I use amazon music for mine, but I share it with you know, with my entire family and when you go to their like recommendations and all of a sudden it goes from from something like some video game music or some some upbeat you know, hip hop and then all sudden you're listening to Daniel Tiger and you don't know how that happened happened. It happens when you have when you have children, that happens pretty easily.

### Drew Clements  13:40  
Yeah, that that happens to me, I have had that one playlist that I usually go to. But they Spotify does has kind of like a recommended listening based off of your, you know, previous history. So I have gotten hit with some Rain rain go away.

### Bryan Robinson  13:56  
Every now and then. Perfect. Yep. Yeah. So Well, is there anything that you would like to kind of promote that you're doing that you want to get out to the Jamstack community? Anything that is that is coming coming our way from you?

### Drew Clements  14:08  
Yeah, so it's it's not Jamstack yet, but it's it's coming down the pipe. Mima co founder. We've been building a site called protege dev since March of this year. And really, it's a it's a remote job board for junior developers. It's right now right now. It's just a create react app. But in the future, we're going to be moving to either either next or Gatsby we haven't really decided yet. It's a it's a remote job board. But we are ideas for it to be more than just a job board. We're not we're not sure how we're going to do this yet. But we want it to be a platform that also champions the candidates we're trying to get hired. So like I said, we're not sure if that's going to be like content, or maybe a podcast or something right. Right now it's open source so people can contribute to it. And our idea behind that was that if a company comes here to post a listing, they can check out the contributors page and see, oh, I can hire this person, they've actually helped build this platform I'm posting the job on. So we still have some some ideas of how to shake that out. But

### Bryan Robinson  15:17  
one of the hardest things for juniors to kind of get going is that kind of idea that they've got a portfolio outside of like, test projects. So like, Oh, I helped implement or fix this bug on project dev like that's, that's a really cool way of helping them get get into things like Oh, and by the way, that means that I know how to use GitHub. And oh, by the way, it means I know these technologies. I think that's a really cool way of resume building for those juniors as well.

### Drew Clements  15:43  
Yeah. And we have, so we have react on the front end, tailwind for styling, and then it's Firebase on the back end. So and I think, I think last I checked, we had not counting me, we had 22 contributors, maybe? Well, you know, some of those are accessibility fixes where they're, you know, just adjusting some contrast ratios. But then there was one where a contributor came in and built some GitHub actions out for us. That kind of automates part of our processes for pull requests and things like that. So anyone can really jump in. And it's really kind of free rein anyone could jump in and touch whatever part of the project they wanted to.

### Bryan Robinson  16:22  
So yeah, that's I think that's a really worthwhile project, I think that there needs to be, especially in the remote world, like more ways for junior devs to find to find work, because back in the day, it was like, you could sit next to a to a mid or senior level Dev and learn lots of things that you needed to. But a company that is remote, needs to have a lot of things in place to make sure that like, boosting up their juniors is a priority. This whole project started out because at the beginning of COVID,

### Drew Clements  16:51  
I lost both of my jobs. And I had the protege out of domain. I knew the situation I was in, I would look down the job boards and see senior senior senior tech lead CTO, all these jobs that I didn't feel I was qualified to apply for. So I had a whole lot a whole lot of newfound time. So I just started throwing it together and pretty pretty early on my co founder Andy he found he found the project through Twitter. And I think I think it was like a Wednesday he said, Hey, I'd like to help contribute. And then by like Saturday, he had built like the entire form process for hosting a job to at first it was originally just going to be like a I was hoping it would turn into something but at the same time, if it didn't, it was still something I put I could put on my portfolio. Yeah, but then he came in like full sin. So I was like, Alright, here we go. The thing.

### Bryan Robinson  17:43  
Gonna, it's gonna completely spin up at that point. Yeah, very cool. Yeah, there's definitely a lot of people in that situation too. Because, you know, they say, you know, it's fine to like, apply for jobs that are like a little bit beyond your reach. But if you're a junior, and all you see are seniors and yeah, like, like, Director level CTO level. That's a couple a couple steps beyond what you're willing to maybe put yourself out there for?

### Drew Clements  18:05  
Yeah.

### Bryan Robinson  18:06  
All right. Well, very cool. Thank you so much for being on the podcast with us today. And I hope you keep doing amazing things both in e commerce land but also with, with Project Dev. That sounds like a really cool project.

### Drew Clements  18:17  
Awesome. Thank you for having me.

### Bryan Robinson  18:20  
Thanks again to drew and thanks to everyone out there listening to each new episode. If you enjoyed the podcast, be sure to leave a review or rating in your podcast app of choice. Until next time, keep doing amazing things on the web and keep things jammy

Transcribed by https://otter.ai


Intro/outtro music by [bensound.com](https://bensound.com)