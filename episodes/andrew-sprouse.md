---
title: Andrew Sprouse on specialized services, amazing APIs and a welcoming community  
date: '2019-09-17'
tags:
  - episode
audioFile: https://pinecast.com/listen/e767c87f-7512-4c0d-927b-1fb24de5aa54.mp3
description: In today's episode, I’m joined by Andrew Sprouse. Andrew is a cofounder and CTO of the amazing JAMstack company TakeShape. 
socialImage: /images/andrew-sprouse.png
---

## Quick show notes

* Our Guest: [Andrew Sprouse](https://www.takeshape.io/)
* What he'd like for you to see: [TakeShape's new Mesh serve](https://www.takeshape.io/mesh/)
* His JAMstack Jams: [Netlify](https://netlify.com) | [Gatsby](https://www.gatsbyjs.org/) | And of course [TakeShape](https://takeshape.io)
* His musical Jam: The timeless Metal of [Iron Maiden]() and the Thai-inspired acousitc stylings of [Khruangbin](https://open.spotify.com/album/42j41uUwuHZT3bnedq2XtM?si=6D4FzGUzTnuuAYLqCaMkTg#_=_)

### Other Tech mentioned

* [Webhook CMS](https://github.com/webhook/webhook-cms)
* [FaunaDB](https://faunadb.com)
* [Amazon AWS](https://aws.amazon.com)
* [Imgix](https://www.imgix.com/)
* [Cloudinary](https://cloudinary.com/)

## Transcript

### Bryan Robinson 0:00
Hello everyone! Welcome to another episode of the That’s my JAMstack podcast where we profile amazing people working in this new methodology. In this podcast, we dare to ask the age-old question “What’s your jam in the JAMstack?!” I’m your host Bryan Robinson and today I’m joined by Andrew Sprouse. Andrew is a cofounder and CTO of the amazing JAMstack company TakeShape. 

### Bryan Robinson  0:59  
So, Andrew, thanks for coming on the show today. Can you give our listeners a little background, who you are what you do for work and for fun?

### Andrew Sprouse  1:05  
Yeah, great. Thanks for having me, by the way. Um, so I'm Andrew. I'm the CTO and co founder of a company called TakeShape. And take shape builds tools for JAMstack developers. And outside of TakeShape. I like to cook I like to ride my bike. And I like to code. So

### Bryan Robinson  1:27  
very nice. So that not not just coding, but also cooking and bike riding. What kind of stuff do you cook?

### Andrew Sprouse  1:32  
Oh, I'm, I'm very passionate about barbecuing. So any type of you know, charcoal fires, smoking. I have like a wood pizza attachment for my grill. So it's that's like a fun project on the weekends.

### Bryan Robinson  1:49  
Very nice. I'm from Memphis. So I take barbecue very seriously, we might not want to get into strong opinions on that too much.

### Andrew Sprouse  1:55  
yeah, I think you would win on that one.

### Bryan Robinson  1:59  
So obviously, now you're a CTO of a JAMstack company. But what was kind of your entry point into the JAMstack world?

### Andrew Sprouse  2:06  
Yeah. So my introduction to sort of static sites and JAMstack goes back to 2010, when we first started using AWS at work, and at the time, I was working with my co founder, Mark, but at Newsweek magazine on the web team there. And so we found out that you could just put HTML files on s3, and then you could host them, basically with zero effort. And it was super fast. And so that was like, wow, if we could really do you know, the whole website this way, that would be amazing. 

### Andrew Sprouse  2:48  
So fast forward, like a few months, Mark left to pursue his own creative agency. And one of the first sites that he did was just some HTML, JavaScript and CSS on on s3. And it was the first proof where it was like it was this site for a charity called the Dobbs stories. And it was this first proof that, you know, you could build a full featured website, just with static files. And so that sort of influenced the way that we started to build from that, then on.

### Bryan Robinson  3:24  
Okay, so So when you were at Newsweek were y'all using anything other than just hosting the static files on s3, were you going bigger? Or was it still like you had your content management system for the news? And

### Andrew Sprouse  3:33  
yeah, so unfortunately, back then, we were using enterprise CMS called, it was called Day CQ5. Now, it's called Adobe, AN so since everything couldn't be static, we would spend a lot of time caching, like doing really robust caching. And so that was kind of like, the website, in effect was static. But it was just being served from a cache as opposed to proactively pushing it out to, you know, s3 or Netlify or something. So we we didn't have the tools back then to be able to make the whole site static. So we had to use this traditional CMS.

### Bryan Robinson  4:17  
I actually worked in a news organization for about six years. And even like the side projects we did, we're still like database driven WordPress driven kind of stuff. And then we had our big content management system stack. Did y'all do any side projects like that on on static? Or were you like hosting in some other way?

### Andrew Sprouse  4:34  
Yeah, so the discovery was for was for, you know, a side project was like, you could do a micro site with static hosting, but you can do the full blown media experience.

### Bryan Robinson  4:48  
Gotcha. And so so there's that breakaway agency proof of concept. And then what was the big explosion point for you at that point? What what kind of tipped the scale into the giant, like static sites that you were doing? And then what was the JAMstack tipping point?

### Andrew Sprouse  5:04  
So the tipping point really came along, when we found out that, you know, this is really clicking for the agency. So actually, fast forward a couple years, I joined Mark at the creative agency to help him with technology. And so we're working together. And we're realizing that every project that we do with static goes so smoothly. And you know, it's an amazing end result for the client. And so we start to push all of our clients to go static. And that just got easier and easier when there was more tools. And we had a really favorite tool called Webhook CMS. And it was sort of like a CMS and static site generator sort of built into one. And it was like that, for us was like, Whoa, if you combine this concept of Headless CMS plus static site generator, you get this amazing end result, it's easy to set up. And, you know, the the performance is great, and you don't get any calls, you know, late at night that the site's down or have any maintenance issues.

### Bryan Robinson  6:25  
Nice. So so the JAMstack philosophy is professional, you've just been doing them for what sounds like like four or five years now as like your main go to what about personally or doing anything personally with the JAMstack and your side, like coding projects?

### Andrew Sprouse  6:38  
Well, I'd love to have more side projects right now. But my, my main project is kind of my everything right now. So working on TakeShape. And actually building tools for the JAMstack on the JAMstack. Is is what I spend all my time doing nowadays.

### Bryan Robinson  7:02  
So talk a little bit about that like building the JAMstack with the JAMstack. How does that work? How does that work?

### Andrew Sprouse  7:08  
So TakeShape started out as a headless CMS. And from the very beginning, we wrote the API first. And so being in a jam, Sac State of Mind, we're like, well, how can we do this with no servers. So we built the back end all on AWS lambda using API gateway. So that was that was sort of the first step. And then we realized that our client app could simply be a static, single page react app that we host on s3. So it's actually using JAMstack techniques to build a CMS that's supremely useful for people who are building on the JAMstack.

### Andrew Sprouse  7:55  
And we also incorporated just like our Webhook inspiration, we built a static site generator directly into the CMS so you could have the entire experience in one product.

### Bryan Robinson  8:09  
I see that more and more in like JAMstack companies right now. I mean, Netlify is packing in like four or five different services. Obviously, AWS has a whole bunch of stuff built into it. And then I see you've also got the Mesh product, which is building an API's together, how's that been going?

### Andrew Sprouse  8:25  
So the mesh has been an adventure. It's a problem that we've solved on our own many times, you know, for specific point to point things. But it's been an amazing adventure to try to figure out a way to generalize it and make it easier for everybody. So everybody can benefit from our experience, and frankly, our pain with integrating API's. 

### Andrew Sprouse  8:51  
So being able to use that mesh product in conjunction with our CMS product is just a, you know, it's the natural extension. So you have this idea of headless CMS with a custom data model. But then what our customers came to us for said, This CMS is great, but I have all these other things that I need to incorporate into my project. How do I do that? And what the best technique? And well, you know, as soon as we, our answer was, well, you have to launch a Netlify function and write all this custom code, and here's a sample project and then get repo that shows, you know, the sample people, you know, the eyes would roll back and, you know, glaze over. And they would sort of stop listening at that point, because they wanted it to be a plugin, or some sort of out of the box solution. So we realized there was a need for something like take shape mesh.

### Bryan Robinson  9:53  
Definitely, yeah, when I was a, I actually have a little website, that's a repository of various products. And it's like, my client wants x, and there's so many things that clients want, and some of them make sense. some of them are a little bit weird, but, uh, but in the end that that is one of the impediments to getting JAMstack in agencies, at least when I worked in an agency that was one of the one of the problems?

### Andrew Sprouse  10:14  
Yeah, absolutely. It's, it's like, the tools can be amazing, the end product can be amazing. But if you can't package it in a way that the client understands, you have a really hard time selling, you know, them on it. And that's something that traditionally WordPress, and traditional products have done really well, where it's like, oh, well, you need this feature. Well, there's just some random plugin, some guy wrote that, that kind of does that. And maybe it will, will work. But at a marketing level, that's amazing. Because like, oh, WordPress has infinite features.

### Andrew Sprouse  10:54  
And then as the developer, you're saddled with some guys, you know, plugin that he wrote for one project, and you're kind of like, well, now I have a lot of work to do. And so the amazing part of the JAMstack is that each company that creates a JAMstack service sort of focuses on the thing that they're best at so Netlify, you know, is the gold standard for static site hosting, and you have, you know, image services like Imgix and Cloudinary and analytics and, and, you know, e commerce services, and so everybody gets to specialize. But then it also is like, well, now how do I bring it all together? And, and that is then thrust onto the developer. And what we found is that, you know, the developer has plenty of work to do, of actually making your product. So let's, let's give them a shortcut. And they're still using these best in class service is, but we're making them easier to combine.

### Bryan Robinson  12:03  
I really like that concept of Mesh. Is it out of beta. Like, I remember a couple like a month ago, I tried to get in, but there was in beta, so I skipped it.

### Andrew Sprouse  12:11  
Yeah, we we currently have a beta waitlist going on. So I would encourage you to sign up, and we can sort of like move you up to the top of the list. And, yeah, so so we're currently, we're currently building out all the features, and it's super early. So, you know, we're getting great feedback from our initial users so far. And, you know, we're really excited we can't wait to, to, you know, release this to a wider audience. And actually, in October, we're going to be at the JAMstack_conf inSan Francisco, and going to be presenting, you know, like 10 minutes, overview of the Mesh and, and sort of, hopefully, we can open it up wider at that point.

### Bryan Robinson  13:05  
Very cool. Are you gonna go out and be like, Matt Billman and like, deploy on stage? Or maybe, maybe keep it in beta until week after?

### Andrew Sprouse  13:13  
I don't know. I mean, that's a pretty brave guy. He's an and much smarter than I am. So, you know, he can get away with that. Mine might be a little bit more canned.

### Bryan Robinson  13:27  
Alright, so obviously TakeShape is one of your jams in the JAMstack, but what are some others? What are some of your other favorite tools and products and things that you really enjoy using?

### Andrew Sprouse  13:37  
You know, it's sort of like the JAMstack, it's hard to have favorites, because there's so many different functionalities. So I've already mentioned  Netlify, you know, they're sort of the leader in this space, and they do, every product that they come out with is, is really, really great. You know, we use their static hosting extensively. And, you know, if you like react, I think Gatsby JS is great. You know, it provides a great way for you to build out a site and then sort of like, add in those single page features that you would want.

### Bryan Robinson  14:16  
And talk about plugin ecosystem, they've got quite the plugin ecosystem already.

### Andrew Sprouse  14:20  
Yeah, it's pretty amazing the amount of work that community has done, you know, and the couldn't have nicer founders, you know, those guys have have been really nice to us. And, you know, I always talk about Gatsby. And one other service that has sort of come onto my radar that I've only started to play around with is one called FaunaDB. And they've created this sort of globally distributed database that is ACID compliant, which is amazing for something that's that distributed. And so I just started, I just signed up the other day, and I've been playing around with it. So I have to plug them to

### Bryan Robinson  15:05  
I think you might have signed up at roughly the same time I signed up. I'm working on my first like, demo in FaunaDB. I just started that like earlier this week.

### Andrew Sprouse  15:14  
yeah, it looks really cool.

### Bryan Robinson  15:16  
And real fast you through the term ACID compliant out there. I personally don't know what that is. So I'm going to assume that least a few listeners won't know what that means. But what is acid compliance?

### Andrew Sprouse  15:26  
So it's sort of a, you know, a standard in database land of how can it's it's about consistency. So if if I write to the database, and then I asked the database back for an answer, am I going to get a consistent answer? Because in some databases, if you had, say, multiple servers, which you do not now that's abstracted from us, but if you have multiple servers and multiple locations, I might send my the update of the title of my blog post to that it would go to like three or four different servers. And then if I asked the cluster for what's the title, I might not if I if I asked for it at the exact same time, I might not get the the the old one versus the new one. And ACID is basically the guarantee that you would get back that consistent answer nice. I across all the machines,

### Bryan Robinson  16:22  
I cannot even begin to fathom the solution there. But yeah, that is an important thing. Definitely.

### Andrew Sprouse  16:28  
Yeah, I mean, that that's the amazing part, you know, of the ecosystem is you can have the guys at FaunaDB, who are worrying about that deeply technical problem, and they can sort of bottle their expertise, and just offer it to everybody. Which is really cool.

### Bryan Robinson  16:47  
And so what's going to keep you in the JAMstack world, other than literally building a product on the JAMstack for the JAMstack, like what, what makes you love it deep down? Obviously, you're pretty passionate about?

### Andrew Sprouse  17:01  
Yeah, I think, well, there's there's multiple ways I can answer this. But I think that the thing that I think of is if I've met a lot of great people working with the these technologies, and you know, it's the first development community that I've been in, that's been really like kind and, you know, friendly to beginners, and everybody's all about, you know, how can I? How can I boost, you know, your productivity or make your business better. And I feel like that sort of that spirit of giving everybody else a shortcut. And you know, you know, earlier in my career, I'd work with engineers who it was like, we gotta roll our own, we got to do everything custom, you know, we can't trust other people to to make good stuff, it has to be inside. And that sort of like limits your ability to be really productive. And so I think that JAMstack is on the right track, regardless of technology that that's the attitude towards building nowadays,

### Bryan Robinson  18:07  
Bringing the best expertise from all over the internet. 

### Bryan Robinson  18:11  
Alright, so in terms of like, actual jamming, what's what's your musical jam right now?

### Andrew Sprouse  18:17  
Oh, man. So last month, I went to an Iron Maiden concert. So I've been jamming out to some, you know, to some metal while doing coding, but I enjoy all types of music. There's a really eclectic band called Khruangbin. They're sort of Thai inspired. It's acoustic music, but it's really cool. I can't even not confident that I would be able to spell it on the air right now.

### Bryan Robinson  18:50  
We'll put it in the show notes. though right.

### Andrew Sprouse  18:53  
Yeah, for sure. That's all Also, if you want something a little bit more low key to code to I would say just that.

### Bryan Robinson  19:01  
And I think I can guess what your answer to this is going to be. But is there anything that you would like to promote on on the podcast today?

### Andrew Sprouse  19:07  
Yeah, sure. I mean, first of all, I want to thank you for, for letting me on. And this is a really great opportunity to talk to you and to your audience. But yeah, TakeShape, we're, we're, we're working really hard to get good products out for everybody, and especially the mesh. And, you know, we want everybody's feedback on it once the beta goes out. 

### Andrew Sprouse  19:34  
But please, you know, keep in touch sign up for the Mesh go to TakeShape.io and there's a place to sign up. And you can watch you know, the video that's there and, and sort of do that we'd love to hear from people there. You know, what they want out of the JAMstack? And, you know, how can we do better and and and build tools that people want to use?

### Bryan Robinson  19:59  
Very cool. Definitely a noble aspiration: build tools that people actually want to not just have to use? Yeah, we hope so. All right, well, I really appreciate you coming on the show. And and I hope that you keep making some amazing stuff to TakeShape.

### Andrew Sprouse  20:12  
Great. Great. Thank you so much.

Transcribed by https://otter.ai



Intro/outtro music by [bensound.com](https://bensound.com)