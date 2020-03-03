---
title: Daniel Olson on Wordpress as an SSG, Third-Wave web dev and much more
date: '2019-12-17'
tags:
  - episode
audioFile: https://pinecast.com/listen/b928bac5-4c23-479c-b142-ea6cabbda87f.mp3
description: This week, we have the COO of a company called DigitalCube. He's a self taught web developer and a JAMstack enthusiast I'm very pleased to have on the show Daniel Olson.
socialImage: /images/daniel-olson.png
---

## Quick show notes

* Our Guest: [Daniel Olson](https://danielolson.me/)
* What he'd like for you to see/remember: Use the term "static" sparingly | Join in the community and share problems, solutions, etc.
* His JAMstack Jams: Wordpress (headless and/or as a static site generator) | [Netlify's build process/hooks](https://netlify.com)
* His Musical Jam: [Poolside.fm](https://poolside.fm/)

## Our sponsor this week: [TakeShape](https://takeshape.io/thatsmyjamstack)

## Transcript
### Bryan Robinson  0:02  
Hello, everyone, welcome to yet another episode of That's My JAMstack. I'm your host Bryan Robinson and this will be the last regular episode of the year will be back to official episodes of The New Year. But we'll be tiding you over with a special holiday slate of episodes where various guests from this past year will be talking about their thoughts on the JAMstack in 2020. 

### Bryan Robinson  0:20  
This week, though, we have the COO of a company called DigitalCube. He's a self taught web developer and a JAMstack enthusiast I'm very pleased to have on the show Daniel Olson.

### Bryan Robinson  0:29  
I'm also pleased to have back this week our sponsor TakeShape. You can hear more about their content platform after the episode or head over to takeshape.io/thatsmyjamstack for more information. 

### Bryan Robinson  0:44  
Daniel, thanks for being on the show with us today. 

### Daniel Olson  0:46  
It's a pleasure. 

### Bryan Robinson  0:47  
So tell us a little about yourself. What do you do for work? What do you do for fun, that sort of thing.

### Daniel Olson  0:52  
I'm the Chief Operating Officer at DigitalCube. I get to work on all the products we develop and travel a bit sharing some of the work that we do. One of those products I work on is called Shifter. It's a static site generator for WordPress and some might say it's a serverless hosting platform. Another product I get to work on is called Animoto. It's a managed WordPress hosting solution built for enterprise. We're only limits the options that AWS can offer us, which is a lot. But my my role is a bit of a variety show. Like many companies and the growing JAMstack community, we wear many hats. Most days I work on MVPs and do feature development. And the way I like to do that is through customer feedback. So my kind of my main jam is finding gaps where our products don't like cover and then building solutions with the designers and engineers around that.

### Bryan Robinson  1:44  
Cool so what do you do outside of work? What's your favorite thing to do when you're when you're off?

### Daniel Olson  1:48  
What do I do? Also a bit of a variety show. I'm in the kitchen a lot. I make a lot of food. I like to dine out and like You know, try different foods. I'm also a big beer guy, I run like a beer website on the side. And that's kind of my life is around like, you know, enjoying tastes. So if there's something to like something new to try, like if when I when I travel a lot, my co workers like to like push the boundaries a little bit, and they'll try to get me to eat like strange things, but it never really works out because I always enjoy it.

### Bryan Robinson  2:25  
So what's your favorite cuisine that that you've tried?

### Daniel Olson  2:31  
Maybe I don't hate me. Maybe some of vegetarian listeners might be upset. But I did go to when I was in Japan with my co workers after a meetup. Someone asked me if I liked sashimi, which Yes, I love sashimi. But we were in Fukuoka, which I didn't realize that sashimi me has lots of different meanings. And I've learned that in Fukuoka, sashimi could mean raw horse meat. Which is pretty, like common in Japan and in certain regions. So, I mean, you know, I'm game if everyone says it's good, I'll give it a try. And I was very impressed. I learned a ton about this, like, you know, like food category I never really knew anything about or I thought I knew about. But I would go back like in a heartbeat. I would love to do that again.

### Bryan Robinson  3:22  
Interesting. Interesting that that surprised me. You caught me off guard with that one. 

### Daniel Olson  3:26  
Yeah, and you can eat all of it. There's certain there's certain pieces or certain cuts that must be grilled. And some of them you can or you don't have to so like they basically bring out like a like a grill. And you can use chopsticks and you just give it like a little bit of heat. For some of the pieces, some of the sausages you have to cook thoroughly. But most of it you can eat with you know, Ginger or rice or like pickled vegetables. It's it's a I think it's a good experience. If you're, if you have the opportunity, I recommend it.

### Bryan Robinson  3:59  
Interesting. Cool. So obviously not not a food podcast, more of a more of a tech podcast here. So let's, let's talk about your, your enjoyment of static sites or the JAMstack, what was your entry point into this kind of philosophy of building sites? 

### Daniel Olson  4:13  
It's kind of a funny story. Um, my introduction to static sites was at, I worked at a branding agency for a number of years, and we're pretty small team, one of the other developers I worked with, he was, you know, kind of more familiar with the static sites and the services generators out there. And he told me about them and you know, we are WordPress shop. So thinking about, you know, the value or, you know, what the clients would need. It was always really difficult for me to, you know, jump ship and recommend that to our clients because at the end of the day, they're the ones who have to live with these sites and edit them and, you know, help like grow them. 

### Daniel Olson  4:53  
So, you know, writing markdown using like, a non familiar CMS backend other than WordPress. was kind of a hard sell. But we it still was in the back of my mind. But when I went to a conference in Philadelphia, where I'm from, and I met this group of, you know, Japanese developers, and they were working on this interesting product, and they introduced it to me as a "Third Wave". They're like, this is this is going to be the future. And they kept trying to explain it to me, I didn't quite get it. And I didn't actually really understand it until like a year after. But what they were trying to do is to bring some of the approaches that status like static site generators were doing to the WordPress community and like bridging that gap. And it didn't click at first and it really made no sense to me because it was explained as the third wave, but, but it makes total sense in hindsight now. 

### Daniel Olson  5:52  
So that was that was my first introduction. It was like I was kind of like I fell into it. But I also was like, living amongst it for For years not really paying attention to it,

### Bryan Robinson  6:02  
So with with that what they were doing was that before WordPress had the API stuff was that before you could go headless with WordPress, or is that they were doing their own thing around that.

### Daniel Olson  6:12  
It was it was kind of alongside so there was these, you know, two communities within the WordPress ecosystem at that time. And it was people who are developing, you know, they're like power users are using plugins to do things. They're doing theme development. And then there's this other track where, you know, they're a group of developers are really trying to push the boundaries of what WordPress can do just as a blogging tool like they're using it as a full featured CMS. And that was when headless really kind of took off the REST API was getting a lot of attention. 

### Daniel Olson  6:41  
Some of these other projects, and even plugins, were using the REST API, but it's I think, I call them that like their technology magic tricks, like, yes, it works. And then like you build a little demo, and then let's see how far we can take this magic trick and like you build out these incredibly large sites using WordPress. Completely headless. But it's really just, you know, an extension of that first demo, like, are you doing anything different? It's just the implementation. 

### Daniel Olson  7:08  
But when I learned about the the project that these guys were working on, it was totally different. It was kind of a mix between the two. Yes, we want to give users the same experience that they're familiar with in the back end. But we also want to deliver the benefits that these other ideas can offer, like the benefits that jam stack has, or the benefits that headless has. So it was like kind of a cross between the two. But it was the WordPress REST API that actually enabled it.

### Bryan Robinson  7:40  
True. Yeah. Cool. So would it be fair to say that kind of this idea of WordPress headless is where is where you kind of got into everything?

### Daniel Olson  7:49  
Yeah, yeah. And it was, um, you know, we, at the agency I worked at we built a lot of just, you know, demo sites and like little product sites for clients and it at the time, it was like a total experiment you couldn't even do it natively in WordPress, it was an extension like you had to install a plugin to enable the REST API. It was that early. And now it's a part of core and we talked about it. It's, you know, this ubiquitous thing that, you know, everyone's familiar with it if you're in this community, but at the time, it was like, What is REST? What does that mean? And yeah, so it's, you know, I'm, it feels good to be a part of something that I've got to see grow over time.

### Bryan Robinson  8:30  
Cool. And so so I'm kind of curious about about headless WordPress. I've only I've done magic tricks with it. That's about as far as I've gone into that world for, for WordPress in the JAMstack. What are some, some challenges y'all have been overcoming? What are some, some things for people to kind of be aware of if they start playing with this idea?

### Daniel Olson  8:48  
So headless WordPress is I would consider that it's its own category. And the work that I do in the kind of the world that I live in, within like the development community, there's it's really three distinct categories. So you have like traditional WordPress, which is what, you know, people are familiar with that. And then you have headless WordPress which is decoupled. You're building your JAMstack site and using WordPress as your CMS or back end. And then you have static WordPress, which is kind of the in between. So we're using WordPress as a static site generator. So it's that's like its own special category. You're, you're not converting or building a new site using WordPress as your back end. You're using WordPress itself and generating the static site from that. That site itself, it's not there's no Developer Tools involved. It's just native WordPress.

### Bryan Robinson  9:46  
Oh, interesting. So instead of like a cash, you're and then you're building in your build step from the actual WordPress files on a Linux server.

### Daniel Olson  9:54  
Yeah, so it's actually the way that we do it is the the approach is service. So the end result the way that it's delivered. And the product itself is built as service. So we were using AWS lambda. So we're an AWS advanced technology partner. So about 50% of our team are just AWS engineers who have a deep understanding of those technologies and the infrastructure. And then about the other half are WordPress developers. So we work really tightly together to develop solutions that take advantage of what AWS has to offer, and kind of leverage all these capabilities for WordPress. It's not, there's like there's two ways to do WordPress in AWS, you run WordPress, just as a layer on top, and it's just there. And then or you could actually kind of integrate it into the services and just get a lot more of opportunity, a lot more power out of it. But the way that we're doing it is we use the WordPress REST API, which like I said, it was basically that was the catalyst that made this possible. 

### Daniel Olson  10:59  
The WordPress REST API the way that we use it, we use that to get to get a list of links from the WordPress site. So we we can, like at a quick glance, see every page that exists by hitting a certain REST API path. And then we pass that to AWS lambda, which then queues up a list of URLs to crawl. And then it crawls each URL seems it to an s3 bucket. And that gets served with CloudFront. So at the very basic level, that's kind of how it works.

### Bryan Robinson  11:29  
Very interesting. And so you're, you're you're still using like WordPress, his own templates and all that, right.

### Daniel Olson  11:35  
Yeah. So if you want to use the themes, same themes and plugins, you are free to use those as long as they there's certain exceptions like contact form plugins, they naturally in the WordPress world, they want to post data back to the WordPress database, which, at that point in time, doesn't exist because you've now created a static site and WordPress is no longer in the picture but There are some like opportunities and shims that exist. One of the I developed a couple of plugins that will swap out like action URLs within forums to send those to third parties, whether it's, you know, jam stack friendly, like forums as a service sites like a forum spree or form kit, or basin or even that with five forms.

### Bryan Robinson  12:22  
Interesting. So I want one things I've always wondered about headless, headless WordPress is the idea that if you're using WordPress headless, and you're doing it like with your own static site generator on the side, you're really getting like 25%, maybe 30% of benefit of WordPress, that sounds like y'all are closer to like, 75 or 80% of all the benefits of WordPress, because I was I was always like, why would you ever use headless WordPress if you're only getting a small portion of the benefit of it?

### Daniel Olson  12:46  
Yeah, and I see that too. And having like, really, like dived into the JAMstack ecosystem, seeing the tools that are out there, it's still growing. There's still a lot of rooms who for it to mature, and they're like things like gaspee the plugin ecosystem is like booming, there's, you know, there's a lot of stuff out there. But there's still more stuff in the WordPress world. So I get why people still want to use it like the theme themes are one thing, but also plugins, like having the opportunity to just search the plugin directory of the 50,000 plus plugins that exist, there's going to be some solution in there for whatever problem you need. And most of the time, it will work in that scenario, like even as a headless option. If it's a popular plugin, they probably have developed REST, like paths for it, to interact with it in a headless manner.

### Bryan Robinson  13:39  
Yeah, but even then, like if you're if you're interacting with it in the headless manner, you then have to build that functionality into your templates unless you're using WordPress as its own static site generator at that point.

### Daniel Olson  13:48  
Yeah, and in that case, you just use it natively, how you want to, you know, experience it naturally in the WordPress world. And then you just click a button and then we crawl your site generate a static version. And then power down WordPress.

### Bryan Robinson  14:02  
Awesome. So So it'd be fair to say that headless WordPress is kind of your jam in the JAMstack, or do you have any other like products or tools, services philosophies that you're really digging right now.

### Daniel Olson  14:14  
Um, I was introduced to. It's kind of funny. It's like, it's a feature that we developed. But I didn't really get much use out of it personally, until a customer had a very unique request. And it was the integration between our product and Netlify web hooks. And I started to use Netlify web hooks, just so you can basically build your static WordPress site on Shifter and you can deploy it to Netlify so if there's like, you know, I want to use Netlify Forms, I want to use Netlify analytics, I want to use the basic auth or I have another application and I want to keep all of my sites in one place. You can do that. 

### Daniel Olson  14:57  
But one of the things that I didn't really dive into was there build tools. So when when you do the web hooks, and you can customize the Netlify Builds you can get like really granular with all the different things that happen during your build runtime. And I like I don't know why I just never really got into that. But I, one day, I just kind of spent all day reading about it and, you know, learning about it and testing it. And I was like, blown away by all the options that they have in there. It's kind of it's a, it's a hidden gem. Like I recommend spending a little time reading about it.

### Bryan Robinson  15:28  
Well, I'm nowadays they even have the ability to plug into into the build process. They have variables, you can set up to do a whole bunch of stuff that they're testing out. Right now it's in beta.

### Daniel Olson  15:40  
Yeah, yeah, it's a it's a lot of amazing like fun stuff that's going on. And also the forms and the way the analytics work. It's like It's like analytics is such a difficult thing for a lot of web developers because of ad blockers and like proxies and networks. But if you're running your analytics like Netlify does based on Like the server stats itself, like you, like you're making a connection to this site, whether you blocked an ad script or not, that analytics reporting tool is still going to measure all that data. It's not going to give you like, as much as something like a google analytics that you're allowing to track you. But it's still a valuable tool for developers and even like, you know, if to run your business like what's going on in my application, you can cost optimize and and see what's really happening

### Bryan Robinson  16:29  
And doesn't affect front end performance. Which is great, too.

### Daniel Olson  16:32  
Yeah, it's something that happens naturally, that data is logged anyway for the server itself. So you know, just providing access to it is it's crazy like it's they're providing access to it. It now has become a product.

### Bryan Robinson  16:45  
Yep. Oh, yeah. Gotta find ways to monetize and keep the keep the doors open. I want Netlify around for a long time.

### Daniel Olson  16:52  
Yeah. And keep keep your customers happy.

### Bryan Robinson  16:55  
Exactly. Cool. So So what's going to keep you in the JAMstack? Obviously you It's important you right now, which is great, but like, what's the core philosophy that you're gonna dig into in the next couple years?

### Daniel Olson  17:06  
I am a, my, my core philosophy is the rule of least power. I think that a lot of times we, you know, hit solutions with the hammer instead of like, figuring out a different approach, like every problem is a nail. Like the, the idea of applying JAMstack has, like an approach is really appealing to me because it focuses on something that I also really appreciate. And that's design thinking. So rather than just applying a solution, or you know, throwing more power at something, or making it like overly complicated jumps that can can be quite elegant, because it's using only things that you need. 

### Daniel Olson  17:48  
So as opposed to what you know, like WordPress is traditionally a monolith. It comes with a lot of things that you don't necessarily need or may ever use. But JAMstack is like, All right, I'm building this site, I need comments. Just add the comments you need. I need ecommerce right now I'm just going to add ecommerce, but you don't need other features. They don't exist you didn't build them. And that's what I love about the the JAMstack community is it gives us the opportunity to pick and choose and kind of build exactly what we need.

### Bryan Robinson  18:22  
I actually the rule of least power is one of my guiding principles actually wrote a blog post about a year ago on it. One of my favorite things that came out the development of HTML and, and and the web.

### Daniel Olson  18:34  
Yeah, and like I always kind of,I always get stuck like whenever there's a new app or new tool out there, like Yeah, but like this thing does it but also there's no UI for it and it runs faster. And I like I'm just kind of geeking out over that stuff like a Hyper, like Wes Bos on JavaScript courses he uses Hyper a lot. And like, I love looking at it. Hyper is like a beautiful terminal. But also it runs JavaScript and like it kind of takes a lot longer to open then just like my terminal with nothing in it. So that's like, those are my daily struggles.

### Bryan Robinson  19:13  
The new cool versus what's the most efficient for you?

### Daniel Olson  19:16  
Yeah, don't go overboard. Just use what you need and get the job done. It's also I think it's good for me because I work with a lot of customers to on their servers. And like, if you're logging into a server, you don't have the luxuries of your like your customized bash scripts. And these, you know, like pretty UI is like you just have to know what you're doing. And like just kind of using the basic tools to get the job done is has really paid off for me. It's it's taught me a lot.

### Bryan Robinson  19:46  
Having the same tools that everywhere definitely makes it easier when things go wrong in the non fancy places.

### Daniel Olson  19:51  
Yeah, I sometimes I think of it as like a little form of torture for myself just because I'm not giving myself like an advantage but it's it pays off in the long run

### Bryan Robinson  20:01  
definitely alright so so let's let's talk music what's your actual jam right now what what musician or song or type of music Are you really into right now?

### Daniel Olson  20:11  
My my musical tastes vary throughout the day some days I wake up listening to like Wilco on all my Alexa devices just blasting throughout the house. And then maybe by lunch I'll be listening to like little Wayne's the Carter three and I'll just have like genius up like the website genius and just I'm picking apart all the rap lyrics. Um, but yeah, like I I, the thing that I really enjoy right now is and it's the perfect background noise for me. It's this thing called poolside FM. And there's a website for I think it's just poolside.fm but it's a it's a website that kind of looks super 80s and it plays music videos and also music along with it, but the music videos are like clips like old VHS random clips almost like everything is terrible. But I don't know it's just like the perfect background noise when you're like coding or just need something on while you're cleaning the house. And I've they never show like the what's playing are actually I listened to it on my Alexa but they never show it's playing so I'm always like asking my phone like, What song is this

### Bryan Robinson  21:22  
as a little mystery to your life? Yeah. Cool. So is there anything that you would like to promote that you're doing right now that you want to get out in the world?

### Daniel Olson  21:31  
Um, actually, I want to give a shout out to to Phil Hawksworth from Netlify about I want to like throw back to one of your previous episodes and something he said that it's it's funny when I listened to the episode I I've said the same thing in a couple talks and it just resonated with me so I want to call it out again. 

### Daniel Olson  21:52  
He he said something he's very careful about using the phrase static sites and I totally agree with that. And the reason that I agree with that is one of my favorite sites jamstack.org, which is kind of like a manifesto for me. It's like we are the JAMstack party. This is what we believe. But the most important part of that website is what it actually does not mention, it doesn't mention any specific frameworks. It completely focuses on best practices. And if you search the site, for the word static, it only appears once. And it says, I'm pretty sure it says probably static. 

### Daniel Olson  22:33  
So it's like kind of like, you know, going back to it. This is not, we're not purists. This is an approach. It's a philosophy. And then it's a way to build something better. But yeah, that's kind of that's a that's I just wanted to mention that But yeah, I don't really, I don't really have anything to promote, like we we have, we're in the WordPress community. But we're kind of like we straddle those two things like WordPress and jam stack but I just think that, uh, the WordPress community and also the jam stack community has a lot to learn from each other. I think that Jeff slack.org is a good place to start. I think that really focusing on the approach rather than the tools is something that is really important that that you should do, and that you can learn a lot from. And also just talk to other developers see what they got going on and see what problems they have to solve. Maybe you can help them maybe your experience is valuable.

### Bryan Robinson  23:26  
And we all kind of have different problems. And we find the right solutions for them no matter what the stack is.

### Daniel Olson  23:32  
Yeah, yeah, in in the WordPress world, like I've I've developed plugins, and some of the plugins that I've developed. I tried to build them so that they work in both environments, whether you know, you're running on Shifter, and we create a static site from that from that site for using WordPress. But you can also build that plugin so that it can work natively in a native WordPress and like hosting environment. And I've learned that building Something that applies to both types of like hosting platforms, it actually just makes it more performance overall. And like, you don't need to, it doesn't need to be static, but the way that you've built it, it could be static. And the end result is just more performance. So why not build it this way? anyway?.

### Bryan Robinson  24:19  
Well, I appreciate you taking the time out of your day to talk with us. And I hope you keep doing some amazing stuff on the jam stuff. 

### Daniel Olson  24:25  
Thank you for having me. Looking forward to it. 

### Bryan Robinson  24:30  
All right, it's sponsored time, I want to talk today about a specific feature in TakeShape, which is our sponsor, for this episode. And that's the API Explorer. Inside your TakeShape dashboard, you'll find the Explorer and it's a really great tool for a GraphQL novice like myself, but it also has lots of great features built in, like some autocomplete and built in documentation. It makes it really incredibly easy to find all the pieces of data that you want to include in a GraphQL query, and then it's going to build that query for you. It's a simple copy and paste away from your static site generator. So makes it really, really easy to interact with, TakeShape's API. They have a lot of other great functionality as well, you should definitely go and check them out. And you can do that by hitting up takeshape.io/thatsmyjamstack. 

### Bryan Robinson  25:21  
I also want to thank our guests, Daniel again, and thank all the amazing listeners in the JAMstack community. Remember, if you're enjoying this podcast, give it a star a heart an upvote or review in your podcast app of choice to help new folks find their way to listening in and with that, we're gonna see you in the new year but I hope you keep doing amazing things in the JAMstack.

Transcribed by https://otter.ai



Intro/outtro music by [bensound.com](https://bensound.com)