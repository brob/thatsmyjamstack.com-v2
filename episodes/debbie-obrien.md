---
title: Debbie O'Brien on NuxtJS, web frameworks, creating your own framework and more
date: '2020-07-07'
tags:
  - episode
  - season-2
audioFile: https://pinecast.com/listen/0389b019-e1ff-4956-9af5-687696fa752d.mp3
description: This week on the show, we had the amazing and talented Debbie O'Brien. Debbie is the head of learning and developer advocate for NuxtJS. She's a Microsoft MVP, Google GDE and Cloudinary MDE. 
socialImage: /images/debbie-obrien.png
---

## Quick show notes

* Our Guest: [Debbie O'Brien](https://debbie.codes/)
* What she'd like for you to see: [Nuxt Content](https://content.nuxtjs.org/) | [Nuxt Static](https://nuxtjs.org/blog/going-full-static) | [Nuxt Components](https://github.com/nuxt/components)
* Her JAMstack Jams: [NuxtJS](https://www.nuxtjs.org/)

## Transcript
### Bryan Robinson  0:02  
Hello, everyone, welcome to this week's episode of That's My Jamstack the podcast where we ask the timeless question, what's your jam in the Jamstack? I'm your host, Bryan Robinson. And this week on the show, we had the amazing and talented Debbie O'Brien. Debbie is the head of learning and developer advocate for NuxtJS. She's a Microsoft MVP, Google GDE and Cloudinary MDE. 

### Bryan Robinson  0:25  
But before we get to that, let's talk about our amazing sponsor this week TakeShape. We'll talk about their content platform after the episode. But if you're curious to find out more right now, head on over to take shape.io slash That's My Jamstack for more information. 

### Bryan Robinson  0:45  
All right. Well, thanks for being on the show with us today. Debbie, how are you doing today?

### Debbie O'Brien  0:48  
Hey, I'm good. Thank you. Thanks for having me.

### Bryan Robinson  0:50  
No problem. So tell us a little bit about yourself. What do you do for work? What do you do for fun, that kind of thing.

### Debbie O'Brien  0:56  
So I'm working for NuxtJS as head of learning and Developer Advocate. So that's kind of pretty cool. And in my free time I'm doing sport because like lockdown makes you fat. So I'm doing a lot of sport, Taekwondo running, cycling anything.

### Bryan Robinson  1:12  
Anything get a little active, right?

### Debbie O'Brien  1:14  
Yeah. Also because we were locked up for like two months. So it's just like, good to get outside and actually do stuff.

### Bryan Robinson  1:20  
Yeah, the best I'm on managing right now is just short walks outside. That's, that's what I've got going.

### Debbie O'Brien  1:25  
Well, it's a good start.

### Bryan Robinson  1:27  
So tell us a little bit more about what you do as kind of the head of education and dev advocacy at

### Debbie O'Brien  1:35  
Yeah, so basically, my job is to kind of like make sure that Nuxt is really easy to use, easy to learn by providing good documentation, great examples, demos, pretty much anything that you would want when you want to like learn something, that you have the right materials, and then we'll work on workshops and video courses, etc. And then obviously, just Nuxt-ifying the world. I mean, the whole aim is that everyone uses Nuxt. They know what it is. Because it's amazing, right? So we just have to like, show it to the world. And then like, everyone would just come on board.

### Bryan Robinson  2:06  
Watch everyone pour right in at that point, right?

### Debbie O'Brien  2:09  
It's easy. It was really easy.

### Bryan Robinson  2:13  
So so what what do you kind of see is the difference between like, since you have both those titles can combine what's the difference between like developer education and you know, Developer Relations or developer advocacy?

### Debbie O'Brien  2:23  
Um, I guess you could say they're very similar sometimes, especially when you're writing a blog post, right? Because you're advocating because you're producing material, but you're also teaching because you're teaching someone something new. So that's why I think they're very much combined. But I guess if you were like to go for a job and learning it doesn't mean you have to be a speaker on a stage right. So the advocate, advocacy ism is a little bit more. Get out there in front of people. I think, you know, be more, don't be shy.

### Bryan Robinson  2:50  
Cool. So, so we'll talk a little bit more about Nuxt here in a second. Because I imagine when we talked about your, your use of the Jamstack. Professionally, we'll talk a lot about that. But what was your entry point into the idea of the Jamstack, or static sites, or whatever that may have been,

### Debbie O'Brien  3:04  
Yeah, so I guess I kind of just fell into it in a way, um, we were working for a company, and they, we had to, like, rebuild the website, it was it was really, really, really slow. And it was development experiences terrible. There's a lot of problems. So we at the time, we researched which framework to use, and, you know, was react or Angular or Vue. But we needed server side rendering, we needed like, you know, good search engine optimization. So a lot of them were a problem for us. And we came across Nuxt. And at the time, they said no, because Nuxt was too young. 

### Debbie O'Brien  3:40  
So they basically asked us to build our own framework. So we built our own framework, which was like a statically generated site framework. And we built that which is still in use today by the company. It's an amazing experience to build your own framework, but never do it. Yeah, it worked. Yes, it was great. Yes was fantastic. But you have nobody contributing to it. I don't work there anymore, and nobody's who's going to maintain it? So having a community behind you is, you know, you just need it when you're creating something like that. It was a great experience. But yeah, when we finished it, and we kind of showed it to everyone, we said, Look, this is how it works on it is super fast. And like, the website is still alive today. And it's still super fast. But my recommendation was okay, now that we've built this, now it's time to move to Nuxt. And they said, No, I left the company. I didn't want to work on my framework for the rest of my life.

### Bryan Robinson  4:38  
Yeah, like you said, like creating something like that can be super rewarding, but like long term, it's a problem.

### Debbie O'Brien  4:44  
Yeah, and it has its limitations because you know, if you want to do new things and add more to it, etc. And there was just two of us actually, full time on the project and then a few others that were kind of helping out. So I wasn't the main like the person who was doing all the developing developing work. was working more in the front end side of things and kind of like making sure things work the way they should some more in architecture. So if you take away the person that really built it, which he's now left the companies, well, then you kind of like, you know, I'm not gonna be on my own doing all this No way.

### Bryan Robinson  5:13  
Yeah. Well, and then it's like, if you need to update a feature, do you really want to touch all that code that could then come crumbling down around you?

### Debbie O'Brien  5:21  
Exactly, exactly. I don't know. companies don't trust, like open source, for some reason. But I think that's changed a lot. Now. That was like a couple of years ago. So

### Bryan Robinson  5:30  
Yeah, I hope I hope that there's a nice bit of growing momentum behind, you know, don't reinvent the wheel. Like, let's use open stuff, not close stuff, and most definitely not coated ourselves.

### Debbie O'Brien  5:41  
What a lot of companies do I mean, trivago have their own and it's working perfect for them. And Uber, do they have their own as well? I think it is. So there's quite a few that still are producing their own because it works for them. Because, you know, I don't know. They can do what they want on with a team of developers. And if you have a big team of developers and they're willing to spend time and money because at the end It's money, then yeah, go for it, but it's not necessary.

### Bryan Robinson  6:03  
Well, I also kind of look as much as like, I'm usually gonna derive Facebook overall, like, I like the Facebook model of they needed something, they created the React stuff. And then they said, we're gonna open sources because we sure you know, we really want, you know, the community involved in it. So we have less work to do to

### Debbie O'Brien  6:20  
Exactly. I mean, it's a it's a win win. Right?

### Bryan Robinson  6:23  
Exactly. Cool. So So let's talk about how you're how you're using the Jamstack. Now, now that you don't have to create your own framework, how are you using it professionally? How are you using it personally?

### Debbie O'Brien  6:32  
Yeah, well, before I started in Nuxt, I actually work for an agency and one in my job interview, actually, I kind of said, You know, I want to work with view and with Nuxt. And they said, well, you're going to be in charge. So you can just do the technology. And I was like, I like that. Okay. So I accepted the job because of that, right? And, and I literally Nuxtified the whole company. None of them had view experience, and I taught all the developers view Nuxt it was it wasn't An easy, right, it was a kind of a big battle because you know, you're going into a company that was very back end focused. 

### Debbie O'Brien  7:06  
PHP igniter, for example, was what they were used to working with. And you're coming in and you're saying, right, you know, front end is going to take over. And we're gonna, we're going to use Nuxt. And we have all this power now. And it was a challenge. And then, okay, introducing Nuxt is one thing, introducing static sites that was like, you know, why, what do you want to do? What do you mean? What, why do you want to take the server away? What do you want to do that for?

### Bryan Robinson  7:29  
We love our PHP.

### Debbie O'Brien  7:29  
Yeah, so it was, it was really hard work actually convincing people. So yeah, I just fought. I'm a good fighter. I did Taekwondo, so I just kept fighting. And the fighting works, and eventually you win. So we managed to be able to convince the back end team and the, my old boss to basically use Nuxt, and we started using it for a lot of company projects. And when they seen the performance benefits, it was kind of like, okay, so yeah, this is a little bit better. And you know, So we kind of managed to, to basically produce Nuxt websites for pretty much every company that we work to it, which was great. So it was it was a good way of like, you know, Nuxtify the world through the agency. And then I moved on and started with Nuxt. I've only been with Nuxt, three months. So it's quite new. And yeah, it's it's obviously amazing, because now I actually, you know, just get paid to work with Nuxt, which is just fantastic all day every day Nuxt.

### Bryan Robinson  8:31  
I'm kind of curious to take a take a step back. So you went into an agency that was primarily using PHP, I've gotten the impression overall with the PHP community that the Vue is actually looked upon as kind of the JavaScript to use did was that kind of your experience there? Or is it maybe too early at that agency and they hadn't quite gotten to that point. So I know like Laravel has always liked view and integrated well view.

### Debbie O'Brien  8:56  
Yeah, unfortunately, they weren't that far advanced. So it was actually me that introduced Laravel to them, and said, like, you know, you want to build your own CMS or why don't you use Laravel because it works nicely with Vue. And then we can help you on the front end. And we can work together and, and the back end team then started to work with view, and started to really like it. So they were like, in love with Laravel and view and the whole mixture of how it works together. So I think they were, they were quite open to move in that direction, but they just didn't know the right direction to go to. And I don't know, I guess when I come in and say this is the way you know, you might geek out a little bit and you can like, just follow me. Come on. I know the way.

### Bryan Robinson  9:36  
Very cool. So out of curiosity. So you're at Nuxt now, and obviously you've been you've been kind of your own advocate for Nuxt for a little while. I'm very curious around the space that Nuxt and Nuxt. And even even like Gatsby and Gridsome kind of occupy because they're not static site generators, and I just I don't know what to call them. What would you call them? What kind of phrase would You manufacturer around all about?

### Debbie O'Brien  10:02  
Well, the Chrome team actually call it a meta framework. We're just calling it a web framework, because we're using NodeJS. And we use Vue. So you know, depending on what you want to use, it's not just a view framework. It's also based on NodeJS as well. And it's using, you know, developer tools. So we call it an intuitive web framework. Because we can have server side rendering, and we can have static site generation. And we can have single page applications, we can have it all right, not all of them can have that. So Nuxt kind of is different in when you compare it to some that are just static site generators. Um, but yeah, Jamstack framework doesn't sound really too good either. doesn't

### Bryan Robinson  10:45  
No. And I mean, you could theoretically probably do an Nuxt application, not even like using CDNs, not using some of the more traditional stuff in a in a Jamstack stack. So I guess you could you can even have Nuxt without the Jamstack at that point.

### Debbie O'Brien  10:58  
Yeah. I mean, Nuxt just works with everything. It's just cool.

### Bryan Robinson  11:04  
Cool. So I would I would hazard a guess and say that perhaps Nuxt is your jam in the Jamstack?

### Debbie O'Brien  11:10  
For sure. I mean, yeah. Nuxt is my job for quite a while, as you said, before I even started working with Nuxt. I was like, you know, speaking about Nuxt at conferences, and you know, it's actually funny because, um, I didn't like Nuxt. 

### Debbie O'Brien  11:23  
At first. I didn't want to use it. 

### Debbie O'Brien  11:28  
This is at the time when we were trying to figure out what we were going to build our own framework and stuff on, we wrote our own server side rendering on top of you to try and make it work and it wasn't working properly. And I reached out to the core team members to Eduardo, from the core team from view and said, like, you know, I'm having this problem and I really need server side rendering. And like this is not working if you've got any recommendations and he was like, did we just use Nuxt? Okay, for the Vue team are recommending Nuxt so that means it must be okay to use.

### Debbie O'Brien  12:00  
So when I started playing around with it and stuff, I didn't like it because it gave me things I didn't know. And I didn't need. I was like, what's this? I don't need that. I don't want that. What Why are you giving me this? So it kind of like, pushed me away from it. And then when I realized that, you know, when you stop using it, and you start just using view, you go, Oh my God, I've got to like, do the whole router, follow my own. Nuxt just doing all that for me. I'm going back to Nuxt. So I think about when you don't understand something, you don't like something, when you start to understand it, you start to realize what it does, and then you go, wow, this is actually powerful, but I know how it's working. So I get it. And it makes sense. And yes, I want to use it. I think that's what's important is understanding.

### Bryan Robinson  12:41  
Nice and so so now that you've kind of you have an understanding of it what what is what has been the big draw that has kept you with Knox, so obviously, you know, you didn't understand it, didn't like it at first, but now that you're really in it, what are its like core features that are gonna keep you staying with Nuxt for a while.

### Debbie O'Brien  12:58  
Well, there's quite a lot. I mean, develop experience, for example. So like, I mean, I wrote the course Vue router, and it's a lot of work. So I know what it's like and what's involved in it. And this is all done for you with smart prefetching. With code splitting. It's all done. And there's a lot more other benefits. So we just released the Nuxt components. And now we don't have to write import statements were components. So Nuxt is making your developer life easier. And when you're like having to, especially when you work in an agency, and you have a limited amount of time to develop something and you need to get this job done. Well, you don't want to be spending time doing unimportant tasks like writing import statements, or, you know, configuring your router. So in Nuxt, takes that away from you. It's kind of like, yeah, this is really, really cool. 

### Debbie O'Brien  13:40  
But the other great thing is the performance. And for me, performance was probably the biggest seller, because I'm a bit of a performance freak. And I you know, I've been waiting to Webpack so I like I really am focused on performance, I'm Google Developer expert as well. And when I was consulting with the agency, I did a lot of work on performance. So to be able to go into a company and say, yeah, this is the website, look at performance it is Look how how fast it's working because of the smart prefetching that Nuxt gives you because of the automatic code splitting that Nuxt gives you. And you know what, I'm going to create a pw way for you. And you do it in 30 minutes, because not even three minutes. Like it's as simple as that. I mean, that's just magic. 

### Debbie O'Brien  14:21  
That's just something a company says, Wow, you know, I've seen it like, from the companies we've gone into just to kind of go Wow, this is amazing. This is so fast. This is so good. So performance for me is is key.

### Bryan Robinson  14:33  
So with all the like, obviously, the Jamstack itself is a very performant kind of architectural mindset. But with that server side rendering built in with the specific routing built in so Nuxt is kind of pushing almost performance first.

### Debbie O'Brien  14:46  
Yeah, I mean, we're very performant for sure. And it developer experience I recommend to go side by side. So like basically your performance on making the developers lives easier. That's what we want to do. We want to make it like we're lazy people, right developers, so We want to just have fun and we don't want to do those unimportant tasks. So if Nuxt can do all that for you, and you just concentrate on curating the cool stuff, then that's what makes your, your experience better. Right?

### Bryan Robinson  15:09  
Hmm. Very cool. So So are there any kind of ancillary philosophies, services, software that you're digging on in the Jamstack, as well, besides Nuxt are the pairs particularly well with Nuxt.

### Debbie O'Brien  15:25  
So obviously, serverless functions are like, you know, a big thing. And we I didn't, I haven't dug that deep into it, I started using them. And it's something I wanted the company to use at the time. And we're going to actually build them into Nuxt. So we're gonna have Nuxt functions. So that's gonna make the whole Jamstack even more powerful. And I think that's what I'm, yeah, that's what makes everything just kind of like go together. You know, with the back end team can build something cool. We have a serverless function, you just go to the API, get it done.

### Bryan Robinson  15:53  
Pretty cool. So So is it going to be its own flavor of serverless functions or is it going to be just co located With with the front end code, how is that gonna work?

### Debbie O'Brien  16:03  
I'm actually not too sure the they're working on them at the moment. And I don't know if it's gonna be like, similar to how the lambda functions work or not, I'm not sure, or it's going to be based on that or, but it basically just means that you'll be able to write them directly in your code, which is just going to make your life easier again, right? Because that's it, we

### Bryan Robinson  16:22  
definitely, I've never really enjoyed having like the lambda functions completely separated out. Like that's always been one of the pain points for it. So that's cool that you're working towards more solutions for consolidating everything.

### Debbie O'Brien  16:33  
I was just gonna say as well like something that we released just recently with the full static module. So that was released last week. Because before we weren't in full static, we were statically generating or pre rendering the sides. And then when you changed from one page to another, it's still called the API because it was it was rendering there and then and calling that API, right, whereas now we're not doing that anymore. And we basically on a build time, we call your API, we get everything. thing that we need from the, from the data, and we store it in a static folder as a payload js file. And then every time we client side render the page, it's going to go to that file and collect that data. And that works a little bit different to other frameworks. And the reason for being is that we were able to separate the build from the content, which means now that you can actually just regenerate your content without having to go to Webpack and without having to build the whole site and the assets and the etc with just generating the content and that makes it super super fast for for content regeneration.

### Bryan Robinson  17:36  
Okay, so yes, it's like the build time is gonna be less for just kind of smaller, smaller changes, right?

### Debbie O'Brien  17:41  
Yeah. And this was a big problem, especially with the agencies which I don't understand why right because it was like two minutes and they were like, oh, but it takes two minutes to build I was like, so what a coffee but for some reason, that was an issue and now we're down to like 10 seconds. So you know, if you're going to find would be 10 seconds, then you know, I can't do anything else. We know I think

### Bryan Robinson  18:00  
the more at that point.

### Debbie O'Brien  18:01  
Yeah, I think it's a big it's a, it's a big thing that a lot of people had, especially when you're working with bigger sites, why do you have to rebuild it just for, especially if you're working with a CMS, right, and you're just changing writing a new blog page or changing something in a CMS, you don't need to rebuild that that whole website. And most of the websites we've built for clients, you never need to actually build anything ever again, because that site is finished. And they're just changing minor content every now and again. So to be able to hand that over to a client and say, right, there you go, it's going to be super fast. In 10 seconds, you'll see your change. And also, we built in a live preview mode. So this is again, released only last week. And now you can actually live preview your changes in your API. So by using like a query Param preview equals true. And then you can actually see your live preview changes from your API. And then you can say, Yeah, that looks good. And then deploy, and then it's going to build it, and then you've got it. intensely. Cool.

### Bryan Robinson  18:58  
Yeah, that preview such an important step and like especially like you've mentioned, like the agency lifecycle, like I have to be able to see the the change I'm making before before I can definitely approve it for production.

### Debbie O'Brien  19:11  
Yeah. And it's pretty much the non developer people, right? And I get to because they're afraid of like, you know, they need to see you there. They're not like us who like don't mind or something's broken because we know can fix it. Whereas they probably can't fix something. So they just like I need to see it as it working. And then, so yeah, this this is going to be a big game changer.

### Bryan Robinson  19:28  
Cool. So let's, let's pivot and let's talk a little bit about music. What's your actual jam right now? What what are you listening to when you're able to listen to things?

### Debbie O'Brien  19:35  
Well, you see, I actually can't listen to music when I'm coding. Actually, can't I? Yeah, I need to. I need silence And yeah, so I don't have any sound at all except the birds singing outside my, my office. So I don't really listen to music when I'm coding. But when I'm cooking, I listen to music when I'm cooking. I can't talk just which is weird, right? Don't talk to me when I'm cooking because I can't I guess I'm just concentrating so much that like, you know, I can have music on Wi Fi and but I actually don't even know what's playing. And it's just there. It's background noise, I guess. So. I don't know. I'm pretty boring in that sense of like, what? Yeah, what music? am I listening to whatever Apple gives me or whatever Alexa gives me basically.

### Bryan Robinson  20:21  
Hey, fair enough. We turn we turn a lot over to the robots anyway, might as well let the the musical choices happen there as well. Yeah. Very cool. That's, that's interestingly, I'm, I'm kind of in the same boat when it comes to cooking too. I need to I need to focus a little bit. I need to make sure all my timings are working out and all that all that good stuff.

### Debbie O'Brien  20:39  
Yes.

### Bryan Robinson  20:40  
Cool. So is there anything that you would like to promote in cow to the Jamstack community as a whole that you're working on right now?

### Debbie O'Brien  20:46  
So I guess like, obviously, the, the full static that we released, so that's what check now in Nuxt. And especially if you've never built a static site, where you've built a start a site with next like, like a single page application or server side, rendering Like, it's so easy to change from one to the other, just by changing the target to static, once you've updated to version two point 30, and change the target to static, and then change the command to next build, and next export, and now you've got a static site. I mean, that's it. So it's not like, Oh my god, I have to like start from the beginning or refactor the whole thing. Like, literally, you don't. And I think that's what makes it really cool that you can just change from one to the other. So I would say to everyone to try and test out static sites and just give them a go. The content module as well, that we released for building your content. So you can have like a good base CMS inside Nuxt. So you don't need to like advocate by CMS, because we've got one like built in for you. Yeah, really cool features released. We're going to be releasing our new Doc's very, very soon as well. And we're actually changing our whole website to use the content module because actually, we built this for us, like like you said earlier. So we build the content module for the Nuxt Doc's to make our lives easier, and we're sharing it with the world to make the world lives easier. So if you like it as much as we do, then you you know, I'm sure you're gonna love it because yeah, it is it is fantastic. So

### Bryan Robinson  22:07  
the nice thing is you've got your own use case for it. And you get to test it out and make sure that it's the right thing for for everyone before you even launch it.

### Debbie O'Brien  22:14  
Well, that's pretty much everything we're releasing now is because it's what we want, locally that we have a lot of people on the team now. And there's a lot of great ideas. And we're just like, we have to do this again and again. And again. Why can we not just do something like this? And then we fix it for the world. So yeah, that's really cool. I would say sign up for our newsletter, and you can hear all the news about Nuxt. so you don't miss anything. Because we're releasing so much stuff that it's kind of hard to keep up with in the actual team. So I can only imagine outside what it's like.

### Bryan Robinson  22:42  
Yeah, I mean, and especially if you're if you're paying attention to a couple different products, you're like, Okay, just let me know, bring it to my inbox.

### Debbie O'Brien  22:49  
Yeah, yeah. And if you're an agency and you have to work with other like, you know, frameworks and technologies and stuff, then you obviously can't focus so much time on just one. So yeah, it's hard. It's really hard. To keep up and we're moving at such a fast pace, but it's such a great pace, right? Because we're creating great content and great modules, etc. But yeah, we're climbing climbing ladders. climbing mountains, I should say.

### Bryan Robinson  23:13  
Even even bigger than ladders.

### Debbie O'Brien  23:16  
Yeah. Well next is like the logo is based on mountain. So we're all about mountain.

### Bryan Robinson  23:20  
Fair enough. And I I can see that. Yeah. Cool. Well, Debbie, I appreciate you taking the time to chat with us today and to share more about Nuxt and the things you're passionate about. I hope you keep doing some amazing things, both at Nuxt and kind of in the community as a whole.

### Debbie O'Brien  23:35  
Thank you very much. It was great to be here and yeah, just try out next. I hope you you can just like create an excellent site yourself and you know, for this whole Jamstack podcast stuff up there. That would be cool. True,

### Bryan Robinson  23:46  
true. Although I was rebuilding a house and Season Two was gonna have a new website and then I only got halfway through I said what I've got.

### Debbie O'Brien  23:54  
That's always the way we're always too lazy in the end.

### Bryan Robinson  23:57  
Exactly. Thanks again to Debbie for the awesome conversation. And thanks to all the amazing people in the Jamstack community that tune in Week after week. Before we get to our sponsor, be sure to like part star favorite or whatever in your podcast app of choice, and spread the word about the amazing people doing awesome stuff in our community. And now for our sponsor, if you listen to season one you're probably aware of take shape by now. But as a reminder, take shape is a content platform for the Jamstack take shape has a headless content management system and easy to use graph qL API, a static site generator and amazing new product called match a service that can tie together multiple API's into their handy graph qL interface if you're doing anything with content on the Jamstack Be sure to check them out at take shape.io slash That's My Jamstack. That's it for this week. Thanks again for listening. And we'll see you back here for the next awesome episode.

Transcribed by https://otter.ai


Intro/outtro music by [bensound.com](https://bensound.com)