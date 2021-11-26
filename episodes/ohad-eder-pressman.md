---
title: Ohad Eder-Pressman on configuring sites, the minimum needed to do the job, and the Jamstack as the predominant web architecture
date: '2020-10-13'
tags:
  - episode
  - season-2
audioFile: https://pinecast.com/listen/de6b29ef-af5e-4adb-9e66-4b63368958a9.mp3
description: Today on the show, we have Ohad Eder-Pressman. Ohad is the CEO and co-founder of the Jamstack company Stackbit.
socialImage: /images/ohad-eder-pressman.png
---

## Quick show notes

* Our Guest: [Ohad Eder-Pressman](https://twitter.com/ohadpr)
* What he'd like for you to see: [Stackbit Studio](https://www.stackbit.com/blog/announcing-stackbit-studio/) | [Jamstack Themes](http://jamstackthemes.dev/) | Keep your eyes on the Jamstack
* His JAMstack Jams: Simplicity and straightforwardness of the Jamstack | [Next.js](https://nextjs.org/) or [11ty](https://11ty.dev) | [Sanity](https://sanity.io) | [Netlify](https://netlify.com) | [Stackbit](https://stackbit.com)
* His Musical Jams: Eclectic from Bossa Novas to Kids Music

## This week's sponsor: Auth0

This week, we've got [Auth0](https://auth0.com) as a sponsor. While their prowess at authentication is important, they're also releasing a ton of new tutorials and courses on [their YouTube channel](https://a0.to/yt), including a free course on building a full-stack Jamstack app with Next.js.

## Transcript
### Bryan Robinson  0:02  
Hello, everyone, welcome to another episode of That's My Jamstack the podcast where we ask the timeless question, what is your jam in the Jamstack. I'm your host, Bryan Robinson and today on the podcast, we have Ohad Eder-Pressman. Ohad is the CEO and co founder of the Jamstack company Stackbit. 

### Bryan Robinson  0:20  
Before we dive into the interview, though, I want to take a second and thank this week's sponsor off zero, we'll talk a bit at the end about the amazing educational content they're putting out on YouTube. But if you're curious about that Jamstack education, head on over to [a0.to/yt](https://a0.to/yt) for all the videos. 

Alright, thanks for being on the show with us today. 

### Ohad Eder-Pressman 0:35
Thanks for having me, Bryan. 

### Bryan Robinson  0:40
Cool. So let's start. Let's, uh, let's tell us a little bit about yourself. What do you do for work? What do you do for fun, that sort of thing?

### Ohad Eder-Pressman  0:49  
Sure. So I'm Ohio, I live in work in San Francisco. I'm a co founder and CEO of Stackbit that company building platforms for developers and other stakeholders to produce Jamstack sites very passionate about the Jamstack and kind of involved with the space for a while. What do I do in my free time, I guess hanging out with family families taking up more and more time bigger share of my life. I, I used to grow up on size don't really have a lot of time for that anymore. But I'm very curious person. So you put something in front of me, I just dive in. You know, like, I watched a ton of videos about engineering yesterday, you know, in like how to do construction underwater. So yeah, let's call that a hobby for the next 24 hours.

### Bryan Robinson  1:43  
Sure, sure. I thought so. Are we gonna be seeing some some underwater architecture from Stackbit? Probably probably just watching the videos.

### Ohad Eder-Pressman  1:51  
No, no, no, these things don't always have to intermix? Yeah, I love construction and building things. Very big DIY.

### Bryan Robinson  2:01  
Cool. Very nice. And with the, with the old bonds, I have it, like you grew them, you shaped them, like how many did you have kind of at the most?

### Ohad Eder-Pressman  2:12  
I think I've killed five and then stuff.

### Ohad Eder-Pressman  2:17  
That's, you know, the world gave me a signal and I listened.

### Bryan Robinson  2:20  
Yeah, I actually had one in college. And I kept it alive about six months in a dorm room, and then took it home for the summer to my parents house where it got destroyed, because there was an infestation that happened. And then I never picked it back up. So I was one and done. But it was a lot of fun. It was cool to like, you know, gently clip and gently shape over the course of the six months.

### Ohad Eder-Pressman  2:39  
Yeah, it's very Zen. Very Zen. I love that. 

### Bryan Robinson  2:42  
Cool. So what was your entry point into kind of the idea of the Jamstack? Or if you're old school enough into the idea of like static sites and that sort of thing?

Unknown Speaker  2:51  
 Yeah, I actually remember it pretty well. I think it was sometime around 2011 or 2012. And, you know, my background is, as a software developer, mostly self taught, and, and I have, you know, maintain a personal site forever, and have also, you know, kind of maintained personal or semi professional websites for family members and friends and whatnot, I guess we all kind of, you know, have that unofficial responsibility in our life. And so, I was frustrated, you know, I was using WordPress, mostly, and was kind of frustrated by two things. One is just conceptually, you know, engineering wise, or, you know, architecture wise, I couldn't justify to myself, like, Why do I have to deal with posting Why do I have to deal with shared hosting? Why do I need to configure? Why do I need to use you know, even cPanel for things and, and it was, it was frustrating just to have to maintain all of that. In this I mean, if I love minimalism, and you know, bonsai clipping really kind of, you know, gets kind of into the same thing. It's, like the minimum necessary to do something. And the second thing is I just had websites getting hacked. I don't know that all the time, but like, excessively in so so much so that my mind was subconsciously looking for something better. And the what happened one day is I got fed up, and I got this tool. I was on windows at the time, I downloaded a piece of software that simply downloads my entire site, kind of scraped my entire site, and I just dumped it on an s3 bucket and wired it up to my domain and became the happiest person ever and I have like on my website for a long time, I linked to the blog post by Verner Vogel's from the CTO of Amazon from sometime in 2011, where he kind of announced the ability to host websites for myself. Free, which was that really clicked? For me. That was the moment.

### Bryan Robinson  5:04  
I like how it was it was possibly the first, the first WordPress on the Jamstack kind of ideal, export the entire WordPress, HTML and just toss it up on s3 bucket.

### Ohad Eder-Pressman  5:16  
Mm hmm. Yeah, we're seeing some companies do that today as a strategy for people who are still very, very much committed to the WordPress ecosystem, and admin and tools and so forth. But yeah, for me it the gratification was instant. Because you know, like, the moment you do that, you don't have to worry about anything. The next time you do have to worry about something is when you want to edit your site. It's like, hold on, hold on, hold on, what did I do? And so that took me on a journey of, you know, introspection and prototyping, in years of, of just going through different methods of working on my website, which eventually led to a lot of the things that I'm kind of involved with in the Jamstack. Nowadays.

### Bryan Robinson  5:59  
Very cool. So yeah, there's definitely a lot of a lot of tools, a lot of different things you can use. So let's talk about that professional use of the Jamstack. Obviously, Stackbit is a very Jamstack centric company. So how are you? How are you using a professionally what's Jamstack kind of got to do with the Stackbit thing?

### Ohad Eder-Pressman  6:17  
So, you know, I'm a big believer, big, big believer in the Jamstack. And in the concepts of, you know, building sites and serving them statically. And in a very confident that the tooling around all of that is constantly evolving. Stackbit that was born in response to that point in time earlier on where I was, like, how am I gonna edit my website. And, you know, I personally went through a lot in this seven years or eight years that that transpired between 2012 and, and maybe seven years, in 2019, when we started Stackbit, but in essence, that, you know, the Jamstack is a phenomenal way to build website, which is only accessible to developers who are comfortable with the command line. And since I'm very, very confident that it's the it's going to be the predominant way that we build websites, the predominant concept and architecture that replaces lamp, I realized that we're going to need tooling, we're going to need better tooling for developers, we're going to need better tooling for their stakeholders, we're going to need platforms that enable people to create Jamstack sites as easily as it is to create a Wix or Squarespace or even a WordPress site. And, you know, we're going to need tools for marketers and companies who need to do a weak editing to websites that are built in the Jamstack architecture, which you know that Jamstack really hit home on a lot of great benefits, like a great developer experience, and modernize developer experience, the fastest websites in the world, and likely the most secure websites in the world. But at the same time, it sacrificed the world of tooling that is now considered table stakes whenever you talk about creating and editing a website. So if if we really want organizations and people to adopt this, this architecture, we have to give them the tools that enable them to be successful in doing so. And we can't we can't look at something like Squarespace and say, well, that's that's a wiziwig experience. It's consumerized. It's not what we're competing with, you know, I think Jamstack has to compete with that specifically with Squarespace or Wix. But, you know, in general, we have to get the experience to that level and beyond in order to enable this to become the predominant architecture for the web,

### Bryan Robinson  8:56  
I guess. So going forward. The The goal is kind of like we have this developer ecosystem and the developer ecosystem is actually pretty friendly to developers that know about it. But how do we make the Jamstack and all the benefits that the Jamstack brings accessible to those who don't have a developer on staff like so that they can have it as well as we can still have our shiny fancy things in the in the code?

### Ohad Eder-Pressman  9:19  
Well, that or, you know, here's an organization and developers have built a site, right, because developers aren't going anywhere. You know, I, you know, I'm also a big believer in low code and no code, but developers aren't going anywhere. It's just that the work that they're going to be spending their time on is going to be higher impact and more developers, but their stakeholders and let's just call them marketers, for simplification, you know, are going to use other tools. So developer can set up a Jamstack website, but their counterparts at the company are not going to use the command line or edit markdown files and GitHub. They're going to need proper tools. They need to be able to preview them. need to be able to share, they need to be able to create 100 landing pages with a couple of clicks and uploading a CSV file of keywords. They people need these tools, you know, if you think in the context of jobs to be done, like a lot of people need to work on a lot of sites every day. And if we want those sites to be Jamstack, we, we want to help those websites become Jamstack websites and have anybody reap the benefits of this architecture. We have to build this tool.

### Bryan Robinson  10:31  
Next, so you mentioned something, it's actually something that I haven't thought about before. And I come I've got a little bit of a marketing agency background, the idea of the of having a CSV of keywords, and then like spitting out like 100 landing pages, is that I can't even think of how I would how I would kind of start doing that on the Jamstack. Like, philosophically, that seems tough.

### Ohad Eder-Pressman  10:55  
Right? I mean, it's, you probably integrate it into some sort of data processing pipeline that runs before your static site generator, or if you're using one that has an ecosystem that can import, you know, CSV files, and just use that as part of your data. You know, you'd kind of work at it that way. But it's, you notice, it requires a developer, there's no best practices for how to do that. There's no kind of like, framework that encourages you and empowers you to do that. And so, but it's not rocket science, like, How hard is it to take something from here and put it in there, it's just we need these abstractions. And we need these tools. And we need user interfaces that empower real people to, to be able to do these things and not have to come back to developers because the world is shifting in this direction of empowering people to do more. And let's think about it as low code. You know, marketers now have tools like air table and motion and whatnot, and they just expect to be able to do more. And so when you try to sell the Jamstack organization, today, it's like, yes, and actually, you're going to be more dependent on your developer. And guess what, that dependency is going to create a lot of work for your developer that they're probably not too excited about, you know, like, and so it's, um, it's all about creating the tools and abstractions, and services, that, that real empower developers to focus on the things that they enjoy, and that they're good at, and enable the marketers to do all of the day to day work, it kind of streamlined way, and not in a way that creates just tedious repetitive work for developers.

### Bryan Robinson  12:29  
Cool. So I think it's interesting that, you know, Stackbit kind of sits in this unique position in the ecosystem, like the hub of a whole bunch of different tools. And you, you recently wrote a post contemplating the Matt Mullenweg. WordPress vs. Jamstack stuff, we don't need to get into the, into the drama of that piece. But like, the idea that I think I think you wrote that, like, it's not that there are these insurmountable issues in the Jamstack. It's that we're working on building the tooling. And we're still very early in that tooling. I'm kind of wondering like, what what's the what, what what, what insights Do you have coming from this centralized location in the Jamstack? about that? Because obviously, you wrote about that, and I'm interested to find out a little more.

### Ohad Eder-Pressman  13:18  
Yeah, I think I really enjoyed writing that piece. And I think it's, it's, it's valuable for all of us to have this type of discourse. It's not something official to be dismissive, not of Jamstack, and not a WordPress, which isn't going anywhere, we have to recognize that it has some benefits, and the world knows how to use it. And so how do we like where do we go from here? The my commentary was focused on, you know, it's not about comparing the Jamstack toward press Jamstack has to be compared to to the LAMP stack, right? The Jamstack is an architecture, it's a way of doing things. It's it's kind of a flexible definition, right? Like if you have a Gatsby front end for, for content coming from a WordPress, you know, admin install and sites deployed on Netlify. Is that a Jamstack? site? Like, I totally think it is. And, you know, it's, it's, WordPress is very, very dominant right now. I personally think it's dominant, because because it's dominant. I don't know if that makes sense.

### Bryan Robinson  14:29  
I know there's momentum. 

### Ohad Eder-Pressman  14:30  
Right, exactly. There's momentum. And there's kind of wait, but you know, I'd love to meet the developer, who is completing who yesterday completed their boot camp, right? Because that's how most developers kind of become developers nowadays, which is fantastic. So show me that developer who is excited to go into WordPress and learn how to build plugins in PHP. You know, I don't I think that's non existent. And so I just I think that the that developers aren't going to pull us Out of WordPress with time. And I say that, you know, we, I could have made a prediction that WordPress will turn into a Jamstack solution and kind of get rewritten in JavaScript. But I think it's such a massive open source project with open source governance and so forth, which is, is great at times, but at the same time, I just, I don't see it shifting fast enough, so that it can keep up, you see how long it took for Gutenberg to, to arrive, which, you know, is infinitely better experience than what was there before, but I, I just don't see it happening. 

And so you know, that the tooling for the Jamstack today is not competitive enough with with WordPress, you know, WordPress, you can send a non technical person to themeforest, they can download the zip file with a theme, they can go to digitalocean and get a droplet and with like reasonable UI, they can kind of get a site up and running. In all honesty, I think it's a horrible experience. But it's, it's possible, and it's feasible, and people actually do it every day. So that the Jamstack isn't there just yet, Stackbit tries to do a lot to push us in that direction. But it's, um, it's still it's still taking time. And, you know, if you look at some of the core challenges with with the Jamstack, which are, well, I need to connect different services together, or, you know, incremental build rehydration, but there's a lot of there's a lot of kind of, you know, technical challenges with the Jamstack. 

But the rate of progress, and the number of super smart people working on it really encourages me that, you know, I don't see those as fundamental issues with the architecture, I just see, you know, this is the current state of the tooling. And the tooling, I mean, look at the tooling 12 months ago, look where it is now. And let's imagine where it's going to be in 12 months. And so I'm not, my point is not, you know, hey, let's fight about who's better right now, you know, of course, WordPress is super dominant and popular and kind of the default choice, but I'm just allowing myself to extrapolate based on the trends that we're seeing, you know, we, we look at a lot of data, and we see the dynamics and the evolution of the static site generators and the preference, that that kind of shifts and, and the rapid adoption of Jamstack technologies, right, static site generators, headless CMS is in deployment platforms, modernize deployment platforms, we just see the the growing adoption of those both in in enterprise companies, you know, Alexa top 10,000, but also in cohorts of websites, like all the yc companies, or all of the websites mentioned on indie hackers. So, you know, if you look at indie hackers, and we've done this work, and you look at all the websites started, but all of the people there who are predominantly early adopters, DIY, DIY errs, it's upwards of 20% of the websites created there are powered by at least one Jamstack kind of leg, if you will, like a headless CMS, a static site generator or deployed to say, and Netlify. So yeah, super confident, and confident, not in a cocky way, which is super positive. And, and kind of looking forward.

### Bryan Robinson  18:18  
Yeah, I really like the idea of it's not it's not WordPress versus the Jamstack. It's more it's, it's the LAMP stack isn't even versus, but it's like, comparing you compared to the LAMP stack. If you look at the LAMP stack from, you know, I guess, the late 90s, early 2000s, it's very different than where it is today. And all of that tooling came up in a way that, you know, solve the same issues we're talking about, and now we're just solving them in this way that is more secure, faster, etc.

### Ohad Eder-Pressman  18:48  
Right? And I think it's very natural. You know, when say, when you represent WordPress to become defensive and say, oh, but you know, look, Netlify is only such and such percentage of the web. But I mean, you know, I think Netlify is an amazing company, we can talk about them. But more importantly, the Jamstack is an approach is, is much bigger than any single company, or any single static site generator, and it is this kind of, like, fluffy, broad definition. And that's also one of the reasons I'm very, I believe that it's going to kind of eat the web, you know, because it's, it's better. And it's a logical choice. And it's broad enough that, yeah, a lot of sites are going to be Jamstack sites, and some WordPress sites are going to be Jamstack sites as well. And you know, Matt, Matt, of WordPress agreed to that. And so it's this isn't about, you know, it's it isn't as much about worse WordPress versus Stackbit or WordPress versus Netlify. This is, you know, Jamstack is an architecture is going to take over the web again, in my opinion, and so how do we prepare for that? How do we go Encourage that, and what's missing for that to happen? And for the people who adopt that to be successful and not feel like early adopters who have made the wrong mistake or an early, you'd like to who have moved there too early, if you will? Yeah,

### Bryan Robinson  20:12  
definitely. Very cool. So we've listed out a whole lot of different different benefits, different thought processes around the Jamstack. But what would you kind of consider? What would you say your jam in the Jamstack? Is? Obviously you run a service, this Jamstack service, but like, what's your favorite service product, philosophy, framework, even what's what what makes you love the Jamstack 

### Ohad Eder-Pressman  20:16  
I love I love the simplicity, and the straightforwardness of it all. I'm very biased, because I didn't mention this earlier on. But I'm, I'm involved with a bunch of different companies in the Jamstack. And I'm the you know, the first investor in Netlify, and on the board of the company. And so I was in, you know, I was fortunate to be in the room with Matt and Chris were like, oh, should we coined this term. And I was like, Guys, let's let's not bet the company on that. But they've obviously, they've obviously done really well and have created tremendous positive change in the world of the web. I'm also an investor in, in Sanity, and I think the team there is doing a phenomenal work. And obviously, associated with a bunch of other companies. And so I, you know, like my go to stack right now would probably be either next JS or eleventy, depending on what type of site I'm playing with. I really love just storing my content and get but if I need something more serious, I really enjoy, really enjoy Sanity. And yeah, deploy to Netlify. So that's my that would be my jam. And you know, of course, it's I, I don't start a website today, that isn't managed by statute. So it's, you know, some most people probably know Stackbit, but for our site builder, you know, 60 seconds, pick your stack, and you have a life site working, where we've provisioned the source code for you and everything is wired. And none of it is built with some secret stack, that sauce or custom Stackbit SDK is just taken and do whatever you want with it. But our main product is the Stackbit Studio, which basically, if the Jamstack unbundled content editing from publishing and kind of this integrated all of the product workflows, we kind of re aggregate all of that back into a single experience, where you can have a website, whether it was built with Stackbit or whether you build it by yourself, you can plug your repo in your, your your CMS in and you get a you get a WYSIWYG editing experience, you can create a B tests, you can create pages, you can share previews, and you It kind of looks and feels like a Squarespace or Wix or maybe a little bit of a web flow. And, and so that's how I enjoy working on my website. So of course, I can go directly to the repo and make changes if I want to edit templates or do anything like that. And it automatically gets reflected, but like my day to day of just like, you know, once you build a website and ship it, that's when the real work kind of starts depends if you think about your website, as a developer, or as a marketer. And, for me, I kind of enjoy to traverse both paths and kind of go back and forth. And so I spend most of my time in Stackbit, but when I work on my websites,

### Bryan Robinson  23:21  
And so to kind of go back, you said, you know, you like the simplicity of the idea of the Jamstack. And so it sounds like the Jamstack has simplicity. And each of the products that are a product of the Jamstack. Collectively, they can be kind of complex and sounds like what you're doing with with a Stackbit Studio to kind of create a simple interface for that extra complexity that comes from the multiple simple applications out there.

### Ohad Eder-Pressman  23:47  
Yeah, that's one. That's one way to look at it. Because of course, to integrate these things and think about how they touch each other is, is somewhat complex. But the bigger thing is that if you even put aside the complexity, there's just a lot of capabilities that existed before whether it's in WordPress, or whether they exist today. When you create a website with Wix or Squarespace, like, you know, things like with you, we get it. It's not complex is just impossible, right? You're, you're expected to go and edit your content where your content lives. The place that manages your content, and does a phenomenal job of letting you create structured content, and then manage it and play with it and edit it has no idea what you actually do with that content, because we've separated content and and how we render it right. And so Stackbit just has a lot of a lot of secret sauce to kind of re bundle that experience and introduce those capabilities, which are not hard to just, you know, don't exist or like impossible.

### Bryan Robinson  24:48  
Cool. So, so let's let's pivot just a little bit so we can keep our episode length. We could talk about a lot of this stuff for a long time I can gather here, but so we keep our episode length right on that. Time. Let's talk about what your musical jam is. What are you listening to right now? When you're working when you're with your family, that sort of thing?

### Ohad Eder-Pressman  25:08  
Yeah, I'm extremely eclectic, extremely eclectic. So this morning, I've been listening to both the Novus and lamenting the fact that I haven't learned Portuguese yet. I really love languages. But, you know, because I have have a young daughter, we listen to a lot of a lot of kind of kids, kids, kids songs, and so forth.

### Ohad Eder-Pressman  25:32  
And yeah, so that's kind of where I am right now.

### Bryan Robinson  25:36  
Nice. Very cool. So, so to kind of finish things off here, is there anything specific that you'd like to promote out to the Jamstack community, anything that you're doing that you want everyone to kind of get them eyes on?

### Ohad Eder-Pressman  25:48  
You know, I think, keep your eyes on, keep your eyes on the Jamstack. We're, we're doing a lot as a, as a company, not only to build better tools to empower people, but also to uplift, the whole, the whole Jamstack. You know, Jamstack themes that dev is, is the leading resource for open source themes for any of these static site generators. And we're just doing more and more of that work. So we're announcing a very, very cool project soon. So stay posted. Very Jamstack key. Yeah, yeah. A lot of good stuff coming. Awesome.

### Bryan Robinson  26:25  
Well, I appreciate you taking the time to speak with us today and tell us all about things going on and in Stackbit world as well as personally with you. Thanks so much.

### Ohad Eder-Pressman  26:32  
Thank you, Brian. Thank you for the patience and the opportunity. And yeah, I enjoyed this as well. Thanks, everyone, for listening.

### Bryan Robinson  26:41  
Thanks again. Oh, hug that awesome conversation. And thanks to you, dear listener for tuning in Week after week. Be sure to star heart favorite review, you know, whatever and your podcast app of choice to spread the word. Now it's sponsored time. This week, we're lucky to have back off zero as a sponsor. Author zero is an amazing authentication platform, but they also have a wealth of amazing content coming out regularly on their YouTube channel, including a free course called full stack Jamstack with next js. If you're interested in learning more about next taking the Jamstack further, or just authentication on the Jamstack head on over to [a0.to/yt](https://a0.to/yt) for their YouTube channel. That's it for this week. Until next time, keep doing amazing things on the web and keep things jammy

Transcribed by https://otter.ai

Intro/outtro music by [bensound.com](https://bensound.com)