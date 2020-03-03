---
title: James Quick on ejecting from Wordpress, Gatsby, Netlify and more
date: '2019-11-12'
tags:
  - episode
audioFile: https://pinecast.com/listen/15605094-7509-4b32-8289-3895b286fc87.mp3
description: Today I'm joined by someone I've had the pleasure of knowing for a few years now he's a developer at FedEx, a technology speaker and educator. The one the only James Quick. Hi, James. Thanks for thanks for joining us on the podcast today.
socialImage: /images/james-quick.png
---

## Quick show notes

* Our Guest: [James Quick](https://www.jamesqquick.com/)
* What he'd like for you to see: [His Learn Build Teach courses](https://www.learnbuildteach.com/) | [Learn VS Code](https://www.udemy.com/course/learn-visual-studio-code/)
* His JAMstack Jams: [Gatsby](https://www.gatsbyjs.org/) | [Netlify](https://netlify.com)
* His musical Jam: [Jason Aldean](https://open.spotify.com/artist/3FfvYsEGaIb52QPXhg4DcH)


## Transcript

### Bryan Robinson  0:03  
Hello, everyone, welcome to another episode of That's My JAMstack the podcast where we asked the pressing question, what's your jam in the JAMstack. Today I'm joined by someone I've had the pleasure of knowing for a few years now he's a developer at FedEx, a technology speaker and educator. The one the only James Quick. Hi, James. Thanks for thanks for joining us on the podcast today.

### James Quick  0:26  
Yeah, it's pretty cool to be here. Thanks for inviting me on.

### Bryan Robinson  0:29  
Yeah, no problem. So So you and I have known each other for a little while, but tell it tell our listeners a little bit more about yourself. What do you do for fun? What do you do for work, that sort of thing?

### James Quick  0:36  
Sure. So I think one of the biggest things is we have a lot in common, especially the last maybe year so we've kind of bounced a lot of ideas and stuff off of each other. So I, I work full time at FedEx as a software developer, do full stack, so front end, angular and then back end Java Spring Boot, microservices, pretty fun stuff, actually. But outside of that, I do a lot of stuff kind of going back to my days of evangelism at Microsoft, conference speaking, I've been getting back into been pretty heavy into my YouTube channel, written articles, online courses. Again, kind of the stuff that we have in common, focused on web development, design and developer tools. So I've been doing a lot of that stuff the past couple of years trying to be trying to be more engaged as active as I can.

### Bryan Robinson  1:23  
Nice and what do you do kind of outside of the the technology realm,

### James Quick  1:28  
just on a personal note, so we have three dogs, we spent a lot of time with our dogs play a lot of sports. My wife and I play on two different soccer teams together. Also, I'm playing basketball one night a week. Sometimes during lunch, we play basketball at FedEx, which is pretty cool. One kind of fun fact that I'm working on right now is building an arcade cabinet like an old school arcade cabinet using like a Raspberry Pi to put games on, and then actually doing the woodwork to build a cabinet which I've never done. So we'll see how that goes.

### Bryan Robinson  1:57  
we won't be like an angle when you're done.

### James Quick  2:00  
That might just be part of the challenge. We'll see how it turns out, but it should be fun. 

### Bryan Robinson  2:04  
That's awesome. That's that's very cool. Cool. So So obviously, we're talking about the JAMstack here today or static sites or whatever you like to call them. But what was kind of your entry point into this philosophy of development?

### James Quick  2:16  
One I think you were you were probably one of the earliest people to kind of preach or start to tell me about it. I think a big one was also listening to the Syntax podcast. So with Wes Bos and Scott Telinsky, listen to their podcast a lot. And they, they kept talking about static sites and static site generators and JAMstack and Netlify and all these all these words, and I was kind of aware of what it was, but didn't really have the hands on experience that I think we'll get to in a few minutes. So yeah, I was just kind of word of mouth for a long time. And I was like, I don't really I don't really need to, like, get into that at the time and eventually did and I think like I said, we'll talk about that in a few more minutes.

### Bryan Robinson  2:55  
Yeah, so so so it's kind of just in the ether around you. What was the actual tech like? What was your first project that you did on the JAMstack?

### James Quick  3:04  
First project and I've got, I guess I've primarily got two, or at least two real ones. So both of my sites, Jamesqquick.com, and learnbuildteach.com, I'll go ahead and give my promotional stuff. Both of those are static sites using Gatsby. So I had gotten into React maybe a year and a half ago, React was one that I kind of, shied away from for a while as well, had done Angular work was pretty big into JavaScript just hadn't done React, got into it really liked it, started using it. And then when I heard about static site generators, and learning more about them, again, podcasts and articles and stuff, I realized that my two sites, those two sites, I mentioned that were on WordPress, had some really big flaws with just a lot really primarily around like the development process. 

### James Quick  3:52  
So I couldn't find a way to like check stuff in a source code and have that have any kind of automated deployments. I couldn't figure out how to like the version, the data that was a big problem. So like if I made if I was trying to do stuff locally, and I made changes based on whatever the database was here, how did that interacts with the database out there, like in the live site, and basically ended up finding, I can't even remember what the plugin was, but it just it doesn't lift and shift. So if I do locally, it'll have it'll wrap up my entire database, all the content, all the WordPress settings, everything and just push those out to production, which is it wasn't like that bad, but it wasn't ideal. 

### Bryan Robinson  4:30  
That sounds absolutely terrifying. Like put pushing from your local database to a production database. Just give me some heart palpitations.

### James Quick  4:38  
Yeah, the good thing was it like the tool was really nice. So it was kind of like I could I could go to prod, I could do like an export button, and it would give me whatever, like zip it put everything in. I could load that into my local version. I can make changes, I could send it back. So it like in that sense. It wasn't really that bad just because the plugin was nice, but overall, it was a mess. It wasn't it wasn't ideal at all for the simple site that I was working on.

### Bryan Robinson  5:04  
So So really the JAMstack was kind of your, your ejection point from the WordPress world.

### James Quick  5:09  
It was Yeah. And I think I figured like, as, as a web developer, I could probably do something a little more like developer than WordPress, I was using Divi theme, and it's a visual builder. And you can do all these things. And honestly, as a developer, it was harder to like design stuff in Divi, than it was to just code it. So I figured moving away from that. And then also kind of jumping into this jam sack world where I can incorporate blog, I could have other types of static information and the automatic build process and all that kind of stuff. And really check stuff into source control and have everything in source control, including like data and assets and stuff was really, really cool. So

### Bryan Robinson  5:48  
That was also something that I ran into a decent bit agency world was was a data changes that were important, like, how do you deal with that on a regular basis and how you deal with that without some sort of downtime. Everything's just in source control. You're good to go.

### James Quick  6:02  
Yep. Yep. I don't know. I don't know if we have Should we go get into like some of the some of the workflow for how that is for my sites now?

### Bryan Robinson  6:11  
Sure. Yeah. Be I'd be super excited here that cool.

### James Quick  6:15  
So I've got two sites, like I said, one is learn build, teach sex. That's kind of like, that's kind of my motto for online learning and teaching. So I take time learning stuff, I use what I learned to build stuff. And then I take what I build and learn and teach other people how to do it and the community online and all that kind of stuff. So on on that site, it's pretty, it's pretty, pretty simple. I guess the one thing that kind of fell into the realm of static site generators was just displaying course content information. So I only had like four or five total courses. So if a few free ones on YouTube, and then a free one on you, to me, and a free one or a paid one on you to me, and just want to display the information, but in theory, like I'm going to continue to build courses, and I could go in and I can like Copy and paste the div and I could type in the information to change it and all that kind of stuff. But now I using Gatsby, set it up to just read from markdown files, which is typically I think, what people do. 

### James Quick  7:11  
And I just put information directly in a markdown file, it queries that using graphQL. That was actually another technology that I've kind of heard about for a long time. And I was like, I'm not that interested. And then it's tied into Gatsby. So I get to use that there, which is pretty cool. And so anytime I add a course I just add a markdown file, rebuild my site, and then it goes out there and it's live. And the build process is really cool. So I use, Netlify to host. Netlify is so so easy to just connect a website to a GitHub repo, you tell it, you can tell it a command to to run and I think mine I guess it's Gatsby build. And then wherever the output of that build, like a public directory, basically, you tell it this is the public directory that I want you to serve. So it's those two things, and telling it where the repo is and it's out there and it's built. 

### James Quick  7:59  
So anything I push the master branch it automatically rebuilds and start restarts my site as well with the new information. So anytime I add a course I add a markdown file, check it in, and I push it to master and it automatically goes out there and it resets or restarts the site after doing a build. So all the content is out there it's good to go. Again, going from being on WordPress and having these databases and differences between local and prod and all that kind of stuff to this where everything is just basically in like one neat little bow and my GitHub repo was super super sweet.

### Bryan Robinson  8:36  
Also have probably having to deal with you're probably doing FTP stuff back in the day with WordPress to not even having that source control with either.

### James Quick  8:43  
Yep, yeah, did some so before that plugin I mentioned I was definitely going in and like drag and drop and using FileZilla directly to the server, which is, I think on the Syntax podcast they talks about, like the horror stories. They did those recently and it was all about like people, like going in and doing stuff directly on prod and How they mess things up. And yeah, whatever. So I think I think with the workflow that I have now that's, that's probably at a at a minimum. 

### James Quick  9:10  
And one. So one other thing that I did recently, I was writing articles on a site called scotch.io for a long time, and really good friends with Chris, who runs that he kind of cut back on the amount of articles that they were accepting. And so I started to think about writing articles on my own platform. And then from you actually copying those over to Dev.to and having those you have to tell me that like syndicated Is that the right word. Yeah, sure. Again, like this is this is the knowledge that you dropped on me, but basically, like put them on my site and then have them copied over to dev.to and link back to my site. So I get credit for it.

### Bryan Robinson  9:47  
Yeah, the canonical link the meta tag. Yeah Rel Canonical

### James Quick  9:54  
So with that, I started writing articles on my James q Quick site, putting those on dev.to and then with James q quick ended up going through that same workflow of anytime I have an article, which I have one to put out tonight, is just put a markdown file in there, re rebuild the site. And that does it automatically by pushing the master and the site is up and running. And it's good to go. So,

### Bryan Robinson  10:16  
yeah, JAMstack at its purist right there. And I think at one point, you, you and I have talked about a little bit, I think we're working on a MailChimp server list function of some sort. 

### James Quick  10:27  
yeah. So that's actually like a whole whole new dynamic. So with jam stack, one of the potential I'm doing quotes here for people on audio, the potential limitations is that you don't have a back end, necessarily, like you could have a completely separate back end, you could talk the API's. If you don't want to write a completely separate back in and Netlify they've got you covered. So you can write service functions. And service functions are basically just like you write an individual endpoint. 

### James Quick  10:56  
So you can receive a request. You can do whatever it is you want with that request. Then send it off. So what I did to add newsletter subscribers to my site, I created a server list function in nullify that when someone fills out their email, it will send their email to the server list function, the server list function has their credentials for my MailChimp. 

### James Quick  11:18  
So obviously with secret credentials, secret keys, credentials, you never want those checked into source control, you never want those available for someone else to see. You don't want them in your front end JavaScript. So with the requests coming in to the server list function, the credentials are in nullify so I get access to them and code. I can take the email, I can make the API request on the server to send off and register them as a subscriber to the newsletter and then just respond back to the front end saying Yeah, you're good to go. So any any sort of like extra piece of functionality that I need, I could just create an extra server list function. Have, like however many lines of code 10 2030 not a whole server. Just be good to go from Whatever that functionality is

### Bryan Robinson  12:01  
nice. And so obviously, that's kind of the the personal side, are you able to use any of these methodologies at work? I mean, as as much as you can talk about with with FedEx, but like, Is there anything happening in that world?

### James Quick  12:11  
Sure. Not, there's definitely some. So one of our teams is kind of like a best practices team. And they do pretty good documentation on their like standards and like, the cookbook is what they call it. So it's like recipes that other people can use to do X. And they actually I think they use Hugo as a static site generator. And I I'm gonna blank here on what language and what language it uses behind the scenes. Yeah, that's, that's it. Yeah. So it uses go has like template tags and like short code, abbreviation, whatever those things are called. And yeah, so they use that internally for some of the documentation that we just kind of like share. 

### James Quick  12:56  
We also have our own team version, that I just I probably just haven't spent the time to, like, get into Hugo and really understand what I'm doing. I'm sure it's not that complicated. I just like looked at it. And I was like, Yeah, I don't really feel like doing this. So I haven't done as much as that myself. But I think that's for the most part. As far as I know, that's that's kind of the static site JAMstack type stuff that we're doing internally at FedEx, none of none of the applications that I work on directly have any of those implications, I guess,

### Bryan Robinson  13:25  
Hey, but internal documentation is a great use case for JAMstack. So yeah, more power to them on that. Yep,

### James Quick  13:30  
Definitely. And that's what like all of the Netlify, and Gatsby documentation is all static site stuff. I think, obviously Gatsby is using Gatsby, which makes sense, but that like their documentation is great, right? So you can go out there, you can search for plugins, you can do all these things. And you would, I guess some people have this misconception of like the limitations of gems that but you can you can fill those voids in all these different types of ways something like service functions, to where you really like you don't think of it as like, quote unquote, just static site is like you can build powerful applications that happened to be static sites behind the scenes.

### Bryan Robinson  14:06  
Yeah, preach on that. 

### Bryan Robinson  14:09  
So so obviously if you're using Gatsby on a couple sites Netlify is your host, but what kind of what what part of the JAMstack is really your jam like, Is it is it Gatsby? Is it Netlify? Is it the methodology, the philosophy? Where's your love for for the jam stack coming from?

### James Quick  14:26  
Sure. So definitely, definitely the two tools that you mentioned, Gatsby and nullify. Again, Gatsby like static site generator using react, which is what I like to use using graphQL, which like, has some pretty cool stuff behind the scenes. For me, just like learning what graphQL is and how to work with it. They also have some like image optimization stuff built in, so into Gatsby, so you can like it'll do like image optimization in terms of like sizing and you give it an image and it'll do the random sizing and it'll choose the appropriate one. 

### James Quick  15:00  
Kinda like what Cloudinary does as a service or like you can use Cloudinary to do that. So that's a really cool feature. Anyway, so definitely, like I said, Netlify/Gatsby probably the the mentality of the development workflow, especially coming from like the WordPress workflow that I had before. Everything is in this GitHub repo. I know where all my data is. I don't have to have a database. I don't have to have almost anything installed on my local machine other than node and whatever. Like Gatsby, for example, like I don't need anything else. I can do it anywhere. I can check stuff in from anywhere I push and it gets built, and it's out there and it's ready to go. And if you've already got note on your laptop, you've got a way of getting Gatsby no matter where you are. Anyway. 

### Bryan Robinson  15:38  
It's all NPM based. It all just kind of works.

### James Quick  15:41  
Exactly. Yeah. It's, it's, I mean, like the best development workflow that I could have dreamed of when I was struggling to figure out how people did WordPress successfully.

### Bryan Robinson  15:52  
Yeah, struggling do WordPress successfully is the story of the first half of my development career. So I feel you on that, what's gonna what's going to keep You in the JAMstack? Like, obviously, you're enjoying this right now. But like, if you look a few few years down the road, where are you seeing how that develops for you personally,

### James Quick  16:09  
I think one to continue on the same same idea of ease of use, right? I mean, that's a huge thing. I think the whole ecosystem is continuing to grow. Gatsby just got however, millions of dollars of funding, they have Netlify, just got however many millions of dollars they got. They're continuing to kind of add, again, like those quote unquote, potential limitations, people are continuing to add solutions to those. So you can build like all these really powerful applications, but still have that really cool like minimal streamlined development workflow. 

### James Quick  16:41  
A lot of a lot of that like comes into play with these headless CMS that are out there. So to kind of replace the backend of WordPress and you can actually use WordPress as a headless CMS. And just kind of forget the front end of that and just pull data into their API, but things like content full and cosmic is one I've worked on recently. And there's so many other ones. I don't know, there's just so many tools. People are loving it. Like, obviously, you're doing this podcast because you love it. You've got people that are listening and coming on because they feel the same way. And as a community as an ecosystem being online, the more you hear about something, after ignoring it for a certain amount of time you like you kind of have to say, well, there's there must be something to this, because of how many people are talking about it. And I think that's the stage that we've been in for a while.

### James Quick  17:28  
And it just seems like it's going to continue to grow. And I think the tooling will continue to get better and better and potential limitations will be addressed. And I don't know, I think you'll find less and less reasons to not go this route.

### Bryan Robinson  17:39  
Yeah, I completely agree with you on that. So yeah, so I don't want to take up too much more of your time where we're starting to get in that 1520 minute range that I'm trying to keep us in. So what's your what's your actual jam right now? What's your favorite song or your musician? Or what's your coding to on a regular basis?

### James Quick  17:56  
Yeah, so the last I guess it's been like the last Two weeks I've been listened to Jason Aldean new album So Jason Aldean is a country artist. And I wouldn't say I wouldn't say country music like characterizes me as a person. But I certainly like grew up listen to country music went to school in Nashville, so got a lot like got even more in the country music at the time, and have always liked Jason Aldean. It took me a while to kind of just get to this album. And as soon as I did, I was like, Oh, this is this is really good. So I had I had a day when I was cleaning the house, like last weekend, Saturday, and I had like a portable speaker and just had one of the songs on repeat for like an hour and a half.

### Bryan Robinson  18:34  
Really just just one song.

### James Quick  18:35  
Yeah, I got that for my wife. She ends up like taking taking a song and playing it over and over. So I've kind of gotten used to doing that too. But

### Bryan Robinson  18:44  
I suppose whatever works for you, right?

### James Quick  18:47  
Yeah, whatever helps you kind of zone out and just kind of, I don't know, kind of forget about what you're doing in terms of being able to relax, I guess.

### Bryan Robinson  18:53  
Yeah, gotcha. And and we've mentioned a couple things before but but is there anything that you want to go ahead and promote that you're doing Right now any any any big things on the horizon for you?

### James Quick  19:03  
Sure. So I have my one paid course on Udemy is called learn Visual Studio Code teaches you in my mind, like everything you need to know about VScode as an editor, how to debug how to set up, prettier, and ES lint configurations, Git integration, all the shortcuts that you could ever want to learn are in there. So that's a big one for me.

### James Quick  19:24  
I also have a free one on Udemy that is build a quiz app with JavaScript, HTML or HTML, CSS and JavaScript. So no frameworks, no libraries, just building a pretty cool application, I think, with just kind of the core HTML, CSS and JavaScript. 

### James Quick  19:39  
And then like I said earlier, LearnBuildTeach.com is where I reference all of my content. I'm working on some content right now hopefully have maybe a little bit more to share later on. But one of them is going to be kind of a MERN stack application. It'll be an Amazon price tracker. So if you've ever heard of like CamelCamelCamel, You can give it a URL, tell it a threshold price and have it notify you if the price drops. And so I'm working on building that basically with the MERN stack, so Mongo, express, react, and node, and then tying in Twilio for text message notifications. So that'll be a course that I don't have a link to yet but hopefully will be the next big thing that I advertised. So keep an eye out for that. 

### Bryan Robinson  20:23  
Probably on the Learn Build Teach website?

### James Quick  20:25  
Yes, it will be on LearnBuildTeach.com

### Bryan Robinson  20:27  
Beautiful, beautiful. Alright, well, I appreciate you taking the time out of your day to come and chat with us and share your experience. Yeah,

### James Quick  20:36  
cool. Yeah, I enjoyed it. I glad I could help you kind of spread the positive word about JAMstack. And I will continue to roll on and use it on all my my sites.

### Bryan Robinson  20:45  
Cool. Well keep doing amazing things. And we'll see you around the internet.

### Bryan Robinson  20:50  
So now's the time on the episode where I ask all of you amazing podcast listeners in the JAMstack world. Go out to your podcast app of choice and leave a rating and review. So there are Hello JAMstackers out in the world have a way of finding this lovely little podcast. Thanks for listening as always, and we'll see you next time.

Transcribed by https://otter.ai


Intro/outtro music by [bensound.com](https://bensound.com)