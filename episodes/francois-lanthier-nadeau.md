---
title: Francois Lanthier Nadeau on decoupling in the JAMstack (and life), ecommerce and more
date: '2019-12-10'
tags:
  - episode
audioFile: https://pinecast.com/listen/0f12661c-193d-4464-b8bf-c8c579e40e83.mp3
description: In today's episode, we're joined by the former marketing lead now CEO of the e commerce startup Snipcart. I'm talking of course about François Lanthier Nadeau. 
socialImage: /images/francois-lanthier-nadeau.png
---

## Quick show notes

* Our Guest: [Francois Lanthier Nadeau](https://www.flanthiernadeau.com/)
* What he'd like for you to see: [Snipcart V3](https://snipcart.com/) | [His blog where he talks about destigmatizing mental health](https://www.flanthiernadeau.com/)
* His JAMstack Jams: The Decoupling Philosophy of the JAMstack | [Stackbit](https://stackbit.com/) | [Netlify](https://netlify.com) | [Sanity.io](https://sanity.io)
* His Musical Jam: [His "Is that Soul I feel in my guts" playlist](https://open.spotify.com/playlist/3n9u4xHFL9vgY6dQ6NDcbp?si=I5wdJGxwSkqWZ4876INYTw)

## Other Technology Mentioned
* [Jekyll](http://jekyllrb.com)
* [Middleman](https://middlemanapp.com/)
* [Nuxt](https://nuxtjs.org/)
* [Gridsome](https://gridsome.org/)

## Our sponsor this week: [TakeShape](https://takeshape.io/thatsmyjamstack)

## Transcript
### Bryan Robinson  0:02  
Hello everyone and welcome to yet another fun packed episode of That's My JAMstack the podcast where we asked the age old question, what is your jam and the JAMstack. 

### Bryan Robinson  0:11  
I'm your host, Bryan Robinson and this week I'm joined by the former marketing lead now CEO of the e commerce startup Snipcart. I'm talking of course about François Lanthier Nadeau. 

### Bryan Robinson  0:22  
Also back this week is our amazing sponsor TakeShape. Stick around after the episode to hear more about their content platform or head over to takeshape.io/thatsmyjamstack for more information. François, thanks for thanks for coming on the show today.

### Francois Lanthier Nadeau  0:37  
Yeah, you got it. It's my pleasure.

### Bryan Robinson  0:39  
So I've been following following you on Twitter for a little while, but I go ahead and give us an introduction. who you are what you do for work what you do for fun. 

### Francois Lanthier Nadeau  0:45  
Yeah, good. Same thing actually been following you on Twitter for a while to listen to some episodes recently. So yeah, I'm CEO at Snipcart, it's an ecommerce solution for developers and then also the organizer of the JAMstack Quebec meetup that we host here at the Snipcart offices in Canada, in Quebec, Canada. For fun I play video games I read, I listen to audiobooks and podcasts I write, and I try to spend as much time with meaningful people like my girlfriend, family and friends. And that's pretty much it.

### Bryan Robinson  1:24  
And what kind of things do you write? Like, is it is it tech stuff? Or is it not tech stuff?

### Francois Lanthier Nadeau  1:28  
It's actually both. I come from a marketing background. So sometimes, all right, I don't know tactical stuff on content marketing or SEO. But sometimes I'll write more personal stuff. I kind of have this semi official mission of talking more openly about mental health. And I've had some personal issues with this in the past and I try to share stories and tips and lessons regarding this. So yeah, sometimes it's more in that order.

### Bryan Robinson  1:59  
Okay, great and That's definitely a an important mission in tech. There's a lot of people not talking enough about it. 

### Francois Lanthier Nadeau  2:05  
Yeah, I think men especially sometimes, sometimes we have a harder time. So I don't know. It's Yeah, I find some some value in Redemption of my own and trying to do that.

### Bryan Robinson  2:17  
Excellent. All right, so So let's talk about the JAMstack a little bit, It's a JAMstack podcast. So what was your What was your entry point into the JAMstack or into the idea of static sites or whatever you like to call it?

### Francois Lanthier Nadeau  2:30  
Yeah, we used to call it something like modern static site. It was Middleman and Jekyll. Mostly that got us into this space. So when we were just starting out as a SaaS, ecommerce, Saas for devs, we were just, you know, trying to get some traction to our site and some signups and stuff. So we were experimenting with different content marketing, strategic And at one point, I was asking our developers about tools they love and our co founder and lead developer, Charles mentioned Middleman. And he was saying that it was gaining a little traction and popularity through the dev community. So we we tried to build a site with it and integrate Snipcart with it. And it went just fine. 

### Francois Lanthier Nadeau  3:23  
Yeah, Snipcart is a front end centric, e commerce shopping cart that lives basically just in your front end. And we do all of the back back end logic. So it was a good fit from the start with the JAMstack approach. But it wasn't designed as a JAMstack ecommerce tool. We kind of stumbled upon the whole paradigm and tooling to these marketing experiments, if you will.

### Bryan Robinson  3:53  
Cool. And Snipcart started in what? 2013?

### Francois Lanthier Nadeau  3:59  
Yeah. Yeah, that's about right. Late 2013.

### Bryan Robinson  4:03  
Okay, and and so so through that, that experimentation? Did y'all shift away from middleman? Are you still using that sort of thing when you're playing with your marketing stuff? Or is it in the new? The newer stuff that's coming out?

### Francois Lanthier Nadeau  4:16  
Oh, most definitely. So we try to evolve and experiment alongside the community with tools that were popping up. So we kind of created open source demos and get them repurposed for established tools like Jekyll. But we also, I mean, we also, for instance, experimented with Gatsby when it was just an open source repo with no website, or branding, or it wasn't that big of a deal, you know. So, yeah, I mean, it's, it's part of our DNA to try and experiment and have thousands of side projects. Like developers usually do. So we thought we might as well try to harness this into, you know, attraction channel that brings us people and that also helps the community when we do these tutorials and and GitHub repos and stuff.

### Bryan Robinson  5:15  
So obviously, being not necessarily a JAMstack company, but a company that is very strongly tied now into the JAMstack. How are y'all other than the side projects approaching the philosophy of the JAMstack? I'm real curious about e commerce and the JAMstack. I think that's going to help us take take it to the next level.

### Francois Lanthier Nadeau  5:33  
Yeah, ecommerce is... it's a complex based. And you can you can see that just by looking at the wide spectrum of solutions that are offered both to developers and non developers. In terms of influences and application of the actual philosophy, I'd say we, we really embrace or try as much as we can to embrace DX first philosophy. So it's as JAMstack caught popularity and fire and everything because it offered a good developer experience. And that sense, we're kind of trying to do the same thing with Snipcart. And we have been from the start, it's always been a developer first solution, something that is not constraining. It lets you work with the tools you love. And that's lightweight that improves your workflow instead of constraining it. So that that strategic in that approach of like the bottom up influence in terms of business, so we first try to influence and convince a developer that it's a great tool. And then we leverage the developers authority and influence inside a company or towards his client, their client. 

### Francois Lanthier Nadeau  6:55  
To make make sure the managers and merchants are on board with that tool. Also. So this this the, the dx is something we're really trying to focus on right now. And you see, it's funny because the dx is great. Like it's important to provide a good developer experience. But then if the end of to some non technical client or some marketing team is done, and they do not have like the ease of use that developer had when they were working on on their stuff, it's not it's not good for the gemstone. It's not good for the old ecosystem was tooling. And that's why you're seeing a lot of tools pop up, to cater to this problem. So editing CMS site building, hosting, one click deploys, all of that stuff is is is layered on top of the the core dx experience of the jam stack. And yeah, we do the same thing with the hosted merchant dashboard. So the developer works with snap cart, they integrate it on a static site, let's say or with a headless CMS. And afterwards, the merchant is off is offered a hosted dashboard to manage the e commerce operations. So they don't have to play with code or get repositories or whatnot to manage your sales, ecommerce.

### Bryan Robinson  8:25  
And so, one of the great things, especially on the developer experience side of thing is this kind of whole host of API's that are available for us. I'm kind of curious for your perspective on on. There's been some pushback from non JAMstack developers about kind of this this fractured ecosystem not fractured, that's a bad word, but like a multi faceted ecosystem. Are you experiencing that with, with people with clients, like oh, well go login to Snipcart for your ecommerce dashboard, but over here to manage the other side. 

### Francois Lanthier Nadeau  8:56  
Yeah, that's that's actually a great question and I was talking was, there's this pendulum in tech that I feel is swinging between monoliths and then thousands of SaaS that are fragmented, like you were saying, but so some people would prefer the administration part to be enabled in one single place for their clients. And for these people, if they're motivated, and I don't know, talented in terms of the tooling they're using, they can, of course, integrate a lot of Snipcart functionalities inside a CMS directly. So we expose we have an API for this and we've seen it done on various sites. CMS, like Craft CMS is one of the first that did it well, so there are some plugins for snip card into some other cmss that can help in that regard. We tried to develop them ourselves in the beginning, but we realized it was just a whole mess, like maintaining everything we're developing with the other plugins that are specific to a certain CMS, for instance. So yeah, I'd be lying if I said, sometimes it isn't a pain. But many times, the ease of implementation and customization of Snipcart is a bigger benefit than the pain of having to login into an extra dashboard.

### Bryan Robinson  10:30  
Sure, and I mean, from from my experience in agency world from a few years ago, we would create a Shopify site, but then also use another CMS through the marketing side, and that itself was a pain too. 

### Francois Lanthier Nadeau  10:40  
Yeah, it can happen. But you know, Shopify is a great tool also. And I'm not like, I know that we used to say it was a very closed ecosystem and whatever in the beginning, but I think it's evolved a lot and some developers, they get so it also depends on It's so it's so complex choosing a tech stack nowadays because of this whole host of options. But the I think the thing that's very cool with the JAMstack is that it can grow well, it can evolve well, so you can start with a minimal number of tools, and then build upon them. And maybe when once you get to a point where you have enough revenue enough traction, maybe then you you move to a platform that's more monolid. So yeah, I don't know, I think it's a very solid entry point for web projects.

### Bryan Robinson  11:38  
And it kind of I feel like e commerce especially it's this kind of world where you can ramp up complexity super quick. You can start very, very simply, and even like Shopify in terms of its you know, quote, unquote, simplicity is relatively complex and you get stuff like big commerce and Magento. And I shudder anytime I think about e commerce personally, but It gets complex fast for, for that end users. But for customers at that point? 

### Francois Lanthier Nadeau  12:07  
Oh yeah, most definitely. I always joke about. So a Snipcart, we built an e commerce tool for developers. So developers don't have to worry as much about e commerce as they they could have. But if we were to start again, we probably build another product, because it's super complex. And I hear these kinds of echoes from people who are building on top of email Also, sometimes. Yeah, I mean, it's infinite number of features, feature requests coming in from every angle. And having just stepped up a CEO slash product owner. Geez, I can tell you that prioritizing and saying no, and developing the right stuff that benefits both the clients and the best Isn't this? It's a challenge. Yeah,

### Bryan Robinson  13:04  
Especially since you've got both you got to maintain that perfect kind of developer experience and give, you know, user experience for the e commerce managers to 

### Francois Lanthier Nadeau  13:12  
Oh, yeah. Oh, of course. And, like, we're, we're proud of what we built. And it's a good product. But I'm not the I'm not. I don't know. I don't have pink glasses. I know that it's an imperfect product. And also, like, we come from a place of a hybrid bootstrapped start. So we were bootstrapped inside a web agency in the beginning, like six years ago, but we soon grew into our own company that's distinct and profitable and whatnot. But we're still a bootstrapped player in a mostly non bootstrapped world, the e commerce giants and whatnot. Most of them are VC backed or have big money. So the challenge in terms of what we're working on, that becomes critical. And in a sense, in other areas it served as well to have this proximity and smallness and agility. So,

### Bryan Robinson  14:17  
So so with Snipcart being adjacent to the to the JAMstack. What's your current jam in the JAMstack? What's your favorite philosophy or product or technology? Yeah, that's,

### Francois Lanthier Nadeau  14:27  
That's, that's, that's a question that you record it and then a few months later you might want a new answer. But one of the philosophies that I like the most about the JAMstack is the notion of decoupling. 

### Francois Lanthier Nadeau  14:41  
So, I try to mimic this into my work in my personal life too. So at work, you know, we're trying to do wanting well, and not to be over to place product. And it's hard since we're doing e commerce and e commerce is all over the place. But in terms of management, and internal Team, we're also trying to delegate and trust other parties to do their job well, so we can sync up when it's time, but we don't walk on each other's shoes. And you know, in life, it's the it's the same thing. I think the non technical and non startup part of my life really feeds back into the work one. So I'm trying to decouple officially some activities and relationship and discussions. So so I can, you know, work on some other skills and stuff and then have a different point of view in a different energy when I come back into the business and development world. 

### Francois Lanthier Nadeau  15:41  
And yeah, so to answer the question in terms of tooling, more specifically, Stackbit that was on the podcast, I think the last one or one of the last ones. That's that's very good tool. And we were talking about layering some user friendly tooling on top of dx. Cool for dev tooling. They're doing a great job at this as a not not not developer, I can like build a JAMstack site, and in minutes. So this is great Netlify for developers. Also, they're building a platform that's becoming very rich and useful. And internally, we're using more and more Sanity as a headless CMS. And Nuxt, to generate the static site. And some more dynamic functions in the fronted. So we've used this for our new documentation. We released the V3 of Snipcart, a few weeks ago or months, and yet we're using this for this and we'll probably use anything Nuxt to an or maybe Gridsome for the upcoming marketing site. So yeah, I mean, it's this is a dynamic ecosystem. People are motivated people are friendly when we were in New York, was speaking on a panel gems tech conference conference in New York for e commerce and I don't know it just it's a great vibe. And I feel like it's it's cool community to be a part of right now 

### Bryan Robinson  17:06  
How's the actual physical community for for the JAMstack meet up and up in Quebec?

### Francois Lanthier Nadeau  17:11  
Oh, it's small but growing, and we're around 20 people when we do the meetup. And what's fun is that we've like we're always gathering feedback in iterating each meetup and some of the feedback we've been getting is, okay, so I know I can make my own blog with Gatsby and it's very cool and react and whatnot. But I want to do this in production. I want to do actual work for a client in my agency or as a freelancer with this. So show us some production examples. 

### Francois Lanthier Nadeau  17:46  
So we kind of decided to do some more real life technical demonstrations of look at this website and the wired we built, it is running for clients and some marketing people are using it. And it's a real production ready project here, how we here's how we bundled it. So that's great. And we're trying to push towards this like have more agencies use static sites for simple sites, have more agencies trying to experiment with headless CMS to decouple the front end if the clients that need to push some stuff on mobile on some some screens or some and desktop, so I think it's growing but it's Yeah, it's still a teenager in terms of adoption on its life cycle.

### Bryan Robinson  18:33  
Alright, so I don't want to you know, blow our time estimate for the episode of the water but what's your what's your actual jam right now? What kind of music Are you listening to favorite song favorite artists? Yeah.

### Francois Lanthier Nadeau  18:44  
I've been curating a Spotify playlist on my personal account that I titled, is that soul I feel in my guts. It's a weird mix that really makes me feel like alive and it's like the Janis Joplin and other Sam Cooke and other cool artists like this. So this is this is my answer

### Bryan Robinson  19:08  
So you're going to give me that link right? 

### Francois Lanthier Nadeau  19:10  
Of course. Yeah. 

### Bryan Robinson  19:11  
Perfect, perfect because actually, I love that that type of music too. So got it. I'll be listening to that personally and then we'll put put it in the show notes too. Cool. 

### Bryan Robinson  19:19  
And so so finally, what do you want to promote today? What do you want to get out in the open in the community?

### Francois Lanthier Nadeau  19:24  
Um, great question. Well, your podcast, it's good. Thank you for doing it. Much appreciated. Of course, Snipcart's latest version, the V3 is out, snipcart.com. You can check out the documentation and tell us which think other than that. There's this semi official mission of Destigmatizing mental health in tech and my personal life that if some people are interested, flanthiernadeau.com. So my name .com. I have written about this over there.

### Bryan Robinson  20:00  
Great, and we'll put that in the show notes to to make sure everyone can find their way over. Cool. Cool. Well, I really appreciate you taking the time and talk with us today. And I hope you keep doing some amazing stuff over stuff card.

### Francois Lanthier Nadeau  20:10  
Okay, well, thank you have a good day.

### Bryan Robinson  20:14  
Everyone is Bryan again. And I want to take a second to thank this week's sponsor TakeShape. TakeShape calls their offering a content platform. And that's really the best description for it. They have a handy CMS, a static site generator and a simple GraphQL API already for use on the JAMstack. They may have all that power, but they also work within your current workflow. I'm currently converting one of my sites over to use the TakeShape CMS but because I can bring my own stack site generator, I don't have to rewrite a lot of code. I just changed where my data come from, and bam, instant upgrade to my CMS. 

### Bryan Robinson  20:43  
They also have new features coming on all the time, like their new mesh product that allows you to mix and match data from multiple sources into one neat graph qL interface, you can sign up for a beta of that new product over at takeshape.io/thatsmyjamstack. 

### Bryan Robinson  20:59  
And while you're here, don't worry Get to leichhardt Subscribe, all those great things that you can do and your podcast app of choice to the that's my jam sec podcast, the more likes and subscribes and all that good stuff that we get, the more people find out about this amazing new way of doing design and development on the web. As always, thanks for being a listener and we'll see you next time. Until then keep doing amazing things in the JAMstack.

Transcribed by https://otter.ai


Intro/outtro music by [bensound.com](https://bensound.com)