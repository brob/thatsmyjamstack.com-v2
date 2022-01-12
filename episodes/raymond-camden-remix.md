---
title: Raymond Camden (REMIX) on the amazing expansion of the Jamstack ecosystem and how far we've come
date: '2022-01-12'
tags:
  - episode
audioFile: https://pinecast.com/listen/a84858e1-0da5-46f1-8695-629f278dc097.mp3
description: This week, we've got another That's My Jamstack REMIX! Going all the way back to season one, episode two, we're catching up with the amazingly prolific Jamstack author Raymond Camden.
socialImage: /images/placeholder.png
---

## Quick show notes

* Our Guest: [Raymond Camden](https://www.raymondcamden.com/)
* What he'd like for you to see: [His New Jamstack book with Brian Rinaldi](https://www.manning.com/books/the-jamstack-book)
* His musical Jam: [Pink Martini](https://pinkmartini.com/)


## Transcript
### Bryan Robinson  0:14  
Welcome, everyone to another episode of That's My Jamstack the podcast where we ask that amazingly complex question. What's your jam and the Jamstack? This week, we've got another That's My Jamstack REMIX! Going all the way back to season one, episode two, we're catching up with the amazingly prolific Jamstack author Raymond Camden. Raymond is a senior DevRel at Adobe, a Star Wars nerd, and a web and serverless hacker.

### Bryan Robinson  0:55  
Hey, Raymond, thanks for joining us today on the podcast.

### Raymond Camden  0:57  
Thank you so much for having me.

### Bryan Robinson  0:59  
All right. So for longtime listeners of the show, I mean, like the longest time listeners of the show, they might recognize that Raymond has been on before, but it was legitimately two years ago, more than two years ago, and it was the second episode. And I think we're both older and wiser since then. And there might be folks that haven't listened to the entire archive of That's My Jamstack. So why don't you give everyone a refresher on who you are, what you do for work and what you do for fun?

### Raymond Camden  1:26  
Absolutely. So yeah, first off, I'm definitely older. I'm not quite sure about Weiser. Give me 30 or 40 more years from that. So hi, everyone. I am Raymond Camden. I'm actually not sure what company I was at two years ago, probably two or three different ones. 

### Bryan Robinson  1:45  
You weren't allowed to say is actually what you had yet people go to your LinkedIn.

### Raymond Camden  1:49  
yeah. That was American Express. They were antsy about, you can't see where you work. Yeah, I was American Express. And I'm not there anymore. So yes, I am currently at Adobe, I am a developer evangelist, I am working on the document services team. So we have API's that work in PDS. So like a concrete example of that is you let people upload PDFs and you want a consistent way to render it in the browser. And we have a free tool for that. You want to do some stuff on the server side. So you want to like OCR to PDF, or maybe cut it in half, or add something to finance, slice and dice PDFs, basically. So we have sort of API's that work with PDF, but that work with PDFs, and we have a PDF viewer for the web as well. And that's the team that I'm on. That's what I do for work. And it's got to find as well. But for fun. I am a big video game player, so as my wife so. And even better. She's a big PC Gamer, so she'll game on her laptop while I take away the TV from my console. So again, like that works 

### Bryan Robinson  3:00  
Best of both worlds. What? What games are you playing right now?

### Raymond Camden  3:06  
When I'm not playing with my friends, every Friday night, we call it bowling league, we hang out and play Call of Duty. We just switched to Vanguard. But outside of that, and when I'm by playing solo, I currently am playing Far Cry six, which is pretty cool. I pretty much like only do multiplayer stuff on Friday nights. Because when you have kids, it's hard to do anything multiplayer, because there's no pause that all

### Bryan Robinson  3:35  
that pause button is so important with kids. 

### Raymond Camden  3:37  
Oh, yeah. 

### Bryan Robinson  3:38  
Yeah. So cool. So you're doing some cool PDF stuff with with Adobe. But you're also probably one of the more prolific writers in at least in the Jamstack space, but like you do quite a bit of writing too, right?

### Raymond Camden  3:52  
I do too much writing. been blogging since 2003 or so. And I try to blog about once a week. I did a lot more in the early days. But I also started before Twitter, you know, and so Twitter as bad as it is, you know, Twitter's great for short things like, Hey, you wrote a cool article, here's the link. And the old days, you know, there wasn't that. So on my blog, I would just quickly share stuff like that. So I look at my stats, there was one year right at about I think 800 blog posts, which is stupid. The last couple of years, it's a bit more reasonable. So I'm approaching 74 This year, so I definitely hit my one per week average.

### Bryan Robinson  4:40  
Nice. That's I used to go for one a month and I'm not even there. So that is super impressive to me at least. So we talked a little bit last episode, but I want to give a recap. What was your entry point into static sites and the Jamstack? Sure.

### Raymond Camden  4:55  
So I've been around for a very long time to I started web development and 93 year 94 or so, you know, back when there wasn't any defined roles, like you did everything. And I quickly found out that while I could do HTML, no problem, making things pretty was not my forte. So I got really involved in Perl, CGI scripts, and just the dynamic web, which back then, even though we had JavaScript, it quickly became really crappy. On the front end, so the back end really became the place to do anything dynamic. It's been a very long time in the ColdFusion community, which is in law was, you know, a great product, you know, it wasn't open source, and a lot of people look down on it. But it was very practical. It made hard things easy back, when there wasn't a lot of solutions out there that would do that. But yeah, you know, 1015 years to everything, and ColdFusion, and a database and a web server, and that was my jam for a long time. And it kind of two things happen at once. The front end began to get less crappy, like, shockingly, less crappy. And, you know, I always knew JavaScript, but you know, there wasn't much that you could do with it. And all of a sudden, you could start doing really good things. And so like that happened. And I began to realize that I was using a lot of power for websites that probably didn't need it. And I ran across a tool called hark js, which is still around, but I don't think it's been updated for a while. But it was my first introduction to the idea of a static site generator. And I, you know, sort of played with it and just clicked, it was like, oh, okay, it could be dynamic locally, but like, when I'm done with just files, and like, nothing can can crash, nothing could go wrong, nothing could be hacked. So like, I took a couple of my old ColdFusion websites, where, you know, they were database driven. And I recognized, you know, I haven't edited the database in like months. And I began to have to convert them to static and almost like, this is the best thing ever. And this began to do more and more with it. And it really kind of clicked for me.

### Bryan Robinson  7:20  
So out of curiosity, and I don't know if we talked about this last time or not, but you're primarily a back end person from back in the day. And I found not always, but often back in people like servers, they they enjoy working on the server, not me personally, not back in person. But it's interesting that you made this transition to something that is not at all, like, you can host it on any server anywhere. It's just HTML, it's just whatever. But I guess, was it the simplification of the workflow that drew you to it? Or was it something different, as a back end guy coming in?

### Raymond Camden  8:00  
It definitely the simplification. I mean, while I can appreciate the power of something like ColdFusion, or PHP, even, not having to worry about it breaking live was was huge. And doing more in JavaScript, you know, that doesn't need a server, you do have to worry about browsers. But you know, in general, browsers have a good level support for nearly everything that I want to do. You know, ignoring a certain mobile browser from a company in California, but even that does the basic stuff. Okay.

### Bryan Robinson  8:35  
Yeah, exactly. We won't talk about that. It's fine. So cool. So a lot has changed in two years. It's amazing how much this ecosystem changes on a regular basis. How are you today using the Jamstack both professionally and personally and maybe like a slight comparison to maybe how you were using it two years ago?

### Raymond Camden  8:57  
Well, for one, it's definitely nice to see the the ecosystem and not just in API's, but in companies like Netlify and their competitors providing more and more value out of this just off the box. When I first started I used s3 which was convenient you just FTP the files up and you're good to go. But then we saw tools like search for example, which is something else I don't see a lot of people using but I know it's still there and just command line and live what was just really really great like when I started getting a website up involved calling an ISP and waiting a couple days and then you know maybe you got your website where they you had access to again to copy stuff up. So seeing that ecosystem evolved seeing that the different features and seeing different companies now competing to offer more the most value just makes things great for for me I love the fact that I feel like I have good solutions for for like real science. So like, as an evangelist, I don't do a lot of real work. I make a lot of dumb demos. So I like mentally in my brain. I have a path that I use for like my blog, which is a real site. And then I have like a path for here's a dumb toy. I went online, and I don't care if it's online 10 years from now.

### Bryan Robinson  10:23  
Thanks. And it's interesting to me. You mentioned surge and surge was early on for me as well like a way of getting things live. And I really appreciate it. And that was in the days before, like, honestly, important Netlify came around. And I remember the first couple times I use Netlify and figured out like I don't need I was using CodeShip with Serge as you needed to see ICD to like, have those deploys work well. And it's interesting to me how I think it was Phil Hawksworth said on Twitter, like, the table stakes have changed, right? Like what a company that is planning on doing Jamstack or Jamstack, a Jason stuff has is very different than it was in 2015 2016. And like, we expect to see ICD, we expect like these, these server side things that we don't want to have to write. And if you look like the ecosystem has has done that to like Vercel, as a competitor Netlify has many of those things. AWS has amplify now doing a lot of that stuff. Azure has static web apps, I think so like all these. It's interesting to see huge companies, Amazon, Microsoft, like chasing the tail of the little upstart that like said, a front end developer needs these things. Like, let's just give it to him.

### Raymond Camden  11:39  
I agree. 100%.

### Bryan Robinson  11:42  
Seal of Approval. Back in the day, I think at some point we talked about you said talking about harp, I think in the last episode, we might have talked about Jekyll a little bit. And I seen a few of your presentations from way back in the day, I had a chance to see a couple times that a couple conferences talking about different form handlers and stuff like that. But in the 2021 2022 era of the Jamstack. What's your current jam in the Jamstack? What sorts of technologies are you using? How are you putting them together and all that

### Raymond Camden  12:12  
I quickly moved on from harp to other engines heart was good and simple. And I'm really happy with the first thing I saw, because within five minutes, I had stuff going. But I've gone to a couple of different generators over time. And they all have different philosophies. And I have found that my philosophy is that I like a lot of freedom. I like the freedom to write bad code for a sample if I want to, or I need something very unique. I need extremely configured stuff to do whatever I want. Some generators just don't allow that. I don't want to attack any generator. So I'll be vague, but I was using one from my blog for a while. And blog is a huge site. So build times are kind of important. And one of the things I found out is that, you know, in my blog UI, I had like the last five blog posts and my nav. And every time I'd write a new blog post, all 6000 Plus URLs had to be updated on that URLs, files had to be updated, because I was changing part of the UI for every blog posts. So my my quick fix was I'll just make that Ajax, you know, that can load later. It's not crucially important that just a way to drive, you know, more traffic monster on my site. And the generator I was using at a time, competed incredibly hard out but JSON, like it was fine tuned for blog posts and HTML. And I want to output JSON and I spent a day and it was very frustrating. And in in that particular instance, defense, I know it's gotten better at that. But it was enough to kind of get me off that so in general, I look for things that are very flexible. 

### Raymond Camden  13:55  
I use Jekyll for a long time I like liquid it again was was very flexible. But the Ruby dependency was a bit of an issue. I always liked using Jekyll I hated installing. It's gotten better, which is nice. But when I ran across 11ty and saw that it was Node based and it certainly wasn't the first one. But it was the first one and that kind of clicked for me. And it had that flexibility in there to an extreme phase. 

### Raymond Camden  14:32  
So for example, supporting markdown liquid Jade, handlebars, everything. I felt like I could do anything I wanted to there even if it was a foot gun like it let me do what I wanted. And like since I have started using 11ty, every kind of crazy wild idea I have just plain works because you know Levante is very light. You know, I get For tools, you do whatever, like, a couple weeks ago, I did this really dumb idea of, I want to file I want it to output to PDF. And he gave me the hooks to allow me to, you know, use frontmatter and say this is a PDF, it gave me the hope to recognize that and change the output stream, I used our PDF services to do that. And, you know, again, maybe it's not a very practical idea, but I loved that 11 D allowed me to do that. Well,

### Bryan Robinson  15:31  
so I remember back in my agency life, it didn't happen often. But it happened enough that clients wanted to be able to generate PDFs. And you know, we were a PHP shop, and we had a custom content management system. And so like our CTO, and our developers would work on like, these big, like, monolithic PDF generators, and like, they would use services and like, there's like Doc raptor and stuff like that. And, but it was, it was always dependent on that. And like the idea that you can theoretically hook into any custom content management system, using like 11ty data, JS data files, and you could hook into any service, like like Adobe's PDF service, and then all you're really doing is changing the data. And then using 11ty to create a template, and that template could go somewhere. And that template could be written, I don't know, like, in probably like, in an HTML or HTML, like, you know, system, it means that anyone can generate this sort of thing. As long as they know, a few basics. We're talking about, like making the transition from Jekyll into like, eleventy. I, that was my personal transition, as well. And I've heard a few different people kind of, kind of talk about that. Was it eleventy is Jekyll likeness that brought you to it? And it was just like, oh, it's it, but it's a Node and it allows these other things, or was it actually the extensibility of an actually the configuration of it? Like, what what caused like that perked you up to 11ty, I suppose.

### Raymond Camden  17:04  
All of that, um, I know, specifically, I was looking at Node based static site generators. And I'm like, I recognize that much as I like Jekyll, I wasn't happy with Ruby. So I looked at a couple of them, I think, like ghost, for example. And they just wasn't clicking with me. So eleventy was easy to start with. I think a couple things. The way it did pagination was mind numbingly awesome. And again, I think all the generators out there support pagination, but I don't think any has done it quite as easily as How 11ty did it. So that was a huge, big thing. And the data files, I think, was also really cool, especially being able to do API type calls. And then and just make it available. I think those two features in particular, I might push me over the edge, like everything I'm going to do, for the time being is going to be with this particular

### Bryan Robinson  18:08  
tool. I remember thinking about data in the in the Jekyll world, and I would end up I need to write Jason, I need to write a script that's in my build process that spits out Jason that Jekyll can consume. There might be better ways of doing that. But I have not Ruby Dev. So like, where's my where's my JavaScript? It's in my build step. So yeah, that was that was a big selling point for me as well. I do want to talk a little bit because you've been you've done a little bit of a blog series. 11ty 1.0 is in official beta, a lot of cool features coming out. I'm curious your take on it. And like the the pieces that have you excited in that world,

### Raymond Camden  18:45  
there's a lot. So one thing is the template engine upgrade. And that really hit me coming from liquid. So what you may not know if you're new to 11 AR VR or not use it. It supports all these template languages. But it's important that at a certain version, when I came to it from liquid from from Jekyll, not only the Jekyll have, I believe a newer version of liquid, it had its own added things to liquid. I didn't quite grok that. So I would do things and eleventy that wouldn't work. Also, when you add it back, that liquid has this really, really, really bad default of if you're trying to do something I don't support, I do nothing. I just return an empty string, which you can configure to throw an error instead. But I'll never understand I'm like so I tripped up on that a lot. And so one of the things I love in 1.0 is just kind of catching up the the template engine so the most recent version so I really appreciate that that's it's not it's not a whiz bang type feature but it's a daily life thing that I think is really really great. There's a lot of small Claudia live things like even dynamic ignores having a larger website, I had an ignores file that was a press like 90% of my content just so that my reloads were quicker file based, I could check that into GitHub, because then that would get pushed to production. eleventy just adds a way to to kind of make that a bit easier. Another thing that they just just released is the ability to have a file in one language like liquid and literally embedded different language in there. So one of the things I did early on with eleventy is because it's supported all these different languages, I like the liquid. But it's also a bit prescriptive in terms of how it works. EGS is it is a, it's not a pretty language at all. It reminds me a lot of classic ASP, but it's incredibly flexible. So I one of the things I've done on my blog is I have a static page, which pretty much only I use, but a lot of number crunching and stuff like that, I could have built a lot of eleventy filters and stuff like that, no, I, I just switched the EGS for that page. And I have a very ugly page, because EGS is not pretty. But it got the job done. So the fact that in a 11ty 1.0 I could use liquid for like my main stats, and perhaps just have a block, have it be the ugly block, where I use EGS to do all that crazy number crunching. I like that as long as well.

### Bryan Robinson  21:32  
My, my excitement on that is probably worse than that. But like I'm a Nunjucks person again, like we get to have these kinds of like decisions made on a file by file basis by like nunchucks is very similar to liquid, a couple extra powers maybe a little slower. But the default installation of nunchucks in 11 D And again, that's changing, I actually need to look into the new versions but have fewer filters than liquid liquid does built in. So if I want to handle dates, the liquid installation handles it with a filter, I have to write my own filter in nunchucks, no big deal. But now, I could literally have my nunchucks file and then have one liquid tag that renders a date when I need it rendered and not ever have to worry about it again, not ever have to write that filter. And that's, that's exciting. For me, it's just the fact that it opens up these interesting worlds where you can have whatever also like as a plugin creator, nunchucks, handles, filters and some of the other stuff that or you can do a little bit more like Object Notation inside of it. Liquid, it's space delimited. And it's just kind of like, that's really ugly to me. But like I could then let my plugin be used as nunchucks and not have to worry about it for anyone like they can just bring it in use liquid for everything else. And we're use handlebars or use whatever. Or use handlebars until you need a loop. And then you can bring a loop in via these other ones. But

### Raymond Camden  22:56  
I'm just saying like how freeing it is. And this is not an 11 a thing or I love the one final thing, but it's so freeing, know that I could write code that's going to be run one time only period. And you know, I still try to write proper code, clean code documented code. But I it's so freeing, like I don't have to worry about performance, like it's going to build one time. And then it's done. Like and if it's a little slow, that's okay. And that relieves a lot of pressure from me when I'm building things it's referring to

### Bryan Robinson  23:30  
when when when the performance concerns or performance for your build step. You can be a little bit more lax about it. You don't have to worry about it as much you can. You can render, you don't want to render 1000s of pages, right? Like obviously, that's not great for quick iterations. But you can and that's not the worst thing in the world. Awesome. So let's, let's pivot a little bit and talk about your musical jams. What are you listening to nowadays? I think last time, you mentioned a band called Hatchie I think are they still in your in your listening queue? Or have you moved on to different pastures?

### Raymond Camden  24:08  
i Yeah, I'm not day to day. I have pretty varied things I'll listen to. But the one that comes to mind and just so happens to be one applying this morning. There's a band called Peak Martini. And they're very eclectic. Think like 1930s Jazz and Paris or beatnik kind of 60s. Great background, great party music. It sounds very highfalutin. And I say like I think they imagine without the long cigarette type. That type of vibe but listening to is really kind of cool and relaxing. And one of my favorite features of Spotify is you can like pick a core band or a core song and Spotify just going to read from there. So I've been doing Pink Martini radio on Spotify a lot. It's a really great,

### Bryan Robinson  25:06  
um, I have to check that because I've recently, due to some tick tock videos gotten back into like the 90s arts like jazz scene that was happening. And I could I could use to mix that up a little bit stay in similar genres. Awesome. So is there anything that you're doing that you'd like to promote out to the Jamstack community?

### Raymond Camden  25:24  
Absolutely. And myself and Brian Rinaldi, we are writing a book, we call it the Jamstack book, because we're that eco tip book you'll ever need. We are working on it for Manning. And I assume we could share URLs late. So it's available now and meat, which is manning Early Access Program, which means you get a beta copy of the book, but it is pretty much done. And when you buy me, you get the real book later. So it's totally safe to buy right now. But if you want to wait, it also should be out in 1.0, relatively soon. And I think it's a great book for people who are new to Jamstack because it gives you a variety of different tools and techniques, and also give you some basic examples. So building a blog building a brochure where site but doing ecommerce, and then goes deep into things like adding API's and services and doing serverless functions. So I think it's a great book, and every copy you buy helps me feed my children. So guilt at all,

### Bryan Robinson  26:30  
you know, none, none. And I could be wrong about this. You and Brian wrote something similar ages ago, right? Yeah. So this is like a big, big updated version of all of that. Absolutely. Cool. All right, Raymond. Well, I appreciate you being on the show with us today. And I hope you keep doing awesome stuff help the blog keeps rolling at a once ish per week rate, because it's a lot of great stuff. And I appreciate you being here.

### Raymond Camden  26:53  
Thank you for having me.

### Bryan Robinson  26:55  
Thanks again to our guest, and thanks to everyone out there listening to each new episode. If you enjoy the podcast, be sure to leave a review rating, Star heart favorite, whatever it is, and your podcast app of choice. Until next time, keep doing amazing things on the web. And remember, keep things jammy



Intro/outtro music by [bensound.com](https://bensound.com)