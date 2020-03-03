---
title: Andy Bell on 11ty, static sites, progressive enhancement and more 
date: '2019-08-27'
tags:
  - episode
audioFile: https://pinecast.com/listen/f53e5d1b-fa75-4a55-9a5d-75d1efbfca93.mp3
description: Today we have an awesome guest. He's a web designer and developer. You may know him from his CSS newsletter, Piccalilli, his awesome 11ty the starter theme Hylia, his friendly browser checker, mybrowser. FYI, or just his amazing hot takes on Twitter. Let's go ahead and welcome to the show Andy Bell.
socialImage: /images/andy-bell.png
---

## Quick show notes

* Our Guest: [Andy Bell](https://andy-bell.design)
* His current big project: [Every Layout](https://every-layout.dev)
* His JAMstack Jam: [11ty](https://11ty.io)
* His musical Jam: [Lyre le Temps](https://open.spotify.com/album/0hT18UR7YNlPxCzrvZbIzC?si=yToacR_xRbui6tl8cYyQUw)

## Transcript

### Bryan Robinson  0:00  

Today we have an awesome guest. He's a web designer and developer. You may know him from his CSS newsletter, [Piccalilli](http://piccalil.li/), his awesome 11ty the starter theme [Hylia](https://hylia.website), his friendly browser checker, [mybrowser. FYI](http://mybrowser.fyi), or just his amazing hot takes on [Twitter](https://twitter.com/andybelldesign). Let's go ahead and welcome to the show [Andy Bell](https://andy-bell.design). Andy, how's it going today? Hey, how you doing? 

### Andy Bell  0:17  
Okay. Thanks for having me. I'm pretty good. 

### Bryan Robinson  0:21  
So that was my introduction of you. But how would you describe yourself? Are you a designer or developer in your own mind,

### Andy Bell  0:26  
I'll say I'm a hybrid sort of buff. So I tend to call myself a web designer these days because even though it's pretty old school term, it sort of describes what I do perfectly. I tend to see projects start finished. So yeah, web designer, or front end developer is tends to do most of the time these days.

### Bryan Robinson  0:46  
Cool. So So what do you actually do for work and for fun?

### Andy Bell  0:58  
And then other guys a chance to have fun because I've got two young kids. Yeah, fund is whatever, whatever includes those two, but yeah, I remember fun from before that.

### Bryan Robinson  1:11  
I got young the same way I got I got three and a half year old, there's not a lot of fun.

### Andy Bell  1:15  
So, I feel for you there.

### Bryan Robinson  1:19  
Alright, so so what was kind of your entry point into this whole like JAMstack philosophy and skill and or static sites or wherever you like to call it? 

### Andy Bell  1:27  
So, I started with stack size and with Jekyll, a few years ago, I got into Jekyll. I picked up as a solution for really rough  agency project. That was, it was super fluid, the brief was so thin you could smoke it. And I just knew that it was going to be a nightmare from from the start. So I suggested, what do we use Jekyll to build it, because if, if I'm going to things change, it'll be a much easier process so that they're going to be really into it. And obviously it isn't it for our personal blog, and all that but is when 11ty came around, where I really started getting into static site stuff properly, really heavily into it, because it's just such a flexible system. And ever since then, I literally use it for everything now. And so yeah, it's brilliant. Love it.

### Bryan Robinson  2:25  
So as a professional Freelancer using it on like your client projects and stuff like that.

### Andy Bell  2:30  
If you're to list of things that 11ty currently does for me is if prototyping, visual design. And its power in a book is power in the newsletter. And its power in normal client websites, my website, literally everything is now rolling through 11ty in some way awesome form at the moment.

### Bryan Robinson  2:56  
So So would it be safe to say that that kind of 11ty is kind of your jam in the JAMstack?

### Andy Bell  3:03  
Oh, absolutely. Yeah. big thick wad of 11ty jam.

### Bryan Robinson  3:10  
Are there any other technologies or products that you're utilizing in the JAMstack right now?

### Andy Bell  3:14  
Yeah, so do a lot of stuff with with Node when I do anything that's got like backends. So, I tend to like So this project, called every layer that I work on with Heydon Pickering. Tha t's all built with 11ty but we use Heroku and Node to do the sort of clever stuff. Which is all going to be well by the time this goes out it actually will be live. And so I tend to use that I but I am a slowly get into the survivalist stuff as well in the Cloud Functions, because Netlify made that really easy. So yeah, but really, I tend to stick around in static site world. Yeah, that's, that's where I hang out.

### Bryan Robinson  3:56  
Cool. So what what kind of what actually made you fall in love with JAMstack? Like you talked about, you know, Jekyll being your entry point, obviously. Now it's 11ty that's making it much more, I guess, probably fun to work with. Yeah. But what kind of where did you fall in love with some of the ideas?

### Andy Bell  4:11  
I think it was. It's the empowerment thing. So I'm pretty weak with back end technology. It took me a long time to appreciate that. And you can achieve a lot as a as a sort of designer with the JAMstack. And a lot of power is given to you. And you can do a lot for nothing as well. And that's one thing I really appreciate about is that someone can get an 11ty site or whatever they want to use, and deploy it for free, on Netlify and then they own their own content. So that stuff's really appealing. And then I think is going to be really key in the success of JAMstack as well.

### Bryan Robinson  4:54  
I'm kind of curious, cuz I'm a hybrid to like, I'm a designer developer, and I hate the backend. I hate dealing with servers and all that. But I've been doing HTML, CSS and JavaScript for like a decade. How would you talk to a designer, that's maybe getting into HTML and CSS about static sites and about about that empowerment that you were saying?

### Andy Bell  5:15  
Interesting question. And so soon as I just getting into HTML and CSS, I probably wouldn't, I wouldn't  introduce them to this JAMstack, because I think it could create some confusion really early, especially understanding because I think when you learn in HTML it's useful to be able to see the document as a as a whole software experience that uncomfortable about the JavaScript frameworks, as well as that there's a there's a higher level of abstraction, I think, causes a lot of confusion for beginners. So but once they're a bit more comfortable and understood HTML, I probably introduce them to 11ty, and then Nunjucks. And so this is now you cannot take this piece of code that you've written in a partial and then you know, introduce it like that, piece by piece. So keeping it as simple as possible. And that's one thing that's really good about, especially 11ty is that it lets you go from zero to naught point one, you know that you don't have to go all in and fully commit to a light Gatsby or something, you can gradually implement it on an existing setup. So you can actually teach it by doing things slowly, but surely, and people can understand what his role is and where it lives. In the stack.

### Bryan Robinson  6:30  
You mentioned, you mentioned Gatsby, I actually just saw a presentation on Gatsby and just it kind of solidified my personal opinions. It looks you know, super powerful, and all that. And I played with it. But the complete abstraction of everything that's going on, I looked at it and said, I've been doing this a long time. My brain doesn't work like that. I can't imagine anyone else getting into it. Yeah.

### Andy Bell  6:51  
No, no, I did. I did a client project with it earlier in the year and just found myself yearning back for 11ty, this is a bit too much. pretty difficult to do. What web web development, this this doesn't really have a role in my stack, especially a specialist. So yeah, stick stick with it. I think while it gives you I don't think you really need it to be honest. But you know, that's just my opinion. Suppose.

### Bryan Robinson  7:21  
Sure. And then I guess beyond that, you know, talking and talking about, you know, newbies or you know, people who, who are maybe making that that advancement from be able to do that static HTML, CSS, maybe a little JavaScript into more, you know, full stack and putting air quotes, no one can hear the radio, it's been more kind of full stack development. Would you still talk to them about more traditional stuff? Or are you all in static sites JAMstack ideology,

### Andy Bell  7:55  
Progressive enhancement is my is my thing. So whatever, wherever you use, as long as what gets delivered to the front end is HTML, functional HTML by default, so if nothing else arrives down the pipe, you've still got usable website that's acceptable and accessible, then it's all good. And you could, you could use whatever you want to do, like you can use PHP can use Node, I don't really care as long as what arrives, if, if the only thing that rises the HTML, it works, and you can use it, and then everything else on top of that is a bonus so CSS great that works now it looks good, you know, and then JavaScript, it's definitely a sort of an additional sprinkling of functionality rather than the whole thing. You know. That's how I always operate regardless of what project is really, even when I've built like React projects is being SSR (Server Side Rendered) to make sure that if the client fails, which it will, there's not, there's not a sort of might about it, there's, there's a will about it, and then make sure they still work. So that all this stuff, so yeah, definitely. 

### Bryan Robinson  9:06  
Do you think that the static sites lend themselves stronger to progressive enhancement? Or is it? Is it just a matter of methodology?

### Andy Bell  9:15  
And yeah, I think, I think they might have made that kind of best point a lot easier. And I think that's, that's probably one thing I really like about them and being able to generate what I want -- which is that HTML output -- it seems to be really easy, I think it's almost easier to generate Well, for me, especially to do that with a static site generator, rather than WordPress style, which, you know, it's what I cut my teeth with WordPress, I think even now, if I was to take on the, air quotes, simple project, before I might sling out a WordPress theme, whereas now sling out on the 11ty site, because I think that's now the quickest way to do it for me. Yeah,

### Bryan Robinson  10:00  
That's actually really, really interesting. So I used to work in an agency for about six years, and we had our own custom content management system and all sorts of stuff. But anytime a client couldn't use that, we were just sling a WordPress theme out there. So you think that that potentially, we're getting to the point where it would just be easier to do a quick static site, instead of going picking out a moderate to decent theme and plugging and playing

### Andy Bell  10:23  
I think, I think one thing that is missing and the other is a couple of marketplaces for themes I was just introduced to this thing called StackBit the other day as well, which I thought was really cool, which has that whole methodology going about it and I think that is going to be the the breaking point and the bit that pushes static sites because like people start with seems a lot in world WordPress world especially and I know Gatsby started doing it themselves, well. And I think that's gonna be the key and I really hope something arrives for all the generators like 11ty and Hugo and stuff. I know there's Jekyll themes stuff that are still going these days as well. So I think that might be that the thing that helps people at least starter kits anyway that do initial setup for people because it can be a daunting, you know, 11ty starts with nothing, there's there's nothing in there. It's empty. So I think people I know Phil Hawksworth he he's created a nice starter kit and then obviously I created the Hylia as well. And it's just the fact that like these little starting points that get people into it. I think that will enable people to create these projects quickly and efficiently.

### Bryan Robinson  11:42  
Now, I mentioned I mentioned earlier Hylia you all do you also I think I read somewhere that you have a starter kit that's like a blank  starter kit.

### Andy Bell  11:56  
Yeah, Hebra. You might remember from the the WordPress old days where there's a thing called Stackers by Elliot J Stocks. And this basically that but with 11ty. That's how I got into WordPress was I watch Chris Coyier's digging into WordPress screen casts. And then one of the first things recommended was this Stackers theme. So I got really into that. And I always found it really useful, because it just gave me HTML, nothing else. And then I might as well now want to release Hylia, and they went down really well with everyone. And I thought it'd be nice to also give people the HTML only version of it as well, if they don't want to use all the SASS and all that stuff that I've added in there. So yeah, it seems to be it's not not obviously nowhere near as popular as the other one. But it seems to be helping some people out which is good.

### Bryan Robinson  12:48  
Well, that was that was what you said, you know, that Stacker was was kind of your intro into like WordPress theme that That one wasn't mine. But it was a similar idea where there wasn't, I just got like the loops and stuff like that. And then I could edit that sort of thing, instead of having to write from scratch. 

### Andy Bell  13:03  
Exactly. And that was the use case, because one thing I didn't like about WordPress themes is like in design was that had the prescriptive setup. And undoing that was really difficult. So being able to, you know, put actual CSS on that, you know, yourself was a big, big selling point.

### Bryan Robinson  13:22  
Do you think there's any any room for looking at like static HTML themes? Do you think that that's going to be something that can fill that gap for for static sites? Or is it just too much effort at that point, even to convert it over?

### Andy Bell  13:35  
Could be, Yeah, I think I think one thing our industry is lacking big, big time on is knowledge of HTML, especially -- and CSS, but mainly HTML. And there's always been I mean, I wrote a post by the day about it on Monday, where there's this theory that a button that's being created with live React Native, or whatever it is, is more accessible when it might be technically correct. But at the same time, there's a lot of caveats to that statement, and I think within this forum, and I see a lot of documentation, a lot of popular websites and code samples using very poor markup. So there's definitely a space for I'd say, lazy developers, you don't want to learn markup, because it is the founding, you know, is the core thing on the website is HTML, you know, you can't have a website without HTML, I think there's space for someone to just do it for them to put out an accessibility fire as I like to call it just reduce one more opportunity for someone to have a miserable experience with assistive technology is, is to give people our best point, you know, the, the correct markup for an article the correct amount of markup for post list or even for like an e-commerce, you know, something like? Yeah, definitely see space for that.

### Bryan Robinson  15:01  
So I don't want to take up a huge amount of your time. So I'll move into the last last couple things. First and foremost, what's your like, actual jam right now? Like, what are you listening to? What's your favorite song or artists that you've got going on?

### Andy Bell  15:14  
I was looking at Spotify before we started and there's this this is called, going to murder the name but [Lyre le Temps](https://open.spotify.com/album/0hT18UR7YNlPxCzrvZbIzC?si=yToacR_xRbui6tl8cYyQUw), and I'll send you a link, put it in the show notes. And it's it's really funky. It's really it's been been on the constant loop for me recently. And while I've been working and doing a lot of design work recently, so it's really sort of suited to that I need I need music that makes puts me in a good mood when I do design otherwise, I do terrible work. So it doesn't really matter when I do development, I can listen to whatever design is a very specific thing that I need. And, yes, I'll send a link to the album. I've been listening to a lot of his career. It's really cool.

### Bryan Robinson  15:57  
And then you me, you got a lot of things I'm sure you can promote. What do you want to promote on the on the podcast today?

### Andy Bell  16:06  
I think because it's especially when this goes out. Me and  Heydon have created this thing called [Every Layout](https://every-layout.dev), and it's something that's really important to both of us. We're really both really into CSS, as you mentioned, are on a newsletter, about CSS called Picallili, which incidentally, is getting report formed on the JAMstack as we speak. 

But Every Layout is we're trying to distill CSS layouts and simplify them and teach people to simplify CSS as well. I think we, as a as an industry have overcomplicated CSS and we've thrown far too many heavy frameworks and heavy tools at what are actually simple layout problems. 

And I think this is all a stigma about the modern layout tooling such as flexbox that Heydon and I are trying to solve, break and teach people how to use them. And yeah, it seems to be going quite well. So yeah, that that'll be ready for purchase. When when this goes out so go on and buy it because when you buy it, it means that we can give it for free to people who need it for free. 

And that's the whole the whole mantra that we're doing with it is that we're using people's purchase licenses to then subsidize people who really need it for free and been able to give it to them. So yeah. 

### Bryan Robinson  17:26  
That's amazing. And, and the stuff I've read online that's in there is also amazing stuff too. So you should definitely go

### Andy Bell  17:35  
[Every-layout.dev](https://every-layout.dev) is the URL

### Bryan Robinson  17:38  
and that'll be in the show notes too. Yeah, it's definitely it's definitely worth checking out. We could do a whole episode about it. Have you and Heydon later on. But uh, yeah, it's amazing stuff. Cool. Well, thanks for for taking the time to talk with us today.

### Andy Bell  17:55  
No worries. It's been good fun.

### Bryan Robinson  17:57  
I really, really appreciate it and we'll go from here.

Transcribed by [https://otter.ai](https://otter.ai)

Intro/outtro music by [bensound.com](https://bensound.com)