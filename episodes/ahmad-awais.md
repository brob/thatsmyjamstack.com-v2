---
title: Ahmad Awais on the elegance of Markdown, education and simplification
date: '2020-01-14'
tags:
  - episode
audioFile: https://pinecast.com/listen/55bff092-3959-4256-8afd-dbb5f2a57438.mp3
description: In today's episode we're talking with Ahmad Awais. Ahmad is a developer relations engineer at Cloudinary, a Google Developer expert and a prolific teacher. 
socialImage: /images/ahmad-awais.png
---

## Quick show notes

* Our Guest: [Ahmad Awais](https://ahmadawais.com/)
* What he'd like for you to see: That it's important to keep educating and not overcomplicate things
* His JAMstack Jams: Markdown and all it's incredible uses
* His Musical Jam: [The Greatest Showman Soundtrack](https://www.youtube.com/playlist?list=PLi0vNpDrBJPdGH3LoC85PgixsOq5vDUV3)

## Other Technology Mentioned
* [Stripe](https://stripe.com)
* [VuePress](https://vuepress.vuejs.org/)
* [React](https://reactjs.org/)

## Our sponsor this week: [TakeShape](https://takeshape.io/thatsmyjamstack)

## Transcript 

### Bryan Robinson  0:02  
Hello everyone, welcome to another episode of That's My JAMstack the podcast where we asked the deep and complex question, what's your jam in the JAMstack? In today's episode we're talking with Ahmad Awais. Ahmad is a developer relations engineer at Cloudinary, a Google Developer expert and a prolific teacher. 

### Bryan Robinson  0:19  
I'm also happy to welcome back once again, our sponsor TakeShape. Stick around after the show to learn more about their content platform or visit, takeshape.io/thatsmyjamstack for more information. 

### Bryan Robinson  0:37  
Thanks for being on the podcast today. How's it going?

### Ahmad Awais  0:39  
I'm doing good. Thanks for having me. 

### Bryan Robinson  0:41  
Great. So tell us a little bit about yourself. Tell us what you do for work, what you do for fun outside of technology and all that sort of stuff.

### Ahmad Awais  0:47  
Awesome. Awesome. So I'm actually right now the principal Developer Advocate for Cloudinary. I advocate for Javascript and open source. I have been spending a lot of time for the last years on being a full time open sourcer, where I build a lot of things related to web sort of a web purist, which has also kind of led me to be a Google Developers expert for web technologies. And I serve on the Node JS community committee. 

### Ahmad Awais  1:17  
But I spent, I spent like this past life or about 13 years or so contributing to the WordPress core software, to WooCommerce into all sorts of things WordPress, but been always kind of directed for JavaScript. So when kind of JavaScript kind of took off, I knew that getting a promotion, I definitely moved to the React JS community. And then from there to NodeJS, I'm handling all of this and then JAMstack came into being and it's like what we always been doing, but with a better name, a better community and with better, you know, tooling and practices. 

### Ahmad Awais  1:56  
So that's me apart from that. I come from a family Teachers, both my grandparents, both my parents. So teaching is sort of a genetic bug in me. So and I like to be sort of funny, at least I try to be. So I call this entertaining, education plus entertainment. So I entertain a lot in this course out on VSCode.pro, teaching people how I do a lot of development in less time, like 200 plus development workflows, and whatnot. So that's me.

### Bryan Robinson  2:28  
Nice. And now, outside of like the teaching and the and the technology, what do you do for fun?

### Ahmad Awais  2:34  
Ah, that is actually a tough one. So I'm actually an electrical engineer. They're like, they're, like 15 or so electrical engineers, my family before me. And all of them graduated from the same universities when I asked what should I do this at electrical engineering is what you should do. It's the mother field of computer science and everything. So but my hobby was actually writing blogs. I've been writing content for over 16 years now. So writing blogs, I ended up being a designer, the end front end developer then full stack. So that was the road that took me towards where I am right now. a software developer web developer, per se. So this used to be like my hobby that I used to do. It's now my job so I'm officially boring. But for years now I've been trying to pick up one another one other hobby, you know, for, for take something beyond this, but that thing came out to be teaching, but it's also related to this. So I organized a lot of meetups I go to, you know, different local events in talk about, you know, brain dumping what I did last week and whatnot. Beyond that, I used to play a lot of football back in the day, trying to pick that up nowadays again, because I can put on so much weight since then.

### Ahmad Awais  3:57  
But that's me. My hobby became a job and I'm boring.

### Bryan Robinson  4:00  
That's, Hey, there, there are worse things to happen. Right. Cool. So let's, let's talk about the JAMstack a little bit. So obviously, you've been doing JavaScript for a while you've been in the developer communities for a while. What was your entry point into this idea, this methodology that is JAMstack, static site, that sort of thing.

### Ahmad Awais  4:17  
Okay, so as I mentioned, I love blogging, and blogging and like, with, with time, blogging has become more and more complex. It's like, you cannot just have one single theme for all of your ideas. So that's that's me. You know, sometimes, while I love the site that I built for my blogs, and whatnot, sometimes an idea would come into my head and it would need a different concept would need a landing page of its on its own sort of thing. But I wanted to integrate that into my current workflow, being a WordPress developer that helped a lot like I was kind of building the core and the REST API was kind of being worked on for WordPress. 

### Ahmad Awais  4:59  
So we could Probably build static pages inside of WordPress as well. But at the same time, I was doing all lot of demos, I would go to these events in talking about stuff. And I never liked kind of software that I use for presentation. So I wrote this small sort of, you know, me specific presentation module that was web, HTML, JavaScript and CSS in it, you on too many other open sourcers, especially my wife, we actually met through open source. So she had well a static site generic called Poodle, which would help her in many other teachers in her startup to teach but, you know, developers about building small stuff. 

### Ahmad Awais  5:48  
It was this was before codepen was like the go to, you know, sort of thing online. I think debate was around. It's not around anymore. Lea from Prism kind of build it. But that was the idea behind it. You know, when people are learning Android development, it's, it's, I think it's relatively easier like, you learn this language. And this is your IDE and go build something when they are learning native applications. It's, you know, learn swift or learn c++ and then go build something. But when you invite them to the web developers, it's like, you learn HTML, but it's not really a language, you learn CSS. It used to not be a language, you can now write follow ups on it. There are pre processes post processes, then, you know, it's a giant big mess. 

### Ahmad Awais  6:39  
And then comes JavaScript, and the frameworks and now matter frameworks, so it quickly becomes a cumbersome job to not only teach, but get students excited about what web is. So I initially kind of became a very big fan of the zero configuration sort of tooling. Because at the core of my heart, I'm actually a lot more into automation than even teaching or anything, I automate a lot of my workflows. So automating, you know, Webpack, or some sort of configuration, automating modern cutting edge stack, kind of introduced me to JAMstack, you know, that that is how I got into how I want to build cutting edge landing pages or cutting edge web, cutting edge progressive web apps, but I don't really want to care about upgrading, Webpack configuration and whatnot. But I really want those new features that Dan Abromov just kind of announcing in React. But I don't have time to go ahead and improve that on all my apps. So that is how I ended up the JAMstack.

### Bryan Robinson  7:50  
Nice and a lot your students I'm sure to like they don't want to have to deal with with any of that. I just want to be able to like here's the little bit of code that we're learning today. Hey, it works.

### Ahmad Awais  7:59  
Yeah. My I remember that in back in 2011, I will ask for you know, raise your hand if you want to become a web developer and like, there will be one or two people, everyone was into image processing, machine learning. And at least from my meetups in my conferences right now, when I asked this question now they're like, 90% plus audience are like, yeah, I want to React. I want NodeJS. So that excites the hell out of me. And I think stacks like JAMstack, have something to do with that, you know, making it easier for developers to kind of show off what they are made of you know? That's It

### Bryan Robinson  8:39  
Yeah, get get to writing features faster. 

### Ahmad Awais  8:42  
Yeah, it's, for example, right now. a pupil of mine kind of reached out to me. And he asked, Is there a no-code way to build JAMstack? I said no. And that kind of that kind of kind of like I started thinking about it. Okay, JAMstack is, I know JAMstack is new but JAMstack is the way V developers were using cutting edge front end or trying to express themselves. And for at least for now, it's not really accessible for folks who are not like, developers. 

### Ahmad Awais  9:15  
So so it has sort of kind of, we've sort of kind of pivoted to this stack, which is like developers friendly. In the moment, you'll kind of hear that, okay, here's a site is built on JAMstack, you kind of get to know that. Okay, he's definitely a developer. So it this is sort of a I think community spirit that is happening and where, like, not every other stack like this. I don't I'm not saying it's good or bad. I'm just saying that. This is it. How it is I perceived that front-end developers nowadays, for things that are either production friendly or not production friendly, are expressing themselves through JAMstack.

### Bryan Robinson  9:53  
Yeah, and the great thing is like if you notice a little bit about those web technologies, you can upload us a site and it's a JAMstack. So At that point, like, do you know a little bit of JavaScript? You're good to go?

### Ahmad Awais  10:03  
Yeah, definitely. If you had a static website, I see like a couple of really senior engineers at Google. I think, Paul, he was kind of converting his old static website demos to JAMstack. And you're like, Okay, this is fun. Now, I can do this with this. Okay, I just added this bottom board and our progressive, as well

### Bryan Robinson  10:26  
So kind of how are you using the JAMstack professionally nowadays, cuz obviously, you're with Cloudinary. You're making a whole bunch of demos, how are you actually piecing all that kind of work together using the jam stack? So a

### Ahmad Awais  10:38  
Good question. Personally, I kind of was for what gets me early on, like, I use markdown a lot. So I use my time for stuff that should not be. I write my production emails in markdown. So and that is a really interesting use case. And then John came along and he built MDX, and then writing your emails with MDX it was really awesome. But to kind of render MDX, you kind of need to attach yourself to some sort of stack, I ended up Gatsby. And then I was releasing this course last year. This is actually a very big, giant mess of over engineering. If you kind of look at look behind. It's you know, stack it's, it's PHP, LAMP stack, LAMP stack, and then go microservices, the Node JS API's, and then it's, the front end is in Gatsby so ...

### Bryan Robinson  11:37  
it's a little bit of everything. 

### Ahmad Awais  11:38  
Yeah, I spent a lot of time just building in elements that would be mine. For the sake of over engineer, I am, you know, we I would just, you know, write small markdown in just send it out through a bunch of Amazon, SaaS API's to just a couple thousand users who are subscribed to me. So so definitely When I was building the fernan I didn't really want to mess around with CMSs you know, I like them, I know their value, I do not want to be alerted one day okay, the site you're selling your course on has been hacked You know, there's a massive update that you need to take a look at. 

### Ahmad Awais  12:19  
I just wanted to kind of produce a static page and be done with it because there are good parts of JAMstack from production from security point of view. But because of those static ness of JAMstack, there are things that you need to rely on like. Like for example, services, you know, SaaS for example, you are use Stripe for payments, and then different sort of ideas kind of come into being if now you are kind of using a backend-less site, but now if you need a backend the old backends might not be that friendly, with the JAMstack, so you need something like, which is friendly for example, I ended up joining Cloudinary because they they do not know right now with their sort of Serverless media platform, you know, like the JAMstack. 

### Ahmad Awais  13:12  
The biggest issue that I had was coming from WordPress market to JAMstack is being managed by media so I used to have this awesome gallery that would kind of produce for example, when I upload an image in my blog in which is based on WordPress, it for just use Amazon cognitive services to fill out the alt text automatically. That's really helpful for me, you know, it is, is that accurate kind of throwing a ball so it was really good for accessibility. But with JAMstack, I didn't want to maintain my infrastructure for media. So I ended up looking at different services in that can actually help you land a job there as well. So I've ended up using JAMstack For my VSCode.pro site and for I have for, you know, developer DC demos like for example, developer advocates build a lot of proof of concept demos that they want to kind of showcase to different developers throughout the community when they present when they go to meetups of endearing workshops. I think JAMsstack is like, really good use case there. You end up building something that is performant out of the box, even if you don't want to have time to care about performance.

### Bryan Robinson  14:33  
And the nice thing about the JAMstack in terms of like demos and stuff is that you could actually build a site, house all those and write a whole bunch of stuff in markdown and then inside of markdown break out into HTML, if you needed to, to, like showcase another piece of a demo. Exactly.

### Ahmad Awais  14:47  
You know, people are doing all a bunch of things like I just saw it, it was this project running on GitHub, which would life transform mark down inside of you company you just in it is like like you can put it out there on your website and people would uttered markdown and it would render react base component. So that that's super awesome.

### Bryan Robinson  15:11  
Cool. So So what is your kind of one, you know, jam in the jam stack? What what's the technology that you're loving a lot right now or the philosophy or what is keeping you in the JAMstack community right now.

### Ahmad Awais  15:26  
I want to see, I came here because there's no denying about it. And then there's like, there are unintended consequences, which I'm said like, when you start building on JAMstack, you have a better chance of convincing your team your backend engineers that your API should be architected in a good way. 

### Ahmad Awais  15:48  
So before there, it was just you against them kind of debate. Now. It's a community of LAMP stack that understands that this is what they need. And so if he's sort of Like first class citizens a game for front end developers, even if they do not care about it, because they know stack and cares about that. 

### Ahmad Awais  16:09  
But for me, it's, it has always been about Markup. You know, if I have to pick one, Markup is, like, I love Markup, you know, even I have installed extensions customize them, like, for example, if I'm sending you code through my gmail account, I have built this theme called shares of purple, that my, you know, my code that I send you an email would be highlighted with my theme. So that kind of helps me do that. assembler graphics engine that will kind of when I click Send, it will render that component to HTML and send it to you via email. So So markup has been my go to thing I think, a lot of times, we developers, especially developer relation folks, a developer, advocates and evangelist, we are less productive because we automate everything Except for Markup. 

### Ahmad Awais  17:01  
Like, we would have all sorts of automated migrations going on and whatnot, and, you know, NPM modules and NodeJS, and whatnot. But when it comes to writing documentation, we're like, Okay, I have to open up that old SaaS software go into their UI in deal with that. So I have been able to be more characters and more newsletters, right, more documentations through sort of markdown markup automation that I cooked up, like, on top of, you know, my IDE is informal snippets and whatnot. And the same snippet library that I built for over like, over a decade or so, it's now useful in the context of jobs act, because like, I just converted to, you know, to any way through MDX or to other, you know, back home like for example, document building a documentation site used to be not so fun job, but now Vuepress. And I'm saying this as a React developer, you know, I am not a Vue developer. When I'm like building small demos, and my team needs a documentation site, I just go to Vuepress, they have an awesome presentation layer, and I really need to write as markdown. And it also kind of keeps my projects diverse. Like I'm using Node JS, js and VueJS in the same project. So Markdown, it is like, I think Markdown has gotten a lot of attention because of JAMstack. If you are in JAMstack community, in not paying a lot of attention to Markup, I think there's a lot that we can do there.

### Bryan Robinson  18:39  
Yeah. And the nice thing is it doesn't really care what your framework is what your other technologies are. You can just write the same thing and port it from technology to technology.

### Ahmad Awais  18:48  
Exactly. Even for them. But if you have this editor, or ideas that I write, and just markdown, I can write it anywhere from my tablet to my phone But I know it is going to be published really well in it has also kind of allowed me to kind of convince many other services that they need to support markdown. And if they don't, it's easier to kind of contrast from markdown to HTML and then send it to their API's, which they kind of need and James again helps me that doing that I don't have to bear that infrastructure.

### Bryan Robinson  19:23  
Alright, so what is your like actual musical jam? You're outside of technology? What are you listening to? What's your what's your musical tastes favorite artists or favorite song? Or what are you into right now? Ah,

### Ahmad Awais  19:36  
when I when I was hearing your forecast, I knew this is going to be the toughest. Because I hear all sorts of music journalists, I'm not native English, as you might have guessed already, so mostly, you know, songs in my language, but they would not resonate with the audience as much but for sake of tech That we do like for JAMstack I think I am a big fan of like every song that was written and the you know that feature of him The Greatest Showman I heard heard them so many times like I none of other you know songs could beat the rankings in there for iTunes for my personal setup and even you can find it in my you know teens blogs as well for example, if you take a look at my Create button blog project and you take a look at the change of section you will see I'm quoting a million dream song like it's at so perfectly mastered our you know, technical community like it's every night I lie in bed. The brightest colors fill my head, a million dreams are keeping me awake, you know, for the world. We are going to make it this is jam packed. So, you know, we're kind of reinventing how we used to do web. We moved from static to dynamic sites, and then started cashing the number Dynamic sites to static sites. And now we've ended up with this idea that that's not enough, we need to move back to static sites and let API and JavaScript handle everything. Well, we only write markup for. So a million dreams like of what is going to happen next, the kind of SaaS companies that are going to be built on top of jam stack that are going to make our jobs as the, you know, the experience of operational experience of our websites easier for end users. So it's amazing. So I've been listening to that a lot.

### Bryan Robinson  21:35  
Nice. Alright. So what's something you want promote something you want to get out to the JAMstack community raise the attention of, again,

### Ahmad Awais  21:44  
I think JAMstack is really awesome. But I kind of fear that for the sake of revenue generation, many companies are headed the same way. The way as we kind of came out of You know, for example, I don't know if this will catch on. I don't know if this is politically correct, but I want to dumb it down a little, you know, like, if we are reinventing how we did front end frameworks to meta frameworks, which are JAMstack frameworks, we do not need to create more complexity in there, even if there is a need further, I think the scenes not options, philosophy of purpose, books are really well, you know, make a decision for your audience and go with it, instead of introducing like 10 different ways of doing market with, you know, our framework, maybe have one recommended way of doing things. If that flexibility, nobody's going to hurt with that. 

### Ahmad Awais  22:44  
But having recommendations the scenes, and not making it complex, again, would really be helpful to you know, to the jam segment into a younger generation that is going to be that has already kind of fed up with, like, I, I gotten this question million times that how do you really keep up with the growth of humanity? So I don't know do not have a definite answer to that. I think we can keep up with the growth of our community. If we don't break down a little.

### Bryan Robinson  23:18  
Yeah, yeah, make it make it simpler, make it easier to get into and then there's the advanced topics later that people can can dive into once they've gotten in exactly

### Ahmad Awais  23:27  
like, if after learn react, and then the framework that was built on top of react, then the framework is not really useful. That framework I should be using their framework to augment what is complex to take the scenes for me that if concurrent mode is needed here at not, if if how I should be sending fetch request here in it is switching. My context has been switched from SSR to SSE. How the scene is like on mean, to know, what is the right way to face that API right now? I think if we are going to move into the direction of making things more complex, like, for example, there was this young apprentice of mine. He said that we used to live in a world of service hydrograph. I said, No, we used to live in several rendered apps server side is like new. So. So I, what I really want to happen as we make decisions for our users, so that things get easier for them. But help them kind of grow, you know, the makes their apps stays their apps. performance. Yes. Let's talk about best practices, not necessarily the thousands of ways you can do it. Exactly, I think, solutions instead of configurations as a good idea.

### Bryan Robinson  24:51  
Yeah, exactly. So that's the call to action for the episode right there is go out and make simple documentation for the jam stack. Awesome. Cool. Well, I appreciate you taking the time. Time to be on the show today and and keep doing amazing things that cloud Neri and your personal stuff and all the writing that you're doing. I really appreciate you getting the word out there about all this cool stuff. 

### Ahmad Awais  25:09  
Thanks a lot for having me.

### Bryan Robinson  25:13  
And as always, thank you to our listeners, thank you for listening. Thank you for viewing, liking, subscribing, all that stuff. It helps us keep pushing forward in this amazing JAMstack world. 

### Bryan Robinson  25:25  
Now it's time to talk about our sponsor a little bit. This week's sponsor is TakeShape. TakeShape is a content platform for the JAMstack. They've got a super user friendly CMS, a nice static site generator, and a dev friendly GraphQL interface. They're also working on their Mesh product, which helps helps you combine multiple API's into a single GraphQL API. So if you're interested in all that, go ahead and check them out at takeshape.io/thatsmyjamstack.

Transcribed by https://otter.ai


Intro/outtro music by [bensound.com](https://bensound.com)