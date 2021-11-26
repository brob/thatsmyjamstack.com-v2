---
title: Miguel Arias on form handling and lowering the learning curve
date: '2021-02-02'
tags:
  - episode
  - season-2
audioFile: https://pinecast.com/listen/735e57ab-8b9f-4304-a9ae-423e79b54b64.mp3
description: This week we have Miguel Arias on the show. Miguel is the co founder of Kwes forms.
socialImage: /images/miguel-arias.png
---

## Quick show notes

* Our Guest: [Miguel Arias](https://twitter.com/migueljarias)
* What he'd like for you to see: [Kwes Forms](https://kwes.io)
* His JAMstack Jams: Lowering the learning curve, Kwes, and [AlpineJS](https://alpinejs.org)
* His Musical Jams: Drake | Classical (and coding to rainfall)

## Transcript
### Bryan Robinson  0:14  
Hello, everyone, welcome to another episode of That's My Jamstack, the podcast where we ask that simple Kwesion, what's your jam in the jam stack. I'm your host, Bryan Robinson. And this week we have Miguel arias on the show. Miguel is the co founder of Kwes forms. Hi, Miguel, thanks for being on the podcast with us today.

### Miguel Arias  0:42  
Thank you for having me, man. It's a pleasure. Awesome. So

### Bryan Robinson  0:44  
tell us a little bit about yourself. What do you do for work? What do you do for fun, that sort of thing.

### Miguel Arias  0:49  
Okay, a little bit about myself. I'm the co founder of Kwes forms, it's a, it's a form service ideal for like the Jamstack community. I like to think of us as like the next evolution of what form service should be. Before we were around, there were a lot of over called, like endpoint services, to kind of handle your, like your submission, storing and whatnot. And then we kind of felt like there was a big gap in the market where, you know, like, it kind of took care of that. But then you had to go on your own and figure out validation and components, like date pickers, multi step, things of that nature. So we kind of felt like it was a perfect opportunity to kind of get in there and that space and put out a product that that we would love to use, you know, and that we felt like maybe other people in that space would like to use as well. So what I do for fun, you know, COVID is kind of killed a lot of it, but when I, what I normally do for fun is play basketball. The weird thing about it, though, is that I actually like to practice more than actually play. Sure, I think it comes with like my perfectionistic nature, I just, I just have this thing that I like to train and just and my wife is the same exact way. So I'm glad that we found each other because we didn't go to the parks when it's empty. And just like practice all day. It's like the weirdest thing, but that's what we like to do. You know,

### Bryan Robinson  2:09  
I can totally get that, like, as soon as you as soon as you introduce other humans into it, then like there's so many ways that like imperfections happen because of that. Some people find beauty in that and then it's like, but no, if you really want to, like compete against yourself, like doing it on your own just makes so much sense. 

### Miguel Arias  2:26  
Are you like sports guy, he like we like playing basketball?

### Bryan Robinson  2:30  
I am I am not particularly athletic. I do have sports. Basketball is is up there. I am very when you introduce other human beings, I am very bad when it's just me shooting and like, you know, kind of running around. It's okay. Like I could I can play horse decently. But you get somebody in my face and I fall apart.

### Miguel Arias  2:50  
Yeah, you know, I kind of find it like it's like therapeutic in a way just to kind of compete against yourself. It's cool. It's a good way to kind of exercise patience and stuff. I really like it.

### Bryan Robinson  3:00  
Yeah, it's like, it's like, Alright, you know, you know, free throws, right. And like, it's really funny. My, my mother is actually a huge like NBA fan. And like when she's rooting for her team, she gets so frustrated at the players missing free throws.

### Miguel Arias  3:11  
Yeah.

### Bryan Robinson  3:12  
Don't you practice that enough? Like, can't you just make that shot? It's like, Well, yeah, except for when all the variants happen. And you know, you will miss every once in a while. But yeah, you get to kind of practice that. And you get to like, find your form. And I think there's a lot of a lot of cool things that happen in that space.

### Miguel Arias  3:30  
For sure. Yeah. Cool.

### Bryan Robinson  3:31  
So let's talk about the Jamstack a little bit. And I'm sure we'll kind of weave in some more about Kwes as we go forward. But like, what was your entry point into into the idea that Jamstack or static sites or whatever you want to call it?

### Miguel Arias  3:41  
Yeah, the funny thing is when we started our service, um, we really just started it, because at the time, like, I met my co founder, because he was actually my boss. Yeah, when I was about, like, 18, I was looking to, to get a job so I can marry my girlfriend at the time. Well, I mean, she's my wife, now. She's my girlfriend at the time. She's my wife. And so we used to use a service called formstack. You know, which is great, but it was like, a, it's like a drag and drop type of service. And then one day, I just kind of burst into his office, as I normally would do. And I was like, bro, we should make our own like form service. You know what I mean? Like, not drag and drop something that I would like to use, just because it was a hassle to kind of go through that process and then have to like, put it on your site, you have to strip all this styling. It was just like, it was like an unneeded amount of work. Right. It's how I felt.

### Bryan Robinson  4:33  
I use Formstack quite a bit at the agencies that I worked at. And yeah, it was, it was super handy for that for like the editors making the forms. It was super awful for like the developers working 

### Miguel Arias  4:43  
Exactly. So then we kind of felt like, you know, this really isn't the ideal tool for us, you know, so then I burst into his office and I told him, we should make our own thing and he kind of just like, looked at me like I was crazy. I was like, Yeah, he's like, go back to work. So then, so I was like, Alright, cool. I went home, I kind of just kept thinking about it, it's just in my nature, like, I get obsessed with things. So I kind of kept thinking about it. And then one day, I think maybe it was like, the next day, the next evening, I was in the shower. And then I just got this idea of how I would be able to go about it, you know, and I, like ran out of the shower naked, like, super wave naked. And I ran to like my notebook and start writing down and my wife was looking at me, like, I'm like a lunatic, you know? And, and so that's how we kind of started it. But I didn't really know what Jamstack was at the time. I never even heard of it. Yeah, the only reason, the reason that we got into it was because as it started gaining, like popularity, we started noticing a trend, like we started noticing people telling us, oh, this is perfect for my Jamstack site. And this is good for Jamstack, whatever. And I was like, What the heck is a Jamstack? You know, we looked it up and, and we felt like, you know, this is awesome, I kind of felt when I saw it, it made perfect sense. Like, that's where the industry at least, I feel like that's where the industry is probably headed because of how simplistic it is in nature. Like, I feel like the theory, or the concept of a Jamstack is to like, try to simplify, you know, your workflow as much as possible, you know what I mean? So I felt like, you know, it was a perfect entryway for our service, and I just kind of just fell in love with, with the whole concept of it in the community, which then allowed me to allow me and my partner to kind of improve the product now that we kind of knew what was really meant for right hand out, let's improve it even further.

### Bryan Robinson  6:37  
Out of curiosity, what was kind of the, the beginning there? Like, what, where, where are you targeting the forms before that cuz like said, like, it is, like a great fit, like finding these services that you can fit into the Jamstack is just is so important. So like, Where was the methodology? Like, who are you targeting before you kind of had this discovery?

Miguel Arias 6:54  
Yeah, the methodology was really just, we wanted to build something cool, you know, something that we liked, and then we just put it out there. And it's funny, because you always hear in the SaaS community, well, not even just when you're building a product in general, that you're normally not supposed to work in secret for such a long time, before you put something out, you know, you want to do a proof of concept, put it out, see what people think. But then we totally you know, we were rookie, so we, we worked in silence for like three years. The product still not knowing what Jamstack was, or anything, you know, and then we launched it on product con. And then Ever since then, you know, we've we, that's when we started kind of getting the feedback, you know, but when we put it out there, it was really just, you know, for people doing WordPress sites, or just for anything, really, we were just, we were just targeting developers in general, you know,

### Bryan Robinson  7:45  
I got to say, yeah, wherever developers were working and needed a form that was maybe outside of whatever stack they were using, or didn't want to bother with, they could just pick it up and put it put it in

### Miguel Arias  7:55  
Right and make something fun, you know, it's like something that they would actually enjoy using, we felt like if a developer could enjoy using it, that was that was our guy, you know,

### Bryan Robinson  8:03  
Out of curiosity, is there, is there any sort of in the actual, like infrastructure behind the product? Like, are you using kind of notions that you've kind of discovered in the Jamstack? In the back end? are we are we talking? Is it? Is it kind of its own monolithic structure? Or is that you know, microservices or serverless functions? What what's kind of going on there?

### Miguel Arias  8:22  
Well, it's definitely its own thing. It's the script itself, because it's built on JavaScript, right? Because, you know, handles your front end validation, back end validation, you know, helps you build out these like complex things like multi step forms, repeater fields, things that normally kind of take up a lot of your time, that's like monotonous, it helps you achieve these things in a much more enjoyable way. Right. So then, the first time I built it, I had built it on a front end framework. But then as I kind of got to understand the Jamstack community a little more I, my partner, and I realize how how much importance is placed on speed, right. And things being lightweight. So then we ended up, you know, rebuilding version two, which we released, like, a few weeks ago. And we we dropped the size of it from, like, 300 kilobytes to about 20 kilobytes. Oh, wow. Yeah. So and the only way that we were able to do that was to kind of try to stay to as native JavaScript as possible. You know what I mean? I guess to answer your Kwesion, like, yeah, we try not to use too many like microservices to accomplish it just so that we can kind of keep the file size down. Yeah, but yeah, so it's basically just supposed to be a script that you import into your site, and then you know, you're good to go.

### Bryan Robinson  9:41  
And I love the idea that like, at first you had these kind of bigger pieces to it, but then seeing how people were building on the Jamstack and realizing the importance they placed in certain areas. So like you said, like, speed and performance being such a high level thing that that allowed you to kind of pivot the product in a way that was in line with those Same philosophies.

### Miguel Arias  10:00  
Yeah. Like that just kept coming up, you know, and which, which is funny, like how I said we had spent, like three years building on that product. But then when that kept coming up, we just kind of realized, you know, this was not built on the right foundation. We had to scrap it go back to the drawing board start over, you know, but it was great. You know, I kind of I saw it as a learning experience. When I built the this the second version, I really knew who I was building it for, you know,

### Bryan Robinson  10:28  
yeah, that the audience is super important to kind of figure out and find exactly their needs. And it's super cool that like the it's a it's a JavaScript solution that has performance built in like that's, that's always super important, because JavaScript can get real heavy real fast. If you're not paying attention to that.

### Miguel Arias  10:44  
Yeah, definitely. Definitely.

### Bryan Robinson  10:46  
Nice. So now that you've kind of kind of joined this, this Jamstack community of kind of builders, like, what would you say is kind of one of one of your jams in the Jamstack? Like, obviously, Kwes, I would have to assume as is one of them, but like, what sorts of ideas and like philosophies and maybe even other products and services? Are you really enjoying that you've kind of found yourself in this niche?

### Miguel Arias  11:07  
Well, I mean, you took my first answer. Okay. Yeah. I think Well, like I said earlier, like the whole concept and theory behind Jamstack elite, at least for me, like, I really love the fact that it's kind of like, okay, you simplify your product. And then once you feel like, it's It is as simple as possible. You'd like simplifying again, you know what I mean? Like, I love how there's such an emphasis on like, lowering the learning curve, like this new thing came out pretty recently, Alpine js, I don't know if you've heard of it. Yeah, it's kind of like Vue js, at least, the way that they even describe it, it's kind of like uJs, where it's like very, very similar syntax, super simple, but it's written in like HTML markup pretty much. And I just blew my mind when I saw that, because I felt like Vue JS was already extremely simple. But then they found a way to simplify it even further, you know, and that's, like, super inspiring, I feel like you can always simplify your product to the point where it's just becomes almost like second nature to us it you know, like is, like picking it up. And learning it is like not a problem.

### Bryan Robinson  12:15  
I was gonna say like, and getting it as close to like, the natural languages of the web is also like, super nice. Like you said, it gets Alpine is even close, like view got close to like, some the declarative nature of like HTML. And then Alpine took it a step further and said, You know what, let's make it look exactly like HTML. You know,

### Miguel Arias  12:32  
it's funny, you say that, because that was like the whole concept behind our idea for the validation rules, because we had used certain, like, you know, other services that because, you know, there'll be services out there that are just front end validation rules. But I always felt like they were kind of, you know, like, not super difficult to write, but you had to write it in in JavaScript. And I felt like, it would be super cool. If we could put out a service where you could write the validation rules in just like markup, you know, what I mean, like HTML markup, so then that kind of gave us the idea to just add them inside, like a rules attribute inside the input. You know, like, you know, you have your input, you say, rules, and then you add your validation in there, and then a validated front end and back end at the same time, right. So it's like, the whole concept behind it was like what you said, trying to get it as close to like, the native, you know, markup language as possible. And I feel like Alpine JS did like, an amazing job of accomplishing that, you know,

### Bryan Robinson  13:30  
yeah, yeah. And I like, I like that you're like building it in that way, too. Because like, if you think about the the nature of a product that is like making forms as easy that it's like, including your site is possible, you might be working with somebody that is, you know, creating maybe just HTML CSS, right, and they still won't be able to like import that into their project. Or maybe they're using something like 11 D, and it's a very, like HTML feel everywhere. And they still want that without having to go outside and be a JavaScript developer like that. That's, that's such a handy thing for something that should feel as simple as forms should feel.

### Miguel Arias  14:07  
Right? Like, we want it to be able to allow users to build down like a complete form, like everything you would really need, but without really needing to know how to write JavaScript, you could and you could, like, extend it further, which is awesome. But you really don't need it to be able to create a fully functioning complete form, you know what I mean?

### Bryan Robinson  14:27  
Yeah, and when you kind of look at it, and you look at, like, the big competitors in the space, like you mentioned, formstack, and there's stuff like wufu, that are these, like, you know, you know, GUI interface, like let's drag and drop the the the form fields in, like, that's, that's one step further, and then what you get out of it is like a jumbled mess. Whereas this can kind of be that that middle space, where it's like, you know, what, an editor might actually be able to stumble their way through this kind of thing. But it's going to be in a way that developers can come back and be like, Oh, no, no, we're gonna do this slightly differently, because I understand the underlying code.

### Miguel Arias  14:58  
Yeah, that's true. But really our our intended audience is really just developers. If you know, HTML, CSS, I mean, you don't have to be like a crazy programmer, if you know, HTML, CSS, any developer can do it, you know, but that's why I felt services like formstack, and wufu. They're just like in a different space, right, they're servicing a different audience. Like you said, like the editors, people, like in marketing teams or something like that. And that's, you know, that's great, that's perfect for them. But then we kind of felt like they were also servicing developers, but just not as good as, as it could be, you know, what I'm saying, at least in my experience, when I use it, it just kind of felt not like a natural workflow for me, you know,

### Bryan Robinson  15:38  
and what, you know, I used to look into, like their API's and to send the biggest thing you could do, and you could do, like, you could have created your own like, form API based on their API, but you know, no one's got time for all that when they just want to put a form on the page. So like, having something that is itself, given his own API driven experience, just means you get that kind of for free at that point.

### Miguel Arias  16:00  
Yeah, and it's just, you know, it's simple, it's enjoyable, it's, that that's really the goal, which I feel like, it's the goal of overall Jamstack just like services like, like Vercel and Netlify, that just kind of, because I feel like Jamstack, you know, the the nature of it, is you have your front end framework, right. But then you got like the missing piece, which is the rest, like, you know, the whole back end, part of it, deploying, and in this case, forms, emails, things like that. So I feel like services, like ours, you know, services like Vercel, and Netlify, they kind of complete that whole environment for them. And I, and I honestly really do feel like it's where the industry is headed, just because of how simple it is to kind of start it up and get it going, you know?

### Bryan Robinson  16:47  
Well, and the nice thing is, like you mentioned, like Netlify, and, you know, they've got the like, the super simple, like form stuff built in, right, you toss Netlify attribute on your form, and you're done. But that doesn't really accomplish, the more complex, you know, UI as you might want to do around forms. Because forms can be super simple, and that's great. But they can also be, you know, complex business, decision driven things that need some extra logic and need some extra handling built in, that you'd have to kind of roll on your own, if you're trying to use like, the super simple solutions that are out there,

### Miguel Arias  17:19  
right, and things like, you know, not to bash on what Netlify hazard form services like those, they're just like an endpoint that don't really have, like a front end aspect to them, there's a certain kind of security that you're going to be lacking there. Because, for example, like validation rules, especially ours, we our validation rules are unique in the fact that they're on temporal. So if you were to, like, add a form and validation rules, you know, load of the page, if you were to inspect element and try to remove the rules, no, it's not, it's not gonna happen. They're the rules are there to state, you know, and maybe try to inject a new field, if you try to remove a field, you know, because it validates on the front end and the back end. So then when you kind of don't have that, that part of a form service, you know, it's a lot easier to be able to inject fields change, like the type attribute of a field, or if something's a read only, you can like go and just take off the read only attribute. And, you know, that is just a certain kind of security that will be lacking, if you're kind of lacking that part of it.

### Bryan Robinson  18:20  
And you could, you could handle that on the front end, on your own. But like I said, like, when it comes to forms, you just want the form to work, you don't want to have to go and roll that yourself, you rather do whatever cool feature you're working on, that needs the form, like work work on it elsewhere,

### Miguel Arias  18:33  
because it's just monotonous. And the thing is that every project that you do is kind of, you know, almost like 99% of the time, you're gonna need a form, you know, so then, you know, this part is solving a piece of it, but then you kind of have to every single time, figure out a way to add these, everything else has missing to it, you know what I'm saying? So, it's nice to just have a service that you could, you know, import the script plug it is done, you know, and I mean, it, everything's done, you don't have to go on a scavenger hunt and find, you know, like another Validation Service and then find a way to validate on the back end and then find yours or something like compliance, for example, right? Like you have these medical sites that need HIPAA compliance, and things like that, you know, what I'm saying is easy to, it's so much better to just be able to trust a company to kind of handle that for you. And that provides a really easy experience in regards to like implementation. Yep,

### Bryan Robinson  19:27  
I did one HIPAA compliance site one time and I never want to touch that sort of thing again. Yeah.

Unknown Speaker  19:35  
I hear that cool. So

### Bryan Robinson  19:37  
what what is your what's your actual jam right now? What are you listening to what sorts of music are you into or your favorite song or musician?

### Miguel Arias  19:44  
You know, I wish I could be one of those people that have that's that's super unique taste in music knows all like the underground people before they get famous or something. I'm definitely not that. I feel like music has this this super unique way of putting putting you in like, the frame of mind that you want, right? So, you know if I'm trying to relax or something, maybe I'll listen to like something classical. You know, if I'm trying to focus, I'll listen to something else. And I'm trying to get inspired. Maybe there's like a Drake song that inspired me. So I think it's just gonna depend on, you know, what kind of what kind of move what, what kind of emotion I want to put myself in, right? Yeah. So I think it's cool how we can we live in this era that we could just, you know, on demand, just be like, okay, I feel like being inspired. Let me put on this song, you know?

### Bryan Robinson  20:32  
So so let me let me ask this then. So when you're when you're coding when you're working on the product, what's in your earphones at that point,

### Miguel Arias  20:39  
it's gonna be the weirdest thing ever. But what I listen to at that point is literally just like rain. I put like, how in the rain. I don't know why, but it just, it really helps me focus like crazy. So I just put like the sound of rain for like, 10 hours or something. Or like snow or something weird like that.

### Bryan Robinson  20:54  
Yeah, I found some like some lo fi like YouTube videos that have like rain and stuff in the background like that. That's so soothing. Like, you can definitely get you into a focus minds.

### Miguel Arias  21:03  
Yeah, I like that, too. So sometimes I put like the lo fi, hip hop or something like that.

### Bryan Robinson  21:07  
Nice. So So what would you like to promote and kind of get out to the, to the Jamstack community as a whole? I mean, obviously, we're probably gonna talk about Kwes, but go for it.

### Miguel Arias  21:16  
Yeah, I will, you know, we're still kind of new in the scene. You know what I mean, we launched it about so the whole story, you know, we worked on it for about three years. We launched it last year, we scrapped it somewhere. Like it like, I don't know, October not really scrapped, because it's still out, you know, it's still being supported. But then we kind of put out the the new version, I would say, maybe it's been a month already since we put it out. Okay, and yeah, I would like to get that out there, you know, for people to check it out. Give it a try. You know, we offer free trials and we feel like it's a really great service and we would love to hear anybody's opinions on it. The only reason why has gotten to this point is because of you know, all the love that people have shown and people reaching out to us. You know, we We always love when people reach out to us. They call it a game changer. They they really seem to love the product, you know, so any anybody out there that wants to check it out? give their opinion, definitely welcome you to hear. You could also check us out on Twitter. That's a Kwes forms, kW LS fo RM s, and my personal Twitter Miguel JSMIGU, el, Jay AR, I as I almost forgot how to spell my own name.

### Bryan Robinson  22:35  
Well, and don't worry, I'll grab those links. And I will put them in the show notes for everyone to kind of grab as well as i think it's it's what kwes.io, right kW. Yes. Awesome. So, Miguel, thanks so much for being on with us today. And I hope you keep doing amazing things at Kwes as well as Kevin this broad Jamstack community.

### Miguel Arias  22:52  
Awesome, man, thank you so much. You too. You got a great podcast going on. Here are some of your episodes. I love them.

### Bryan Robinson  22:58  
I appreciate it. Thanks so much. 

### Bryan Robinson  23:04  
Thanks again to Miguel and thanks to everyone out there who listens week after week. If you enjoy the podcast, be sure to leave a review or a rating in your podcast app of choice. Until next time, keep doing amazing things on the web and keep things jammy

Transcribed by https://otter.ai

Intro/outtro music by [bensound.com](https://bensound.com)