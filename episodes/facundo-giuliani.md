---
title: Facundo Giuliani on end-user experiences, NextJS, and Storyblok
date: '2022-06-03'
tags:
  - episode
audioFile: https://pinecast.com/listen/e9e798e3-0ea2-492f-9217-45e895bf4283.mp3
description: 
socialImage: /images/placeholder.png
---

## Quick show notes

* Our Guest: [Facundo Giuliani](https://fgiuliani.com/) ([Twitter](https://twitter.com/facundozurdo))
* What he'd like for you to see:  
* His musical Jam:  [The Meters](https://en.wikipedia.org/wiki/The_Meters)


## Transcript

### Bryan Robinson  0:15  
Welcome back to yet another episode of That's My Jamstack, the podcast where we ask the ever important question, what is your jam in the Jamstack? I'm your host, Bryan Robinson. And this week we had the amazing Facundo Giuliani. Facundo do is a developer relations engineer at story block, and an avid presenter and author about all things Jamstack.

### Bryan Robinson  0:46  
All right, Facundo. Well, thank you so much for joining us on the show today.

### Facundo Giuliani   0:49  
Thank you. Thank you very much for the invitation and the opportunity. Awesome. So

### Bryan Robinson  0:53  
tell us a little bit about yourself. What do you do for work? And what do you do for fun?

### Facundo Giuliani   0:57  
Cool. So Well, I started working as a developer when I was 18. While I was studying at college, because I finished high school on on a school that had a career that was like programming oriented, let's say so I, I learned how to program during the high school, I started to work with all programming languages that people don't know what they are about, like Visual Basic six, or those things that are like, I mean, I talk to people that this 20 years old, and they look at me, like what are you talking about? Right.

### Bryan Robinson  1:38  
But luckily, I at least dabbled in those super early on. So I'm with you. That's fine.

### Facundo Giuliani   1:43  
Okay, okay. So, um, yeah, I mean, I started working with Visual Basic seats. After that, while I was studying, I was also working as a developer, it was like, almost 1414 years, probably that I worked as a developer. And during the last couple of years, after working on on different companies on different positions, but all of them mainly related to the development, like, full stack back and, and etc. I started to, to be more involved with the community started to generate content to share starting to talk to other people and and meet other people. And I really enjoyed doing doing that. I did that during my free time. During these last couple of years, like after work, I started to generate content, engage with the community, like being involved in a Ambassadors Program in in different organizations and companies. And this opening a new door for me, because I started to learn about developer relations, developer advocacy, developer experience, some terms that probably I've read in the past, but I didn't know what they were about. And, and I started to get interested on that, like I, I mean, I felt like I was enjoying more the fact of generating content, or sharing content with the community, or communicating with the community, I really like to talk to other people. And I enjoy talking. And I felt like I was enjoying more doing that, instead of doing my daily job of developer, let's say, I mean, it's not that I don't like to, to develop, but I was enjoying more generating content, sharing content with the community engaging with other people. And well, I took like this, I made a decision, I started to read about developer relations and etc. I saw this opportunity on serverless, that they were looking for a developer relations engineer, I applied for the, for the job, and I was selected. I mean, I had a portfolio because in the past, I presented some talks, or events or conferences, I had some articles that I wrote before applying for the for the job, working with different technologies, and etc. So that was my, my presentation letter, let's say, and well, I had the chance to apply and to be and to be accepted for the position, let's say. And since June, I'm working as a developer relations engineer at serverless, my first developer relations position and experience, and I'm really enjoying it. So that's a little bit about me.

### Bryan Robinson  4:38  
Sure, yeah. So So you're a developer relations engineer at storyblocks. So you're doing all that kind of content creation, education, talking with community there. Are you still doing that in your spare time? Are you actually able to like branch out and do other things now that you don't have to do that yet to your day job?

### Facundo Giuliani   4:56  
Well, that's a good point. Because I mean, I did it Probably, I'm doing it but just a little bit like not so much. Because the cool part about being a developer relations engineer is that I found that that it was possible to do what I wanted to do or what I was enjoying, while doing it on my on working time, right, I mean, during the day, instead of using my free time to generate the content to do that, probably use my free time to set my mind free, right? That I mean, I'm not complaining, because I really enjoy doing that. And I enjoyed that at that moment when I was doing it after work. But I felt like it was it was cool to to enter to a company and start doing this during I mean, like, my, the tasks that I'm doing in my position are related to that. So I can use my free time on that on other things. So I enjoy doing that. But yeah, I'm trying to take the free time for other projects, probably not related to to developer relations or engaging with the community. I'm probably not even related to programming developer or technology

### Bryan Robinson  6:15  
at all. What's your favorite thing to spend time on outside of development?

### Facundo Giuliani   6:19  
Well, I really like I mean, I was I mean spending more time outside, I moved to a house, I was living in an apartment and I have a house with a backyard. So I'm trying to spend time there or I don't know walking around the neighborhood, I live in more than a situs Argentina, in the suburbs of the city, not in the city center. And the place where I live is like a calm neighborhood with a lot of trees and etc. So like when I, when I finished my, my, my day after working, I like to go and walk around the neighborhood and etc. but also talking with friends. So there are other projects like personal project related to, to their staff playing, playing sports with friends. I'm trying to do several activities, like to get out of my house. I mean, I enjoy being on my house with Mr. Gary Burger, and etc. But I also enjoy seeing other people spending time with other people. And these last couple of years were like We spent a lot of time inside our houses. So spending time like, I don't know, keep grabbing some fresh air and talking to other people is something that I enjoy doing. And I try to do as possible.

### Bryan Robinson  7:33  
Awesome. I think there's something that we all do a little bit more of, especially in the past couple of years. Yeah. So. So moving on to talk about the Jamstack a little bit. You have a history in kind of full stack development, back end development, what was your entry point into the Jamstack, and static sites and that sort of thing. Cool.

### Facundo Giuliani   7:52  
So Well, in my previous job, I mean, my last job before being a developer relations engineer, I was working mostly as a back end developer, I was working with Microsoft technologies like ASP, dotnet, dotnet, core and etc. But I, I mean, I felt like I was missing the the opportunity of learning about probably newer products or different products, let's say related to the front end. And when I started to read about the static site generators, the headless CMS is that I mean, for the products that we did in my previous job, I was not able to apply these technologies on them. So I was like, not super aware of all this new approach of creating study sites. And I started to read about the Jamstack different articles, watching different talks, or Devens, at conferences, and etc. And I started to learn about that and to learn about the approach. I really enjoyed that because at a certain point, as I said, I am I mean, I'm working as a developer for since I was 18. But before that, I was creating websites at home when I was even younger, with with products that again, they don't exist anymore, like Microsoft front page, or Macromedia Dreamweaver. And what you did in the past with Microsoft from page was like creating your own website. And when I was said, I mean, when I was a teenager, or probably even younger, I really enjoyed doing that. Because at that time, internet was not what it is now, right? I mean, at the beginning of this of the 2000 years, or the or the or the end of the 90s Probably, internet was like the super new things and being able to create your own web page was like, Man, this is NASA technology, right? So I tried to create like websites related to anything related to my friends related to us. Searching a football club or related to I don't know, my different interested interest is that I had in that moment. And and what I was doing at that moment were static sites. I mean, they had movement. They have awful MIDI sounds in the background, because that was so yeah, I mean, that was like any any site at that moment, that sound. So that is terrible, I think now about that. And he's like, Man, why do you need to listen to music while we're browsing? A web page was terrible. But well, it's what we did. Yes, exactly, exactly. So I enjoyed doing that. But the thing is that they had dynamism, let's say, or movement, or etc. But they were static. So while when, when I started to read about the new approach of having studied websites, I felt like, I mean, the Navy sidebar, but we are again, doing the same that what that what I did was when I was a young teenager, or probably pretty teenager, I don't know, how is it called the the concert when you are 12 years old, or 13 years old pro. But, I mean, I started to feel to feel like excited with this concept. And I started to read about different study site generators, like neck JS Gods B, I started to read about React, probably get more involved with React, and etc. And on the other hand, all the concepts that you have avoidable to generate the content at build time, ahead of the people visiting your website, I mean, the process of generating static assets, but not manually, right, not using Microsoft front page like we did at that time. So I mean, I felt that that was super fun. Because using new technologies, you were able to do something that probably reminded me to what I used to do when I started creating web pages. So I think that that was the first step that I took to to enter to the Jamstack work, let's say,

### Bryan Robinson  12:07  
I like that concept of like, this is kind of how we did things in the late 90s. And now we do it. We have a similar output. But it's so much easier to like it just Yes, I'm not I'm not writing and copying and pasting 15 different HTML pages. I just, it generates for me, it's an amazing feeling to kind of see that come out. Yeah, exactly.

### Facundo Giuliani   12:28  
I'm not only that, I mean, when you are using a study site generator, when you like, start a new project with the boilerplate that they offer you, you have a site up and running, and you run just like three comments in the console, or probably less. And that's all I mean, that's awesome. For me, the web development is evolving in, like, in all directions to make the work easier for the developers and to have the products up and running as fast as possible. And that's something that for me, it's awesome.

### Bryan Robinson  13:01  
Yeah, and let's, let's try a whole bunch of stuff and like work closely with clients and with stakeholders and all that to, like, realize what they're looking for. And then we can make it better. Like we can do something simple and then add to it and add to it and add to it. I think that's a really powerful pattern that we get to have.

### Facundo Giuliani   13:18  
Yes, yes, I agree. I mean, a lot of technologies appear during the last year, some being able to use these technologies, but also offering a great experience to the final users or the content editors. It's something pretty, pretty cool. I mean, I see that all the pieces are, like joining to offer a good experience, not only to the developers, but also to the people that is using your product on beseeching the websites that you create, right,

### Bryan Robinson  13:46  
exactly. Yeah. Theoretically, if we can do things easier and simpler, we can pass on a whole bunch of really positive things to those end users.

### Facundo Giuliani   13:55  
Yes, yes, I agree. Totally agree. So.

### Bryan Robinson  13:58  
So you're at story block now. So how are you using? I mean, sorry, block is a headless CMS. So it's a very Jamstack company, how are you using Jamstack philosophies and kind of your day to day at story block.

### Facundo Giuliani   14:10  
So what we were we tried to offer to the, to the customers to the users is that having a headless CMS is a way of generating faster websites, using cool technologies and cool frameworks, probably, but also offering a good experience not only to the end user, but also to the content editors, the Jamstack, we see that we have a lot of products available to create static sites, or offer great experiences and having like, sites up I mean, up and running that are working great. But the thing is what happens when we need to generate the content that is going to be exposed in our static sites, right? So story block has this real time visual editor, which I think it's probably the best feature that serverless is offering. Because there is this bridge that connects the the admin panel that Starbuck offers to generate the content with the front end of your application. And well, you can use it with environments that are already deployed, like your testing environment, or staging or production. But you can also connect that to your local host. And using like the preview mode of the different static site generators, you can also offer an experience to the content editors to see how the content is going to look like before it's deployed or published. So in that case, connecting the story blog application or the server admin panel to the front end of your application using the storybook bridge, you're offering the possibility of creating an experience very similar to a page builder, but not being tied to the styles or the components or their structure that the Page Builder probably feeds or probably sets for the developers that are going to use it. So you are able to create the front end and the code and the logic that you prefer for your application connecting to a headless CMS that is allowing the users to see that page and to like, create a unexperienced very similar to editing that page on the fly, and see how the content is going to look like. So I think that we are focused on on different technologies, frameworks, and tools, probably I will I work more with Node js, and react. And what we try to do is to get advantage of the static site generation process of these frameworks to generate static assets, but also work with a preview mode of these frameworks to connect to the headless CMS and offer the content editor the possibility of exactly creating the continent scene, the content that is going to be Publish when the build process run and generate the static

### Bryan Robinson  17:14  
assets. Exactly. And that build process sometimes can be a minute or two. And so like if you're trying to iterate on content, and you're having to save, wait for the build, preview it and then preview it live, like snap previewing more, it's just a view that can really slow you down. Oh, no, I wrote one word too long. It's gonna break onto a line at the screen sizes. Like no, just use the Preview mode, use that visual editor to make sure it's exactly what you want it to be. It's kind of it's the best of both worlds kind of solution. Right?

### Facundo Giuliani   17:42  
Yeah, exactly. Exactly. And not only that, I mean, talking about Nigeria, in particular, the framework offers cool features like incremental static regeneration, where you don't really need to generate the the run a build process for the complete site to generate probably only one page or two, apply the changes to only one page in your website, we can discuss about if using incremental study regeneration is really Jamstack or not, because you are breaking the atomic bill and etc. But you have the possibilities there, you can use it or not take it or leave it.

### Bryan Robinson  18:19  
I actually like that that like thought process of I might not be Jamstack anymore. But it I mean, at the core, even though you lose the atomic deploy, you're still hosting the majority of it from the CDN, it's still much the majority of it's still pre built HTML, and you're updating pieces. It's a rehydration thing, which I I would say arguably, is still plenty within the idea of the Jamstack. I think it's it's a big umbrella. We can fit everyone underneath it, I think.

### Facundo Giuliani   18:46  
Yeah, totally. I in fact, I think that, well, probably the concept of the Jamstack was originated by JavaScript API's and markup. But the thing is, I feel like the idea is always trying to generate the more static content that we can as possible at build time. And not, I mean, not having dynamic content to be generated whenever a user visits our website, right? Why are we Why will we generate content, that will be the same for probably all the users that will visit our web application or a lot of them, if we can do that ahead of time, and offering a better and faster experience to the user right there. Exactly.

### Bryan Robinson  19:27  
And then just augmenting, augmenting is always the best way to go adding little bits of extras for for when you have the ability to do it. And it matters like what what, what pieces of content actually have to be dynamic. And let's make sure those are dynamic and keep everything else quick and secure, you know, as static as possible. Exactly. So we've talked about story block we've talked about next. Jas, we've talked a little bit about incremental static regeneration and whether or not that's Jamstack or not, what would you say is kind of your jam in the Jamstack? What's your fate? Have a product maybe story block or or framework or philosophy, what makes you love the Jamstack. So?

### Facundo Giuliani   20:06  
Well before joining storybook, I was a user of a storybook, I've used terbuka and other headless CMS. So I mean, probably I'm biased on my feature now is like, but I really think that cerebral is a great product to generate content, probably. I mean, we as developers are used to work with things that are not super how to say that friendly for the users, or were used to work with code and etc. But having the possibility of giving the people that there is not super full into the technology, the possibility of creating the content and and exposing the content that they want to share. I think it's very, very cool. And having a visual editor to do that. I think he's pretty cool, too. So I think that sort of look is very, very good. I'm kind of like, I use NET Jas a lot. And I feel like when the the new versions that they released, I mean, version after version, I see that they create really cool things. So I will say that I really enjoy using Node js with with Node js 12. And all the announcement that they did was like, the possibilities that are appearing with these new features. And with these new products is really, really cool. I mean, enjoying, like the edge functions or the support for React 18 with the React server components, different features, like I think that are opening new doors or new windows for other possibilities to, again, what I think I mean, what I think it's important from the Jamstack, that is offering not only a good developer experience, which they are with the product, but also offering a great experience to the final user. So if I can offer a website that is working faster and better for the final user, I'm getting the advantages. So I will take it.

### Bryan Robinson  22:08  
And the great thing on like next and again, like the the big surge of next Jas, in the past year and a half, two years. They're bringing so many new things to table. I mean, next next 12 is great. But we've talked about ISR, like that was pioneered in next and like all these different patterns that are coming out, are coming from the next open source team, the Vercel. Team, the community all around that. I think it's it's moving the ecosystem at a much faster pace than it did previously. I love to see that.

### Facundo Giuliani   22:40  
Yeah, I agree. I totally agree. I mean, the the opportunities that are appearing, and yes, as you said, like an starting point, or a pioneer point of saying, hey, why don't we take a look at this possibility and discussing it and offering that to the developers.

### Bryan Robinson  23:00  
I think it's also interesting, you know, we talked about ISR, maybe not being Jamstack. And I think the cool thing with next is the next doesn't care. Like they they look at it, and they say, Well, you can be completely Jamstack and just use, you know, static props and all that good stuff and render HTML and and send that down for the CDN. But you can use these other things, too. And whether or not that's Jamstack. It's still a nice website. And it's still like meeting all the user needs. So let's not even talk about it. Let's just have these features built in.

### Facundo Giuliani   23:30  
Yeah, that's true. That's, I mean, I love the Jamstack. I like the approach. I enjoyed using it. Sometimes we have to think what's better for the users and for the developers, and probably not stick to too much to the theory like, Oh, I'm moving from the Jamstack. Like, what I was going to say millimeter but if the United State people is listening to me, they probably won't get what measure unit I'm using. But what I mean is that barely moving from the borders of the Jamstack, or the bounds of the Jamstack is not that bad. I mean, the final idea or the final goal is to offer a great experience not only to the final user, but also to the developer. So you have to think about that

### Bryan Robinson  24:15  
make a good app or a good website with the best developer experience possible.

### Facundo Giuliani   24:20  
Exactly.

### Bryan Robinson  24:21  
All right. Well, let's let's do a kind of a hard pivot here and ask maybe the toughest question on the show, which is what's your actual jam right now? What what are you listening to what musician or album is really getting you going right now?

### Facundo Giuliani   24:33  
I mean, I really enjoy listening to music. I'm listening to music all the time. Like, what I found out lately was that if I listen to music that they have like a singer and they are singing a lyric. I can't focus on the work that I'm doing. I don't know if that happened to me in the last time or not. I really don't understand because I really enjoy listening to music and I Listen, a lot of music of different genres, so of different types and etc. So while I was working or probably probably because with this developer relations engineer position, I need to focus more on writing, or I don't know speaking or generating content, I'm probably not doing some automatic thing, things, let's say, I need to focus more on the work and not not too much on the on the lyrics that I'm listening to. So what I what I was listening this last time was probably more like Lo Fi setlist in the background, I live Lo Fi music, and I enjoy listening to that while I'm working. But I also was listening to the meters, which is a band from I don't know, if they are from New Orleans, I really don't remember. But they did in the in the 70s. Music like it was it is funk music, but without singing, or at least, not all of the of the songs have had lyrics. I mean, the most of them are music only. And I enjoy that because they have this groove and this kind of music that I really like. And with the headphones with the, with the boost of the bass there is like it's a good experience while working. So I'm really enjoying that.

### Bryan Robinson  26:22  
Awesome. Yeah, I totally like Lo Fi is definitely something that I usually have on in the background while I'm doing some writing or working through a hard code problem. So I get that. And I hadn't heard the beaters, which is surprising. So I'm going to check them out. And I could I could use some fun in my ears as well. Yeah, sure, sure. All right. So anything that you're doing that you would like to promote out to the Jamstack community as a whole,

Unknown Speaker  26:45  
no, I encourage the people to if they didn't try the Jamstack to take this step and to see I mean, probably it's a good experience. And it's very fun. I enjoy doing that. So I recommend that. But if if any person wants to talk about the Jamstack, front end development or anything, they will find me on Twitter, I'm while I'm FacundoGiuliani, my my Twitter handle is @facundozurdo. With so you can talk to me and we can discuss about the topic that you prefer. I am constantly like presenting talks at events or conferences. Well, I mean, all of them virtual now but but I will I have the hope that I will be in person in in in person, probably local meetup or conference soon. So we can probably meet in person in any country, some with with the people. But yeah, I mean, if you go to Twitter, and you talk to me, you will see I have my personal website where I announced the the events where I will be part of and I will be speaking

### Bryan Robinson  27:53  
amazing. All right, cool. Well, thank you so much for being on the show with us today. I hope you keep doing amazing things at storyblocks and beyond.

### Facundo Giuliani   27:59  
Thank you. Thank you very much. Thank you for the invitation again.

### Bryan Robinson  28:03  
We'll see you around. Thanks again to our guest and thanks to everyone out there listening to each new episode. If you enjoyed the podcast, be sure to leave a review, rating, Star heart favorite, whatever it is, and your podcast app of choice. Until next time, keep doing amazing things on the web. And remember, keep things jammy

Transcribed by https://otter.ai


Intro/outtro music by [bensound.com](https://bensound.com)