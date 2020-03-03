---
title: Phil Hawksworth on "static first," the future of the JAMstack and much more
date: '2019-09-23'
tags:
  - episode
audioFile: https://pinecast.com/listen/099fa20b-4668-486c-8043-fd3f0cad14f1.mp3
description: Today I'm joined by the ever amazing Phil Hawksworth. Phil is a member of the absolutely incredible developer experience team at a little JAMstack company called Netlify.
socialImage: /images/phil-hawksworth.png
---

## Quick show notes

* Our Guest: [Phil Hawksworth](https://www.hawksworx.com/)
* What he'd like for you to see: [JAMstack_conf San Francisco: October 16-18](https://jamstackconf.com/sf/) | [JAMstack.org/slack](http://jamstack.org/slack)
* His JAMstack Jams: [11ty](https://11ty.io) | Serverless Functions
* His musical Jam: [Toto](https://open.spotify.com/artist/0PFtn5NtBbbUNbU9EAmIWF) | [Free Code Camp's Radio](https://coderadio.freecodecamp.org/) | [Gaz Coombes](https://open.spotify.com/album/6xv9PE0XzPIQUUJ0EJxQKC?si=fMgvjUfhT76GDkRsQ8I3DA)
* [Phil's post about dynamic 404 pages with Serverless functions](https://css-tricks.com/static-first-pre-generated-jamstack-sites-with-serverless-rendering-as-a-fallback/)

### Other Tech mentioned

* [Jekyll](https://jekyllrb.com)
* [Netlify](https://netlify.com)
* [Hugo](https://gohugo.io/)
* [Cloudinary](http://cloudinary.com)
* [Auth0](https://auth0.com/)


## Transcript

### Bryan Robinson  0:03  
Hello everyone, welcome to another episode of that's my JAMstack podcast where we are profile amazing people working in this awesome JAMstack community. In this podcast we ask the age old question, what's your jam in the JAMstack? I'm your host Bryan Robinson and today I'm joined by the ever amazing Phil Hawksworth. Phil is a member of the absolutely incredible developer experience team at a little JAMstack company called Netlify.

### Bryan Robinson  0:37  
Hey, Phil, thanks for joining us on today's episode.

### Phil Hawksworth  0:40  
Well, thanks for having me. It's, it's nice to be here.

### Bryan Robinson  0:43  
Yeah, no problem. And I guess let's let's start. Hopefully, a lot of our audience knows who Phil Hawksworth is at this point. But I give us a little introduction. Tell us you know, what you do for work what you do for fun, that sort of thing?

### Phil Hawksworth  0:53  
Yeah, of course. So say as you say, My name is Phil and I work at Netlify. So I'm kind of fairly well as a right in the middle of the the JAMstack kind of world really, I guess, been working in there for a little while. So I work as part of the developer experience team at Netlify. And I've been there for almost two years, I'm I don't quite know where the time has gone. But yeah, I've been there a little while now. But I've I've kind of been working on figuring out how to use Netlify as part of the JAMstack, finding out what people need from it, trying to find interesting ways to use it. And I've been, I've been interested in JAMstack and building kind of static sites, I'm careful of using the phrase static sites, it's so it's a dangerous thing to say. But I've been dabbling in that world for quite a long time, I used to work at an agency. So I did lots of work for doing architectures for different projects and clients there. And I kept on coming back to this approach that I now know to be called the JAMstack.

### Bryan Robinson  1:49  
Cool. So you kind of already partially answered the next question. But your answer your point to the JAMstack was in this agency world?

### Phil Hawksworth  1:56  
Yeah, I think really, anyone who's been doing anything like technical architectures in an agency, where the client often dictates the the kind of platform and the architecture you might use, irrespective of what the problem is you're trying to solve, I was in that world for quite a few years. And more and more often, I'd be thinking, we can simplify this, there's an easier way to build these things out. You know, often a project would have an aggressive lead time, but that didn't always marry perfectly with the lead time for the infrastructure you have to build on. So for quite a long time I was I was really curious about how we might simplify things, how we might pre render things, and then serve them from a much simpler hosting infrastructure. And to be honest, it was things like Jekyll and GitHub Pages that got me into this. I think that's probably an entry point for lots of people over the years. 

### Phil Hawksworth  2:45  
I think Jekyll was one of the first static site generators that made things really approachable, and was you know, felt mature and felt like it was well documented and had a nice on ramp, if you could get over one of the two of the wrinkles to do with Ruby. I'm not a Ruby guy. So that usually where I came unstuck, but once you got past that, I found that that was the that was the way in for me. And I got really excited about how easy it could be to generate a site and deploy it onto something like GitHub Pages at the time, which I think was pretty much at the forefront of automating kind of hosting a static site. So that's, that was my route in.

### Bryan Robinson  3:21  
Okay, and how the clients feel about that. Like you said, like, they tend to dictate technology, irrespective of what they're doing.

### Phil Hawksworth  3:28  
Yeah. And it, it really depended on the client. Some, some clients were much more open to it than others. But I found that the bigger the brand, and the big, like the more established they were in the market, the more likely they would be to say, Oh, no, no, that's not for us, we need an expensive thing. irrespective of how complicated the thing is you're making. 

### Phil Hawksworth  3:50  
So actually, that that became quite a difficult challenge, I found to to actually persuade people that they didn't need to spend a fortune on complex infrastructure and something simpler could could actually serve the purpose. And that that kind of played into the conversations I started having with Matt and Chris, the founders of Netlify back in the day, as, as they were trying to coin this term JAMstack, because they were having the same problem, you know, I was talking about static site architectures, and they were doing the same thing. And I think it's such a loaded term, the word static, that, you know, that's where the phrase jumpstart was kind of born from this, this, this desire to get beyond the kind of baggage that comes with the term static, which makes people think simple. 

### Phil Hawksworth  4:37  
And I think as the the ecosystem, and all of the vendors and tools have matured around this, that's what's takes JAMstack sites to something beyond static, you know, it's beyond what you might think of traditionally a static so that's, that's where that kind of term I think, was was born from, and that was my entry point into as well trying to find ways to convince clients, some of whom would be okay with it, some of whom would need some convincing the they could spend less and go faster, which seems like a sweet spot for me.

### Bryan Robinson  5:04  
Well, yeah. And it's funny, because like, clients assume that the more you pay, the better the service is. And that's not necessarily true. In fact, it rarely, is.

### Phil Hawksworth  5:13  
Yeah, there's, I think there's always this kind of feeling of finding something which is reassuringly expensive. I've definitely been in that world a lot where, by default, particularly the larger brands, who might go to a large, you know, big global agency, which is the kind of place I was working at, they, I think there's an assumption that they, they need the best in class thing, which has the biggest price tag. And often those are the things that are designed to do a wide variety of things for a wide variety of people. And that makes it hard for them to do the right, you know, the one thing that you need well, and so it's, yeah, it's definitely not like a perfect kind of marriage of what you pay more, you get something which is better. 

### Phil Hawksworth  5:59  
This is a great example, I think JAMstack's a great example of simplifying and focusing down on the on really what you need to do, and then building that out, rather than trying to use a product which can do everything for everybody, which, as we all know, is hard to do. Well.

### Bryan Robinson  6:15  
Cool. So obviously, you are working at one of the bigger JAMstack companies in the world, but how are you using the JAMstack professionally? How are you using it in your personal life, that sort of thing?

### Phil Hawksworth  6:26  
Well, I certainly am still using it very much in my personal life. You know, any sites that I that I make, either from my own blog, or any of my kind of side projects, what have you, I've got a handful of those. And I'm, I'm very promiscuous, when it comes to the static site generator, I use that I think we all kind of have our have our darlings that we like, over over and those kind of evolve over time. You know, I already mentioned Jekyll as the one that I started with him for a while I was also using Hugo a lot really got into Hugo. 

### Phil Hawksworth  7:00  
More recently, I've been using 11ty it on my own site and various kind of hobby sites of mine and kind of sites of side projects. But at Netlify I we also use all of the all of those as well, you know, we use our .com site is built on Hugo has been for quite some time. But we also use things like React Static, which is which I think is an excellent framework for things like headless cms.org, that's with react static and also static gen. 

### Phil Hawksworth  7:35  
So those, those are both websites that that Netlify put together so we use those static site generators. Aa bunch of templates and example sites, I use a 11ty on, which is there's all sorts all over the place. And and the only reason I feel kind of safe in doing that is one of these core properties of JAMstack sites in the you know, I don't need maintain that platform, once it's deployed. You know, if I've deployed something in one framework, one static site generator, I know that that's going to just keep working, as long as I don't, you know, I don't need to go back and keep maintaining it, I know that will be be fine. So I feel reasonably comfortable with, you know, trying out different static site generators, here or there. And knowing that once something's deployed, is just going to stay deployed. 

### Phil Hawksworth  8:22  
And that's one of the kind of nice attributes of this stack. And the the overhead really is in remembering how to maintain it. And if you want to make changes, remembering the different templates, and syntax is and those kind of things. But that's one of the hazards of being someone like me, who's kind of dabbling with lots of different static site generators and, and trying lots of different things out at the same time. But and I don't know, that's kind of that's kind of fun, it keeps it fresh as well.

### Bryan Robinson  8:46  
So you're experimenting with a lot. So what what is your current jam, right? Like, what what are you really enjoying using at the moment, or, you know, in the coming, you know, few months?

### Phil Hawksworth  8:58  
I feel like a lot of my colleagues, gonna make fun of me, because I'm always going on about 11ty. And I really enjoy it very much. And it feels, it feels to me a lot like Jekyll, in so much of as it's a it's kind of approach and the logic that sits down within it. But it doesn't have that Ruby speed bump that I mentioned. So it's very, very portable, in terms of both the output that it creates, like all JAMstack sites, but also the build environment is very, very quick and easy to get bootstrapped with it. 

### Phil Hawksworth  9:29  
So I've been having just a ton of fun with that, especially as the project's been evolving a little bit. And it started to add things like support for JavaScript in the data files. So that's a fairly kind of common convention, I think, for static site generators to have a folder full of data files that you can use in your templates. And I really like the fact that it will let you write those files with JavaScript, which could go off and make a request and return data. So it makes it very easy to pull data in from different points that build time. It just makes it loads of fun. So yeah, I've been having, I've been having a lot of fun with that recently. 

### Phil Hawksworth  10:08  
And the other thing I'd maybe call out is some I've been dabbling more and more with serverless functions, which I know kind of aren't necessarily kind of, from a purist point of view, part of the JAMstack, but they're, they're best friends, I think, you know, they complement each other really, really well. And so I've been having a bit of fun playing with things like using serverless functions as a fallback as a 404. Sso for any routes on my page on my sites that don't, that don't resolve to a pre generated page, sending those off to serverless functions instead, which can then dynamically render on the fly, something that's maybe hitting a data source or something like that. So it's an interesting kind of model. I'll publish some some examples of that. Hopefully, they'll be out by the time this is this is this is published as well.

### Bryan Robinson  10:55  
I'm very, very interested in that. That's, that's a concept that I hadn't even thought about.

### Phil Hawksworth  10:59  
Yeah, it's a really, it's really interesting, because I think there's this temptation sometimes to say, well, we could use serverless function to, to render things on the fly. So we're still kind of, you know, not having a web server. And you know, we don't you know, so we've still, we still got that kind of simplicity in terms of the infrastructure, but you're not pre generating them. So I'm always cautious. I like to try and pregenerate as much as possible. So if something fails, it fails in my house, not in the user's house. But it's interesting thinking of serverless functions as a fallback for 404s, particularly if you're hitting something like a database, when you're generating the pages, you know, what if you're adding content to the database, and while the site is regenerating, and maybe creating other pages, your 404s could hit that database directly. And then return pages is an interesting kind of model just to extend the reach of JAMstack. So yeah, I've been having a lot of fun playing with that recently,

### Bryan Robinson  11:54  
And so so where do you you mentioned pre rendering, and how, you know, that's kind of your philosophy on it? Where do you lie when it comes to like pre render, and then taking over that render with JavaScript on the fly on the front end?

### Phil Hawksworth  12:08  
I'm, I mean, I think that was great. I think it's, it's one of those things that, you know, it's all down to progressive enhancement, right? And treating things as, as a progressive enhancement, and deciding where your baseline is, what are you enhancing from, because you could very easily argue that a JAMstack approaches to render an empty body tag with a div with an ID in it, and then everything comes down the wire is JavaScript, and you do everything in the client. That's perfectly valid. And I think you know, it, there's this word again, it depends, right? 

### Phil Hawksworth  12:42  
You know, if you're building an application, maybe that would be fine. But I love to try and get as much pre rendered as possible. So that while you're going off and making the request for JavaScript, the user has something to see. And while your JavaScript being interpreted particularly on things like mobile devices, which we know not everyone's got a powerful iPhone in their pocket, there are lots of like, less powerful devices, even if the connectivity is good, the power that's required to pause and execute and do all this stuff with JavaScript can make things a bit slow. Even if we're doing you know, what feels like a performant thing. We're relying on JavaScript a lot, we need to be careful. So I like to pregenerate as much as humanly possible. And you end up in this position where there's a balancing act, isn't there? 

### Phil Hawksworth  13:28  
I mean, you've got to think about what's, what's reasonable, and what starts to add complexity for the sake of being a purist, and way that balance up. But yeah, I like pregenerating as much as possible. And then really thinking about progressive enhancement. And I'll always stand by progressive enhancement. I know, I know, there's some debates around that at the moment. But I think that's the right way to go.

### Bryan Robinson  13:49  
So you've been professionally in this like, full on JAMstack world for a couple years now at Netlify. You were dabbling in it at the agency.  Other than obvious being gainfully employed in a JAMstack company, what's going to keep you in the JAMstack going forward. What makes you just kind of deep down? know that that's kind of the future?

### Phil Hawksworth  14:08  
Well, I think, I think a big part of it is seeing the, the JAMstack ecosystem. Gah, that sounds like a terrible, like salesy phrase, isn't it but there are so many tools and vendors now, really supporting this and being a part of it, whether that's the explosion in the different types of headless CMSs or things like image services from people like Cloudinary, or Authentication Service services from people like Auth0, there's so many things coming along people doing ecommerce, there's, there's so much. So I think seeing the advancement in each one of those areas, that's keeping it very interesting for me. 

### Phil Hawksworth  14:48  
And it's a I think it's a real validation that the approach is starting to reach critical mass, the fact that businesses are being formed and, and funded and you know, established based on these kind of models. And I think that's really exciting. There are so many people looking at different avenues now, here that we can all make use of that keeps it far from dull, and I love playing with all of the new services as they as they, they surface. It's nice.

### Bryan Robinson  15:18  
So I think you might be uniquely situated to answer this question, which I haven't had a chance to ask before, which is, what are kind of the impediments to JAMstack flourishing in the future? Is it going to keep exploding? Are there any things we need to worry about in terms of hurdles?

### Phil Hawksworth  15:33  
Oh, that's a good question. I mean, it, I always, I'm always surprised about how the boundary seems to seem to get put getting pushed back further and further away. Because you know, the more you look at it, the more you think of think of the model as kind of static first and, you know, approach the approach the architecture, as I'm going to assume things are going to be static, unless I reach something that I just can't make static, and then look at the alternatives, as opposed to doing the other way around, where we might traditionally have thought, Okay, well, I need, I'll have a dynamic back-end, but there might be some opportunities to do things that are cached or make static and what have you. And, and I think that's, that's the harder way to approach it, I much prefer doing it the other way and assuming static first. 

### Phil Hawksworth  16:17  
So the roadblocks seem to get pushed further and further away. Um, I think the, probably the ceiling that's hard to get through at the moment is sites that have many, many URLs, many, many pages. So I'm talking many hundreds of thousands or millions of pages, that's really tough to do from a pre generated standpoint. And static site generators are getting faster and smarter about that. And, you know, and I know lots of people are working on trying to get beyond the, this kind of hurdle of can be selectively generate different parts of the site. And it's a fairly complex problem, because the dependency graph of you know, all of your templates and pages isn't very nice, isn't necessarily very easy to visualize, or easy to understand. So that's an interesting challenge. But once we, once we get further down that line, and the site generators get faster and faster, I think that opens the doors to bigger and different types of sites as well that maybe have millions of millions of URLs, which at the moment is, is probably a bit of a ceiling for us.

### Bryan Robinson  17:20  
Well, and really, I'm trying, I'm trying to think of what those sites would be other than, like big news organizations. That's about the only thing I can think of don't have millions of your eyes.

### Phil Hawksworth  17:31  
Yeah, I think typically, that's that's the classic example, you know, news, news organizations, or publications that have, you know, many hundreds of thousands of pages. Yeah. And the other one, of course, is sites that have lots of targeted, personalized content, that can be challenging as well. But again, that starts to become one of those points of how you architect it and what you're what what you value. So for instance, Netlify the app itself and Neltify, you know, where you go and configure your sites and all of those things, that has hundreds of thousands of users using it. And they're all using content, which is specific to them, you know, it's the data which is specific to their sites. But it's a JAMstack site. It's a, it's a staticly served React app, which then talks to dynamic API's. And you, that seems like a good model, you aren't giving up the pre generated nature of every page that might then be cruel, callable by search, search engines and what have you. But that's fine. But in that kind of environment, you know, I don't want the admin view of my website, you know, admin console being crawled by Google. So it's, there's a balancing act, and it's trying to figure out what's, what's appropriate and what you actually want. But yeah, so serving personalized content to people and then having that crucibles because you needed regenerated. That's another challenge. But I don't always know if it's actually required.

### Bryan Robinson  19:02  
And on top of that, like most of those personalized things, you don't want crawlable anyway. So you probably right, as long as as long as you are connected in a way that the user gets the content properly, then you're probably pretty good to go. 

### Phil Hawksworth  19:13  
Yeah, I think so. Yeah. So it's always a balancing act. And then I'm very cautious about describing anything as a silver bullet. And there are so many different ways that we can approach these architectures with the, with the tools that we've got in the jam stack. ecosystem, there's that word again. There's so many tools and approaches that we can take that we can kind of cut the cloth to suit what we need, I think,

### Bryan Robinson  19:34  
So obviously, I try to keep these relatively short. So I'm gonna go ahead and move into the next question, which is, what are you actually jamming to right now? What what's your musical jam?

### Phil Hawksworth  19:43  
Oh, this is a great question. Well, obviously, Toto is never far from the top of my history. It's amazing how often I fall back to having some Toto being played is particularly good on a Friday afternoon, I think, when I need a little bit of a spring in my step. 

### Phil Hawksworth  20:04  
But I one of the things I actually often find myself writing code to is the, the, the code radio that Free Code Camp provided. And if you've encountered that, it's just, it's just a YouTube link. And it's like this 24/7 music that's good to code by radio. And it's kind of nice as well, because you tuned in there, and you can see how many other people are listening as well. So even though you're not interacting in any way at all, you've got this kind of solidarity, which is kind of nice. 

### Phil Hawksworth  20:34  
So those two things, but the only other thing I'd probably mentioned his Gaz Coombes, who he used to be the lead singer of super grass going back way, way back. But he's, he's got some albums out at the moment that I really, really like, and kind of keep me keep me interested as I'm kind of writing things and and building code. So yeah, definitely recommend Gaz Coombes, I think called Matador that I've been listening to a lot. It's good stuff.

### Bryan Robinson  21:03  
I'll find that and tuck that in the show notes. So anything that you're you're looking to promote, obviously, you're identified, but anything specific, you want to talk about

### Phil Hawksworth  21:11  
the so there's probably just just two things. And depending on the timing of this, we've got JAMstack conference coming up in San Francisco, on the 16th, 17th, and 18th of October. So who knows, maybe this will squeak out into the world in time. Hopefully it's coming up very quickly. So that's, that's coming up. 

### Phil Hawksworth  21:30  
And the only other thing I'd call out is there's now a nice slack community growing for the JAMstack community. And there are already a couple of good places to talk like TheNewDynamic Slack is a brilliant place that I'd recommend to people. But also for people who are maybe going to JAMstack conferences and meetups jamstack.org/slack will get you into a good place for for talking about all things JAMstack, we, we foolishly didn't call it JAMslack, which I think Jake Archibald kind of mentioned was a huge missed opportunity but so be it will have to that's just that's just a mess that will have to live with

### Bryan Robinson  22:11  
and I might be a little too kitschy for some people though. 

### Phil Hawksworth  22:16  
Yeah, we've we've stuck with just jamstack.org/slack

### Bryan Robinson  22:22  
Alright. Well, I want to thank you for for taking the time and talking with us today. And and I want to say I appreciate all the all the different content that you put out.

### Phil Hawksworth  22:30  
Oh, that's very kind. Well, thanks for this. It's, it's nice to get to talk. And yeah, I've really enjoyed listening to everyone you've had on so we're looking forward to whoever

Transcribed by https://otter.ai


Intro/outtro music by [bensound.com](https://bensound.com)