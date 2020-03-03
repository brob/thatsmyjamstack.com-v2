---
title: Raymond Camden on the history of Static, hosting, side projects and more!
date: '2019-09-03'
tags:
  - episode
audioFile: https://pinecast.com/listen/bca059f5-36b1-4bce-b71d-a9932baa0614.mp3
description: Today we've got the pleasure of chatting with a developer advocate who specializes, according to his website, on JavaScript serverless and enterprise cat demos, I'm talking, of course, about the amazing Raymond Camden.
socialImage: /images/raymond-camden.png
---

## Quick show notes

* Our Guest: [Raymond Camden](https://www.raymondcamden.com/)
* What he'd like for you to see: [CodaBreaker.rocks](https://codabreaker.rocks/)
* His JAMstack Jams: [Jekyll](https://jekyllrb.com/) and [Netlify](https://netlify.com)
* His musical Jam: [Hatchie](https://hatchie.net/)
* [Raymond's post about serverless functions and MailChimp from 14:15](https://www.raymondcamden.com/2019/05/29/using-the-mailchimp-api-with-netlify-serverless-functions)

### Other Tech mentioned

* [HarpJS](http://harpjs.com/)
* [Zeit](https://zeit.co/)


## Transcript

### Bryan Robinson  0:00  
Hey everyone, welcome to another that's my jam stack episode. Today we've got the pleasure of chatting with a developer advocate who specializes, according to his website, on JavaScript serverless and enterprise cat demos, I'm talking, of course, about the amazing Raymond Camden. Raymond, thanks for coming on the show. 

### Raymond Camden  0:16  
Thank you for having me.

### Bryan Robinson  0:18  
No problem. So I guess I'll start this off by tell us a little bit about yourself and kind of what you do for work and what you do for fun and that sort of thing. 

### Raymond Camden  0:25  
Sure. So I am a developer experience engineer, for a very large financial firm that is really picky about where I'm allowed to say that I actually work there. So if you're curious, you can go to my LinkedIn and just know that you wouldn't leave home without me.

### Bryan Robinson  0:47  
Leaving breadcrumbs behind you. What What will you do for fun outside of work? 

### Raymond Camden  0:52  
Oh, shoot, write code. play a lot of Just Dance. I'm really, really good at it. Trust me, I'm not lying at all. I do some Lego. My girlfriend and I are working on the Death Star II. And we've been working on that for less, like, month or two. And we're on step like 50 of 2000. So it's, it's a process, but it's a fun process.

### Bryan Robinson  1:19  
Nice. I think I think I saw on Twitter a couple weeks ago you were flying with just dance and actually pulling that off in an airplane. 

### Raymond Camden  1:26  
Yeah, not not scoring very well. But uh, yes, I did play it on an airplane.

### Bryan Robinson  1:32  
Cool. So I guess what was your entry point into this idea of kind of jam stack or static sites or whatever we want to call it to make sense? 

### Raymond Camden  1:40  
Sure. So I've been doing back in work for a very, very long time. I started web development and like 33 or so I did some JavaScript way back then I did some front end work. And if you were if you have been around that long, you know, wasn't quite as fun back then. 

### Raymond Camden  1:59  
So I retreated to the back end where you didn't have to worry about browsers and you just output HTML and put it down. I did a cold fusion for about 10 plus years. This was a not a free app server, not an open source one but a very practical one that had a really great community. And I was very privileged and lucky to be in that community for a while. But like for the longest time like that there was a problem that my solution was to throw an app server at it, whether it's cold fusion or NodeJS or PHP or whatever.

### Raymond Camden  2:35  
And back, I think in 2014 or so like 5 or so years ago, I ran across a little thing called harp JS. And it was this idea of a static site generator and I played with it and like a light bulb went off and I was thinking about all the sites I built with cold fusion network dynamic talking to SQL server and like the data was changing, like once a year, and I'm like, you know what, I don't need that anymore. And again, like light bulb moment realizing that it's not 100% solution, but for like a lot of what I built in the last 10 years, this would have covered a good part of them.

### Bryan Robinson  3:20  
Yeah, very cool. Actually, I think, you probably don't remember this now. It's been multiple years probably been like four years. But you spoke at DevNexus. I was actually speaking at DevNexus that year. And I think you gave a talk on static sites that year. Like, more dynamic static sites, you know, via all these different third parties. I guess kind of out of curiosity since that was before JAMstack was even a thing how do you see the the landscape kind of shifting you know, you've been doing this for a while now, five years at least, you know from that story, so like, what's, what's changing, what's changing for the better, that sort of thing? 

### Raymond Camden  3:54  
So I was definitely against the name JAMstack because it felt like marketing crap. It felt like, got come on it's a static website. That being said, I'm definitely coming, coming around on it. Because when you say static people think so many things that are just not true anymore. So giving it a new name without like the history and without the connotations, of oh, it does nothing. You know, I'm in favor of that. And if I have to explain what JAMstack means, then then so be it.

### Bryan Robinson  4:26  
Yeah, it's what you can do. The types of things, just the strategies, you know, people are finding all these ways to kind of add dynamic back. And then you have platforms like Netlify, which are just amazing and putting so much in there. I don't feel like I'm working with static sites anymore. I feel like I'm working with an app server that's just a heck of a lot simpler in production than what I've had to work with in the past.

### Bryan Robinson  4:57  
Nice. So okay, how are you utilizing these static site? And new dynamic static sites? professionally? Personally? I think your websites probably built in a static site generator, I assume. 

### Raymond Camden  5:11  
Yeah. So professionally at the company that I shall not name. They're not using that at all. Well, I definitely can't speak for the whole company. Maybe somewhere else. So personally, like every site I build pretty much is using it. My blog has been static for two or so years. I've gone through two engines. But before that, it was WordPress for a while. And before them, it was my own custom blogware written in cold fusion. But yeah, my my static site now is over 6000 pages. It's a significant build, but I've had to play something new. It takes Netlify about 10 minutes to run that but yeah, that that was a process because I kind of couldn't do the simple brochure ware type static site thing I really had to think about. If I change a header that impact 6000 pages, if I change my blog theme, if there is like a recent post thing that impacts every single page, so I had to think about stuff like that to kind of make mine perform well and build well with the size that I have. 

### Bryan Robinson  6:31  
Now, I will say like, really, interestingly, 10 years ago now, I was working in MovableType, which had that whole rebuild process every time too. And that was like, I worked on a blog that had not quite 6000 but like, we're talking thousands of blog posts, and it was taking like 40 minutes to build. So hearing 10 minutes is still like a breath of fresh air compared to that old school methodology. 

### Raymond Camden  6:56  
Yeah, and I mean, certainly like if I switched if I switch to the engine I was using previously it'd be faster, but I really didn't like it. I'm trying not to. I'll definitely name names. But I wasn't happy with that engine even though it was faster so I'm using Jekyll now it's not the fastest, but I really liked using it. Yeah. 

### Bryan Robinson  7:17  
Jekyll was my was my big entry point into static site generator. So I totally get that. It's it's super, I think it's super, super developer friendly. Cool. So uh, I'm gonna put this in strong quote, right, but like, what's your jam in the jam stack? What's kind of your favorite thing to be working on? What's your favorite product or framework or obviously you just mentioned jackal, but anything else on top of that? 

### Raymond Camden  7:40  
Definitely a Jekyll. Definitely Netlify I for hosting with the fact that they have severless functions rolled in they just added analytics. I swear I don't work for them. But like so to me, like Netlify is the gold standard. So every single other service out there I compared to them, so you can use Amazon s3 to host your site site as well. But they definitely don't have the features that you get with netlify. Iwill say, I know Zeit. They have some good services as well. I just haven't had the chance to look at them closer yet. But my blog and a couple of my little side projects are all on Netlify right now.

### Bryan Robinson  8:25  
Do you find that using this new methodology using stuff like Netlify makes it easier to do side projects? Have you done more side projects since adopting this workflow? 

### Raymond Camden  8:34  
Yeah, not just static, also like codepen, copen, really good; code sandbox as well. So if I am just doing a real small demo, I'll do codepen or code sandbox. If I'm building a site with HTML and all that, then I will do Netlify for that.  I've also use Surge in the past as well. I still kind of like Surge where, if I know I don't want to keep the site around, I just want to real quick, put it up there and show it type thing. Whereas for Netlify, I tend to not use them for one offs, if that makes sense. 

### Bryan Robinson  9:13  
It does actually search was my first data coast that I used and I kind of went when Netlify came, I was like, Oh, I gotta try this new thing. But that's gonna take a lot of effort. And finally did and now I've got so many one offs in there that my admin's a little bit junked up with the one offs and so like, I totally get that command line interface just put it up there, leave it alone and you never have come back to it.

### Bryan Robinson  9:33  
You kind of talked a little bit earlier about like the ease of it but what what kind of made you fall in love overall with with the methodology Was it the ease? Was it the developer experience? Was it how fast it was? What's kind of your big jumping off point. 

### Raymond Camden  9:50  
So ease at first, and when I used Harp, it is a very simple static site generator. So it was very easy to use because it didn't have a lot of features. And I tried it on a few like very small sites.

### Raymond Camden  10:02  
I definitely, if I talk about that excites our JAMstack now, I don't necessarily always say easy because there's still a good deal of complexity like like my blog has a capital P Process to to work with it. Somebody I forget their name, but I saw like a video like two years ago, and he was talking about static sites and he made this awesome point that you've got the same complexity, but the complexity is on your local dev server, not production. 

### Raymond Camden  10:32  
So like my blog, there still again that that Process, and it was work and it was complexity and all that but like when I publish, I don't think about it. So when I was on WordPress, and WordPress is an amazing platform. It was my first time using it. I was just blown away. But like out of the box, it just does not work. It works not configured to actually run in production. I was kind of surprised by that. Like I did good  traffic. But I don't get like huge company traffic and I really had to work to keep it up. And even after I did the work on the weekend, PHP with died, MySQL would die, whatever. And as much as I love my blog, I absolutely do not want to think about it, you know, on the weekend.

### Bryan Robinson  11:20  
So So you come from a backend perspective. Do you miss anything about having your own server? Like, obviously you don't want to be working on PHP on your blog on the weekend? But is there something that you miss about that experience? Or are you perfectly happy working in the cloud, aka someone else's server?

### Raymond Camden  11:35  
I don't miss crap. No, no, I mean, I still write a lot ofJavaScript client side. I still do server side JavaScript for serverless functions and stuff like that. So yeah, I'm totally fine. 

### Bryan Robinson  11:50  
So you've been I think I've seen you writing a lot about Vue recently. Right? Are you are you seeing that that pairs really nicely with with kind of these these other services, or have you had any tricky points around that. 

### Raymond Camden  12:01  
No, it's just fine. And I can't imagine any further framework being more friendly to the back end. I know that there are some generators that will use like React and some use Vue on the server side. So if you're already familiar with that, then you can do that. Gridsome is VueJS one that has been on my queue to look at more Just haven't had time yet. 

### Bryan Robinson  12:25  
So I guess Tell me kind of on the other side of things not in technology right but what's what's your what's your jam right now in terms of like music, what are you listening to what what powers your day? 

### Raymond Camden  12:36  
My favorite band right now is Hatchie. They are kind of Shoegaze and they kind of have an 80s or 90s feel to them. But they're a new band. They just had an EP released. I can't remember the name but look up Hatchie. Friggin love em. Older stuff. I mean, I've been a Depeche Mode and Cure fan for a long time. I'm very old, so I was around when they were fresh, and a lot of Just Dance. I enjoy pop music when I'm dancing to it, not necessarily as like good music, but I will enjoy dancing to it On Just Dance OMG by a artist I can't remember his name, but Snoop Dogg is in it as well as a track called Narco. That's very good. And literally five minutes before this podcast started, I was listening to Lights by Ellie Golding and I love that song.

### Raymond Camden  13:35  
And I'll say, buddy of mine, Bryan Rinaldi we run a music newsletter called Coda Breaker. And that is a static site using a serverless functions that it's at codeabreaker.rocks. That's a new definitely those new TLDs. Last time I went to register and I was like "oh! dot rocks" that's like perfect for a music site. 

### Bryan Robinson  13:56  
Very cool. And is that is that have a player is that just like lifting stuff out?

### Bryan Robinson  14:00  
The site actually use Serverless to get the past letters, newsletters and you serverless to make that sign up a bit easier. So you don't you don't have to leave our site to sign up for the newsletter. 

### Bryan Robinson  14:14  
Very cool. 

### Raymond Camden  14:15  
And I blogged about that will process as well. 

### Bryan Robinson  14:17  
I will grab that link and I'll toss that in the show notes. at you. You mentioned being old. I wouldn't classify you as such but you've obviously been been working in this industry for a while right. Would you compare anything that was happening now in terms of like, rendering statically. Small scripts being hosted to like the real old school methodology like I remember, I wasn't, I wasn't doing it professionally, but I was, you know, high school kid working on stuff and like, copying, pasting like CGI scripts into my CGI bin and having no clue what they did. But just putting them out there. 

### Raymond Camden  14:51  
Like my first couple of sites, so it'd be all static and be a couple of things that be dynamic, and typically that was a contact form that would POST to a Perl CGI script that would just read it, mail it, and then like spit out really basic HTML to say thank you for your submission. I did a lot of those I took a lot of website counters that would spit out an image that would go up as you as every person visited the site. Yeah, so I vaguely familiar. Yeah, I mean, one thing I don't miss was how slow things were back then. Like you know, I'm much more inclined to build stupid crap now. You know, my your ability to play now is a heck of life easier compared to how it was back then. So I'm really happy about that.

### Bryan Robinson  15:44  
So yeah, I don't want to take up too much more of your time. So I'll ask Is there anything that you're doing right now that you want promote young anything out there will will do that?

### Raymond Camden  15:51  
I definitely CodaBreaker.rocks. We have like 30 subscribers, I should say. So. Bryan, and I and we both picked two songs each week or each newsletter. So there's four like newish songs. And then we pick for a kind of random old or just weird or just for fun type stuff. So it's about twice a month, it won't fill up your email box. And I'll give you some new music or some interesting music to rock out to.

### Bryan Robinson  16:19  
Very cool. Very cool. Well, I appreciate you taking the time to talk with me today. And, and maybe we'll have you back once people actually listen to the podcast, so that'll be great. 

### Raymond Camden  16:28  
Awesome. Thank you. 

Transcribed by [https://otter.ai](https://otter.ai)

Intro/outtro music by [bensound.com](https://bensound.com)