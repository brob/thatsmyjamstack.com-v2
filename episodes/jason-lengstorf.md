---
title: Jason Lengstorf on the edge cases, rediscovering common knowledge and much more
date: '2020-01-28'
tags:
  - episode
audioFile: https://pinecast.com/listen/f5799fb5-86a1-4b04-8e90-f121764b4e71.mp3
description: Our Guest today is a principal developer experience engineer at Netlify and the host of the great video series Learn with Jason. I'm talking of course about Jason Lengstorf. 
socialImage: /images/jason-lengstorf.png
---

## Quick show notes

* Our Guest: [Jason Lengstorf](https://lengstorf.com/)
* What he'd like for you to see: [His Egghead courses on JAMstack and Gatsby](https://egghead.io/instructors/jason-lengstorf) | [His Gatsby and JAMstack courses on Frontend Masters](https://frontendmasters.com/teachers/jason-lengstorf/)
* His JAMstack Jams: "But yeah, I'm a big fan of, I don't know, I just like playing this stuff." So here's a list of the stuff
  * Gatsby 
  * Svelte
  * Eleventy
  * NuxtJS
  * Gridsome
* His Musical Jam: ["Final Form" by Sampa the Great](https://open.spotify.com/album/1HxsSJHTqeUxDoKN26h8pB)

## Other Technology Mentioned
* Hasura
* OAuth
* OneGraph

## Our sponsor this week: [TakeShape](https://takeshape.io/thatsmyjamstack)

## Transcript 
### Bryan Robinson  0:02  
Hey everyone, welcome to That's My JAMstack, the podcast where we dare to ask the question, what is your jam in the JAMstack. I'm your host, Bryan Robinson and today I'm super excited about our guest. He's a principal developer experience engineer at Netlify and the host of the great video series Learn with Jason. I'm talking of course about Jason Lengstorf. 

### Bryan Robinson  0:22  
But before we dive in, I did want to mention our sponsor TakeShape is back again this week. I'll tell you more about them after the interview. But if you're interested in learning more before that head on over to takeshape.io/thatsmyjamstack to find out what their content platforms all about. 

### Bryan Robinson  0:43  
Alright, Jason, thanks for being on the show with us today.

### Jason Lengstorf 0:45  
Yeah, thanks for having me.

### Bryan Robinson  0:46  
Awesome. So so I would hope that a lot of people in the audience know who you are, at least from the past couple years, but go ahead and give us a shout about who you are, what you do for work, what you do for fun, that sort of thing. Sure.

### Jason Lengstorf 0:57  
So I am a developer experience engineer at Netlify, which means that I'm kind of in between engineering and Dev Rel. I also host a show called Learn with Jason where I pair program with people in the community. We learn something new in 90 minutes. I am also a occasional blogger I'd write a lot about sometimes about code mostly about the the process of coding so kind of the meta work or the Yak shaving so to speak. 

### Jason Lengstorf 1:30  
For fun, I am a I call myself a mediocre bartender. I love food. So I we cook a lot. You know, I'm kind of deep down a rabbit hole, I make my grind my own meat and you know, do that. We make bread from scratch and I like to do cocktail like you know, bartending kind of stuff like that. I make my own cocktails and stuff. It's good. 

### Bryan Robinson  1:51  
So what is the tastiest cocktail that you make?

### Jason Lengstorf 1:54  
Okay, the taste is one that I make. I will usually I just make other bartenders, good cocktails. I have I made one up. My partner asked me to make something that tasted like Christmas. And so I did kind of a riff on on like a classic Negroni build, but it was rum and spice liquors. So it kind of has this really Alpine kind of Christmasy flavor.  

### Bryan Robinson  2:21  
Alpine like a taste like a pine tree or...

### Jason Lengstorf 2:23  
So the one that I use is called blur Bluebird, Alpine liqueur, which it's got, like all spice and some kind of like fresh herbs and stuff. So if you had fernet Branca? 

### Bryan Robinson  2:35  
Nope. 

### Jason Lengstorf 2:36  
So fernet Bronco, kind of tastes like mouthwash. This is like a a very, like, tune down version of that. So it's it. It has a hint of pine not like the taste of them.

### Bryan Robinson  2:48  
And what's the what's the hardest thing you've ever cooked?

### Jason Lengstorf 2:50  
Ooh, great question. Um, I would say probably the hardest thing I've ever cooked is. Well, I mean in terms of complexity, just Thanksgiving dinner, because you you effectively have to Gantt chart that you know, you've got one of in one stovetop and 15 dishes to cook. So how do you make sure that everything comes out on time still warm, that you're not like trying to stack something that was supposed to cook it for 50 and an oven, it's only a 325 you know that that kind of stuff is all very challenging. 

### Jason Lengstorf 3:18  
In terms of most complicated single dish, I any type of curry dish is really challenging. It's like, well, it it's not challenging in the sense that it is. It's not like French cooking where the the techniques are challenging. It's like a billion and a half ingredients and a lot of them are hard to find or something you've never used before. So there's a lot of like, not only learning how to use a mortar and pestle to make curry but like trying to understand what an ingredient is supposed to taste like.

### Jason Lengstorf 3:51  
Because you know if you've never used like Thai basil or if you've never used Thai seasoning sauce or You know, all these these ingredients that you'll find in Asian food, like, you're like I don't even have the context to know when this is like I don't know what right tastes like so you're making a lot of wild guesses and hoping the end product tastes like the thing that you love from the restaurant

### Bryan Robinson  4:15  
Do you do have to make your own curry powder because I know that's like the best way

### Jason Lengstorf 4:18  
I've done it a couple times and it is definitely amazing it is so much work like it's it's one of those things that I feel like if it would be one of those things it would make sense if you had a bigger family so it's just me and my partner and to make it at the scale that we would need to to justify doing as much work as it is we need to eat it like every day for two weeks. And so typically what I found is that the level of effort that goes into the really, really intense stuff like making your own like making your own gyoza skins for like pot stickers and stuff, quality difference between buying them at the store Making them at home is noticeable. But marginal. The level of effort is totally, totally doesn't justify that little bit extra flavor. Unless you're doing it for like a special occasion.

### Bryan Robinson  5:12  
Even still, I might say depends on how special occasion I guess. 

### Jason Lengstorf 5:18  
Yeah, fair enough. 

### Bryan Robinson  5:20  
So, so obviously, we're not cooking today other than some delicious jam stack recipes, but, uh, what what is kind of your entry point into the jam stack or in the static sites if you are old enough to deal with that?

### Jason Lengstorf 5:31  
Yeah, so like entry point, like how I got into it. I mean, the way that I really got into it was once upon a time I was in a band, and I started by customizing the CSS for MySpace. That was really what it was, was like customizing my band's MySpace profile. And then I wanted to build an actual website for the band. So I built a, you know, totally in, like TextEdit wrote all the HTML all by hand and then just uploaded into a FTP folder on. I don't even remember what the host was some some cheap hosts BlueHost or something like that. 

### Bryan Robinson  6:09  
True static sites. 

### Jason Lengstorf 6:11  
Yeah, real like true static site. So I just uploaded something into a folder. It was it was gnarly. It was this table base like this is before that, you know what this was before CSS or before I knew how to use CSS. So what I was doing was doing like table based sliced images, to position things on the screen old school. It was rough. It was rough. 

### Bryan Robinson  6:32  
Nice. So So what about modern JAMstack? What was kind of your entry point into into the past like five years of technology? Um,

### Jason Lengstorf 6:41  
so I was working at IBM. And we were dealing with, I worked on IBM's cloud services, IBM Cloud, and we were building dashboards out and a lot of these dashboards it was just a very complicated dev stack, right. So IBM Cloud is microservices. So each team owned a route. So you would own slash dashboard or slash account or whatever. And we owned slash account. So we were trying to speed up we had some performance issues where we were just it was taking way too long to load a page. And when I started digging into the tech stack, what I realized was that the way we had done microservices was to give each team a full node Express server. And then that was setting up these proxies that were wrapping other microservices. And so we had these kind of daisy chained microservices, then and a lot of it was just so that our local build was easy to manage. And you know, I have to like air quote, easy because it was still to get a dev environment setup. You had to add a bunch of environment variables you had to configure nginx on your machine. had to run, you had to have a reverse proxy running. And all this stuff was really, really painful. And all we were doing at the end of the day, was writing a react app that sent off calls to internal API's. 

### Jason Lengstorf 8:13  
So I, I attacked this from from two ways. So my first talked to my team about GraphQL. And we wrote a middleware kind of thing. That was a, it was like a normalization layer over internal API. So instead of having to write these proxies in each microservice, we built a normalized graph qL layer so that the the front ends could just call GraphQL. And then once we've done that, we've successfully decoupled them so I started trying to build up proofs of concept where the front end teams weren't shipping node anymore. They were just shipping like static compiled assets. The graph qL was successful. The static shipping was not

### Jason Lengstorf 8:55  
We we hit Like, I mean, there are a million reasons for it, right? Like there's there Lots and lots of people who have very valid reasons for going lots of different technological directions. IBM's got 700 something engineers, or just on that team like on IBM Cloud 700 something engineers, and you know, they're architects at different levels. So I had my what I consider to be incontrovertibly correct opinion. And then there was another team that was doing more stuff with with like, sort of like graph, not graph qL, but like graph databases, and that was very server driven. And so they had what they consider to be incontrovertibly correct reasoning for doing that. And we just kind of stalemated while I was doing that, though, I was just kind of getting burned out on the the bureaucracy and the slow pace and the the the inability to like, do stuff. I always felt like I was getting close to doing something cool. But then it would hit this, this wall and it would just chug along and it was like okay, we're going to Do six months of meetings to do six weeks worth of work and that's not fun. 

### Jason Lengstorf 10:05  
So around that time, I started looking at Gatsby as an option for the static builds. And I was talking to the Gatsby team, and through, you know, just good timing. They had gotten funding and we're starting to hire at the same time that I was starting to reach the end of my tether at Gatsby or at IBM. And so I made the jump over there. So that was that was kind of where I got officially officially into the JAMstack

### Bryan Robinson  10:28  
Perfect timing on on everything. 

### Bryan Robinson  10:30  
Yeah, yeah

### Bryan Robinson  10:31  
With 700 devs on a Team. Things are gonna move, move pretty slow.

### Jason Lengstorf 10:35  
Yeah, yeah. You know, the the the trade off that you get for like building enterprise enterprise grade software is it's going to be relatively solid because you have so many people to cover so many edge cases. But it moves glacially.

### Bryan Robinson  10:50  
So So obviously, you were you were working at getting IBM into the JAMstack. Then you move to Gatsby and you were using pretty much primarily JAMstack technology at that point. How are you? Nowadays working at Netlify using JAMstack professionally using it personally what what kind of projects are you working through with that?

### Jason Lengstorf 11:07  
Um, I mean, I I feel like I was pretty, pretty convinced on the jam stack as an approach before I went to Gatsby that was, you know, I made a big bet on Gatsby when I went there. And moving to Netlify felt like a logical next step for me because what I, what I really believe is that JAMstack is something that's going to give anybody a very easy on ramp into putting things on the internet. And I feel like that's a that's a gap that was closed in the Hostgator, use text edit and drop an HTML file into FTP. And then we we created that gap again, when we got too much further beyond like the the PHP LAMP stack kind of stuff. Because now it's like, Okay, well, I don't know exactly how to provision a node server or how to configure a remote, I, you know, I don't want to have to SSH into a box to change something so that I can deploy it. And there are services that manage that for you, but they were all kind of, like expensive. And so Netlify has has democratized that a little bit by offering this, this free hosting for jam stack sites. And the jam stack in general simplifies the stack. 

### Jason Lengstorf 12:24  
So for me, it's very like, okay, we've we've created a landscape that is more friendly to more developers. And now I'm just kind of in my personal stuff, and in professional stuff. I'm playing with the edges, because, you know, JAMstack is a tool, it's an approach, and it's not going to solve all problems. So I'm currently in the phase where I am trying to treat JAMstack as a hammer and attempting to see every problem is a nail. Because I want to I want to see like, where does it really fall down because there are obvious things that it can't do like You're not going to do a real time stock ticker, with, with static files, if you need that to be, like server generated, like, there's just you're never going to rebuild that fast, or at least not with current technology. 

### Jason Lengstorf 13:11  
But there are a lot of things that people say, Well, you can't do that with jam stack. And I'm just trying to ask the question like, why not? Like, what what stops us from doing that? 

### Jason Lengstorf 13:22  
So you know it you can do a lot like we're doing real time sound effects. We're doing persistent data where you can track things like Kyle Shevlin's, got a cool thing that he did on his his blog, where, if you read one of his posts, and you like it, you can stroke his beard, which is a weird thing to do. But he managed to make that persistent. So he's got a button that you can click, and it'll increment the count and say, like, Oh, this, this post has gotten like 57 beard strokes, which is really cool. And that's all done again in the JAMstack, 

### Jason Lengstorf 13:22  
So, so like, right now I'm building a JAMstack powered site, where I used a Hasura to set up a database. And then I built the JAMstack site, that log I use OAuth through OneGraph, which is an amazing tool if you haven't used it. So OneGraph logs into my Netlify account, and then it logs into my twitch account, and then pulls in. Like from whatever site I specify serverless functions, which is a way for JAMstack to do like dynamic things. And then I'm able to using a JAMstack site triggers Sound effects on my live Twitch streams based on this like jam stack setup that I've got. 

### Bryan Robinson  14:37  
Highly interactive. 

### Jason Lengstorf 14:38  
Super interactive. Yeah, you can do comments, you can do all sorts of things that that I think are typically typically thought of is like, Oh, you need a server for that? Well, this the software as a service landscape is so robust now. You almost don't need a server for anything on print. Like you don't need to roll your own server. The vast majority of services now Have a software as a service like implementation you can do comments over over SAS, you can do you know real time income increment, you can do databases you can do. Everything that you can imagine is probably got a SaaS solution, when that really opens up the landscape for the jam stack where you can do so much without ever having this to stand up a server

### Bryan Robinson  15:20  
Yeah, those edge cases are getting smaller and smaller by the day.

### Jason Lengstorf 15:23  
Yeah.

### Bryan Robinson  15:24  
Cool. So uh, what would you say that your, your jam in the JAMstack is? What sort of technology or philosophy process what were you really digging on? Maybe in the past year or so

### Jason Lengstorf 15:36  
Yeah. Well, so I think there's, there's like the professional interest and then there is the, like, I am excited about this interest and, and I have the benefit of like, through running, Learn with Jason. I get to effectively play with new and exciting stuff constantly. And so I've seen a couple really exciting things like Rich Harris came on the show and taught me about Svelte. And Svelte is incredible. It's this, you know, it's this magical disappearing framework that you write Svelte code, but then during the build process, it compiles away all of its code and shifts next to nothing. You got these tiny little bundles and it's amazing for performance. They they use it for data visualization and animation. It's it's really, really incredible. 

### Jason Lengstorf 16:26  
But then you've also got like Eleventy from Zach Leatherman, which is this, this amazing framework that is completely unopinionated. Like the Zach told me, he can't even tell if a site was built with eleventy because it doesn't ... like there's no framework there. It just generates whatever you tell it to. And so those are really cool in terms of flexibility in terms of power. I haven't really used them at scale, though. Like I've used them for a little fun projects. And and I like them. I think they're super exciting. 

### Jason Lengstorf 16:56  
For production stuff. I'm still using primarily Gatsby. I think that Gatsby has a, the the, the way that Gatsby has approached data management where you move things to a centralized centralized data layer, and then you work as if it's a, you know, a live, you know, database powered app. And then when it builds, it kind of packages up that data to go to the site. That, to me is something that we were still not really seeing, you know, in a lot of the JAMstack ecosystem. And that makes Gatsby like, you know, it's a little complex to set up because you got to learn graph qL you got to do all the, your you've got tools under the hood. So it's hard to tell where the boundaries are between like Gatsby and reach or between Gatsby and relay between Gatsby and and what, you know, react. So what are you Where did you hit the issue? Right? So there are some, it's maybe not as beginner friendly as well. Nothing is beginner friendly anymore, because everything's like, you know, it's turtles all the way down, right? like everything's an abstraction of an abstraction of an abstraction. So beginners are going to start wherever they are. And they're going to learn their layer of abstraction. And then like, if there's a need, they're going to go deeper. 

### Jason Lengstorf 18:10  
I think the Gatsby has an incredible tutorial, incredible documentation. And so to me that that makes it the safest production top choice for react based developers, like, you know, if you're, if you're Angular Dev, like, I think Scully just shipped which is really cool. And if you're a Vue dev, there's like Nuxt and Gridsome that both have really cool options. So you know, I think there are a lot of really fun ways to solve these problems. But yeah, I'm a big fan of, I don't know, I just like playing this stuff. 

### Bryan Robinson  18:44  
A big fan of everything, right? 

### Jason Lengstorf 18:47  
Yeah, I like it all.

### Bryan Robinson  18:48  
Cool. So let's, let's talk about music. Then. what's what's your jam right now? In your ears.

### Jason Lengstorf 18:55  
Um, I have been listening to just so much We like stuff. So I kind of went down this rabbit hole right so I got really into Anderson POC, because I just never really heard anyone who did what he did. And then like I also started taking music lessons from this, this guy named Joe in Brooklyn who's a producer and he works with a lot of underground hip hop acts and like smaller names, but he's worked with people that people who are into hip hop may have heard of like Earl Sweatshirt and folks like that. So through that, I've been on this very odd adventure. Let's just fall down the the Spotify, rabbit hole of all of these really, really interesting things. And I just found an artist that I love. I gotta look up her name though, because I am blanking on it right now. Samap, the Great or Sampa the great, I don't know how to how she actually pronounces her name, but yeah, like this track called final form. It is unbelievable. It's so good. I can I'll send you link to it. It's like, kind of it's like in the Kendrick Lamar vein of, of hip hop where it's like solid wordplay. It's, it's pretty, like, you know, it's like, cool, it's, like socially positive, or largely socially positive. And, you know, it's, it's really, really, it's good.

### Bryan Robinson  20:18  
Nice. Alright, so is there anything that you would like to promote to kind of get out to the jam stack community as a whole,

### Jason Lengstorf 20:26  
Keep, like, keep trying things. One of the things that I think is really, really important as JAMstack developers is, keep in mind that this is still a relatively new approach. And that a lot of the the, we're taking a lot of things that were common knowledge and we're rediscovering and so part of what I think is important as we get into the JAMstack is is first don't treat this like it's brand new. It's not this is this is stuff that we have been doing for a long time. So instead, start looking for like, Where Where do the abstractions make sense. And were like, what is it comfortable to do? So not what can we twist jam stack to make possible but like, where does it really feel right? You know so with the the SaaS based stuff are using software as a service as a data layer to back this completely static front end like to me that feels great. It It seems to solve all the problems that I want it gives me It gives me really good control. So I would recommend like go check out some of the the various software as a service platforms if you need a good idea of what some of those are. 

### Jason Lengstorf 21:34  
Just go look at Gatsby's datasource plugins because it's going to list just a ton of services and things that they do that you could integrate directly into a Gatsby site right now. Or with a little more effort you could you could integrate into any JAMstack solution by just using their API's at build time to go play go do some dynamic stuff because it's it's so much fun. 

### Jason Lengstorf 21:56  
If I can self promote a little bit yeah, I have on on Front-end Masters and on Egghead some courses on both Gatsby and the JAMstack where it talks through how to like we walk through projects that do some of the more dynamic stuff so you can get an idea of how it works. And then just go out and continue pushing those boundaries.

### Bryan Robinson  22:15  
Awesome. You'll send me those links, and I'll put them in the in the show notes. 

### Jason Lengstorf 22:18  
Absolutely. 

### Bryan Robinson  22:19  
Awesome. Alright, well, thanks for taking the time to talk with us today. And I hope you keep doing amazing things that all the different jam tech companies you've been with, but with metla phi going forward.

### Jason Lengstorf 22:27  
Thanks so much. I appreciate you having me on.

### Bryan Robinson  22:33  
Hey, everyone, it's Bryan. Again, I want to point out two quick things before I let you go first, I want to point out that people discovering podcast can often be you know, review and ratings based. So if you got two minutes today and are enjoying this podcast, head on over to to the Google Play Store, Apple podcasts or really wherever you're listening to the show right now, and and write a short review. It'll help more developers find out about this amazing community that we're all living in. 

### Bryan Robinson  22:57  
The second thing I want to talk about is of course, our sponsor TakeShape. They're really well crafted content platform for the JAM stack. And what's a content platform? Well TakeShape doesn't just provide a CMS, though, you can, you can certainly just use their CMS if you want to. They also have a static site generator, a graph, qL API, and a new Mesh product, which is working to combine multiple API's into one easy to use GraphQL based API. So if any of those things strike your fancy and to be honest, all of them do for me, head on over to takeshape.io/thatsmyjamstack sign up. 

### Bryan Robinson  23:32  
As always, thanks for listening, and we will see you next week with a new interview. Until then keep doing amazing things on the web and keep things jamee

Transcribed by https://otter.ai

Intro/outtro music by [bensound.com](https://bensound.com)