---
title: Laurie Barth on Gatsby, Lambda Functions, experimenting and more
date: '2019-09-10'
tags:
  - episode
audioFile: https://pinecast.com/listen/66cbdf4e-7996-4af4-9f38-185b7d3087c0.mp3
description: In today's episode, we're speaking with the amazing software engineer, blogger and educator Laurie Barth!
socialImage: /images/laurie-barth.png
---

## Quick show notes

* Our Guest: [Laurie Barth](https://laurieontech.com/)
* What she'd like for you to see: [Laurie's Blog](https://laurieontech.com/) | [@laurieontech](https://twitter.com/laurieontech) | [Laurie's Egghead Tutorials](https://egghead.io/instructors/laurie-barth)
* Who got Laurie into the JAMstack: [Jennifer Wadella](https://jenniferwadella.com/)
* Her JAMstack Jams: [Gatsby](https://www.gatsbyjs.org/)
* Her musical Jam: [The Taylor Swift Lover Album](https://open.spotify.com/album/1NAmidJlEaVgA3MpcPFYGq) | [Heather's the Musical soundtrack](https://open.spotify.com/album/6EIxlDI9fMtooJ1H3toRFO)

### Other Tech mentioned

* [Jekyll](http://jekyllrb.com)
* [Netlify](http://netlify.com)


## Transcript

### Bryan Robinson  0:30  
Laurie, welcome to the show. I appreciate you taking the time to talk with us today.

### Laurie Barth  0:33  
Yeah, absolutely happy to be here.

### Bryan Robinson  0:35  
Cool. So So I know that about you, but go ahead and tell the audience who you are what you do for work what you do for fun, that sort of thing.

### Laurie Barth  0:42  
Yeah, so I'm [Laurie](https://laurieontech.com/). I am a software engineer for a company called [10 Miles Squared Technologies](https://tenmilesquare.com/) in the DC metro area. And we're a small consultancy, so I kind of do whatever is asked of me. And then as part of that role and a little bit, because I enjoyed doing it, I convinced them that, you know, it was okay for me to do it at work as well. I do technical blogging and speaking and kind of community outreach interaction stuff.

### Bryan Robinson  1:11  
Stuff. I was like a good good stuff. Yeah, yeah.

### Laurie Barth  1:14  
Yeah. Like Egghead videos and contributing to some other publications. And if you hear a little jingling in the backg.round, that is our brand new puppy Avett, who is being a bit of a terror right now as she gets used to .. Oh, she just came up right by the side me. Hi, sweetheart. As we get used to our new house,

### Bryan Robinson  1:32  
well, I have a 12 year old cat on my desk right now. So all pets are welcome.

### Laurie Barth  1:37  
Yes, this is the PETjam podcast.

### Bryan Robinson  1:40  
So cool. So what was kind of your entry point into this idea of the jam stack or static sites or whatever you like to call it?

### Laurie Barth  1:47  
I blame [Jennifer Wadella](https://jenniferwadella.com/). And for those who don't know her, she is the founder of KCWiT and kind of a badass Angular JavaScript front end Dev. And she, I talked to her about, you know, maybe making a personal site, she had a really great one. And she said, here's my code for my Jekyll site like lift, whatever you need, make your own. And I did. And then she transitioned over to Gatsby and kind of spoke the gospel. And I was like, Okay, let me give that a try. And so from then on, I was like, this is the perfect kind of thing for my site. And and that's, that's kind of where I got into the JAMstack worlds because I wanted to be able to throw something up pretty quickly that was going to be performant that was going to have, you know, all kinds of nice dynamic behaviors. But but it didn't need to have all of this full back end content, as it were,

### Bryan Robinson  2:42  
Sure, now you're a software engineer, so you're not necessarily afraid of the back end. So what what kind of draws you to something that doesn't need a back end?

### Laurie Barth  2:50  
I don't have to do the setup of like a bunch of different components, getting deployed into the cloud and deal with like, HTTP back and forth. And all those things like, it's great. And I am do it all the time when it's necessary. But if it isn't necessary, why add all that bulk and nonsense?

### Bryan Robinson  3:07  
Sure. And as a front end engineer, I definitely consider that nonsense in a lot of ways

### Laurie Barth  3:13  
And don't get me wrong. I mean, I, I started in the Java back-end world. That was kind of my bread and butter. And so I've done Python, and I've done PHP, and I've done a bunch of different things. And they have their use cases. And they're incredibly important and incredibly powerful. But if all I'm doing is serving stuff that can exist in markdown, then there's absolutely no reason I need to build myself an API.

### Bryan Robinson  3:37  
Definitely, definitely. And did you have any experience with markdown beforehand? Did you use it like in GitHub or what have you?

### Laurie Barth  3:44  
Yeah, no, in fact, a lot of my site is in YAML.

### Bryan Robinson  3:49  
Yeah, I didn't have a lot of experience. In fact, I looked at and I said, Man, I hate this markdown thing that like a couple of my friends we're talking about and then everything's written and markdown for me now. So...

### Laurie Barth  3:58  
yeah, yeah, I I've gotten really used to it for formatting articles for Dev.to. But I still have not transitioned my site over. Because I'm not actually hosting that much in terms of content, I have kind of a YAML file for my speaking stuff, a YAML file for my Egghead lessons, a YAAML file for my blogs, and then I'm going to make a separate YAML file that's going to be like, external contributor publications, like CSS tricks, and that kind of stuff

### Bryan Robinson  4:29  
Nice. So are you using the JAMStack at all professionally? Or is it all just these personal sites that you've kind of been doing?

### Laurie Barth  4:36  
Um, I've had not necessarily JAM... I guess it's sort of qualifies. I've done some headless CMS stuff, which I think is kind of like, it's using the JAMstack front end and pretending like it doesn't have a back end in a lot of cases even though it does. So little, that's a little bit different. But I kind of think of in the same world, and the other thing I have done is some kind of the gym sack stuff with with an occasional, you know, lambda thrown in there or whatever. That's more. That's more just a few functions to round stuff out. I don't know. I mean, I'm sure you saw it as @sarah_edo's. Or Why do I always say that; Sarah Drasner's write up on kind of an e commerce site where basically she was just using a couple functions to provide that which was great.

### Bryan Robinson  5:27  
Yeah, I'm super inside. I haven't had chance to do that sort of heavy lifting in lambda functions. But I want I want to make a store just from that tutorial. So

### Laurie Barth  5:36  
right, yeah, there's a lot of power there, though. I joked when I was reading through it, and I just joked on Twitter that I'm just going to read a blog post where I explain what the heck the difference between Nuxt Next and Nest is. Because clearly, I know so well, and never get confused. When I see those million identically named things referenced. 

### Bryan Robinson  5:55  
I've never once been confused by that. Never one No, no.

### Laurie Barth  5:59  
Definitely.

### Bryan Robinson  6:00  
So so with with that kind of your you got a little bit in the cat professionals that you're using. But have you found that there's been any bleed over from the experiments and the personal site into the way that you do kind of more traditional software engineering?

### Laurie Barth  6:13  
Oh, no question. Um, I mean, for one, the ease of deployment with things like Netlify and Firebase and all of that has a lot of use for our clients in certain cases, especially when they're trying to throw things up quickly, and be able to deploy them kind of consistently. And by themselves without a lot of engineering knowledge, those tools are really fabulous.

### Laurie Barth  6:38  
And a lot of the, the way things are built in the JAMstack, and the fact that you're focused on kind of an insane level of separation of concerns, just because it's it's YAML; it's marked down. A lot of that architecture plays in and JAMstack got me comfortable with a lot of CSS concepts that I I hadn't had to play around with. Thank you grid, flexbox, transitions, all that kind of stuff, pseudo classes and stuff, were things that I in larger behemoth projects that had legacy CSS, and that kind of stuff weren't as applicable. And now that I was able to use them and kind of playground areas. I throw them in, in client projects all the time now.

### Bryan Robinson  7:23  
Nice. Very nice. So so what what is your current like jam in the JAMstack? is a Gatsby or is it something?

### Laurie Barth  7:29  
Yeah, it's Gatsby. Okay, me and everyone else, right. Sure. Yeah.

### Bryan Robinson  7:33  
What draws you to Gatsby,

### Laurie Barth  7:36  
I had my Jekyll site. And that was really easy to port over to Gatsby, there were a ton of tutorials online. And the hardest part about that was getting Gatsby image to work. And ever since I've written blog posts on it, I've contributed to the docs, all of that stuff. So hopefully, that won't be hard for the next set of people who try and set up all kinds of different Gatsby image things

### Laurie Barth  7:55  
So, one of the appeals of Gatsby for me was that I didn't need to know much. I didn't need to know some of the React magic to make it work, at least for the use cases I have. And I actually feel like I've gotten a much better understanding of some of the React component architecture and similar things as a result of being in the Gatsby space. And again, it's one of those you have a personal site, you try things you do them, right, you do them wrong. And you end up dipping your toes into it and and having this playground where you discover a lot of concepts that you didn't necessarily understand before.

### Bryan Robinson  8:30  
Nice. And I've got I've got this kind of this FOMO issue happening with Gatsby because I'm not a particularly strong React Dev. But I love the idea that they have so many plugins already available, and they've only really been around a couple of years.

### Laurie Barth  8:42  
Yeah, their plugin ecosystem is insane. And themes are going to be equally impressive.

### Bryan Robinson  8:50  
Yeah, definitely. And so so yeah, it seems like there's already something for every single use case you could possibly need almost it's almost getting to the point where it's like the early days of like, positive WordPress plugin ecosystem.

### Laurie Barth  9:01  
Yeah, positive being the operative word there.

### Bryan Robinson  9:05  
Exactly. Because it's all it's all developer focused, which is nice. So So what kind of is going to keep you in this JAMstack world? What what's what's, what's the thing that's going to anchor you in here,

### Laurie Barth  9:16  
I am probably going to self host my blogs at some point. And I think there's kind of no better architecture pattern that exists right now for doing that in a lightweight, maintainable way.

### Bryan Robinson  9:27  
Nice. Cool. And so so I know you've got you've got the dog Take care. So we'll we'll wrap things up here pretty soon. 

### Laurie Barth  9:34  
Sorry everyone!

### Bryan Robinson  9:35  
Oh, no worries. No worries whatsoever. So So what's your what's your musical jam right now? What's your like? literal jam? So I'm listening to

### Laurie Barth  9:45  
the Taylor Swift lover soundtrack. And the dog obviously. And the Heather's the musical soundtrack.

### Bryan Robinson  9:53  
Really? Yeah. Okay, I didn't even know there was a musical

### Laurie Barth  9:55  
there is it was off Broadway. And it's really kind of a fun, angry rock musical thing.

### Bryan Robinson  10:00  
Very nice. Alright, and so So is there anything that you're doing right now that you really like to kind of promote and boost up? 

### Laurie Barth  10:06  
Yeah, I'm doing some egghead videos, I'm doing some blogging and contributor stuff to some publications and obviously writing my own stuff. So if you're interested in anything in the kind of JavaScript front end world and sometimes I write about other stuff. It's all on my site. LaurieonTech.com and a fair amount of it is also I always post it on Twitter @Laurieontech.

### Bryan Robinson  10:31  
Cool. And we'll put both of those in the show notes. So I really appreciate you taking the time to talk with us especially with a new a new puppy.

### Laurie Barth  10:39  
Yeah, for everyone who heard her in the background, she's she's sweet. You can see pictures of her online and maybe it'll be more forgiving of the interruptions

### Bryan Robinson  10:48  
that @LaurieonTech account'ss gonna become a dog account,

### Laurie Barth  10:51  
for sure. No question already there.

### Bryan Robinson  10:54  
Very cool. Well, thanks again. And and we'll go from here. And we'll see online making cool stuff.

### Laurie Barth  10:59  
Thanks so much, Bryan.

### Laurie Barth  11:00  
Thanks.

### Bryan Robinson  11:04  
also want to thank you, dear listener, for listening through the end of the podcast and being sure to go into your pod catcher of choice, whether that be iTunes, the Google Play Store or some third party that I'm not even familiar with, and hitting that like button and leaving us a positive review to let everyone know that this is one of the better podcasts listen to for the jam step. So until next time, keep making amazing things on the web and keep things jammy

Transcribed by https://otter.ai


Intro/outtro music by [bensound.com](https://bensound.com)