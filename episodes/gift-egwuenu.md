---
title: Gift Egwuenu on Gridsome, Netlify, Serverless and more
date: '2019-11-05'
tags:
  - episode
audioFile: https://pinecast.com/listen/15d1a73d-b8a8-4799-9673-d45f3be4542c.mp3
description: This week's episode, we have one of the Co-organizers of ConcatenateConf, and JAMstack Lagos, the wonderful Gift Egwuenu.
socialImage: /images/gift-egwuenu.png
---

## Quick show notes

* Our Guest: [Gift Egwuenu](https://www.giftegwuenu.com/)
* What she'd like for you to see: [Her Blog](https://www.giftegwuenu.com/) and [her YouTube Channel](https://www.youtube.com/channel/UCgUgg53iJX1pdabUxpkgozA)
* Her JAMstack Jams: [Gridsome](https://gridsome.org/) and [Netlify](https://netlify.com)
* Her musical Jam: [Gift's curated YouTube Playlist](https://www.youtube.com/watch?v=RDJw79JzFNs&list=RDMMRDJw79JzFNs)

### Other Technologies mentioned
* [Hugo](https://gohugo.io/)
* [NuxtJS](https://nuxtjs.org/)
* [GatsbyJS](https://www.gatsbyjs.org/)

## Transcript
### Bryan Robinson  0:03  
Welcome to another episode of that's my JAMstack the podcast where we highlight amazing people in the community and ask the pressing question, what's your jam in the JAMstack? This week's episode, we have one of the Co-organizers of ConcatenateConf, and JAMstack Lagos, the wonderful Gift Egwuenu. Welcome to the That's My JAMstack podcast. Thanks for being on the show today.

### Gift Egwuenu  0:27  
Thanks for having me, Bryan. Thanks for having me. 

### Bryan Robinson  0:30  
No problem. So I've been following you on Twitter for a little while. But I want you to go ahead and introduce yourself to the audience. Tell us who you are, what you do for work, what you do for fun, that kind of thing.

### Gift Egwuenu  0:40  
Yeah, sure. So my name is Gift Egwuenu. I'm a software engineer, and I work for a company called Andella and is based in Lagos, Nigeria. And I'm also a technical writer. I own my own blog where I write about technical topics, mainly focused on front end JavaScript, as well as JAMstack and accessibility. I also run several communities here in Lagos, one of which is the JAMstack meetup in Lagos, as well as a conference called Concatenate. I helped organize that. And for fun, I love photography. So I take pictures, majity street photography, but yeah, that's pretty much everything.

### Bryan Robinson  1:26  
Very, very cool. So so you're pretty busy, especially with Concatenate just ending a few weeks ago, right?

### Gift Egwuenu  1:32  
Yeah. You know about contacting? Cool. Yeah, it was amazing. It was amazing.

### Bryan Robinson  1:39  
Yeah, this is the second year that y'all ran Concatenate?

Unknown Speaker  1:42  
Yeah. So we had our first edition last year, and this second edition was really amazing. Because last year was majority just a remote conference. For this year, we're able to bring down some speakers as well as have other speakers remotely. So yeah. It was fun.

### Bryan Robinson  2:01  
Very cool. So so obviously the JAMstack and static sites are what we're going to talk about today, what would kind of your entry point into the idea of the JAMstack or the idea of static sites?

### Gift Egwuenu  2:11  
So I first time I actually heard about jam stack was from my Twitter timeline. So this was last year 2018. In last year, I was scrolling through Twitter and I saw the team jump stock and I was kind of confused at first actually wanted to know what this because you know, there are so many stocks, the mean stock, the lumps that I just wanted to know what it actually means. And and, yeah, so I just had to do like a Google search about it. And it was quite interesting. 

### Gift Egwuenu  2:42  
At the same time, I just started blogging. So I started my blog, the same time and I was actually scouting for topics to learn more about and also write about, and this was really interesting. So I did my research. Thanks to the jamstack.org site. was really helpful. And then I stayed doing a lot of research about it. And I wrote my first blog posts on the JAMstack. That was my entry points. 

### Bryan Robinson  3:11  
Very cool. And I saw I saw on your blog, you've got like a post about Nuxt, you've got post Gridsome you've got post about Hugo, what's kind of your favorite technology or your favorite piece of the JAMstack? 

### Gift Egwuenu  3:22  
Okay, that's, that's a difficult question. Cuz Actually, yeah, I've actually played with a couple of them. But right now I would say my favorite is Gridsome. Yeah. I initially worked with Hugo. This was while, I; This was I actually started working with Hugo without knowing about the JAMstack  at first, because I had like, contracts gig where I had to build a custom Hugo thing, but then I didn't know have any idea about the JAMstack but I knew what Static Sites were. Didn't know there was something called the JAMstack. So I worked with Hugo. My first blog was actually a Hugo site because then I was pretty much invested in Hugo. So I had to like get my blog running on Hugo. I did I did that for pretty much one year before I started learning more about Nuxt and at the time, Gatsby was very, very popular even though I am also a React developer when I found out there was also a similar a similar static site generator like Gatsby and it was with some he was quite new at the time that I started using it. So I'd say it's just checked the docs, and it was really interesting. And then I decided at that point, I just say it's port my Hugo blog to Gridsome And ever since then, I've been loving it.

### Bryan Robinson  4:49  
I only know a very little bit about Gridsome. And that's kind of it's on that. It's the Static site generator for Vue that Gatsby is for react?

### Gift Egwuenu  4:58  
Yes is pretty similar to Gatsby because he has the same GraphQL integration that Gatsby has. So yeah, they are pretty similar but they just have different programming languages. React and Vue. Yeah.

### Bryan Robinson  5:15  
And I assume you kind of started making that transition from Hugo over to over to Gridsome because you were working in JavaScript more than and what Hugo's in actual Go.

### Gift Egwuenu  5:25  
Yeah, exactly. So I actually wrote I wrote a blog post on why I made the transition. Because Yeah, I was working with Hugo, I To be honest, I haven't really done anything with Go. So I was basically just doing things out of my own knowledge. I didn't really know so much about Go programming and it was very difficult for me to customize my blog at that point. So when I found out that Okay, there is Gridsome and actually love working with Vue. This is something that I can customize on my own without having to like Seek for extra help. So I just decided to make that transition.

### Bryan Robinson  6:05  
Yeah. So so obviously that's that's you and your kind of personal and your blog site and all that. Are you using JAMstack philosophies professionally, at all

### Gift Egwuenu  6:14  
So that's the thing. At my job. I really don't use the JAMstack. I only use it for Yeah, my personal projects on my blog.

### Bryan Robinson  6:25  
Okay, cool. And do you find that as you experiment with these technologies, are you able to bring any kind of peace that thought process back over to kind of your non jam stack job?

### Gift Egwuenu  6:36  
Yeah, so currently we are I'm working. I'm working with React at my job. But a couple of a couple of teams in my company, actually using Gatsby so which is great. My team currently only uses React. So yeah, this is something I can Maybe talk to them about if they're interested in making the switch. Well, yeah, that's though that's going to be long shots but yeah.

### Bryan Robinson  7:07  
So is Gridsome what you would consider your jam the JAMstack? Kind of your favorite technology. Are there any other technologies that you're really passionate about right now?

### Gift Egwuenu  7:16  
Yeah. Gridsome is one of them. I'm really, I'm really happy about scripts on my last season. It's then another technology that I love using is Netlify. Yeah, because Netlify was like the my entry into the JAMstack. I got to know about the JAMstack through Netlify, and pretty much works with a couple of Netlify products. I use Netlify for almost all my deployments, which is great. Yeah, so I love those two technologies a lot.

### Bryan Robinson  7:52  
So you've been working in kind of the JAMstack for a couple years now. What's going to keep you there? What is it about the JAMstack That is is hopefully going to be the big future of the web?

### Gift Egwuenu  8:04  
So for me basically JAMstack, I feel like JAMstack is still evolving because a lot of people are still trying to get acquainted with the whole knowledge about the JAMstack. I actually started working with JAMstack last year and so far it's been amazing and I feel like for the future we don't we can't we can't actually tell how much you can do with the JAMstack right now. 

### Gift Egwuenu  8:32  
You can do a lot. People actually just think JAMstack is all static sites is just for needing a basic web or a basic websites for know you can actually extend the the things you can do with JAMstack even now that you have like things like serverless, which I'm actually at this point I'm trying to learn more about the serverless architecture. So yeah, you can pretty much extend the use cases for JAMstack in whatever you're working with.

### Bryan Robinson  9:06  
Yeah, definitely. And so with the kind of the serverless stuff that you're starting to explore, do you have a background in back end development or are you primarily front end?

### Gift Egwuenu  9:15  
Yeah. I have a background in back-end. In my job I also do back-end development with NodeJS.

### Bryan Robinson  9:23  
Okay. Very cool. So, so yeah, adapting that to serverless should be should be pretty simple and pretty fun.

### Gift Egwuenu  9:28  
Yeah, it is. Like yesterday, I was going through, I think his name is Jason. So he had like a workshop on Front-end Masters yesterday and I followed through. And he also one of the, all of the amazing things about his workshop was when he was trying to teach us about how to get started with serverless functions. And it was very easy. It was it was very slick, like, I did not think it will be that easy. Yeah, just Amazing.

### Bryan Robinson  10:02  
So, what, uh, what is your actual like musical jam right now? Where are you listening to what fuels your day? What's your favorite music or artist or song?

### Gift Egwuenu  10:12  
Every day I have a playlist rights of Nigerian music, which I think I should share. Cuz it has pretty much everything that I love from R&B to Afro beats, mostly nigerian music. So yeah, it's a playlist on YouTube that I just developed for myself. And I use it mostly when I'm working.

### Bryan Robinson  10:38  
Awesome. Yeah, definitely share that link with me. And we'll and we'll share it out because that sounds really amazing. Especially, especially like R&B and, and that sort of thing. I've always enjoyed that. 

### Gift Egwuenu  10:48  
Cool, I will share that. 

### Bryan Robinson  10:51  
So last, but certainly not least, is there something that you would like to promote that you're doing something you kind of want to get out there and share with the world?

### Gift Egwuenu  10:59  
Yes, sure. I would like to talk about my blog. I know I've said a lot about it already. So I have a blog. It's giftegwuenu.com. And I also have a YouTube channel where I talk about tech, as well as my personal life. So it's on YouTube. I'm also Gift Egwuenu. So,that's my shameless plug.

### Bryan Robinson  11:22  
Excellent, excellent. So yeah, and I definitely recommend, recommend that blog, at least. I haven't seen your YouTube channel. Go check that out too. But I love all the articles you've written on your blog so far.

### Gift Egwuenu  11:31  
Thank you. Thank you.

### Bryan Robinson  11:33  
Alright, well, we'll we'll wrap things up. I really appreciate you taking the time to chat with us today. And, and hopefully, we'll see you doing more and more amazing things, especially with concatenating jam sack Legos and stuff like that.

### Gift Egwuenu  11:44  
Thank you. Thank you for having me. This was fun.

### Bryan Robinson  11:47  
Yeah, I really enjoyed it. Thanks a lot. 

### Bryan Robinson  11:52  
Hey, everyone, it's Bryan again. And I want to say thank you to everyone who has listened to the podcast and asked if you enjoyed it, you head over to your podcast application. Give us a review or rating, how people find this podcast and learn more about the amazing community that we work in. Thanks for listening and we'll see you next time.

Transcribed by https://otter.ai

Intro/outtro music by [bensound.com](https://bensound.com)