---
title: REMIX - James Q. Quick on Auth, working on what makes your code special, and Jamstack services
date: '2020-11-08'
tags:
  - episode
  - season-2
  - remix
audioFile: https://pinecast.com/listen/17881094-1c3b-4e23-bfba-b8f40ebf6ab8.mp3
description: This week we have our first ever. That's My Jamstack remix. We talked to today's guest about a year ago - Say hello to James Quick
socialImage: /images/james-quick-remix.png
---

## Quick show notes

* Our Guest: [James Q. Quick](https://twitter.com/jamesqquick)
* What he'd like for you to see:  [Developer's Guide to YouTube](https://learn.jamesqquick.com/developers-guide-to-starting-a-youtube-channel)
* His JAMstack Jams: [Next.js](https://nextjs.org) | [FaunaDB](https://fauna.com)
* His Musical Jams: [Rod Wave](https://www.youtube.com/channel/UCenjunBhBhvKjfDAESnoppw) | [Jason Aldean](https://www.jasonaldean.com/) 

## This week's sponsor: Auth0

This week, we've got [Auth0](https://auth0.com) as a sponsor. While their prowess at authentication is important, they're also releasing a ton of new tutorials and courses on [their YouTube channel](https://a0.to/tmjyt), including a free course on building a full-stack Jamstack app with Next.js.

## Transcript
### Bryan Robinson 0:12  
Hey, everyone, welcome to another episode of That's My Jamstack the podcast where we ask the time honored question, what is your jam in the Jamstack. I'm your host, Bryan Robinson. And this week we have our first ever. That's My Jamstack remix. We talked to today's guest about a year ago. And we're bringing him back to catch up. 

### Bryan Robinson 0:32  
When we last met James, he was a software architect at FedEx doing Jamstack things on the side. Now James is a Developer Advocate Auth0 bringing auth flows and Jamstack education to developers everywhere. 

### Bryan Robinson 0:44  
Before we dive into the episode, though, I want to thank this week's sponsor who happens to also be Auth0. We'll talk more about their amazing educational content at the end of the episode. But if you're curious about that, Jamstack and auth education, head on over a0.to/tmjyt.

### Bryan Robinson 1:17  
All right, James. Well, thanks a lot for coming on the show again.

### James Quick  1:20  
Yeah, yeah, I am super excited to be here. I know, we haven't gotten to see each other in a long time now that we're not in the same city. So at least we can hang out and do a podcast together. I feel like it's probably the best alternative.

### Bryan Robinson 1:31  
Exactly. And for those listening that don't know, James not used to both live in Memphis, Tennessee. He's still down there. But I've since moved to the to the frosty north of the US, Michigan. Yeah.

### James Quick  1:43  
I was just gonna say like, I miss our, like, kind of planning meetings, we would have like every month, but just kind of checking in and see what each other was working on and bounce ideas back and forth.

### Bryan Robinson 1:51  
Yeah. And that also would have been different nowadays. Anyway, cuz we used to do that at coffee shops. And I'm not sure we would have any more

### James Quick  1:58  
zoom for the when I guess.

### Bryan Robinson 2:00  
Exactly. Which also means that we can do that, you know, anytime.

### James Quick  2:03  
Yes, that is.

### Bryan Robinson 2:04  
So So longtime listeners will be familiar with you from the old episode. This is a remix episode where we're catching up with you. So let's catch up. So last time you were on. You were jamming, I would say in your spare time. But you were working as a software engineer at FedEx. So I know a lot has changed for you. So let's catch up. What are you doing now? In terms of work and on the side and all that good stuff?

### James Quick  2:25  
Yeah. So I think when I went on last time, was in October, November of last year, so it's been eight or nine months. But shortly after that is when I decided to leave FedEx. And I really was I just wanted to get more into dev really type stuff. So doing video content, speaking at conferences, and just joining like a an exciting, like younger startup II feel to a company. So anyway, all of that kind of came to fruition for me to join Auth0 back in January of this year. And I think I did, I did one trip and two conferences, and everything stopped. So we had a big transition to we talked a lot about this personally, but doing live streams on twitch and creating more YouTube content and that sort of stuff. So it's been a little bit of a transition. But it's been that way for everybody. I think. So anyway, yeah. I have been working for SEO now for however long it's been seven months. And it's been going really well.

### Bryan Robinson 3:24  
Nice. And so it also you said, you know, you're you're you're getting more into dev rally type stuff. So what do you do as a dev REL at all? Zero?

### James Quick  3:31  
Yeah. So if people are familiar with the idea of developer advocates, in general, it's, or my definition is really just like earning trust and respect in the community. And that can take shape and a lot of or take form. And a lot of different shapes take shape in a lot of different forms. There's a lot of it would be like speaking at conferences. So again, that's kind of on hold for the time being at least in person, it could be being at meetups in person, again, that's on hold, or at least virtually for the time being. And then in addition to that, is creating content that people enjoy, we are specifically looking to grow our YouTube channel and Twitch channels, get an ambassador program that Sam julene on my team is working on to help get some people to kind of represent our brand and help them kind of grow some of their skills and public speaking and content creation and that sort of stuff, too. So yeah, that's that's the kind of activities that we're doing. And I've done lots of virtual events and conferences and stuff, which has been interesting, but I would definitely love to be back in person sometime soon.

### Bryan Robinson 4:30  
Yeah, definitely. Like like the the virtual stuff can be a lot of fun and you can reach a lot of people but nothing quite beats. The random interactions you get when you're at an in person event.

### James Quick  4:40  
I'm sorry, the hallway track is what exactly what a lot of people refer to and it is it is a very powerful, powerful and enjoying or enjoy mint fun track.

### Bryan Robinson 4:52  
Yeah, exactly. It's, it's just it's nice to hang out and just have have just random asides with people. So So Let's talk a little bit about the Jamstack at all zero also like just how you're utilizing Jamstack philosophies now professionally and personally like in the in the first episode, you're primarily doing it in your spare time. FedEx not having done a whole lot in that world yet. But what what's different? How's the house Auth0 pursuing had the Jamstack? And how are you changed in the way that you pursue it personally now?

### James Quick  5:25  
Yeah, I think on the personal side, it's, it's kind of similar, although I've done a lot more. So still still running my youtube channel doing a video a week, and a lot of the recently has revolved around the Jamstack. So I've done a Jamstack Crash Course, actually two Jamstack crash courses, I've done things on serverless functions, getting into next js, which is pretty exciting. For me, I've been kind of putting that off for a long time, because I'd use Gatsby and serverless, functions and Netlify. Now with that stuff kind of all tied together. And actually, this is really interesting. So that personal stuff is not that different. Although I've got more experience, and I'm doing more content, it's still the same, like I'm working on it on my in my spare time. And then for Auth0, when I started in January, we had kind of some targeted audiences that we really wanted to get more engaged in. And we had been really engaged in the angular communities, I think we had two or three people at the time that were Angular experts, I guess, like gdds, on the angular side, I guess, is what what that is. And so they had like really strong relationships there. But we didn't have relationships, and like react and view and and really the Jamstack in general. And so with that being mentioned, to me as focuses, it was just kind of an opportunity for me to really lean into it. So again, like creating content around that I just released a next j. s and austero video on the SEO channel on YouTube. And that's a lot of where our conversations, lead. And the activities and things that we do is like in this Jamstack world that is is different than what a lot of people are used to, how do we do authentication. And that's been kind of fun to dive in and create some demos, and explore with these different technologies and the Jamstack and then tie that back to zero and kind of figure out how these pieces fit together.

### Bryan Robinson 7:13  
Yeah, definitely. I feel like there's there's a perception in the world. And obviously, there's been hot drama in the in the Jamstack world recently with, with WordPress and all that good stuff. But there's, there's this feeling that the Jamstack has certain limitations to it. Now, those of us who are in in the world and using it regularly know that we can do most things with it. But one of those big limitations would be around the personalization, the authentication area. And it seems like all zero can be a big player and circumventing the issues that might come with statically generated sites.

### James Quick  7:47  
Yeah. And I think this is where the idea of static statically generated sites or static sites, it's it's that misnomer, right that, like you said, people that aren't like intimately involved, think of it as being just literally like, just HTML, right? But we forget that Jamstack includes JavaScript, so we can basically do anything in our JavaScript that we want. And that's kind of where all zero is fitting in here, we've done some work with integrating all zero into Gatsby. And a year or so ago, we actually had a guide. And this is an approach that some people still take, where you can have certain pieces, certain routes, for example, inside of Gatsby or other frameworks that are protected. And you do something differently with those where you kind of like override the built in routing in Gatsby. And then you add your logic to those specific routes. Everything else just kind of acts as is. But the interesting thing with Gatsby is it has this hydration aspect to it, where they I mean, you can do whatever you want, right? Like with Gatsby, you think of them and you hear them as a static site generator. But it's really I forget exactly what phrasing they prefer to go with. But with the hydration process and react, you can do whatever you want with a regular react application. And so we've started to create some content around just like tying in all zero into Gatsby. And you can, there's not really much of a limitation there. Like there's a couple of very subtle tweaks that you have to do to incorporate that into Gatsby versus just regular react. But like after you do those couple of things, it works just the same as it would. And we have a new react SDK is a new, it's been a few months now. But we have the new react SDK. And to me, it just makes it so easy, so easy to incorporate into your app, and then you get access to these hooks. So you're using modern react, you're getting all the things that you need about the user, and you can access it in your application, wherever you need it.

### Bryan Robinson 9:42  
Nice. And so so it seems to me like like that's working in Gatsby kind of integrated with Gatsby about a year ago. And then you can move in, like you said, you're moving into the next world a little bit where you've got like API routes you can have you can have the hybrid model with next where you can have like some routes being generated statically In some, some fully directly, like server side, do you see like that hybrid model catching on at all? Or is it or do you see like static is still being a pretty big way of going in the in the Jamstack? world?

### James Quick  10:14  
Yeah, I, for me, I'm kind of all about next j s right now, I think ultimately it gives you the flexibility to do both, right. So like, if if I decided next j, s was going to be my framework going forward, there, I could do the same thing I could accomplish in Gatsby with next j. s. And I would argue, like I've done a YouTube video on the comparison of these two recently, like Gatsby is more optimized in terms of its ecosystem, and its documentation for static just because that's kind of where we're at focus. Next, JS can do those things. They're just maybe less like plugins. So you may have to figure out a little bit more to yourself, but you can do it all. So for me, I love the flexibility of next js, I love that it still fits into the Jamstack. Because your API routes, even though you kind of you can basically treat them as if it's like a node application like it looks, it looks almost the same as what you do if you built a node app from scratch. But the output of an X JS app or the deployment of it is the it's just serverless functions. And you can obviously deploy to Vercel, which is where those are made by the same company, right? So that's kind of an optimized process. But you can also host in, in Netlify, and other places as well. I don't know, I just I love I like the idea of being able to have more of the traditional web app in the sense that like you have server side rendering, but it's still in the Jamstack, and still works really well with all the things that we expect out of a Jamstack site.

### Bryan Robinson 11:34  
You just spoke pretty passionately about about next j s. So I'm so so what would you say that your jam the jam stack is right now. And I think if I went back and listened directly to to the old episode, I think we're talking to Gatsby a decent bit back then. Yeah. But what's your favorite service right now? Or maybe philosophy framework? What makes you love the Jamstack? Now as opposed to 10 months ago?

### James Quick  11:57  
Yeah, next js is definitely one that's been kind of an eye opener for me. So like you said, I'm talking passionately about it, I've been excited about it, I actually just recorded a two hour course that's going to be on the auth0 YouTube channel. So people go and check that out. And the next next couple of days or week at the very most, and it's it is next JS air table all zero until one CSS. So next, as far as flexibility is amazing. I have used air table in a lot of my demos since then for I mean, it's a pretty powerful database. But it has such a great SDK to work with. And it's really quick to set up and it just looks great. So I've done that with data a lot recently, I've also used fauna dB, a good amount recently as another alternative database for the Jamstack. And they really advertise themselves as being optimized and targeted at the Jamstack. And they've got this, this graph qL layer that they basically like set up for you. And I've never written a graph qL server from scratch. So I don't actually know like what it's like to do that I've just used tools that take care of it for me. And fauna, db is one of them. And there's a couple of other services. One is Cloudinary that I've like started looking at since since last November. And you and I are both media developer experts, which is indeed not necessarily a Cloudinary pitch, but it is sponsored by Cloudinary. And I've really enjoyed diving into learning more about media and doing transformations and the storage and things like that in Cloudinary. So I think ultimately, it comes down to there's like the Jamstack is so cool, because there's now systems out there to do like every aspect of features that you might be looking for in an application. And some people might look at that and and say like, well, that may be more expensive. Or I could just build it myself. And that's true. But the exciting thing for me again, is like I don't have to build it all. And if I want to build an application, I don't have to worry about all the specific details in these different categories. Like those things can be taken care of, for me through these third party services.

### Bryan Robinson 14:00  
Yeah, I think I had a conversation the other day, I don't remember who with but, you know, it's like you can you certainly can build all these things from scratch on your own server. But Why the hell would you want to like and I think I was actually having this conversation specifically around auth zero, right, like I it was, I could build an entire auth workflow. Like it wouldn't be that I would say it wouldn't be that hard. security's always hard but like, I could do that. And I could use like, you know, user databases and stuff like that. But like, why would I want to create that flow from scratch? Or why would I want to set up image transformations from scratch? Or why would I want to even go in and create these images from scratch at these different sizes? Like That all sounds like a headache to me? Absolutely.

### James Quick  14:53  
Yeah, that's that's one of the big conversations for us. The phrase that we use is build versus buy. And if you look at authentications Specifically, like, yeah, I've done it before. And like I followed in West bosses node course back in the day, like you do all the authentication stuff in node, and you do JW, T's JSON Web tokens, and you send it back and forth, and it works really well. But the thing that, that you forget, or you need to at least consider is like, Alright, basic authentication works. It's not too bad. It's still work, but it's not too bad. But then you get into like, Alright, what features Do I need on top of that, and something like something like a password reset, that's it's not a simple flow to do. I think westballz actually covers it in that course. But there's logic to that, right, because you have to track like, you send them a special code, and you store that in the database, and you have to have an expiry time on it, you have to check all that stuff. It's doable, but it's getting a little more complicated. And then you get into like, Alright, what if I want to include other social providers, I want to do Twitter and GitHub and Google and that sort of stuff. And you can go through their documentation, and you can find a way to put it together. But you're getting more difficult than you think about like multi factor authentication, and like password, list, login, and all these things. And like, that's where you start to realize like, and this may not be worth my time to build all of these other features, as well as stay on top of like, all the security threats that are that are out there. I mean, those things change on a daily basis. And if you're a person or a small team, it's really hard to make sure that you're really really taking care of your applications at all times. So that's when you start to realize like, Alright, maybe it is worth just like having someone else take care of that part for me.

### Bryan Robinson 16:30  
And it was actually in a conversation on an episode of That's My Jamstack, leading up to this one, about like, the weakest point in an application isn't the code necessarily, it isn't a specific feature. It's kind of the developer writing it. And so if you are not a security expert, or you are not a media expert, or you are not a x feature expert, and you write that you then become kind of the weakest link in your codebase. And why not defer to an expert in that field, and write the feature that you care about not the feature that you have to have to make it work? Absolutely,

### James Quick  17:10  
there's an interesting perspective on that, too, of like, who becomes the expert, because I've been in a situation where, you know, we are tasked with coming up with a solution to something and maybe it's authentication, maybe it's a million different things. And developers that aren't experts in that at companies where they have, they're not super siloed. So they kind of work on whatever needs to be done, or figure out what needs to be done. They're not experts, right. But if they are the people who then start to build something out, and they're doing the research, and they're trying to figure it out, internally, they become the experts. And that's probably not the person that you actually want to be that expert, because that person, and I've been in this situation, I'm watching YouTube videos, and I'm like taking courses and reading articles to figure it out. But that's not my area of expertise. I'm just trying to fit these pieces together. So like the idea of like, who is the expert, there's the actual expert. And then there's the person internally that people look to you as the expert. And that person only knows so much. Yep, the

### Bryan Robinson 18:06  
organizational expert, and then it's the, it's the bus problem, right, what with that person gets hit by a bus or, you know, leaves the company like, then who becomes the expert, then it's kind of you keep adding links to this chain, and they are progressively weaker links.

### James Quick  18:21  
I think we talked a lot about the bus problem at first. But it's still a huge problem, or it was when I was there, of there's still only so much knowledge that you can pass around to people without taking like really dedicated time to get them deep into it.

### Bryan Robinson 18:37  
When that's I think one of the things that I personally love about the Jamstack, and a lot of ways is that if you are a front end developer, and you take a look at a code base that is built decently with Jamstack philosophies, you can probably reason about it, as opposed to if you come in, and there's a large scale of Node ecosystem, like at some new company that you're working for, it's gonna take you much longer than if you're like, Alright, well, I know, I know, react. So therefore this company using next I'm good to go to, like start reasoning about what they're doing. Oh, you know, I know how to use API's, therefore, I can kind of trace how the data is flowing through, you know, from fauna, db, or from, you know, some provider where that data is coming from, because it's all in the end, some amount of JavaScript and as long as it hasn't been written to spaghetti ish. You should be able to reason about it in some way without, without a lot of institutional knowledge, which is what the bus problem is kind of all about. Yeah.

### James Quick  19:41  
And that's where, again, like the idea of having these services that take care of that stuff for you. Now, your knowledge is all the stuff that's most important to your business, right like you. Like the authentication piece is not special to your business. It's just a requirement for your business to be successful. The media management Is our transformations or optimizations on images,

### Bryan Robinson 20:03  
digital asset management,

### James Quick  20:05  
yes. Just buzzwords all around. But your digital assets, man, asset management, is again, probably not something that's like that's your core logic. It's just a piece of your application. So now, you spend more time focusing on not only building but like internalizing and having the knowledge around the stuff that's important to you and your application. 

### Bryan Robinson 20:20
What makes your application your business, your website, special work on that don't work on the things that everyone has, because they have to have it.

### James Quick 20:31  
Yeah. Nice.

### Bryan Robinson 20:32  
So let's pivot away from technology. And to be honest, I didn't make it all the way through the episode from from last October. I don't really remember what you said about your musical choices back then. But what's your actual musical jam right now? What are you listening to what gets you pumped one is still the same. 

### James Quick  20:48  
Back in November, or whenever that was, it was Jason aldine. Country artists, and I was listening to him on repeat and like now I'm listening to like, my wife has a pretty good station on just like modern country, which we listen to a lot. But I also still listen to a lot of Jason aldine. And then I've also been listening to for several months now and artists called rod wave. And this is a rap artist. So if you're into rap, you check it out. If you're not into rap, you probably won't enjoy it. My tastes are kind of all over the place. So from Jason Aldean on the country side to rod wave on the rap side is what I've been listening to a lot recently.

### Bryan Robinson 21:26  
Nice, weird question

### James Quick  21:29  
all about the weird question.

### Bryan Robinson 21:30  
Yeah. Cuz like I'm with you, in a lot of ways on like, what I listened to a year ago is not drastically different from what I listen to today. Do you find that that's just kind of how you live your life? Or has that changed? And have you become less adventurous over the years with your musical tastes?

### James Quick  21:51  
Yeah, I don't know. I don't know if I've become less adventurous. I think I've always gone through cycles of like finding, finding an album of some sort that I like, like in the back in the day, it might have been like a mix CD that I made myself. And that was the thing that I listened to. But I think I've always kind of like gone through these phases of who I listened to. And some of it, I actually, like I mentioned, my wife having really good playlists, like she's much better at listening to Pandora, and then paying attention to the random stuff that she hears. And then now she's got that many more things that she knows of and wants to listen to. I'm not as good at being random. And I think that's, I think I've just kind of been that way. So I am, I am always looking for trying to find new music in theory, but it's also like, I just enjoy the stuff that I enjoy. And sometimes I just keep running with that instead of venturing out of finding new things.

### Bryan Robinson 22:40  
I just find that as, as I age, I think about these things a little bit more like, Am I just set in my ways? And while I listen to the same four albums over and over again for the rest of my life?

### James Quick  22:48  
I don't know. And I mean, that may not be a bad thing. It's all about what you enjoy. Right?

### Bryan Robinson 22:53  
True. Yeah, whatever makes you live your best life. Nice. So what would you like to promote and get out to the Jamstack? world before we let everyone go? What what are you doing right now that you want to share out there?

### James Quick  23:04  
Yeah, I am. So I don't know when this will be released. And it may be this podcast may be released by the time or my what I'm about to talk about might be released by the time the podcast comes out. But I'm working on my very first ebook as part of a two week product challenge where you create a product in two weeks. And that ebook is the Developer's Guide to creating or starting a YouTube channel. And it's all about like, how do you get started and like, here's tips and tricks and software and hardware and things that you can use, but also what are the benefits and why you should do that as a developer. So by the time you listen to this, this will probably already be deployed. So you can check out YouTube for developers COMM And check out that ebook there. And then just in general, still doing lots of stuff on my YouTube channel at James q quick. And then also on the SEO side, I'm really starting to give a big focus to continuing live streams, but also did a lot more video content on the Osceola YouTube channel. So au th zero and go and check it out. We probably by the time this podcast comes out this crash course or mini course with Nexus air table, or zero and tailwind, CSS and other hot buzzword will be out. And I think that one is pretty cool because it walks through like the entire authentication workflow and the Jamstack and tying these technologies together.

### Bryan Robinson 24:19  
Nice. So I'll have all those links in the show notes. I do want to take a half a second and talk about the the E book right because you've been doing video content. For a long time. I've been doing it for a decent bit too. And I would say that if you watch some of my first episodes, I'm sure you probably would agree with some of your first episodes of, you know, tutorials in video form. The differences between that and what you and I are both doing how are pretty drastically different. So would you say that hopeful that you're hoping maybe the ebook can help people skip over some of our earlier hurdles?

### James Quick  24:54  
Absolutely. Yeah. And I think that's definitely a part of it. I want to say like it's not enough. necessarily going to be a focus throughout the entirety of the book. But I think one of the big focuses is just to try to convince people that like, yeah, you're nervous about it. And you're worried about like, what if people judge me? What if I get negative comments? What if nobody watches it, but I really want to encourage people, like, none of that shit matters, like, just do your first one and see what happens. And like, if you didn't enjoy it, and if it didn't work out, well, that's fine. But like, try it. Because there are these, there's so many benefits to it, like it goes on your resume, it gives you experience with speaking, there are all these other benefits that come along with it that, like I just, I hope that I'm able to encourage some people to create their first video and what happens from there. Like, hopefully, some of the tips help too. But just getting that first video is such a big accomplishment for people. And I kind of

### Bryan Robinson 25:41  
find find it's very similar with blogging, like blogging is the super low barrier to entry thing. But like, if you struggle with an issue, and figure out how to fix that issue, that means that there's at least at least one other person in the world that has struggled with that issue and would find whatever content you create about it, probably insanely helpful.

### James Quick  26:04  
Absolutely, yeah, I've always, always been a big fan of like, no matter, no matter how little you think, you know, whatever or how small something is that you learn, like somebody else, like you said, doesn't know that thing. So now you're providing the resource for them. But also, you're providing the resource for you. Like I can't tell you from the articles and videos that I've done, how many times I've gone back in search for that thing, and I find my video or article and that just goes to show you like you may know something now you might forget it. Now you need a reference, but also like people are going to have that same issue. So there's always an audience now you have to kind of figure out how to get it in front of them. But even if people don't see it, it could be a useful thing for you.

### Bryan Robinson 26:42  
And I'm also going to give you one one more shout out that you didn't mention. James James also has a Discord server, where there's a bunch of developers all kind of in there learning. I'm a member of the discord server, so you can always come chat with me and there's nothing else but uh, but no, it's an active little community. And I've enjoyed seeing it grow over the past few months.

### James Quick  27:00  
That's been a really cool thing. I didn't really know what to expect in starting a Discord. I didn't know how it would grow. I didn't know how the community would get along together. And we're at I think, like 400 people almost exactly now. And this is after two or three months, which is really cool. And the community is great. People are so supportive. They're always sharing resources. They're asking questions, it's been just fantastic. So I'll give you a link to to discord if you want to throw it in the in the description as well. If people are interested in joining.

### Bryan Robinson 27:27  
I certainly can. Yeah. Cool. Well, James, I appreciate you coming on. And I'm looking forward to seeing the E book when it comes out. Which it may already be out when this is actually going on. But you know, time is a weird thing. So yeah, keep doing the amazing things you're doing and maybe we'll have you on another year from now and we'll see the differences the year makes.

### James Quick  27:46  
Yeah, I'd be excited to do like the what is that at that point the remix times two I guess.

### Bryan Robinson 27:52  
It's the the hundred other songs. It's like the remix to ignition where there wasn't an actual first song. Yeah. The remix to the REMAX. It'll be great. Thanks again to James for being on the show. And thanks to all of our listeners for tuning in Week after week. Be sure to star heart or favorite in your podcast app of choice. Now sponsor time this week, we're lucky to have Auth0 back there sponsored Auth0 is an amazing authentication platform, but they also have a wealth of amazing content coming out regularly on their YouTube channel, including a free course called full stack Jamstack with next j s. If you're interested in learning more about next, taking the Jamstack further authentication on the Jamstack head over to a zero to slash TMJ YT that's TMJ YT for their YouTube channel. That's it for this week. But until next time, keep doing amazing things on the web and keep things jammy

Transcribed by https://otter.ai



Intro/outtro music by [bensound.com](https://bensound.com)