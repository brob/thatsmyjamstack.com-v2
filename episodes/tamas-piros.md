---
title: Tamas Piros on education and the "A" in the JAMstack
date: '2019-12-03'
tags:
  - episode
audioFile: https://pinecast.com/listen/72fa88c7-2f10-428e-99ac-01ab18245218.mp3
description: In today's episode, we're talking to a Cloudinary developer evangelist and awesome technical trainer, who just started jamstack.training Tamas Piros
socialImage: /images/tamas-piros.png
---

## Quick show notes

* Our Guest: [Tamas Piros](https://jamstack.training/)
* What he'd like for you to see: [JAMstack.training](https://jamstack.training/)
* His JAMstack Jams: "There's an API for that!" [Formspree](https://formspree.io/) | [Auth0](https://auth0.com/) | [Snipcart](https://snipcart.com/) | [Cloudinary](http://cloudinary.com/)
* His Musical Jam: Reggaeton in general, but [J. Balvin specifically](https://open.spotify.com/artist/1vyhD5VmyZ7KMfW5gqLgo5) | And tis the season for some traditional Christmas Music :D

## Other Technology Mentioned
* [11ty](http://11ty.io/)

## Our sponsor this week: [TakeShape](https://takeshape.io/thatsmyjamstack)

## Transcript
### Bryan Robinson  0:02  
Hello, everyone, welcome to another episode of that's my jam into the podcast where we ask the burning question, what is your jam in the JAMstack. I'm your host, Bryan Robinson. And in today's episode, we're talking to a Cloudinary developer evangelist and awesome technical trainer, who just started jamstack.training Tamas Piros. 

### Bryan Robinson  0:21  
Today's episode is sponsored by TakeShape, a content platform made specifically for the JAMstack. Stick around after the episode to hear more or head over to takeshape.io/thatsmyjamstack for more information. 

### Bryan Robinson  0:34  
Hey, Tamas, thanks for being on the podcast today.

### Tamas Piros  0:37  
Thank you very much for having me.

### Bryan Robinson  0:38  
So if you don't mind, give us a little little overview of who you are, what you do for work, what you do for fun, that kind of thing.

### Tamas Piros  0:45  
Sure. So I work as a developer evangelist for a company called Cloudinary thata does sort of cloud based media management -- media being images, videos. So been with them for Over a year, and before that I've worked at various other companies that can NoSQL company as a technical instructor. 

### Tamas Piros  1:06  
And as you know, as part of the role, I basically go and travel the world pretty much I attend conferences, I do talks and workshops at meetups and in various other places. And I also own a training company, which is called fullstack.training, where I basically try to deliver training courses about various pieces of web technologies. So that's what I do professionally. 

### Tamas Piros  1:31  
On the personal side of things, I always point out that I am a water polo player, which is a very tough sport for those of you who actually know it. And I like to say that as a coach, as a water polo coach, I have a gold and a bronze medal from some international tournaments. And as a player, I also have a third position in a tournament so I have a cup. So these are my little personal achievements 

### Bryan Robinson  2:00  
You're potentially the the best athlete we've had on the show so far. So that's, that's cool. I don't know water polo sounds incredibly difficult to me.

### Tamas Piros  2:10  
It is it is. But you know, if you if you train and if you dedicate some time to it, then then it can be a little fun.

### Bryan Robinson  2:17  
Very cool. So you're, you're working at Cloudinary. So obviously, professionally, you're doing quite a bit of JAMstack stuff, anything outside of work that you're working on JAMstack wise, or is it all just kind of that, that work environment?

### Tamas Piros  2:30  
It's mostly the work environment. The other thing that I work on is I have you know, my own personal site, which is a site about me about what I do is like a one page thing. So I build that using 11ty, which is one of the static site generators and I'm hosting it on Netlify. The only thing that I do really, I also have, you know, my company's website and I have a blog on there, which one day if time permits and when you know, the wind blows from the right direction. I will also sort of transform into JAMstack site. But you know, I don't know what's going to happen. 

### Bryan Robinson  3:08  
Sure. So you've got you've got the full stack training company, but you're also doing some JAMstack stuff with that too, right?

Unknown Speaker  3:14  
Yes. So I basically, registered jamstack.training as a domain. And I have a site available up there, which is basically just using teachable, which is a very good service that I like. So they basically allow you to create your online sort of video portal, where you can upload your videos manage your courses, users can register so everything is happening out from the box. 

### Tamas Piros  3:42  
So on that site, I basically have two free courses available at the moment. One is an introduction to JAMstack, which is it's really a non technical thing. There's, you know, there's no discussions about code. I just wanted to create this course so that anyone even coming from a non technical basis can kind of understand what the JAMstack is. The second course that I have there is how to create the blog using 11ty and some other services. And then at the moment, I am recording another one, which is create an e commerce store using Gatsby and Snipcart. I actually tweeted about that today. It's it's a Christmas store with all his Christmas ornaments and stuff. So it's basically pressuring myself to finish it before Christmas,

### Tamas Piros  4:30  
Yeah, otherwise, it's not going to work. So yeah, I have that side. I tried to, you know, use that to educate people about the JAMstack. And as I said, all the courses there are for free. So it's, I'm trying to, you know, produce as many courses as I can for free and put them out there.

### Bryan Robinson  4:47  
Very cool. And have you so you've only got a couple courses there so far, but how does it feel doing the JAMstack side of things in terms of education versus that full stack side.

### Tamas Piros  4:59  
So with the fullstack side I was the courses that I had weren't always necessary about, you know, always full stack was sometimes just NodeJS, but I have to say it does help in a stance that in a very relatively short video course I can talk about like how to create an entire ecommerce site that involves, you know, how to develop it, how to sort of deploy it, how to enhance it by adding, you know, just, you know, snipcart, I mean, the whole experience of making this happen is is wonderful, right? 

### Tamas Piros  5:39  
Whereas before, I had a course where I was talking about, you know, angular and node and express and full stack JavaScript and this and that, and that's like a very long course to put everything together. And I didn't even talk about how to deploy that, right, because I thought, you know, let's not focus on that. Let's focus on the actual code, whereas now, I can very easily just talk about how to deploy stuff

### Bryan Robinson  6:03  
It lets you give like that full application feeling to all the all your courses at that point.

### Tamas Piros  6:08  
Exactly. Right. So in about 30 or 40 videos, you know, we start from nothing, and we end up having an app that works and is deployed, which is, I think, pretty amazing

### Bryan Robinson  6:17  
I agree. That is kind of one of my favorite things on the JAMstack. 

### Bryan Robinson  6:21  
So let's talk about technologies. You've mentioned the 11ty, A little bit, Obviously, you're working at Cloudinary, what are kind of your jams in the JAMstack. What are your favorite technologies, philosophies, methodologies?

### Tamas Piros  6:32  
Sure. So I really like the the letter A in the JAMstack. You know, the API bit, because, and I just did a talk recently, and I made the joke that you know, how about 10 years ago, we used to say, oh, there's an app for that, you know, just about, you know, Apple's iPhone app store, you could do whatever you wanted. 

### Tamas Piros  6:51  
And I think now, it's safe to say that there's an API for that, right. So it doesn't matter what you want to do, or how complex that thing is. I'm pretty sure that an API out there that is available for you. So, you know a few examples that I've used. And these are my favorite ones as well like Formspree. Like, the bane of my life was contact forms because I had to have a server it had to have some, you know, mail service up and running. And then you had to have something that processes the form and sends it and it's like, oh my god, And then with Formspree just have the form elements. You have the action attribute, and you literally say formspree.io/emailaddress, and you're up and running. I mean, how simple

### Tamas Piros  7:36  
Other things like,  Auth0 for authentication, traditionally speaking was always very difficult, right? With their API's. It's, it's really simple. Or the recent recording that I'm doing for the e commerce stuff, right. So as I said, I'm using Snipcart. I'm also using Cloudinary to display product images, right. 

### Tamas Piros  7:58  
So the combination of these two API's means that with Snipcart, I can just have an entire checkout flow, including you know, shipping, shipping details, payments, and everything embedded in my application in just like three or four lines of code, and that's pretty much it, everything works. And then they have their own dashboard where they have the stats, how many sales do this and then I'm also displaying products using Cloudinary which is, you know, displaying images and you know, videos on your website is traditionally speaking kind of challenging because you can go wrong with that. 

### Tamas Piros  8:32  
And so here's an example what I'm doing in this app. I have this sort of like a jumper on a lady that is like a Christmasy jumper that I'm you know, selling in this wonderful ecommerce store. And Cloudinary has a feature to replace the color with another color. So as opposed to me generating you know, five or six different images from the same product to say what was yellow should now be red, and it should not be green should not be blue, and then just display those like, and that's it, you know, they can achieve whatever I want, using the API's. 

### Tamas Piros  9:06  
And I can let all these companies to deal with, you know, scaling and security. And you know, because what happens when my ecommerce store becomes very popular, right? I don't need to worry about, oh, how I'm going to handle the increased load of the checkout flow, because Snipcart is responsible for that service. And I'm sure they're going to take care of that, right. So this is what I really enjoy and loving the JAMstack. So that's why I like to point out there, you know, I'm all for ace. And I'm sure there's an API for everything that I ever wanted to do on the web.

### Bryan Robinson  9:39  
Definitely. And I actually really enjoyed the idea of the the Christmas shop, especially in terms of that scalability, because the Christmas shop may not do a lot of traffic from January to October, but it's going to ramp up real hard in November and so you have to be prepared for it, which would have been hard if you manage your own server.

### Tamas Piros  9:55  
Exactly. And now everything is pretty much transparent to you. You don't you know, see You don't need to worry about it. That's that's pretty much it.

### Bryan Robinson  10:03  
And I absolutely love the the "there's an API for that". I'm, I'm definitely going to be gonna be tweeting about that as for sure. Alright, so so I guess Tell me a little bit about how you're kind of advocating and cloud Neri and what sorts of technologies you're using. Obviously, we talked about, like the color change, but like, what other kind of big things are you kind of talking about in your professional life in the jam stack.

### Tamas Piros  10:28  
So there's a first of all, because of, you know, me having this gem center training website, I tried to sort of explore all the static site generators, all the all the headless CMS is all the components, and all the tools that I could use under the JAMstack. I just like to explore these right and that's part of the role as a developer evangelist as well, so that you know, I'm kind of well versed in all of these different pieces of technology. 

### Tamas Piros  11:00  
So at Cloudinary, really, you know, be focused on media images and videos and how you store them, how you optimize them, how you sort of transform them. So we have, you know, API's for not only just managing these media assets, but also as I said, you know, to transform them into any way you want. We recently added lots of AI features. So you know, don't forget, this is all on our site. So all you need to do is modify the URL or make the right API or SDK call, and we do the job for you. 

### Tamas Piros  11:33  
So we have things like, you know, object recognition for about 20 or 30 items, so you can send an image to us and then we can find it, you know microwave on it. You can find the banana on it and then we can actually crop the image for you so that you know the banana or the microwave oven is going to be in the center of the image. And, you know, again, what do I need to do here? Nothing, upload the image, change something in The URL and I get the result that I wanted.

### Bryan Robinson  12:03  
There you go. Yeah. And that's actually one of the one of the challenges I even had, managing an actual proprietary CMS was image cropping. And like dealing with all that, and figuring out where to crop the image, we put that on the user on our CMS users, and it never ended quite well.

### Tamas Piros  12:20  
Yeah, I mean, you know, you can do that automatically with any of these AI features, or you could, you know, just manually, you know, say with height, crop, and then you know, you're good to go. It's, I do enjoy, you know, that side of things. It's really, really easy. And then, you know, there's the delivery side of things. So we also use a global CDN, which means that, you know, once you do a transformation, it gets pushed out to the CDN, it's always going to be returned to the closest requesting user. And also, if the same transformation is requested, we don't do it again. Right. So it's just going to be cached in the CDN. 

### Tamas Piros  12:54  
So it's the second time when you call the same image is even going to be faster and We do have automatic formatting features, which is basically says, if you're looking at this image from Chrome, we serve it as a WebP, if you look at it from a safari, we serve it as a JPEG right? And that's, again, completely transparent to you. Because otherwise, if you wouldn't have that feature, even have this sort of management tool available for you, you would theoretically if you want a website that performs well, you would have to create a JPEG file, a web p file, and you know, have the logic in place so that the right file is served to the right browser.

### Bryan Robinson  13:32  
The whole CDN thing is, it's over my head, definitely. But it's very interesting to be that we have all these API's. They're doing CDN as well. So you've got Cloudinary on a CDN, FaunaDB has this kind of distributed database thing that we're fine with hosting on the CDN. And then putting all that logic at the CDN level just makes so much sense. But I could never set that up like that could never be me. So it's so nice to offload that to our various API's.

### Tamas Piros  13:55  
And, you know, that's also one of the core ideas of the JAMstack i think is you know, Everything should be on an edge server. So there's really, you know, no more excuses for not creating websites that that perform well.

### Bryan Robinson  14:07  
Exactly as quick as possible all over the world. Cool. So let's let's get to what you're actually jamming on right now in terms of music. What's your musical taste? What's your favorite song or musician? What were you? Were you listening to?

### Tamas Piros  14:20  
So what I listened to in general, I have a weird set of music to listen to. It's really anything from metal music to reggaeton, reggaeton being my big favorite, right? So artists like J. Balvin, maluma, the Anki, these type of artists, and I love the music so much that I actually learned Spanish so that I can actually understand what they are singing about. And actually, I'm going to say this out loud now, so this isn't a recording. One of the challenges that I have for myself for the next year is to deliver a talk in Spanish. So I've been working on that, it's I'm getting there, I think but you know, 2020 is the year when it's going to happen. But yeah, so the big favorite that I have is really, you know, J Balvin. Anything from from J Balvin who is a Colombian reggaeton singer. I just love his songs. And I have to admit that, you know, we spoke about Christmas, it's Christmas time. I'm all for Christmas music. You know, it's Bring Crosby and Cliff, Richard and all of these. I'm going to start to play them very soon.

### Bryan Robinson  15:30  
You know, I was at a cafe this past weekend, and they were playing Christmas music and I said, it's not Thanksgiving. So for us, right. It's not in the States. Not Thanksgiving yet. I feel like it's got to be December before we can listen to Christmas music. Yeah,

### Tamas Piros  15:43  
it's Look, it's 10 more days, and I can, you know, have you told

### Bryan Robinson  15:49  
I mean, I'm not gonna judge you could listen to it in July and I'd be I'd be happy for you listen to Christmas music done.

### Tamas Piros  15:54  
I like Christmas. And, you know, I think Christmas music should be in December. It's cold maybe there's snow. It has a certain, you know, feeling for it. And I like that. 

### Bryan Robinson  16:04  
So last thing, anything you want to promote that you're doing right now, what do you want to kind of share with the jam stack world,

### Tamas Piros  16:10  
I would just, you know, like people to check out jumps at the training, if you know anyone feels like they are for recording their own sort of video course, I'm more than happy to host that as well or help them, you know, ideate and help them to record stuff. Or if they just have an idea and say, Oh, I would love to see, you know, XYZ in the JAMstack. And I'm more than happy to at least try to somehow record that or accommodate those requests. But yeah, just, you know, as I said, it's all free. So I hope people will, will find value in what I'm doing there.

### Bryan Robinson  16:46  
Excellent. Well, I appreciate you taking the time to talk with us today. 

### Tamas Piros  16:49  
Thank you very much for having me. 

### Bryan Robinson  16:50  
I want to take a second thing this week sponsor TakeShape. TakeShape they're offering a content platform and that's really the best description. They have handy CM,S a static site generator and simple GraphQL API that's all ready for your use in the JAMstack. 

### Bryan Robinson  17:07  
And they may have all that power but they also work within your current workflow. I'm currently converting one of my sites over to us to TakeShape CMS. But because I can bring my own static site generator, I don't have to rewrite a lot of that code. Just change where the data comes from, and BAM, instant upgrade my CMS. 

### Bryan Robinson  17:22  
They also have new features coming out all the time, like their new Mesh product that allows for you to mix and match data from multiple sources into one neat GraphQL interface. If that sounds interesting. Be sure to go to takeshape.io/thatsmyjamstack to find out more. 

### Bryan Robinson  17:39  
And of course, as always, I do want to thank you, our listeners You are the reason I do this. Be sure to like heart, favorite, subscribe, whatever you do, and your podcast app of choice to let me know that you want more and more and more episodes of the That's My JAMstack podcast. We'll see you next week and keep doing amazing things on the web.

Transcribed by https://otter.ai



Intro/outtro music by [bensound.com](https://bensound.com)