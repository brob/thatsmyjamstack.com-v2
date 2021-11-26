---
title: Kathleen McMahon on writing docs, helping others learn and design systems
date: '2020-04-07'
tags:
  - episode
audioFile: https://pinecast.com/listen/ade07c4d-092c-4bb9-8a71-ceab6281d1a0.mp3
description: On today’s episode we have the amazing Kathleen McMahon. Kathleen is a developer and design systems guru.
socialImage: /images/kathleen-mcmahon.png
---

## Quick show notes

* Our Guest: [Kathleen McMahon](https://www.linkedin.com/in/resource11/)
* Her JAMstack Jams: [MDX](https://mdxjs.com/) | [Gatsby](https://gatsbyjs.com)

_Special thanks to Kathleen for doing the transcription_

## Transciption

### Bryan Robinson  0:03  
Welcome to another jam packed JAMstack adventure on That's My JAMstack — the podcast where we ask the fantastical question, what is your jam in the JAMstack? I'm your host, Bryan Robinson. And on today's episode, we had the amazing Kathleen McMahon. Kathleen is a developer and design systems guru and I had an amazing conversation with her. But before we dive into the interview, I do want to mention that our amazing sponsor TakeShape is back again this week. Stick around after the episode to hear more about their amazing content platform for the JAMstack, or head on over to  takeshape.io/thatsmyjamstack for more information. 

### Bryan Robinson  0:39  
All right, Kathleen. Well, thanks for joining us today on the podcast.

### Kathleen McMahon  0:41  
Thanks for having me.

### Bryan Robinson  0:42  
Cool. So let's, let's talk a little bit about you. Tell us a little bit about yourself. What do you do for work? What do you do for fun, that sort of thing.

### Kathleen McMahon  0:47  
Okay, so alright, let's break this down. For work, I am the Tech Lead for the O'Reilly Media Design System. So that's an internal open source project. We're trying to get you know, just a consistent look and feel for our components and our just our materials. I don't know if you've ever heard of design system, kind of a hot topic lately, but yes. 

### Bryan Robinson  1:10  
A little bit. 

### Kathleen McMahon  1:11  
So that's what I work on. For fun, in the fall mostly, I race cyclocross — very badly — on a single speed in the back of the pack, because everyone laps me twice, and I wear costume to make everyone that passes me laugh. And I also put tunes in my back pocket. So we have, you know, soundtrack, we have costumes. Everyone knows me because it's a person who wears, you know, like this... it looks like this lit up thing of like — spaghetti — with like a Spam costume backwards or an M&Ms costume backwards, you can be entertained!

### Bryan Robinson  1:51  
Have you ever caused any wrecks with that? Like have people like laughed so hard, they fall off? Okay. All right, good. Good.

### Bryan Robinson  1:56  
No, no, no, I've been doing this for a very long time. Like my, I'm much better at soccer, but I love to I love and I love soccer, but I love to bike. I'm just horrible at it. And it's fine. I just like to be at the back while everyone else is racing like going hard. And I'm back there just chilling out.

### Bryan Robinson  2:14  
Nice and you get out you get outside, you have some fun, and you have let other people have fun while they're competing, too.

### Bryan Robinson  2:19  
Yeah, exactly it's this huge camaraderie. And you know, who's coming, everyone announces they're coming and just you hold your line and someone else passes you and, you know, you making sure you're not holding back the leader. Everything's good.

### Bryan Robinson  2:34  
Well, very cool. So... so let's talk a little bit about the JAMstack. So what was your entry point into this idea, either JAMstack or static sites or wherever you kind of started with it?

### Kathleen McMahon  2:42  
Ah, that's a very good question. So, um, how I got into JAMstack was... so our design system has documentation. And our documentation site was built before MDX came out. So before JAMstack was really a thing. So it was around 2018 when MDX spec was really starting to get, you know, baked in a bit. And the way we were generating our documentation site is we had a separate repo. In that repo, we were using react-docgen, to generate our, our component. 

### Kathleen McMahon  3:24  
For example, our component pages. So we could use Markdown and it was awesome, but we had to use it in a very brittle way. We had to, we had a script to scan through our component files to you know, create, you know, data for props, tables, spit that into an object. We would have. We would use our Markdown files to write down like, you know, this is your primary button. This is the code for it. This is how you should use it. But we had to write our Markdown in a very specific order. We had to have like an h1 for our, our component name. We could have one paragraph — but only one paragraph — of intro paragraph. When we had two, you know, you could write it, but only the first one would show up from our script. And then we would have, you know, every single variant had to be written as an h2 with, you know, the variant, but not to be... only one paragraph, only one variant, and you couldn't put any h3s in there, you couldn't do anything else. And the minute you started, being freer with your Markdown, things would not render. And you couldn't even bring in rack rack, I'm sorry, you couldn't even bring in React components at all into the Markdown. So you were... you would have this one file for the information that was in your Markdown, and you'd have another file that would grab everything from your React components. Put it into a different object, and you would cobble them together in this very just... it was so hard to work with that... 

### Kathleen McMahon  5:05  
Even as someone who was used to the code base, it was hard. And for people that were contributing, they would flee. I just did a talk about this in early February for Gatsby days. I was talking about this whole journey and it was just I use a lot of penguin gifs. Penguins, you know, fleeing and running away and just like, you know, just hitting their head against the glacier because everything was brittle. So this is why once the MDX spec matured, I was like, "wow! We could do some more, so much more now. We can write what we want to write. What we write will show up on the page." And this is so much more exciting to use. And now we can have contributors that want to come in and say, "Oh, you know, I found a typo." Just you know, fix the typo, push up a commit.

### Bryan Robinson  5:42  
And don't worry about the actual structure of your markdown. You're good to go.

### Bryan Robinson  5:45  
Right. You're good. Yeah.

### Bryan Robinson  5:47  
So, so that's MDX and obviously, Are y'all using Gatsby then for the design system documentation?

### Bryan Robinson  5:54  
Yes. 

### Bryan Robinson  5:54  
Very nice. 

### Kathleen McMahon  5:55  
Yeah.

### Bryan Robinson  5:56  
Kind of walk through that a little bit for me.

### Bryan Robinson  5:59  
Um... Do you want to me to walk you through my learning curve? Or...?

### Bryan Robinson  6:04  
Well just kind of like I guess transitioning from the React docs to Gatsby.

### Bryan Robinson  6:09  
Okay, so that was a two weeks of pain that was so worth — it was so worth it. Um so what I did the transition was I... went to Gatsby. Of course my cat is meowing right now. That is Thor if you ever hear him meowing. That is Thor, the Mighty Thor. What we, what I did was... I went into the Gatsby site, I did their tutorials. I went to tutorials one through eight and um, you know, made myself a site. And after following that, tried to figure out what was missing because that — you know, that the tu- tutorial, you know, walks you through, this is how you get started, you know, doing a blog post and all these other things. And it started with with some Markdown. But it was missing some stuff. So you had to like write down what what everything, you know, everything that you missed. And I would get stuck on certain things like either creating pages, or the GraphQL query. Because you had that, you had to figure out like where, where you had to modify either the Gatsby node page, or the Gatsby browser page, or the Gatsby config. And you had to do it in a certain way. So, once I found out the right combination of understanding that I had to adjust my config, so it would support like post — because we just use postCSS in our projects. How to use themes because I watched a Twitch livestream stream with Jason Lengstorf and Chris Biscardi, and they were talking about the experimental themes. So I followed, you know, what they were doing and made a theme within a theme while it was still experimental phase. Grabbed that into our doc site, tried to make things work, and the hardest part was trying to — it wasn't where you would make your, you know, your source pages and, you know, just generate your files — it was talking to the separate directory where our components were because... We wanted our components, we wanted a better separation of concerns of documentation for just a general doc for general docs, one location. And not in a separate repo anymore. In, it's just this separate directory in this one repo. But our, our components are hosted in a source repo. And so we have it for better separation concerns we have, you know, the button component is in a folder with all you know, all its files. And so you can always keep everything you know, all you know test files and CSS files and you know, Storybook file, and the Markdown file all co-located in, you know, one location. So make, you know, make maintenance easier. Now, with that the hardest part was trying to figure out, "okay, how does Gatsby talk to this source folder?" And once you found the right combination of, you have to do a query this way, and you have to point it to the right you know you have to use these plugins like the Gatsby... Gatsby file, plugin and you add/use, you know, this other plugin which I could pull up the code base to to remind you of all the words right now, but I can't because MDX right now it's on my brain, and I'm very excited about it. But! I'm figuring out and looking at it right now. Ahh. There we go. So with with the config, you know, you have things like the page creator, the file system, you had to learn, you know, how to resolve your paths. And if you were, if you were new to you know how to use Node at all, it's a learning curve for anyone. Or if you haven't done Node, for a while, you're like, Oh, what is this like, __dirname? What does that mean? You know, how does this do things? So it was pretty cool. Once you figured it out. You're like, "Okay, this is what works", then comment the heck out of it. So everyone else will know how to use this. So once you got everything set up for like, how to handle postCSS, how to compile ES6 packages, because that's what we're using in here. How to autolink headers because you want to make sure that your your headings are accessible and you can link right to them and share those links. And how can you point to the data file, because we're still using that data file to generate props tables. And but also point to the source folder. So we can grab any MDX files from the source folder. Once you figured that out, it was, everything was happy. And then all you had to do was in the Node file, do the... do the gatsby-node file is make a query to find the childMdx body, which was awesome. And then you would just create the page and point it to the template you were using. So it was like "this is magical!" All you have to do this thing on everyone else just have to do like npm run, you know, npm run docs. Like what? Yeah, everyone else is gonna be not like, you have to do this npm link, npm link to this and da-da-da-da. You're like, "no, no, we just want to do one thing. One, one command." So we got down to that, and it was just very exciting. And you learned a lot about Gatsby because like the stuff where you're doing it like a...

### Bryan Robinson  11:02  
Like either a static query or page query because there's two different ways you can do, depending on if you're in a layout file or other files. We had to do this particular query in gatsby-node because we're pointing to a separate directory, because there's a lot of stuff that gets done under the hood. And their docs are getting better. The team there is great. And like they've been incrementally making everything so much better. That back, you know, back in 2000, there was almost a year ago that we convert our docs. Back then it was you had to, you know, if there was anything missing in the docs you had, you're kind of on your own. But now it's a lot better of like everything's pointing where it needs to be pointing now. And which is interesting, because I'm going to divert into a different direction. Gatsby's had this 100... 100 Days of Gatsby and it's almost finished. It started January 1, no, mid like a Wednesday at the very beginning of January, because I signed up for it. So I'm like, I'm going to go through this again. See what I missed. See what I learned. And I went through it again, I've been writing down notes of everything that's missing in the docs, because I'm gonna make PRs. Like, you know what, these are the things that weren't clear to me. And it will help, you know, contribute back, say, "hey, this is what I learned. This is what I missed." And, you know, there's ways that we can add that back to the docs.

### Bryan Robinson  12:14  
That's kind of awesome. I feel I feel like one of the big things in the JAMstack right now is just this open source community and how like, everyone wants to make it better. And it's not like a complaining mechanism. It's like, "how can I go in and make the next person have an easier time?" Is that, is that kind of been your experience as well?

### Bryan Robinson  12:30  
Oh, totally. Because it's your your, everyone's trying to learn this at the same time. And these products that are coming out are amazing, and they are doing a lot of stuff under the hood for you. But there's also things that are missing. It's more of a — and it's not intentional — but it's more of an assumption of you already know these things already. You already know that... if someone says Yarn and you're using NPM, you use NPM. And you understand the dangers. of using Yarn and NPM at the same time, but if you've never used that, you know, you have to go back to approaching it or like, what if I've never seen this, but what if I've never seen you before? I don't know, I'm just gonna follow the instructions verbatim. Why is this breaking? I don't know. Or, you know, just things were even, like, there's gonna be a lot of people coming from, you know, self taught, you know, or any other, you know... It could be a bootcamp, or where you get thrown in, you know, four hours of HTML and some other some other questionable practices. Um, but yeah, um, but it's important that the community give back and start talking to each other. And that's one of the reasons why I love Gatsby so much is because the community over there is amazing. And the team over there, they walk their talk. They are always helpful in finding ways to make sure that, you know, if something's missing, they either encourage contributions. They're willing to pair with you, and help fill in those gaps. So yeah, I love the community. Just for that reason.

### Bryan Robinson  14:01  
I'm kind of curious. So... so we're talking about, like, the docs in general. And I feel like — and maybe you've got an opinion on this — like, we were at a point in, you know, quote unquote, the JAMstack, right, where it was a very, very, like heavy developer-centric ideology for a while. But it's starting to get this massive adoption. So we see a lot more beginners coming in. And it's very curious to see how we have to adapt to that. Because you're right, like, I see some docs who say, you know, run NPM this or you or Yarn this. But then I see some that just spit out one or the other. And I'm wondering, like, how we can facilitate a bigger or a quicker adoption of like, a beginner-first mentality in a very developer-centric area.

### Bryan Robinson  14:43  
Ah, yeah.

### Bryan Robinson  14:46  
That's almost like the question of all time at this point. Um, yeah. You know, it's one thing is making those... making the time to write the docs. But other is — a lot of part is — the feedback. Like, a lot of like, personally, I see a lot of people can complain about something, but they won't offer a solution like, "hey, I, you know, I didn't understand this", or, "hey, I didn't understand this. I wish I, you know, rather than I wish it told me this, because once I figured this out, you know, it really helped me." Some people are solving it by when they learn they blog about it. So that's great. But then you have to like search for the blogs. So it's like, how do you combine you know, all that knowledge that is on the interwebs, everywhere, and but also find a way to get it back into the docs? Because when you are on a, you know, smaller, smaller startup team or even open source, anything you have to rely on your contributors to, you know, get your work done. 

### Bryan Robinson  15:46  
Yeah. So that makes a lot of sense to me. And I wonder if more places should actually be linking to all those great blog posts. Of course, there's still that findability issue. Like if you're a maintainer, you're not just actively searching for blog posts about your stuff, although maybe you are. But like, I'd be very interested to see it like a push that's like if you write a blog post, keep it on your site, but like, let's link to it. Like let's build a, a repository for each framework in their documentation of like, articles on X, Y, and Z.

### Bryan Robinson  16:14  
That's very interesting. For example, accessibility project does that right now. Like accessibility project is really great about I mean, they have articles on there, but Iit will also link to different like, individuals tend to blog a lot. I do know that Gatsby has their own blog, so that you know, isn't just gets the employees that are blogging. There are individual contributors that are blogging to so maybe that's the way to do it. But how do you get that out there? How do you get that... that knowledge that hey, you know, because guess these philosophies, you all are welcome here. Everyone is welcome. Right. And maybe I haven't been reading closely enough to like read the blog where it says, "hey, you know, you can blog for Gatsby because of this. I mean, I just need to read more closely to say, wasn't like written there? Or is it more of a, like presumption? Or something where you can like, share that information out to people like, "hey, you learn something new? Why don't you post it on, you know, the blog" or like a lot of people are posting on Dev.to. 

### Bryan Robinson  17:16  
True. Yeah. 

### Kathleen McMahon  17:17  
And they will, they will do, you know, they will do tags to stuff, you know, then you can start searching by tag.

### Bryan Robinson  17:24  
I wonder if you could, at that point, like build a React app into Gatsby and into their site or into into what you know, what, whatever open source thing is it to like do a search for Dev.to tags. Like I'm an Eleventy buff, so it's like, if they just pulled in like an Eleventy tag, then I don't know that'd be really interesting.

### Kathleen McMahon  17:43  
It's almost like like the arcgis like the COVID map. The legit one, not the one that's like that asks you to download stuff — shady stuff — to your computer. Something like that, because there's a lot of, you know, there's a lot of crowdsourcing stuff out there just to share the information. So yeah. That would definitely be a good thing to do.

### Bryan Robinson  18:01  
Yeah. But viral spread of helpful... 

### Kathleen McMahon  18:05  
Not that! Not, no... not the vir-- yeah. Yeah. No need to download anything.

### Bryan Robinson  18:11  
Exactly.

### Bryan Robinson  18:13  
Cool. So uh, so I assume so professionally, you're using the JAMstack in this kind of Gatsby docs way. Are you anything personally? Or is it all just kind of that that professional aspect.

### Kathleen McMahon  18:23  
For now it's professional, but I'm, I'm — in my copious amount of free time, you know — still working through those 100 Days of Gatsby because, you know, you're learning how to approach using JAMstack in different ways. So once I figure that out, I have two sites that I could potentially convert because one of them is a WordPress site. And so that's the site I've had, you know, for my, my freelance design business, you know, that I've had for a long time. It's a... 2011 WordPress theme, and you know, I literally have like three blog posts, but you know. mostly it's a portfolio site. So I could migrate that over. And then you know, my other dev site, I could potentially make that JAMstack too. I'm just trying to figure out what I want to do. Because I think the dev site is like, combine JAMstack, or like, even my projects, like, do one project three times, like, this is how you can do in vanillaJS. This is how you can do it in ReactJS. This is how you can do it in Vue. So it's, there's different ways you can combine things. But yeah, I have, I think I want to try converting my WordPress site over.

### Bryan Robinson  19:33  
I'll say from from my experience, it was actually pretty easy. And this was even like, I converted mine over about two and a half years ago. And it was not bad and they're better tools now. So like, that's a great way of thinking.

### Kathleen McMahon  19:45  
Yeah, it's like I have a site just convert it over. hardest part is like figuring out the whole portfolio part without redesigning. It's like you wouldn't, "you will not redesign your site. You will just port it over."

### Bryan Robinson  19:59  
As a fellow designer, there's almost no way that happens, you know, it feels good to do it. I don't know,

### Kathleen McMahon  20:05  
It does but maybe I should scaffold first at least. Scaffold first and see how much you can do with Mark-- with MDX though. Because MDX... the way that one of the things I've been really loving about MDX is like how the, the, the team that is working on the spec, what they're doing with it. I mean, the things that you can do, where you can take MDX syntax, and even Mark like Markdown syntax, and you can like swap in certain things with React components. They call it shortcodes now, but you know, if you can swap shortcodes in is magical. And the way that you can — I saw one of the Gatsby employees, Kyle, not, not Kyle Matthews. I think Kyle Gill was tweeting about this last week, and I bookmarked it or like a week and a half ago, and he was showing how he was learning that you could import MDX files, like a Markdown file into a Markdown file.

### Bryan Robinson  21:08  
Right? Yeah.

### Kathleen McMahon  21:09  
Yeah! And it wasn't just like importing a React component, you were importing an MDX file into an MDX file. It's just like, "Whoa!" So you couldn't... you don't have to have necessarily like, you know, this very, very long scroll forever page. You could be, you know, putting them up into smaller chunks. And people can, you know, won't be overwhelmed when, again, making new docs, someone can start editing something, and then they just pop in that file.

### Bryan Robinson  21:35  
And they're done. They're good to go. Yeah,

### Kathleen McMahon  21:37  
Yeah. Yeah. It's amazing!

### Bryan Robinson  21:38  
I also have a friend of mine who has redesigned his personal site like 15 times in the past three years. And his his take this time is he's actually taking the default Gatsby theme, the thing that like comes baked in, and he just started with that cuz he was like, I have to finally get it live. Like I've redone this 15 times I have to make it live. And so he's just incrementally changing that design, changing that like... structure, and he's also that kind of designer first and then has become an engineer since then. So like, we like to do custom stuff and then we never launch it. So...

### Bryan Robinson  22:11  
Incremental builds are nice.

### Kathleen McMahon  22:13  
Yes, they are. You just push it up and it's like, oh, well, it's already up there. Sweet!

### Bryan Robinson  22:18  
I'm Done! Good to go. Cool. So it'd be fair to say that the Gatsby is your jam the JAMstack, we want to go all the way down to like MDX as your jam in the JAMstack? Like what would you consider your main top thing?

### Kathleen McMahon  22:28  
Okay, my main top thing first is MDX and then, and then Gatsby. Okay. Just because MDX I've been like experimented with code blocks and learning... learning from like watching other people do it and like wow, like how much I can like, make a code block better. And I want... I want to — I'm in the middle of trying to make a code block that is... You have... Formidable has a package react-live and like bringing that into code blocks is awesome. And they also have prism-react-renderer, I believe, is another one so you get the syntax highlighting in there. But um I'm working on making a component that will, when you have the block, you could have it editable, but maybe you could — I'm trying to find a way that when you, you know, click on a button, you could see what the rendered code is versus like, just, you know... using ReactDOMServer to show the rendered code. Like, this is the semantic structure that gets rendered under the hood. So you can see what classes get, you know, because that's — a lot of times people want to, they want to either dig into the code base, but you got to click here. It's like, "if I write this, what code will I get under the hood?" But also have that and also have the code block, you know, like, have display of the component, but below it has — and you'll see this often — if you have the code, you know, the code there, but sometimes that code block will get really long. So have that collapsible. But also then people forget, have it keyboard focusable, so you can tab through everything. And if there's a focus trap, make sure you can get out of the focus trap and move forward. So I'm looking to make an accessible code block thing. And once I get it, I will put it somewhere up on NPM and people can use it.

### Bryan Robinson  23:59  
So that is very cool and, yeah accessibility on that sort of thing. People... people don't realize it's not always easy — especially when you want to do like the really nice, usable, fun interface. To make accessible you got to put the work in or... have somebody do an open source package and download it. Which is always a nice thing

### Kathleen McMahon  24:18  
And make it feasible so they can like, override themes but also you know, maybe if there's a way we can when they do the theme go "hey, those color combinations may not pass... if you do it that way." So...

### Kathleen McMahon  24:31  
but start with an accessible you know...

### Bryan Robinson  24:33  
Exactly. Accessible start and then then progressively enhance from there.

### Kathleen McMahon  24:37  
Yes. There's a way like we can add tests for like what has, you know, accessible violations but I think there might be a way that you could look, maybe have some sort of contrast... Because there are these other tools we could have contrast checkers where you can do eyedropper things. Maybe there's a way to do like a... 'cause I know BlocksUI is working on that right now. BlocksUI is working on like when you put text over, you know, something, they'll immediately give you alert like, "hey, this is not following things." Yeah, but this is a component This isn't like a whole like UI, you know, like WYSIWYG system here so it's a little different, but maybe if they do the tests.. if they do the test, you know, that could be a way.

### Bryan Robinson  25:12  
Yes. Cool so so what's your actual musical jam right now? What's... what's in your earphones? What are you listening to regularly?

### Kathleen McMahon  25:19  
So um, when I... when I am well either coding or just in dance mode, I have a thing for Soca and Dancehall. And so I always excited when,  I'm always excited on Carnival season comes around. I got first got turned on to it in the 90s with a band called Krosfyah. Krosfyah, which it's k-r-o-s-f-y-a-h. And their song was Pump Me Up and it was just like... once I heard that I was hooked! And then I discovered Lady Saw and Buju Banton and I you know, some other ones that were really great,  and like one one that I really liked... but then he wasn't really... nice to the community so I can't like him anymore. But ever since then I've been always following, you know, these different you know, artists and lately it's Machel Montano is my favorite. Bunjai Garlin and Shal Marsh Marshall. So say Shal Marshall right now this is one — that's definitely Boston, Boston accent there —  I apologize. Shal Marshall. And one of his songs is Splinters and it is great. And Miachel Montano's — one of them is Brace Up — is one of my favorites lately. The other one is with Calypso Rose. Leave Me Alone. The other one he does and other ones with these. I have a couple of ones that are like the ones called Possessed. With Kerwin Dubois and Machel Montano. He'd likes to do compilations with people and it's just these like, happy and some of them were just like, "I'm focusing, leave me alone" but um, you know, "don't... don't mess with me because I'm you know, I'm partying" and yeah, so that's that's me. It's just happy music. Happy music.

### Kathleen McMahon  27:15  
Yeah.

### Bryan Robinson  27:15  
I like it cool. So is there anything that you'd like to promote and get out to the JAMstack community as a whol? Anything you're working on?

### Kathleen McMahon  27:20  
Um... Well I'm trying to get that um, that code block component out there. I would have, like, promoted the conferences but I'm... they're all being postponed right now. It's like, I'm waiting to hear from a couple of them, because they haven't officially postponed but I think they will. But the other two, like one is Self Conference is postponing for a year. And there you know, I would definitely like, if you can have a chance to get in Detroit, that's one to watch. And the UIArch Conf, which is supposed to be in April, and I was gonna do the Web Accessibility Conference there. That is postponed for now, to November of this year. The other two, three, you know, you haven't heard the postponement date, but I'm assuming. Because otherwise, I wouldn't be able to get back into the country. Which fine, but at the same time, not... 

### Bryan Robinson  28:12  
Fine, but not fine. 

### Kathleen McMahon  28:14  
But not fine.

### Bryan Robinson  28:17  
Cool. Well, I appreciate you taking the time to talk with us today and keep doing some amazing stuff. I'm really looking forward to that accessible code block, too.

### Kathleen McMahon  28:24  
Wonder... wonderful. And it's, it's an honor to be asked to speak on the topic and to talk about the JAMstack. So...

### Bryan Robinson  28:34  
I want to thank Kathleen again, and thank all the listeners around the world for making the JAMstack community, one of the best developer communities on the web. Be sure to start heart favorite or whatever in your podcast app of choice, and spread the word around for those that haven't yet heard. With that it's sponsor time. And I wanted to talk about TakeShape. TakeShape is a content platform directly designed for the JAMstack. They have a super simple GraphQL API, a static site generator, and a CMS all ready for your use. They're also working on their mesh product, which allows you to mix and match multiple data sources into one easy-to-use API. Definitely worth checking into. Head on over to takeshape.io/thatsmyjamstack for more information. With that, I'll bid you adieu until next week, and implore you to keep making amazing things on the web, and to keep things jammy

Transcribed by https://otter.ai


Intro/outtro music by [bensound.com](https://bensound.com)