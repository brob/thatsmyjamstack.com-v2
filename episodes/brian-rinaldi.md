---
title: Brian Rinaldi on proving the benefits of JAMstack, content editing and more
date: '2019-11-19'
tags:
  - episode
audioFile: https://pinecast.com/listen/6d470baf-61af-446c-b0aa-9d4656d90868.mp3
description: On this week's episode, we sit down with Brian Rinaldi, a developer advocate for Stackbit.
socialImage: /images/brian-rinaldi.png
---

## Quick show notes

* Our Guest: [Brian Rinaldi](https://remotesynthesis.com/)
* What he'd like for you to see: [Flashback Conference](https://flashback.dev)
* His JAMstack Jams: [Stackbit](https://stackbit.com/) | [Netlify](https://netlify.com) | [Hugo](https://gohugo.io/)

## Other Technology Mentioned
* [Jekyll](http://jekyllrb.com/)

## Transcript

### Bryan Robinson  0:02  
Hello, everyone, welcome to another episode of That's My JAMstack, the podcast where we ask the pressing question, what's your jam in the JAMstack? I'm your host, Bryan Robinson and on this week's episode, we sit down with Brian Rinaldi, a developer advocate for Stackbit.

### Bryan Robinson  0:21  
Brian, thanks for being on the show today.

### Brian Rinaldi  0:23  
Thanks. Thanks, Bryan for having me.

### Bryan Robinson  0:26  
The "Bri(y)an" episode. Go ahead and tell it tell us a little bit about yourself what you do for work what you do for fun.

### Brian Rinaldi  0:33  
So I am a developer advocate at Stackbit. So you know, I get to mess around with all the new stuff and I get to do all kinds of JAMstack things and call it work and experiment with it, and write articles about it and speak about it. So it's, it's a lot of fun. But for fun, let's see. I'm mostly I'd say I'm a gamer. I'm a console gamer. So I am on either my PlayStation my Xbox or the Switch playing something

### Bryan Robinson  1:06  
What were you playing right now?

### Brian Rinaldi  1:08  
I've been hooked on Apex legends for for a little while and that's kind of my main game but I still play Overwatch regularly. That's another one that is one of my longtime faves.

### Bryan Robinson  1:19  
I've only ever played on the free weekends they've done throughout the throughout the life of it, but I've always enjoyed it. 

### Brian Rinaldi  1:25  
That's an overwatch I'm assuming.

### Bryan Robinson  1:27  
Yeah, because Apex legend is free, isn't it?

### Brian Rinaldi  1:30  
Yeah, it's free. Yeah. So yeah, it's one of those. What do you call? What do they call them? Like fortnite? Battle Royale? Yeah.

### Bryan Robinson  1:40  
Well, very cool. Very cool. So obviously, this isn't a gaming podcast, although I could very easily talk for a long time about that. 

### Brian Rinaldi  1:46  
Yeah, me too. 

### Bryan Robinson  1:49  
So let's talk about the JAMstack a little bit. So what was your entry point into the JAMstack? Or if it was long enough ago, I guess static site generators and that sort of thing. Yeah.

### Brian Rinaldi  1:56  
It was definitely long enough ago. I was probably an early adopter. I wasn't part of the beginning, but I was pretty early on. It was probably about six years ago that I really got heavily into static site. It's a bit of a funny story how I started. 

### Brian Rinaldi  2:17  
Because I mostly started because I was needed to launch the site for work. I had just gotten recently gotten a role at a company called till Eric, which is now got bought by progress software. And we were going to launch a new developer focused site called Telerik Developer Network. And I wanted to to avoid some issues of competitiveness between WordPress and our current CMS solution that we sold. I wanted to just launch the whole thing using Jekyll because I knew some Jekyll and I've been experimenting with it and I got a no.

### Brian Rinaldi  3:01  
So nobody bought into this idea. And then we ended up using WordPress. But I kind of took that as inspiration to dive really, really deeply into disproving how wrong they were in making this decision. And it led to me presenting all over the place about static sites writing a lot of articles about static sites, you know, getting involved early on in the whole community. I wrote a report for O'Reilly about five years ago  about static sites. And then I wrote a book with my friend Raymond Camden, about static sites I was about four years ago, I guess now, three, four years ago. Anyway, it's all been, you know, so I was Yeah, I was early on involved in that and, and have been, you know, dedicated to it since even though it's not until recently after joining Stackbit it was isn't necessarily part of my work day job.

### Bryan Robinson  4:02  
And I feel like that's how there's a lot of great developer technology origin stories. It's like, it's like I had to prove them as wrong as I could.

### Brian Rinaldi  4:11  
Yeah, exactly. It's It's definitely been a part of my, throughout my career, this has come up multiple times.

### Bryan Robinson  4:18  
Cool. And I also didn't know that you would, you would partner with Raymond on a book. So what book was that you said about four years ago?

### Brian Rinaldi  4:25  
Yeah, I think it's like three I think it came out like three years ago now. And we but we started running about four years ago. It's called Working with Static Sites. It's I think the only thing other than you know until Netlify released their thing through a O'Reilly it was the only book early had on the topic. We're we're hopeful that we may even get to revisit that because I wouldn't necessarily recommend it to anybody who's starting out today. The landscape has changed. So much since the time we wrote it, that I mean, a lot of things will still work but it wouldn't necessarily be the most recommended way of doing things today.

### Bryan Robinson  5:12  
I got you and as a side note to all the listeners out there, be sure to go back I think it's episode three Raymond Camden was on the show, so be sure to check that out as well.

### Brian Rinaldi  5:20  
My arch nemesis

### Bryan Robinson  5:24  
Good natured sparring there?

### Brian Rinaldi  5:26  
Oh, he and I go way back. So it's Yeah, yeah. Hey, we've been friends. Well, not to give not to give too much away. But since we both did ColdFusion

### Bryan Robinson  5:39  
So obviously, Jekyll was kind of that the entry point and into the world but fast forward, you know, six years now. There's been an explosion of all sorts of stuff. Yeah, I assume Stackbit is high up on your on your list of passions in the JAMstack or what are you playing with or are enjoying right now? 

### Brian Rinaldi  5:54  
You know, One of the things I like about Stackbit. It is The ability to just; I've been passionate about the topic of, of the editing experience in, in the whole JAMstack for years. Even when I would speak about this, you know, four years ago, you know, it was basically like, "Listen, I know you all think markdown is super easy. And well, you could just you know, if I'm going to launch this site, and I'm going to give it to some editor, I'll just teach the markdown, it's just a few tags, you know, just a little bit of markup. It's really easy."

### Brian Rinaldi  6:31  
And I'm like, but then if you want to do this in markdown, can you do that? No, you can't. So you have to do HTML if you want to do that. And I'm like, and so this now I got to teach you markdown plus HTML, which is not easy. And the whole experience has never been very smooth from an editing person, you know, content editors perspective. 

### Brian Rinaldi  6:52  
And I think so one of the things I've been passionate about is now with headless CMS and, or even like, you know, things like Like NetlifyCMS, which has kind of grown into a really, you know, great project. I think that's changed. And we now, you know, we now have the tools to make a really good editing experience with the JAMstack, which to me, that brings that brings us to the possibility of being able to, to, you know, bring this widespread, like, make make the adoption grow dramatically, because that has been one of the things that held the whole system back is, is this ability like even even now, like, oh, OK, I can change it on the CMS uncomfortable with the CMS side of it. 

### Brian Rinaldi  7:40  
But then, and then I make that change, I submit and then it's like, Okay, let me sit there and Is it is it live? Is it live? Is it live? Is it live, right? And then it's like, okay, it's like, oh crap, I screwed up. When we go back, you know, we fix that typo is alive, you know, and repeat the whole process. So having been a part of marketing teams and in content focused teams I know like the struggles those that that though they have with these kind of tools and I think we're finally making that transition out of that. 

### Brian Rinaldi  8:13  
But besides that I mean honestly I'm gonna I guess you might say old school kind of guy ice I still like Jekyll I still use it. I'd say most of the sites I build are still are in Hugo and I love Hugo and I've been using it for years and I maintain a like a bunch of sites that are built in Hugo.

### Bryan Robinson  8:36  
I said I feel like on the podcast we've been pretty pretty much 50/50 from like that methodology of like the Hugo Jekyll 11ty, the kind of hand HTML to the browser and then 5050 on the other hand of doing Gatsby Gridsome those kind of React or Vue based situation so you kind of fall a little bit a little bit further on the HTML side of things on that on that more static static site.

### Brian Rinaldi  8:59  
More static-y that yeah, I mean, I wouldn't call it more static, I think, you know, you can still do all those things. It's just, you know, it's done a different way. Right. So, you know, one of the things I love about Hugo is just, like everything run so quickly, and I'm able, like, I feel like there's a lot of power in the template writing. And that I can dig into, like, you know, things that, that I I don't have to mess with any frameworks or anything, right. Like, I can build it with a framework. I could not build it with a framework. I'm free to do whatever. It'll work. Yeah.

### Bryan Robinson  9:37  
Whatever you're feeling on that given day. You're good to go. So so out of curiosity, you talked about the the marketing team and that refresh, refresh refresh refresh methodology. Is that constant the inspiration behind that stack bit live thing that the

### Brian Rinaldi  9:54  
Right that's exactly it. So we have like, we already put out a control center that Will that you can get for free right now like you can just add it, if you're on Netlify, you can just add it to any Netlify site. And what it'll do is it'll automatically pick up like if a bill has been triggered, regardless of how that's been triggered. So like, you know, if it's been triggered by the CMS, or it's been triggered by a, you're checking in something to the GitHub repository, like it'll, it'll automatically pick that up, notify you and then you can watch as the build happens. And I'll tell you, okay, it's done. You can check the logs and so on. So that's part of like, that's the beginnings of that whole stack that live concept that we presented at at JAMstackConf in San Francisco. But it goes beyond that to whole editing experience that's going to allow you to edit things in line on the page.

### Bryan Robinson  10:45  
Is that going to be as as agnostic in static site generator and CMS level as all the rest of it is or Yes, okay.

### Brian Rinaldi  10:53  
Right. That's, that's kind of one of the keys I think, to their we're obviously not the only people doing these kind of things. So One of the keys to our solution, I think is that, well, it it doesn't matter which static site generator which CMS for the most part you're using, we will we can support that. Where there are some other great solutions out there, but they tend to be fixed towards a particular methodology. ,

### Bryan Robinson  11:17  
Cool. So, so you're using obviously JAMstack very hard professionally now, it is legitimately your job. You said, you get to play with all these cool JAMstack technologies nowadays. Yeah. Are you still exploring personally like outside you have anything running that way? Or do you get to just do everything professionally now and do it during the day?

### Brian Rinaldi  11:35  
You know, I still do. I still do personally because all the sites I do outside of work, even our jam stack. So like I run a bunch of online like meetups every month, as well as like online events and in person events that I kind of do on the side. And that site is all built in ego and I'm continuously updating that and maintaining that as well.

### Bryan Robinson  11:59  
So you're running a meetup groups and then online meetups.

### Brian Rinaldi  12:04  
So I run Yeah, I do run meetup groups and I run but I run an online meetup. It's it's at like CFE.dev, if you go there. They I run a number of different things through that, like online trainings and stuff. But I have a free monthly meetup. That's for developers. It's on a variety of topics. Like, I don't, it's not JAMstack specific. It's just developer focused. Right?

### Bryan Robinson  12:26  
Okay. Very cool. So what would it be? Would it be fair to say that Stackbit is your jam in the JAMstack? Are there other things that we want to kind of dive into in that way?

### Brian Rinaldi  12:37  
Uh, you know, Stackbit, I'm, I'm still digging into. One of the things I find about it like, I've been using Netlify since honestly, since the very very beginning. And, and I've I've always been a fan of it, but I felt like they've been releasing a lot of things I never got to dig into some really having a lot of fun trying to mess with like service. Was Functions and our like I did a whole post about Identity and stuff like that, which I hadn't really gotten the mess with. I feel like there's a lot of pieces of nightlife I that I haven't haven't ever touched because you know, I could do what I wanted to do very easily but I never had an excuse to get dig into them a little further. And I'm having a lot of fun doing that too.

### Bryan Robinson  13:22  
Cool. There's almost like ancillary to the JAMstack. Things that you really need the JAMstack to do. Those pieces are there for you. 

### Bryan Robinson  13:29  
So I'm also curious about what your actual jam is your musical jam. What's your musical taste? What are you listening to while you work while you play that?

### Brian Rinaldi  13:39  
Oh, yeah. So So I've a lot of what I listened to is it's very electronic. So funny enough, Raymond Camden, I do this whole we have a newsletter. We put out I supposed to be bi weekly, but it's really kind of occasional, like every two or three weeks called CodaBreakers. Where we pick like New Music So I'm like really kind of focused on picking new songs all the time. I'd say lately my jam would be if I could say anybody in particular so so my latest jam like my jam lately has been LCD Sound System and which is not like new new stuff, but I I don't know why I've like rediscovered them and realize like, I'm like why did I not love them as much as I did when this the songs of some of these songs were newer? And and I've just really been digging that but, but other ones like I've really been into, what would you call it chill out music like Tom Cruise I've been. Caroline pull a check and if you ever heard of her, I've been listening to her cigarettes after sex. They're awesome. Very loungy sounding stuff. So yeah, I mean, mostly, mostly obscure, kind of music had tending towards electronic

### Bryan Robinson  15:00  
And will we be able to know what your what your jam is on a on a bi weekly basis by following the CodaBreakers newsletter

### Brian Rinaldi  15:07  
Yeah yeah so it's codabreakers.rocks and it is a jam stack site rebuilt it it's it's it's amazing it's you won't you won't believe it it's it's it's really impressive a single page but but it does actually he built it I mean it's nothing too exciting but he did actually tied into the MailChimp API. So every time we we just send a new newsletter it rebuilds and it it adds the newsletter to the list and everything. So things like that,

### Bryan Robinson  15:36  
And is there anything that you would like to promote what you're doing? What's going on that you want to get out in the open?

### Brian Rinaldi  15:43  
Sure. I mean, the big thing one of the big things I'm doing besides my work at stack bait is I'm running a conference here in Orlando in February. In check net is one of my sponsors. So we've got like Divya from Netlify is coming to speak. It's called Flashback Conference. flashback.dev, it's gonna be a lot of fun. I've got Kyle Simpson as a keynote, Estelle Weyl while as a keynote, I've got Ray's going to be speaking a lot of other really great people. So that would be kind of the thing I'm most excited about and what I'm working on, you know, when I'm not working for, for work, that's what I'm working on my free time. 

### Bryan Robinson  16:22  
Conference organizing is not easy. 

### Brian Rinaldi  16:24  
No, I've done a lot of them. I've been doing like 10 years or so. And I've done a lot of them. And my wife, my wife's always like, I don't know why you put yourself through this. You stress out every single time and then you're like, Oh, it's going to be a failure. It's gonna talk and then it all goes well. And then you start the process all over.

### Bryan Robinson  16:42  
I've never organized the conference, but I've done a yearly hackathon. And until I get that, that like 10th ticket sold, I'm just like, no one's coming. Yes. And then we get like 100 Plus, and we're good. 

### Brian Rinaldi  16:52  
It's always like that in everybody waits to like the last two to three weeks to buy their tickets. And until then you're like, this is going to be a failure.

### Bryan Robinson  17:00  
And you buy all your all your food and stuff, you know, for hundreds of people and you just know you're gonna have too much. 

### Bryan Robinson  17:07  
Well, I appreciate you, you taking the time and talking with us today. Hope to see you more stuff coming from stack but especially around that live stuff soon.

### Brian Rinaldi  17:13  
Thanks. Thanks, Bryan. Appreciate it.

### Bryan Robinson  17:16  
And as always, I want to thank you, our amazing listeners, knowing the folks are listening and enjoying the show keeps us coming back week after week. If you want to support that's my jam stack. Be sure to give it a light, favorite or review in your podcast app of choice. Until next time, keep things jamming.

Transcribed by https://otter.ai


Intro/outtro music by [bensound.com](https://bensound.com)