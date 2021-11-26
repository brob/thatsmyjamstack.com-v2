---
title: Dan Barak on making your own stack, the maturing of the Jamstack and more
date: '2020-11-15'
tags:
  - episode
  - season-2
audioFile: https://pinecast.com/listen/adf3bb7b-1006-4ca2-8958-43fb1a1e1ff5.mp3
description: This week we have the amazing Dan Barak. Dan is the co founder and COO at the Jamstack company Stackbit.
socialImage: /images/dan-barak.png
---

## Quick show notes

* Our Guest: [Dan Barak](https://www.linkedin.com/in/danbarak/)
* What he'd like for you to see: [Stackbit's offerings](https://stackbit.com), but also [reach to Dan](mailto:dan@stackbit.com) out for a conversation about Stackbit or the Jamstack in general. 
* His JAMstack Jams: [Stackbit](https://www.stackbit.com/) | [Next.js](https://nextjs.org) | [Sanity.io](https://sanity.io) | [Contentful](http://contentful.com/)
* His Musical Jams: Jazz; whatever Spotify plays to keep pace to

## This week's sponsor: Auth0

This week, we've got [Auth0](https://auth0.com) as a sponsor. While their prowess at authentication is important, they're also releasing a ton of new tutorials and courses on [their YouTube channel](https://a0.to/tmjyt), including a free course on building a full-stack Jamstack app with Next.js.

## Transcript
### Bryan Robinson  0:14  
Hello, everyone, welcome to another episode of That's My Jamstack the podcast where we ask the intriguing question, what is your jam and the Jamstack. I'm your host, Bryan Robinson. And this week we have the amazing Dan Barak. Dan is the co founder and COO at the Jamstack company Stackbit. Before we dive into the episode, though, I want to thank this week's sponsor, auth zero, we'll talk a bit about all the amazing educational content they're putting out at the end of the episode. If you're curious about that, Jamstack and auth education, head on over to a0/to/tmjyt for all the videos.

### Bryan Robinson  1:06  
All right, Dan. Well, thanks for being on the podcast with us today.

### Dan Barak  1:09  
Thank you for having me. My pleasure.

### Bryan Robinson  1:10  
Yeah, no problem. So tell us a little bit about yourself, what do you do for work? What do you do for fun, that sort of thing.

### Dan Barak  1:16  
I'm the co founder and COO of Stackbit. And we're the only platform and for the complete platform for the Jamstack. And so I come from a product background, I've been a product manager at Lyft and Facebook before that, and startups and before that, as well. And for fun, I usually do things that my six year old does, and means like a lot of Legos, riding bikes, and etc.

### Bryan Robinson  1:43  
Very cool. So my five year old is absolutely in love with video games, which I kind of apologize for, in numerous ways, multiple days a week. But yeah, that's that's pretty much my, my fun twos, oh, whatever my five year olds into right now?

### Dan Barak  1:57  
Exactly, yes, we just, we just started using the Switch. So he's, he's very much into that.

### Bryan Robinson  2:03  
That's, that's what we do quite a bit too. You just you watch daddy play, and then daddy gets to actually play video games a little bit.

### Dan Barak  2:09  
Exactly. Exactly.

### Bryan Robinson  2:12  
So tell me a little bit about what does it actually mean at a kind of a product company like Stackbit to be, you know, COO, what do you do on kind of a daily basis there?

### Dan Barak  2:20  
So the COO at a purely technology company, mostly I think, and it's about running the company smoothly. So it's, it's managing most of the of the people and making sure that they have what they need to move forward, and they're not blocked. And they're also, you know, on the administrative side, you know, that everything is a Okay, everybody's has, you know, contracts getting paid, like all that work smoothly, we're fully distributed company across the world. So making sure that part is running up and running. And other than that, is also kind of dealing with no as a co founder, and you also deal with a lot of product coming from a very deep product background. And a lot of the product work is done between my one of my other co founders, like in CO hot Pressman, and we're like working together on the product, making sure engineering is up to date and makes and, you know, has a good roadmap, we obviously have an engineering manager, but in discussing priorities in etc. Other than that, obviously go to market talking a lot with customers and clients, and selling in etc. Like just everything, making sure everything takes  Yeah, definitely kind of a catch all, but also some important things along along the the product side as well. 

### Bryan Robinson  3:48  
Yep. Very cool. So you've been at you, you mentioned Facebook and lifts some outside, you know, not to use the word traditional, but definitely some, some older, longer standing tech companies, but what was kind of your entry point into this idea of the Jamstack, of which sackbut is such a kind of an integral part. 

### Dan Barak  4:07  
Yeah, so as often happens, I think we use it these things happen from I've both like a domain and passion and from a personal passion, you know, and one of the things that was very, very much important to me was working with, with great people, and, and ohada. And I go way back, like 1012 years, as well as with Simon, our third co founder, who's the CTO. So we've, we've known each other for a very long time, we've worked in the past together and manage like not to kill each other. So so you know, it's like, very good signs. And, and, and so, you know, mostly, I've switched product domains a lot as I was transitioning between companies, and never did I kind of clung too much to like a specific domain and always They're very excitable and excited about everything. So I can deep dive very quickly into each domain. 

Unknown Speaker  5:09  
So I'm kind of like I would say, like even domain agnostic, it's much more important and to meet work with, with the right people and in the right state of mind and organizations and a space that I know that I can actually make a difference and help people, people. And so so I think that was my main driver. And, and just like, you know, from from the other perspective of like, the technical angle that working at Lyft, I was a group Product Manager, so I had like, several different teams. And one of them specifically dealt with and, you know, helped growth, marketers get things done, and she, like, work on the on the 10s of millions of SMS and pushes and emails that Lyft sends out, sends out to drivers and passengers. And I've seen how organizations you know, and interact around this, like the, the the boundary between engineering and marketing, and how everyone wants essentially the other to be successful. But also there are a lot of friction points, or marketers are blocked by developers, or developers are forced to kind of make very simple changes, typos, etc. Because the tools are not there. So for me, this was kind of a, really an opportunity to touch that. And make the whole I'm a very collaborative person, as a product manager, as well. So kind of facilitating that connection, and was very important to me.

### Bryan Robinson  6:40  
Very cool. So. So I'm kind of curious, like, the collaborative nature of kind of where the, where the Jamstack is kind of starting to go towards, like, how, how content people, editors, and developers and designers, how all of those kind of play together, it's kind of what drew you over to kind of this world, especially like in the Stackbit world.

### Dan Barak  7:03  
Yes, essentially making sure that you know, that the Jamstack is growing, and it's a wonderful, and platform, I think, or stack, you know, it's like it has great developer experience. And it's fast, it's secure, it's scalable, all those great things. And but from you know, like the marketing perspective, or the business person's perspective, and you're kind of going back in time, and you have to edit things in a way that they're disjoined, from the actual result, making it very hard to, to actually understand what you're changing, you have to look for, you know, how is this thing that I see on the screen right now, on my website? Where is it defined in the in the CMS? And how do I find it, and I change it? And if I change it, like, Is this too long? Will it fit? Okay? Okay, I have to build it, you know, I have to like, now wait seven minutes for my site to build just to understand that. So it feels like a very, very hard process. And we hear that from customers, both from like, agencies that are trying to move people over to this, you know, much better and much better ecosystem, and from people internally in companies. And one of two things happen, either they are presenting, you know, like, Hey, we want to, like, have all these benefits, and then they're presenting and the tools that are available to the business person or to like the non technical stakeholder, and they're looking at it, and they're like, whoa, wait a second, what is what is this? What do I do with with this interface? I don't want it right, give me WordPress, or something like that. Not that because it's good, but because, you know, allows me to do a little bit of my job, and better. And, or, on the other hand, is like the engineers making know, the right decision for the organization, transitioning to the Jamstack, but then kind of blocking in many ways. And the non technical people, you know, it's like, even like coin lists, in this in kind of hilarious, it's hilarious. You can like testify on your cell phone. It's hilarious. Maybe maybe stupid is the right thing. But it's like jam stuck, like you're in a place where like, some of the choices have been made. And now you're lacking, you know, this, this one solution, one platform, and that unifies everything, and you just have like, the separate tools.

### Bryan Robinson  9:31  
Yeah. And it's kind of it's oftentimes, you know, we talked about the, the benefits for the Jamstack has to developers, those are very obvious in many ways, like in terms of like, work in the code that you want to work in and, you know, not have to worry about the things that you don't want to worry about. And we talked about, like some of those end results, right, the websites that are out there, they're fast, they're secure, kind of out the box, but oftentimes the neglected audiences that kind of in between, like in between the developers And what is finally, finally on the site is copy, you know, copywriters, and editors and designers putting, you know, photography around. And it's definitely, I think an unders underserved to a degree audience for the Jamstack. Even though, if the website is faster and more secure, it's gonna be better in the long run, but if you can't edit it, that can also be a problem.

### Dan Barak  10:25  
Yes, exactly, this is and, you know, this collaboration, most of the websites and most of the, you know, am marketers working in a very collaborative manner. And, and organizations have their own workflows, you know, who gets to make changes, who gets to, you know, now we need a translation. So a page is now ready, it has to be translated into other languages. And it has to be approved, you know, sometimes by your manager, sometimes by legal. And oftentimes, you know, designers want to look at what, what you've made changes to, and kind of, you know, make that happen. And this is like, obviously, in large organizations, but even you know, even when somebody's publishing by themselves, they still have a little bit of a process, they go through, you know, like, they validated, it works well on mobile, and do a bunch of other things, you know, clicking the links, making sure nothing is broken, if you have an e commerce site, and making sure you know, end to end, you can you can complete a purchase, etc. So, so facilitating that, and making sure that and that collaboration can happen is I think key.

### Bryan Robinson  11:35  
So let's talk a little bit about stuck back. Because, you know, we'd like to talk about, you know, how you use the Jamstack professionally a decent bit, how are you utilizing it, obviously, Stackbit is a is a very Jamstack centric company. But like, philosophically speaking, how do you all kind of perceive the Jamstack. And we're, we're kind of going

### Dan Barak  11:56  
I think we perceive the Jamstack in a way that is very much and you know, about, about choices, and about customizing and picking the right solutions for you. That's why and you know, Stackbit is this kind of end to end solution and platform for the Jamstack, and allows developers to just pick whatever combination, and have site generator and CMS and, you know, themes or designs that work for them, this is very much into, it's about the not just fly by the choice, right? We will support and work with, with whatever tools you choose, you've chosen, but it's also if you if you choose to create a site with Stackbit. And that also kind of nothing is a walled garden and nothing is proprietary like you Am, as a developer who created this, you have access to the repo, it's like your repo, it's your and, you know, your space in the CMS. So Stackbit is very much and you know, we believe will provide a lot of value. And, and that's why we're not trying to build any walls around it, right, you can like build your site with staff bid and edit with the Stackbit studio, you know, send previews, publish, do whatever, if it's not valuable, stopping to use that that is just, like, super easy, they don't, you don't have to do anything. And even while you're using staff that if somebody really prefers to go into the CMS, you know, and like, you know, there's something more complex that they prefer to do with Sanity, or like, just make some changes there. Because like, that's, that's their workflow, then it all works together, right? The the the preview reflects all the changes that are made in code made in the CMS, whether it's within Stackbit or without. So having this openness is very important to us. And being able to, and support all the different tools in the ecosystem is important.

### Bryan Robinson  14:01  
That's a really interesting word choice there with with the fact that you're talking about, you know, choice. And oftentimes, I come from an agency background a little bit to you, you end up locking your agency or your company into a very specific stack, because you like x templating engine, or you like the benefits that you get out of y CMS. But in the future, you may not want those things anymore, or you may there may be the next cool development framework that comes out. And you wanna switch over to that, but maybe you've lost your clients and they think this is the only way I can edit or this is the only CMS that I know. And so, one of the one of the virtues I stole about the about the Jamstack is the idea that any front end developer can make a website from, from soup to nuts from beginning to end. But if they only specialize in that one Like front end framework, and it only communicates with a couple CMS is in a very specific way, it could be very difficult to make a switch. But sounds like making these pieces not to go back to your first question about having a six year old and playing Legos. But it feels like there's a lot of Lego pieces that we're hoping to kind of be able to make interchangeable so that we can use framework of choice with 18 different CMS is with, you know, all these different pieces.

### Dan Barak  15:26  
Yeah, that is that is very correct. And I think you're, you're right, that there are multiple use cases here, right. And oftentimes, people, especially the build sites for a living will kind of settle into one and framework and one workflow and kind of make that happen. And we support that fully, right. So you can, you can, if you have like a specific theme that you're working with, that has all the elements and all the pages and all the things that you were kind of like you would use for your clients, then and you know, you can import that into Stackbit create sites repeatedly with it, and then either make the customizations yourself in the studio, even without a developer that point, right, because if even if the developer has defined the framework, and then somebody was like a Tinker and like this, like a technical person can now work with the Stackbit studio and customize it, and then hand it over to the client, even allowing the client themselves to, to make changes. And when when I say client, like obviously, this is kind of like the agency setting, but the exact same thing happens within companies, right, the engineering team, the front end builds the site, and then they they kind of hand it over to the marketer, more product person to to build.

### Bryan Robinson  16:41  
So we definitely just change the word client to stakeholder, and then we're good to go.

### Dan Barak  16:45  
Yes, exactly. Yeah, I think like the stakeholder feels like more formal and kind of more rigorous, but yes, this is essentially Yes, you have the developers and you have the stakeholders. And so we definitely support that piece. But yes, we also we also support the the option to easily change, and, and switch and technologies, we see people that are using our site builder, right, they just, you know, they just go over just activate and can super easily within 60 seconds, create a website. And that website can be built with different configurations. So so you know, some people are just like iterating over all them and trying to see, you know, which CMS works best for them. What is, you know, what is the difference between using next js and Gatsby and Hugo and Jekyll and how everything is arranged. So they're learning from it. And I think the nice thing is that, you know, developers are kind of very much a lot of them are early adopters and like to fiddle around and play with things and change them. Having kind of this em studio that abstracts some of it from, you know, your stakeholder is very nice, because they, they don't have to learn a different CMS, and if this is using reference objects, instead of just you know, like, and other ways to represent content, and it's very much abstracted away, and the people who are more usually kind of more like, prefer, you know, like the same interface, and then would love to kind of like, have a specific workflow because they're trying to get something else done, right, they're trying to get their job done, which is changing the website to reflect the brand to get traffic to grow the company, and they would have a very stable interface to work with.

### Bryan Robinson  18:35  
Now, that makes that makes total sense. So, normally, at this point, we would ask, what's your jam in the Jamstack? And I've got some assumptions around what yours might be. So let's hear that and then maybe ask a follow up or two?

### Dan Barak  18:49  
Well, you know, I'd be lying if I'd say that ours is not my favorite, right is this, because I think, you know, like, being I've started out as a developer, and I think I've, I've kind of matured out of it too fast, you know, I was too eager to do other things. So I kind of like very quickly and got out of it, you know, just just stay and just switch to product management and switch to like, you know, being a founder of companies. So, you know, it's like, Am I feel my choices are probably, like, you know, less informed, and I love the fact that I have the ability to play around with our tool and super easy, like, if I had to start a Jamstack site from scratch, it would probably like, take me a week, you know, to define everything correctly understand the content schema, you know, and kind of make sure well, the web hooks are all set up and I make the right choices. And I I obviously you know, you know, kind of like many people and I'm very pedantic, you know, like, I really want to be like get the best you know, in class things. I would like to Spend an obsess over it for hours. And, but so yeah, so I really love this and this kind of ability to work quickly and fast and see things visually. And personally, when I, when I start, when I start in Jamstack site, which I do multiple times a week, is I really, I really love the themes that we offer, because there have been built in with the sun about, like, their design is great, I think but it's also they have the right content schema in place. So I have a lot of flexibility into changing things around, you know, I can, I can always add more sections, which things are like around in terms of like, if Is it like right oriented, left oriented? Do I have like images or videos or like, whichever of those work? Am I usually prefer to use next js. And in in terms of CMS is I kind of alternate all the time to keep me on my toes. And I think the it's usually Sanity and contentful. And also, you know, just like, plain am just using Git, you know, just putting markdown files in Git and having that it's always kind of like a simple and fast solution if you don't need anything, and fancy. So I

### Bryan Robinson  21:18  
put a few files together in a folder and you're done.

### Dan Barak  21:21  
Exactly. And then and then obviously, you know, we deploy to Netlify. And yeah, from that point onward, I kind of like, I switch to the studio and forget about all the others and

### Bryan Robinson  21:33  
let all those technical concerns just float away, because you don't need them anymore.

### Dan Barak  21:37  
Yeah, and they're like, you know, as, as somebody who's like been in product and all these, like, very data driven companies like Facebook and Lyft, I'm, for example, I'm a sucker for a B testing. You know, it's like, I just, I just can't operate without data. Yes, I have gut feelings. And I have, you know, kind of like a vision for certain certain things. But, and, you know, like, and AV testing on the Jamstack was always kind of such a pain. And we're now releasing, releasing this feature, which is in allows you to just like, if you're a business person, a marketer, product managers just create an A B test with one click of a button. And we're just we're sitting there, because we're sitting on top of everything else, we're just orchestrating all these changes. So we can, we can create a new branch in git, and GitHub, and then you know, another environment in the CMS and tie it to the to the AB testing feature on Netlify, eyes, and CDN and make that all kind of work together. And so for me, it was like a very kind of passion, project to nature, we can, we can do that. And people can actually make data informed decisions.

### Bryan Robinson  22:48  
Yeah, and it's one of those one of those interesting things. Like, it's a feature that Netlify has had, for most, like most the time that I've been using it, which is a long time now. But it was never everything that you need to actually do AV testing properly, say, Oh, you know, if you've got everything in markdown, you can have a new branch, and that branch can be, it's great that it's CDN served. And that logic is not in JavaScript or anything like that. But like managing data sets and your CMS and managing all these other pieces, kind of were left to the developer to figure out and it sounds like abstracting those out, means that a marketer can do it, which is really the end goal, something like a B testing. Exactly, exactly.

### Dan Barak  23:27  
And, you know, like I've seen, I've seen the way, you know, accelerating that ability. And like, I think in this case, like it's more than accelerating, it's like, as a marketer, with no developer, like you just couldn't run even an A B test. But even if you had a developer, it's like, it's so much work, as you kind of just described to get that working. And so so, you know, companies, we would measure em, if we built an internal tool that allowed marketers to just iterate faster, and try more things. It was bound, you know, like, it's just like, it's just like statistics, you know, part of these tests will be successful part not, and on average, it will drive each test, you know, will drive this amount of impact. So the faster you can move faster, you know, you can iterate and understand what works better, and just create so much more value for the business.

### Bryan Robinson  24:20  
It used to be to be able to have these super simple AV tests, you went to JavaScript, which that itself, it's almost like a Heisenberg principle, the act of adding JavaScript to the page to test something is going to impact the test the thing that you're testing, it's an Heisenberg principle of JavaScript or something like that. Yeah, it's great that great that we can utilize Netlify CDN A B testing, but also get all the, the marketing aspects of it as well. So it's best of both worlds almost.

### Dan Barak  24:49  
Yeah, and I think this is this is just, you know, it's it's one example. Another thing I'm thinking about a lot is is just internationalization and and you know how Having multiple languages, and, you know, I've seen this, I've seen this again at Lyft, when one of the projects that we had we drove was just making sure that Lyft is available in multiple languages. And until, you know, until my team came along and changed that, and I think at the end of 2018, you know, it was like, it was just English in English. And making those changes, you know, part of it is like, within the code, and part of it is, is in the CMS, you know, because, like, there's, there are application aspects, and there's like, website aspects. And it's just, it's just so hard to kind of make sure that everything works correctly, and every string is wrapped, you know, like, I'm doing air quotes here, you can see that, but, you know, everything is like properly wrapped, and like developers have to provide context cycle, this string appears on this page. And it is the explanation of what happens if you press you know, submit, and having that, you know, having a tool and, like Stackbit that allows you to just switch environments, this is another thing that we're adding, you know, switch kind of like the locales and be able to look at them separately and be able to just, you know, have the people who deal with the German side, see the German strings and translate them and be able to, like, look back and see, like, Oh, this is the content, this is how this is what it meant in the English version. And, and quickly switch between those is also very meaningful. And, again, these tools exists, I think, the one thing that is kind of missing is that glue, that orchestration, that tying them together, and which, which we felt is very much needed.

### Bryan Robinson  26:52  
And that is not even that that point didn't exist, but that point existed inside of people. It was a developer, those having to do all that. And now there's a service and we developers, we love the service that can get rid of the stuff that we don't want to deal with.

### Dan Barak  27:04  
Yes, exactly. It's like, you know, it's like as a developer, you can like set things up and in a way that you like and you feel is the right way and then you can you know, sleep at night knowing that like everybody is able to work and do that within their kind of rail guards and or guardrails, sorry, in bounds and and make sure you know that this this, everything works properly and correctly.

### Bryan Robinson  27:31  
Very cool. So now it's time for the big question, which is, what is your actual jam? What's your musical jam right now? What's your favorite song or musician? Or maybe just genre?

### Dan Barak  27:42  
Yeah, so I think and I think this is like the the one the one aspect of my life that is very much I feel like super ignorant about like, I love listening to music, but I have a sign of kind of like a artists blindness, you know, maybe or something like that. I just like, don't have something some light body specific that I just listened to all the time. I think jazz is probably my, my working music. My dad, like really love classical jazz and got me into it somewhat, you know, I think like it was in my teens, so I have liked it have felt compelled to rebel against it. For no, so, you know, but I think it's very much like when I work this is this is my jive. And then, you know, when I'm running, I'm just trying to get Spotify to, to feed me something that will keep the pace going.

### Bryan Robinson  28:41  
You got to keep your feet moving to the beats that beats copy the exact beat that you need for for running.

### Dan Barak  28:47  
Exactly, exactly. And, and I've sometimes I really love audiobooks and podcasts. And so sometimes I run to those, I tend to do much worse usually. Yes, as the running results go,

### Bryan Robinson  29:02  
yeah, I can definitely feel that. So is there anything that you'd like to promote anything you might get to the Jamstack community as a whole, that you are the stack that is doing?

### Dan Barak  29:10  
I think I think I honestly, I've done like so much self promotion here. And you know, like that, that stems from like the very best intentions. And I think from a belief that this is actually it, but yeah, I don't I don't want to I don't want to add anything to it. I think we we've spoken about most things in context. And so So I think, you know, definitely what I would say that I love talking to customers and to users and to anybody who's like, has an opinion about, you know, the Jamstack our specific tools or anything else in the ecosystem websites. And so I just welcome these conversations. And I think I learned every like every single time that I talked to anybody that's, you know, outside the company. I learned something new. I do learn new stuff from people in the company as well. Just kind of like to highlight that piece. So if people want to reach out to me, I'm really happy to discuss, you know, answer questions, or anything like that you know about the Jamstack, about Stackbit. And yeah, that's about

### Bryan Robinson  30:20  
it, I say. And if there's one thing that developers do have is plenty of opinions. So yeah, hopefully, hopefully, you'll get some best way to get in touch with you like Twitter, LinkedIn,

### Dan Barak  30:32  
I think I'm much more of like a of an email person. And so Dan at Stackbit.com, just will will do the trick, and beautiful and that's why I'm like, I'm trying to get to inbox zero for things that matter. And usually I fail like miserably for like the general way emails that I get, but I do tend to read and respond to almost anything that you know, is kind of tells us something about the business opinions or anything like that. It was like a genuine outreach.

### Bryan Robinson  31:08  
Very cool. That's That's it. That is a noble goal. I'm, I can't imagine what your inbox might look like. But uh, but I appreciate that. You're that you're working towards it.

### Dan Barak  31:18  
Yeah. Cool.

### Bryan Robinson  31:19  
Well, thanks a lot for coming on the show today. And I hope you keep doing amazing things of stack but and in Canada, Jamstack as a whole.

### Dan Barak  31:26  
Thank you so much for having me. This is fantastic.

### Bryan Robinson  31:31  
Thanks again to Dan for being on the show. And thanks to all of our dear listeners for tuning in Week after week. Be sure to star heart favorite or you know, whatever in your podcast app of choice. Now sponsor time this week, we're lucky to have Auth0 backs our sponsor. Auth0 is an amazing authentication platform, but they also have a wealth of amazing content coming out regularly on their YouTube channel, including a free course called Full Stack JamStackbit Next.js. If you're interested in learning more about Next, taking the Jamstack further, authentication on the Jamstack head over to a0.to/tmjyt for their YouTube channel. 

### Bryan Robinson  32:15  
That's it for this week. But until next time, keep doing amazing things on the web and keep things jammy

Transcribed by https://otter.ai


Intro/outtro music by [bensound.com](https://bensound.com)