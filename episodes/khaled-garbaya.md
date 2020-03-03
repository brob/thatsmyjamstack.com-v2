---
title: Khaled Garbaya on Gatsby, Create React App, modularity and more
date: '2020-02-04'
tags:
  - episode
audioFile: https://pinecast.com/listen/3060e1dc-1e39-409b-88d3-960c154ffa0f.mp3
description: This week I'm excited to have on the show the amazing Khaled Garbaya. Khaled is an engineering manager at Contentful and runs an amazing JAMstack newsletter.
socialImage: /images/khaled-garbaya.png
---

## Quick show notes

* Our Guest: [Khaled Garbaya](https://k4d.dev/) | On Twitter: [@khaled_garbaya](https://twitter.com/khaled_garbaya)
* What he'd like for you to see: [Moving from create-react-app to Gatsby Course](https://learnjamstack.com/migrate-a-reactjs-project-to-gatsby/) | [JAMstack newsletter](https://learnjamstack.com) | [Live streaming](https://twitch.tv/kgarbaya)
* His JAMstack Jams: [Gatsby](https://gatsbyjs.com) | [Netlify](https://netlify.com) | [Contentful](https://contentful.com)
* His Musical Jam: [Eminem's Latest album](https://open.spotify.com/album/3HNnxK7NgLXbDoxRZxNWiR)


## Our sponsor this week: [TakeShape](https://takeshape.io/thatsmyjamstack)

## Transcript 
### Bryan Robinson  0:01  
Hello everyone and welcome to another episode of That's My JAMstack the podcast where we asked the pressing question, "What is your jam in the JAMstack?" I'm your host, Bryan Robinson. And this week I'm excited to have on the show the amazing Khaled Garbaya. Khaled is an engineering manager at Contentful and runs an amazing JAMstack newsletter. 

### Bryan Robinson  0:20  
We're also welcoming back this week TakeShape as our sponsor, stick around after the episode to find out more about their content platform or head over to takeshape.io/thatsmyjamstack for more information. 

### Bryan Robinson  0:34  
Thanks for being on the show today, Khaled. 

### Khaled Garbaya  0:35  
Hey, thanks for having me. 

### Bryan Robinson  0:38  
So tell us a little about yourself. What do you do for work? What do you do for fun, all that stuff.

### Khaled Garbaya  0:43  
So my name is Khaled. I'm originally from Tunisia, which is like a small country in the North Africa. And it's been I've been living in Berlin for over six years now. I am an engineering manager at Contentful And I love learning and building and public. And I also traveled for food. So that's that's usually my life. Yeah, that's, that's basically me. 

### Khaled Garbaya  1:17  
I started, I don't know if this is relevant or some people might not even remember the days of Flash. So I started as a Flash developer and moved my way there to like gaming and then now it's more like web and servers and now people debugging people instead of code, which is also a lot of fun. Yeah, and I do also like some live streaming, and I teach some web development related and JAMstack related topics over  on Egghead or YouTube or I also do some streaming in Twitch so I'm all over the place.

### Bryan Robinson  1:57  
Cool. Make sure you give me those links. I'll pop them in the show notes. You say you, you travel for food? So how much are you traveling and maybe what's your What's your favorite country or city for food? 

### Khaled Garbaya  2:10  
I mean, my favorite city is definitely Italy so far. I mean, not city but like an entire country. Yeah, my, the best city like I go there every year. We must go there at least for a week. It's Sardinia it's like a small island in Italy by the beach, and there's some great food and I want to be like always, like relax. So that's my style of vacation. I'm no hiker, or I do sometimes, but I'm just I'm lazy. I don't want to do a lot of activities.

### Bryan Robinson  2:45  
I can definitely get that I spent a week in Italy and did way too much and would rather just relax on the beach.

### Khaled Garbaya  2:53  
Yeah, so I visited few cities hunting for food. Napoli also I went to the Holy Land of pizza. Rome is kind of an open museum. It's an amazing country to music also my country's full of food. So it's a nice to always visit family and have some food. Whereas I went to the US few, like two times, but just San Francisco. I don't know. I mean, usually, it maybe it's not the US.

### Bryan Robinson  3:25  
Sure. 

### Khaled Garbaya  3:26  
And yeah, traveling through Europe because it's, I mean, Europe here is like, very accessible and easy to go through. It's not like 10 hours flight. I think the furthest country was Japan. Last year, it was like magical.

### Bryan Robinson  3:44  
Very cool, whole, whole whole different kind of plane existence in a lot of ways. 

### Bryan Robinson  3:49  
Cool. So So let's talk about the JAMstack a little bit. So what was your kind of your entry point into this philosophy, whether that's JAMstack itself nowadays or static sites? Where did you start in this

### Khaled Garbaya  4:00  
Yeah, so I had a blog and WordPress. I mean, this is sounds like you will hear the story a lot. When I didn't have time to, like, maintain it. There was a lot of bots, hosting a lot of files on my website. And it wasn't just like, I mean, I'm getting like 100 views a month on this blog post, why why do I bother even maintaining this stuff? And also open source like, I think the when, when JAMstack started rising like two, three years ago, I got involved a lot on open source, mainly with the Gatsby. So I was I did some pull requests to help the integration with Contentful to be like a little bit faster. And then I like fixed few stuff here and there. And they were like the Gatsby team was amazing and friendly. And my wife decided to build a food blog. So I was like, Yeah, okay, I was trying to save my marriage basically. Yeah, so I built her that blog and I kind of like geek out about it I use it like as a test space to try all of these stuff and then yeah, if I'm like very powerful low maintenance and also like low costs so I went all in in there and and started to explore it more and how to go beyond the static site basically. That's more what my god what like where my curiosity went. And yeah, since then, I'm a big fan of the JAMstack.

### Bryan Robinson  5:42  
So So obviously, if you're at Contentful, JAMstack kind of a professional thing, too. But like, yeah, how we're using it there. How are you using it maybe beyond that food blog, or even what's kind of the stack for that food blog and you're in your hat personal endeavors?

### Khaled Garbaya  5:57  
Yeah. So In Contentful, first I joined as a software engineer, mostly maintaining the SDK, and a lot of tooling, and most of it was open source. So it was like, oh, amazing, it can be like, I can get paid and then work on open source. And from there, like the involvement of Contentful, and the integration isn't all of these stacks started to appear to help here and there and the direct people, and so on. And to talk about like, usually my stack would be Gatsby. Because I know there's like many other options over there. But that's why I got used to and kinda like my comfort zone now and I know it very well. So that's what I start with. Netlify for hosting. I used to host stuff over at S3 and cloud like cloudfront. 

### Khaled Garbaya  6:56  
But then once I learned all of that, I was like, Okay, now let's Move to something easy Yeah, I use algolia for search. That's also really nice Netlify some several as functions I recently also use the Identity Service by Netlify. There's also like some other options like Auth0 which is really great and I think it generous. They give you a generous free offer for like users and so on but I don't have like that many users so I went with Netlify like a thousand I think it's more than enough for me and because it integrates well with like the whole hosting service and they can do a lot of powerful configurations through Netlify it made it made more sense. What else? Yeah, I'm I can't remember something But I'm definitely going to use a lot more API's

### Bryan Robinson  8:04  
Definitely. And so that's a lot of technologies. What would you say is kind of like your one jam in the jam stack? What's that technology that you're always going back to the Gatsby?

### Khaled Garbaya  8:13  
Yeah, I think it's it's it's Gatsby and Netlify these are like the my Gatsby, Netlify and then Contentful because I can also like bootstrap my content really quickly. And I can give it to someone that they are not technical and can they can write stuff in there. And I also like geek about like, this content modeling in general, because it's like it's a big topic. And me so I that's like the my top three stack always because you need them most of the time, you will need content. So I'd rather give it to someone who knows well about content and they like they have a platform for that already.

### Bryan Robinson  8:54  
Sure. They like the contents that they type in some stuff. They click Save, and they're good to go. Cool. So you just wrote an article at the beginning of this year right on Gatsby as a as a replacement for Create React App. Yeah. So let's talk about that a little, because I'm interested in that.

### Khaled Garbaya  9:10  
Yeah. So I like like I told you, I was curious overall in the JAMstack, how to go beyond, like a normal use case, like a blog or a marketing website, and so on. Because I think it's over. It's like, very powerful. It's, you can do more than that. And with Gatsby, which a lot of people they get wrong is like, yeah, it's another static site generators. But it's, it's more than that. 

### Khaled Garbaya  9:38  
So it will give you like a pre rendered website. But then once it's fully loaded, it will load also react and rehydrate everything to react app. So basically, you have this powerful app that's sitting there doing nothing, just displaying, you know, and also like bootstrapping Gatsby, what site and the whole plugin ecosystem. It's really powerful. So I was like, let's try build an app with Gatsby and not like, React create react app. And what I found there is like, I built the first like, kind of small Twitter clone using react. And I was like, Okay, let's try and see how how much go they can just copy paste from here to there. And it was like, sometimes it's like, the entire component, just copy paste it there. 

### Khaled Garbaya  10:34  
A few things to consider like the window object, when you when, when the process of statically generating the website kicks in, that's like a Node process. So the, the window object doesn't exist there. But other than that, you can use all the great features of react, you can use hooks you can use a lot of things. I mean, except suspense, because It's still not ready for, I guess, for us it and I don't know how long it would take. But looking forward to that. But also, I mean, since its react and JavaScript, you can load some more data. If you have a like dynamic stuff. Gatsby also has a powerful like API for creating pages. So you can create static pages, you can create dynamic routes. And since you you're able to use dynamic routes, and you can use actually reach router, which is embedded in there. 

### Khaled Garbaya  11:35  
You could do stuff like authentications, because all these routes will not get rendered as static, like set equation, because it doesn't make sense to render dashboards for every user that you have. That's not that's not the case. So using that and the combination of different API's and if you have for example, like payments I don't know like Stripe now is a great example for that. The way it works, they give you like a public key and a secret key. So you can use the public key in your front end, and that's fine. And then if you want to capture a payment, you can get some token and send it to your API. 

### Khaled Garbaya  12:20  
In this case, it will be like a serverless function using Netlify, and you can like capture the payment and you can do a lot of that. So I was like, asking over and Twitter like, hey, like, what's what's wrong while you're not like building with with a gaspee? And it turns out like a lot of people actually, either they had like a misunderstanding about like, the whole gaspee thing, or they actually building some apps with that and so on. So yeah, so I wrote that blog post about about that. And I'm actually like building a course around the the whole thing I'll send you the link later. And we can add it to the, to the show notes. Yeah. And then I will just break down the whole thing like starting from scratch, like how do you even start the website without even like using Gatsby to generate the templates? And how simple it is, and then we can go from there.

### Bryan Robinson  13:23  
So I'm kind of curious. So, you know, obviously Gatsby is relatively strongly opinionated. Like, there's the Gatsby way of doing react and arguably is one of the better ways of doing react. I don't have a lot of experience with create react app. Is that that opinionated or is it more of like a "Here's some bootstrapping now you go do whatever you want."

### Khaled Garbaya  13:41  
Yeah, I think I think there's some opinion in every tool and that's sometimes good. I think most of the time is good, because if you remember the old days with react, you need to do like Webpack and like, do some configurations and then all I need this loader and that loader and so on. So both Gatsby and react create react app, they solve this problem. They remove the whole, like the whole headache of like building an app. They make you focus on just react, how to build react, create react app, like the end result will be a react app. 

### Khaled Garbaya  14:22  
But Gatsby will be like more than that. So it'll be a static site that will transform later into react app. And, and then it doesn't also like stop there. So it gives you like another data layer, which is graph QL. And you can inject any data from any source in there. And that's a really mean graph girl proved to be like a great developer experience and user experience in general. And yeah, but the Create react app I think is like makes your life simpler when bootstrapping an app, have it running. You can totally build an entire app. That's fine. But it doesn't give you like, more.

### Bryan Robinson  15:06  
I gotcha. So if you're making this like a really small app, you might still stick with create react app, but anything beyond that a little bit, you're gonna want go gafi route. Yeah,

### Khaled Garbaya  15:15  
yeah, yeah, I mean, it depends always, like what I say always depends on your use case. Because I'm not just I'm not trying to bash any tool. Everything's like super great. You know, like, when you start this conversation over Twitter, people, like just jump in, you're like, Oh, my God, what are you saying every time? Yeah, it depends on the use case. But I think, since they offer, like the offer, like kind of equal experience at the beginning, why not starting with with Gatsby and and then in the future, if you need to get some more data or like, integrate an API. I mean, you can you can do it.

### Bryan Robinson  15:57  
Nice. So I I've actually I've only done like, surface layer Gatsby stuff. I've created a couple of like small static sites and that sort of thing. Are there any Is there anything to be aware of as you kind of try to take it outside of that static rendering and move it in into like that rehydration process?

### Khaled Garbaya  16:12  
Yeah. So that's mostly kind of done by Gatsby like the Gatsby runtime. One thing is some people, sometimes I see a lot of people asking like, oh, how do I do private routes? And Gatsby, or how do I do this and Gatsby? And actually, that question should be like, how do I do this in react? Because that's actually like a react app. Like you're dealing with react components? A few things like a gotchas. And all like the like I said, the window object. Yeah, the windows object. Sometimes you might be loading some apps that rely also on the window object, but you can in the Gatsby node, you can say, hey, what if you're loading this at in the SSR Phase ignore it or make it an empty modules yeah there's few things here there to watch out for while building but mostly also like you need to think about your your structure of the website what's what's what's really need to be dynamic and what what needs to be like static, like an about page or contact page or contact page. Yeah, maybe but that's also still kind of be can be static, and then inject few stuff in there. And then what's like dynamic and what do you what stuff you don't want to do. And also like Watch out from plugins, or wise Don't be like adding plugins left and right. Because again, it will be like, sometimes painful, a little bit painful when it comes to maintaining all of that. Yeah, and then push as much as you can at build Like the work you do the data processing and stuff, give to the user like a relaxed app, kind of like don't stress the app to show some user.

### Bryan Robinson  18:10  
Yeah, a good progressive enhancement kind of ideology there. Cool. So kind of going forward, you know, next three or four years. Where do you kind of see the tech stack going in a way that's going to keep you in the JAMstack? Obviously, you're doing a lot of stuff in it right now. What's gonna keep you coming back year after year?

### Khaled Garbaya  18:30  
I think modularity. That's that's one thing. I like that every API and product or any company that's producing that they're only focusing on one thing, and that's proven to be always great. Like focusing on one thing and doing really great. I love like, hand handing over a lot of work to experts to do that for me. Yep, so yeah. As long as that's the idea and also also like about the community and it needs to be like an inclusive community and inviting more and more people to contribute and build nice tools in there. Yeah, that that's what keeps me there. What keeps me in the jam stack. And I'm not usually driven by hypes I love to kind of, because there's a lot of hype around like new tools and so on, I use only what I need. And jam stack allows me to do that. And I can replace some components with something else really quickly. And that's going back to the modularity. So that's what I like about

### Bryan Robinson  19:41  
who I am when one new like hyped up thing goes from being hyped to being actually good and you know, ready for production, then you can just switch that into as you go on.

### Khaled Garbaya  19:50  
Yeah, yeah. Yeah. I mean, I can also like, even if I like the idea behind it, I might experiment with it before. Yeah, I like to I mean us things and then I don't really like bash tools on online and I have strong opinions because I was like, yeah, it's assuming the best intention always this is probably solving a problem for someone else. Not me. So I use it if it makes sense. I can include it. Otherwise I can just move on.

### Bryan Robinson  20:19  
Nice. So So JAMstack aside, what is your what's your jam and like in your ears right now? What's your jam in music?

### Khaled Garbaya  20:26  
Oh, man, um, the new Eminem album is nice is on fire. I think is is passing Kanye West. Kinda. Yeah, but I also like, listen to Cardi B. I like some some sort of, you know, rap and hip hop and stuff. Sometimes. I don't know like, It's weird. Like these old suggestions from Spotify. I just listened to them. Yeah, I listened to whereas like, sometimes Ed Sheeran, there's like some some cool songs. He did one with Eminem. I mean, I'm like, I'm like from the 90s. So I listen a lot. And, like, I'm kind of a little bit of old school and yeah, whatever. Spotify tells me to listen, sometimes I was just like, ok

### Bryan Robinson  21:17  
yeah, give the music over to the to the algorithm and say, give me what's best for me.

### Khaled Garbaya  21:26  
Yeah, make sure to listen to few music I like and then the rest will come.

### Bryan Robinson  21:30  
Exactly, exactly. Our robot overlords are taking care of you.

### Khaled Garbaya  21:34  
Yeah, exactly.

### Bryan Robinson  21:36  
Nice. So is there anything that you want promote and get out there to the JAMstack community?

### Khaled Garbaya  21:40  
Yes. Uh huh. Let's see. So, currently, back to the topic of the Create react app, and Gatsby. I'm doing a live stream every day for like an hour, we are actually building an app called RubberGoose.dev. So you know the concept of rubber ducking? Yeah. So I think the name rubber duck is like trademark to something, so someone was like, yeah, maybe rubber goose. And yeah, the app is live. And we already made some great progress there. There's a landing page is capturing email, push it to Convert Kit. It has authentication, it has stripe billing, and plans or subscription all of that. And I didn't even build the content of the app. I was like, the stripe stuff so that you can find it over twitch.tv/kgarbaya. Or if you follow me at Twitter, which is @khaled_garbaya.

### Khaled Garbaya  22:56  
And yeah, and if you Go over sort learnjamstack.com I'm running a weekly digest for like some nice resources I find useful. In there also, on the top, you'll find a banner getting you to like the course if you want to get some, like some info about the course of the progress, I share some nice free previews and materials already about that. Yeah, and my website is k4d.dev. So I was like, you know, the four letters and between the K and D. I was like, like the Kubernetes or something. So yeah, that's like, my main website. So yeah, I guess if you follow me on Twitter and like, look around, you can find all the other links.

### Bryan Robinson  23:49  
Sure. Awesome. Well, I really appreciate you being on the show today and sharing your your expertise around great react app versus Gatsby and all that good stuff. And thanks for doing And all the cool educational resources you've been putting out there.

### Khaled Garbaya  24:02  
Yeah, man. That's my pleasure. Thanks for having Thanks for having me.

### Bryan Robinson  24:08  
Hey, everyone, it's Bryan again. And it is time to talk about this week sponsored TakeShape. They're a really well crafted content platform made specifically for the JAM stack. So what's a content platform? Well, take shape doesn't just provide a CMS, though, you can certainly just use their CMS if that's all you're interested in. They also have a static site generator, a GraphQL API. And this really cool new Mesh product just growing by the day, which you can use to combine multiple API's into one really easy to use GraphQL-based API. So if those things strike your fancy, and for me, most of them do on one level or another, head on over to takeshape.io/thatsmyjamstack to sign up. 

### Bryan Robinson  24:48  
And of course, don't forget to star heart favorite, subscribe, all those lovely things so that more people can find out about the amazing work that we're all doing in this great JAMstack community. So until next week, keep doing Amazing things on the web and keep things JAMy

Transcribed by https://otter.ai


Intro/outtro music by [bensound.com](https://bensound.com)