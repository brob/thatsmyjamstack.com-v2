---
title: Brad Garropy on the A in the Jamstack, cloud databases, and side projects
date: '2020-10-06'
tags:
  - episode
  - season-2
audioFile: https://pinecast.com/listen/4821e90f-91f9-4cf8-99c5-ea85d8d3650e.mp3
description: This week on the show, we have Brad Garropy. Brad is a lead front-end developer at Adobe by day and a live-code streamer by night! 
socialImage: /images/brad-garropy.png
---

## Quick show notes

* Our Guest: [Brad Garropy](https://twitter.com/bradgarropy)
* What he'd like for you to see: [His Twitch Streams](https://www.twitch.tv/bradgarropy) | [His Discord Community](https://discord.com/invite/WxtUPSF)
* His JAMstack Jams:  [Netlify](https://netlify.com) | [FaunaDB](https://fauna.com) | The "A" in the JAMstack
* His Musical Jams: [Kolby Cooper](https://www.kolbycooper.com/) | [Artists on his Daily Texas Country site](https://dailytexascountry.com/)

## This week's sponsor: Auth0

This week, we've got [Auth0](https://auth0.com) as a sponsor. While their prowess at authentication is important, they also just release a free online course for [building a full-stack, Jamstack application with Next.js, Tailwind, Airtable, and Auth0](https://a0.to/fullstackjamstack).

## Transcript
### Bryan Robinson  0:01  
Welcome back, Jamstackers! It's been a bit of time since last we talked, but I'm so glad to be back with you. You're listening to That's My Jamstack the podcast where we asked a timeless, ageless and incomparable question. What is your jam in the Jamstack? I'm your host, Bryan Robinson. And this week on the show, we have Brad Garropy. Brad is a lead front end developer at Adobe by day and a live code streamer by night.

### Bryan Robinson  0:46  
All right. Well, Brad, thanks for being on the show with us today. Can you tell us a little bit about yourself? 

### Brad Garropy  0:50  
Yeah, absolutely. I'm a recently promoted lead front end developer at Adobe. And the job description basically entails that I build SAS services for the Magento ecommerce platform, as you mean like Software as a Service things or another definition of SAS? Yeah, software as a service. So imagine things like product recommendations or search that can be kind of tacked on to the e commerce store. So what do you do for fun that if that's what you do for work? Yeah, well, definitely for fun, I do a lot of programming and side projects, but away from the computer, I really like to work out I'm into bodybuilding, powerlifting, running, all those types of things. 

### Bryan Robinson  1:31  
Awesome. So so what what kind of, is it like strength training? Is it are you doing like a Olympic league? Like overhead presses for your powerlifting? What what's that entail? 

### Brad Garropy  1:41  
Yeah, like my training splits are typically like this, they start off with one of those powerlifting movements like your, like your bench press, or your squat, your deadlift. And then the rest of the training session kind of focuses around bodybuilding movements like to, to really stress out and tear down the muscles. 

### Bryan Robinson  1:59
That sounds awful from somebody who doesn't do a whole lot working.

### Brad Garropy  2:03  
You know, it's funny, I found that a lot of developers actually take well to powerlifting. Because it's a it's usually a very structured program with progression and percentages and numbers. And I think developers just feel right at home when they have a lot of structure to training. 

### Bryan Robinson  2:22  
Yeah, that makes sense. It's kind of a logical, like I said, the progression is a logical thing. And that tends to play well with the way our brains work.

### Brad Garropy  2:29  
Exactly.

### Bryan Robinson  2:31  
Nice. So so this is a Jamstack podcast, let's talk about the Jamstack. A little bit, what was your entry point into this idea of other static sites or Jamstack? As we can know it today?

### Brad Garropy  2:40  
Yeah, it was interesting. I, I started learning web development at a really volatile time, like create react app was just coming out. And this notion of front end frameworks was just really picking up and my entry point into Jamstack, was trying to make my first blog. And I had to think about, you know, how do I source data but still make hosting cheap and free and easy? Yeah. Right. So Gatsby was one of the first tools that I got to reach for I did run Jekyll for just a little bit there. But Ruby, Ruby is difficult to work with.

### Bryan Robinson  3:18  
Yeah, definitely as a as if, especially if you're coming from like a front end development perspective. And you also often have to do Ruby work, like that just doesn't feel quite right.

### Brad Garropy  3:26  
Yeah, like my learning path was like HTML, CSS. What is this Jekyll thing? You know? Yeah. So eventually, I kind of switched over to Gatsby and kind of hopped on the train with everybody else about like, this is kind of how you source data and and pre generate pages, which made hosting, you know, easy, simple and free, which is I'm a big proponent of free

### Bryan Robinson  3:51  
Free is definitelya nice thing, especially especially in like side projects like that. Like, if you got a budget at work, like, that's cool. You can use that budget, but when you just want to blog, like, I don't want to pay $10 a month in hosting for that blog.

### Brad Garropy  4:03  
Yeah, and, and Jamstack is really cool, especially with that philosophy, because there's so many services around the Jamstack, that the way they work is they offer free tiers and free tiers just good enough for my use case, you know, I haven't built anything that's kind of broken out of that free tier.

### Bryan Robinson  4:22  
Yeah, I think it's one of those things where if a developer is using it on their personal projects, or their little side projects that like, they may then want to use that for bigger projects at work, and they may find more enterprise clients that way, something along those lines.

### Brad Garropy  4:36  
Exactly, yeah, they they, they can bait you in with some really good premium features, or just essentially just like scalability. Yeah, definitely like that. The scaling is always a always a fun challenge to not have to worry about yourself. Absolutely. I I see my back end team at work constantly like thinking about how do we use Kubernetes to scale our API infrastructure and what happens when, you know, we released this to the public and there's 100,000 requests in, you know, 30 minutes. And they have so much to worry about with with us front end folks and the Jamstack technologies, you kind of make your HTML pages, add in a little JavaScript for interactivity and API calls, and they just get cached and served as kind of works in the end. So you talked about building a blog. So obviously, you've you've used Jamstack, a little bit personally, but how are you using these philosophies? professionally now, but also a little bit more on the personal side, too? Yeah. So the blog, it's Brad garrett.com, it was my entry point into kind of building a site with real data and content. But I built many other like side projects that stemmed from there that kind of gave me my my base as a front end developer. So I built like, a little website for my wife's photography business that was done on the Jamstack. I built daily, Texas country.com, which is like a Texas country music focused blog and community website, and that sources data from all sorts of different places, and it uses Gatsby for that data sourcing. And I've even built things on the Jamstack. Not using like Gatsby and react, I built a svelte application that, in my opinion, still very much adheres to the Jamstack to track workouts.

### Bryan Robinson  6:29  
Okay, cool. So so it's like when you say, it still adheres to the kind of Jamstack philosophy? What do you kind of see as that as that philosophy? Because a lot of people have different definitions of it. 

### Brad Garropy  6:40  
They do. Yeah. So it folks listening to the show probably know, Jamstack stands for JavaScript API's and markup. And so this workout timer application is a single page application that I still believe falls into the realm of Jamstack. A single page application is still delivering HTML, which is your index dot HTML file just happens to be pretty blank, although you can kind of pre generate the shell of the application, and then populate data inside of there. So this application is just a timer that runs and you can go to a page, if you're logged in, where you can fetch your previous workouts, it saves it up to fauna, db.

### Bryan Robinson  7:29  
Oh, nice. Very cool. So. So also, I'm kind of curious, you said that the daily Texas country it was a it was a Texas country music blog, but also a community. What's the community aspect? And how's that playing with the Jamstack?

### Brad Garropy  7:42  
Yeah, I suppose what I mean is like, I'm trying to bring the community together on that website. So I make a bunch of different types of content. So I'll source YouTube videos that I make I'll source blog articles, and all sorts of playlists to try to get folks to gather at that website. There. I see that confusion there. There was no like, notion of a user or a member where there's comments or anything, I kind of use the other platforms for that.

### Bryan Robinson  8:07  
I gotcha. And you're sourcing those and pulling them in. You said via the Gatsby source stuff. Right. Right.

Unknown Speaker  8:13  
Yeah.

### Bryan Robinson  8:13  
Cool. Cool. So So we've talked a little bit about Gatsby, but what is kind of your jam in the Jamstack? What's your favorite service or philosophy framework, etc.

### Brad Garropy  8:24  
Man, I think this is the really cool part about the Jamstack. And this is where the A in the Jamstack kind of plays an important role. So like, first of all, hosting on the Jamstack is great. Netlify is a tool that's universally loved. And I am no exception. They they make posting your files easy integrating with GitHub easy. It makes hosting serverless functions easy. And even doing things like DNS management easy. If you opt into their DNS servers, you can do like redirects very easily or sub domains. Just easy is the word that comes to mind. That's on the hosting side. Another thing that I really like about the Jamstack is that there are so many services that support it. So this kind of brings me to like the A in Jamstack, where, if you're coming at it from a front end developer point of view, you can build a front end, but you're looking for like, what is it that might happen does? How do I connect it to services or databases, and that's where you kind of go searching for the A, the API's. And I think it leaves developers in an interesting, interesting place, they have to kind of choose what services to stitch together. And for some folks, that might be like, a good thing or a bad thing, because at the end of the day, if you're choosing to integrate a bunch of services together to create a product, you have to write a bunch of like Glue Code and you might reach more of like a fatigue and trying to determine what's the best service for CMS or a payment processor or a database?

### Bryan Robinson  10:07  
Yeah. And you haven't mentioned, like the fact that you've got, you have to string these services together, you have to figure out what is that string? How do I actually do the stringing of those services?

### Brad Garropy  10:18  
That's right, yeah. And this is where a lot of confusion can come into play. Or if if, for instance, one service isn't as flexible as you want. And now you have to like migrate to a new one, or if one service changes their pricing model, there's so much to consider. So I think a and Jamstack is fairly overloaded. When when all the services work well together, you just kind of you're picking apples from the tree, and life is dandy. But when you kind of run into problems, you really have to, like, interact with those services, support teams, or dev roles, and try to find answers.

### Bryan Robinson  10:53  
So do you have any kind of like, best practices to like, try to avoid some of those those hiccups? Or are there any any kind of tips or tricks that you that you've had to implement as you've been building some of these things?

### Brad Garropy  11:07  
Yes. So one approach that I've started taking was, don't rely on CMS, if you don't have to, if you don't have somebody else, that's going to be modifying data on your website, I would opt not to use a CMS. First of all, that means you can generally bring your content right into the repository, where the front end code is hosted. And it's co located, which is a good thing, you own your content at that point. What that does is it kind of helps saves you from like, integration problems with your front end build tools. Like for instance, I was using contentful for a while, and I found that there, Gatsby source plugin was missing some fields that I really, really wanted. And after working with, like their, their dev rails and and submitting like some issues, it was clear that like, this stuff just wasn't going to be resolved. So that was one of the things that kind of forced me to move content into my repository. Another thing is like development environments, if you use Netlify, for hosting, every one of your GitHub branches, is actually turned into its own subdomain on Netlify. So that you can have like, immutable deploys two branches that have previews of content that's not actually published, which is so helpful. And sometimes getting a CMS to do that can be kind of difficult.

### Bryan Robinson  12:34  
There's definitely some overhead that kind of comes into play when you have to do that from a CMS or from any kind of API layer at that point. For sure.

### Brad Garropy  12:41  
So like, I think mitigation wise is like, own as much code as you can without reinventing the wheel. And then if you have to use a service, find one that's fairly popular, or one that clicks with your mental model. And it just takes trying different services out to figure that out. I've recently worked with fauna DB as like a serverless first database. And I found that after understanding their query language, it really clicked with my mental model of like, this is how my Jamstack site is going to work with serverless. First database.

### Bryan Robinson  13:16  
Yeah, well, and the interesting thing for me fun is actually was the first, like, no SQL like, schema list database that really clicked with me. Like, I'd used Firebase and some other stuff in the past, but never, never felt quite right. And then something about fauna just just hit me in the right spot. And I built a couple small apps with it now.

### Brad Garropy  13:38  
Yep, yep, I built my Murphy app with it. And I'm pretty happy with it. And actually chose not to go with their graph qL implementation, I'm doing just their, I guess, their JavaScript library implementation.

### Bryan Robinson  13:51  
And there's a lot of interesting things that you can do kind of in the in the back how they work to where they've got their their SQL query language, their fun a query language, and you actually build out complex queries as functions that they have. And then you can actually just submit one like line of JavaScript, and it runs that function on their on their servers, which can be really, really handy.

### Brad Garropy  14:12  
Yeah, and I found it like, super helpful to build up a utility folder, or like a utility file with like a bunch of CRUD operations written out in SQL. So if you want to read all posts, or read a single post, or edit a post, and you just kind of build out those CRUD operations, then they're like building blocks you can use in your serverless functions, that, you know, you might have route handlers for each one, and then you just call out to that specific utility function. It just, it almost felt like I wrote kind of an express app without having to set up, like, all of the boilerplate, you know, and it was just really easy to deploy things to Netlify.

### Bryan Robinson  14:53  
Yeah. And like the interesting thing to me too, is that like, honestly, the SQL language kind of broke my brain. In a little bit, it was, it was very difficult for me to get into. But there was a moment. And it was like two days into working with it. Were all of a sudden, like, it was like the matrix, I get all sudden, like, see my queries happening and like understand exactly where it was coming from. So there's definitely a hurdle there. It's it's a new language, but it's a, it can be very, very beneficial, I think,

### Brad Garropy  15:19  
yeah, I was very lucky in that I had the help of dev REL from fauna, I was actually streaming and tagging them and everything that I was doing. Next thing, you know, I got a dev REL sitting in chat. And then he joined up on a Discord server that I'm in. And he, he really worked with me side by side to like, improve my queries, discuss options, I even got invited to like a feedback call where I could, you know, talk to them about the decisions I made and how I use fauna and areas I see for improvement. And that's another thing about the Jamstack. I just feel like, all the companies are very much like developer experience first, and they're willing to engage and they, they hire Developer Relations people, and they do a really good job at reaching out.

### Bryan Robinson  16:06  
I think I wonder if that has anything to do with kind of the, to your point on the A in the Jamstack, the API layer and how you really do kind of need developers on your team to be able to to utilize the Jamstack properly. And I wonder if that's, you know, the defining characteristic of a Jamstack company, is how well, they manage their developer community, because that's, that's who really buys in and makes all this work.

### Brad Garropy  16:33  
Yeah, like if A is truly kind of just a bunch of services that you have to go utilize. They have to know who their customers are, they have to know who they're delivering to.

### Bryan Robinson  16:43  
Cool. So let's talk music. What's your actual jam right now? What's your favorite song or musician or I know you run a website about music. So hopefully, you've got some some hot takes here.

### Brad Garropy  16:52  
Yeah, so that daily, Texas country website is all based around a playlist that has like 1200, Texas country songs, and it's actually 1200 Texas country songs. Oh, yeah. This is only like a very select subset of the ones that are curated by me, you know, so it's a it's a big genre, because it's a big state. You know what I mean? Yeah, definitely. Anyways, there's a up and coming kind of artist, he's 21 years old, just turned 21. His name is Colby Cooper, and I love like, basically everything that he does,

### Bryan Robinson  17:26  
so it was out of curiosity. So what is Texas country as compared to country with a capital C?

### Brad Garropy  17:36  
Yeah. Okay. So I think the main difference is a country that kind of comes out of Nashville, you kind of do like there's a natural epicenter of country music, and there's like a Texas epicenter of country music. And the difference is, the giant labels like Sony and Columbia are producing records out of Nashville, that that sound over produced, they use drum machines, they use snap tracks, all these different pop music elements in country music that Texas country music fans don't view as like traditional country music. Whereas in Texas, you're typically recording in like, a very modest studio. You expect to have like a fiddle in the band. That's definitely true. And there's like a steel guitar like more rich natural instrumentation, and then you typically just have like, Guys being very honest in lyrics just talking about everyday stuff.

### Bryan Robinson  18:35  
Is Texas country that the hipster country of the country world.

### Brad Garropy  18:39  
So I think i think i think Nashville folks looking in would say that, but I think Texas people looking out would say no, this this is the original We are the one true country.

### Bryan Robinson  18:50  
Gotcha. Mind you. I'm from Tennessee, so I don't actually like the Nashville the Nashville scene. But uh, but I guess I guess it's been it's flavored my my knowledge of the genre.

### Brad Garropy  19:00  
I think the coolest part about Texas country music is that like, you can go to a concert on any given Friday or Saturday night for like 15 bucks, you know, you're not going to have to pay $70 for an arena. See, you can go see your favorite artist right around the corner. You know, any given weekend.

### Bryan Robinson  19:18  
Nice. Very cool. So is there anything that you would like to promote anything that you're doing that you really want out to the Jamstack community right now?

### Brad Garropy  19:25  
Yeah, I'm actually like, a much smaller content creator than the crowd I hang out with. And so I would love to like try to build up my my Twitch and my Twitter a little bit more. So I'm Brad Garrett at Twitch. tv slash Brad GaryVee. I stream like weeknights, like 10pm fairly late. So I'm a night owl and Twitter. It's twitter.com slash Brad Garrett up. I try to tweet out some tips every now and then and just keep you all informed about the projects that I'm working on.

### Bryan Robinson  19:56  
So what are you what are you streaming most nights? What what kind of code Are you working on?

### Brad Garropy  20:00  
Yeah, I work on react. I work on feltz. But lately, it's been a lot of felt because of this Murphy app. I've been live streaming the entire development process of the Murphy app written in spelt on the front end and serverless functions and fauna DB on the back end.

### Bryan Robinson  20:18  
Very cool. Well, I appreciate you coming on the show with us today. And I hope you keep doing some amazing things both at Adobe as well as in all these awesome side projects you got going on.

### Brad Garropy  20:27  
Thanks a lot for having me, Brian.

### Bryan Robinson  20:30  
Thanks again to Brad for coming on the show this week. And thanks to you, our listeners for listening each and every week, week after a week. Now sponsor time and I'm really really excited to talk to you about a free course that our friends at auth zero have released. This course is going to cover building a full stack Jamstack application with next j s, air table off zero and tailwind CSS. Now next j s is going to be the front end framework. You'll learn all about designing with tailwind CSS air table is going to be for your database. And of course, for authentication, we're going to be using auth zero. So to watch this course, head on over to a zero to slash full stack Jamstack for all the details. And of course thank you for sticking around to the end, listening to our sponsors, visiting our sponsors, all that good stuff. Until next time, keep doing amazing things on the web and keep things jamming

Transcribed by https://otter.ai


Intro/outtro music by [bensound.com](https://bensound.com)