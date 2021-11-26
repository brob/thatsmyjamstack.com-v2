---
title: Jenn Creighton on Gatsby, SPAs, conference speaking and more
date: '2020-02-25'
tags:
  - episode
audioFile: https://pinecast.com/listen/31d9e0cf-42ff-4364-af85-11654c817dd3.mp3
description: On today's episode we're chatting with Jenn Creighton, Jenn is a conference speaker and the organizer of useReact NYC. She's also the front end architect for The Wing.
socialImage: /images/jenn-creighton.png
---

## Quick show notes

* Our Guest: [Jenn Creighton](https://twitter.com/gurlcode)
* What she'd like for you to see: [Her Twitter feed](https://twitter.com/gurlcode) | [React Day NYC](https://reactnewyork.com/) | Thinkster React Component Course (coming soon) | [useReactNYC](https://usereact.nyc/)
* Her JAMstack Jams: [Gatsby](https://www.gatsbyjs.org/) | [Netlify](https://netlify.com)
* Her musical Jam: [Halsey's You Should Be Sad](https://open.spotify.com/album/68enXe5XcJdciSDAZr0Alr?highlight=spotify:track:7lidXGPXPYLNThITAOTlkK)

## Our sponsor this week: [TakeShape](https://takeshape.io/thatsmyjamstack)


## Transcript 

### Bryan Robinson  0:04  
Welcome, welcome everyone to a new episode of that's my JAMstack the podcast where we explore the deepest parts of the developer psyche by asking, what's your jam in the JAMstack. On today's episode we're chatting with Jenn Creighton, Jenn is a conference speaker and the organizer of useReact NYC. She's also the front end architect for The Wing. 

### Bryan Robinson  0:23  
Also, this week, we have our amazing sponsor TakeShape. Find out more about their JAMstack content platforms stick around after the episode or head over to takeshape.io/thatsmyjamstack. 

### Bryan Robinson  0:36  
All right. Well, thanks for joining us on the podcast today, Jenn.

### Jenn Creighton  0:38  
Thank you for having me.

### Bryan Robinson  0:40  
Thanks. So tell us a little bit about yourself. What do you do for work? What do you do for fun, that sort of thing?

### Jenn Creighton  0:45  
Sure. So I am a front end architect at a company called The Wing. We work on building out co working spaces that are really geared towards women. So we're thinking a lot about what women need in those spaces, and also there's a lot of networking events and things like that in our spaces. 

### Jenn Creighton  1:03  
So I'm the front end architect there, I lead all of front end. I help ensure our system stays healthy. I work on our technical decisions there. You can already tell I'm a lot of fun because I really love tech. And honestly, like what I do for fun, I'm usually at a conference. I'm usually speaking at a conference, I really, really enjoy giving technical talks. So you will find that I'm often at a conference, I travel a lot to do that. I did 14 conferences last year, which I won't be repeating but it was a lot of fun. I had a good time. And if I'm genuinely not doing any tech related things, I am probably with my cats or my puppy or I am sewing. I really enjoy sewing.

### Bryan Robinson  1:53  
So I saw and I think this is on like your Noti.st profile, is your dog's name really Sailor Moon because that's amazing

### Jenn Creighton  2:00  
Her name IS Sailor Moon. She is named after the you know, Sailor Guardian Sailor Moon and she's a little blonde dachsund and, and I grew up watching Sailor Moon. I loved that show. I would watch it so much. And when I was thinking of names for her, I really want something kind of fun. So I picked out that it's really great too, because when you tell people her name, you can tell if they watch the show or not. Because they're either That is amazing. Or they're Wow, that's a lot of a name.

### Bryan Robinson  2:35  
I'll be honest, do you just call her Sailor Moon all the time.

### Jenn Creighton  2:39  
We usually call her sailor or if she's being a bit sassy Miss moon.

### Bryan Robinson  2:43  
That works that work. And any fun sewing projects that you're working on.

### Jenn Creighton  2:48  
I actually haven't sold in a long time because of the mentioned 14 conferences. So actually did not so I think anything last year. No, that's not true. Wait, I took a sewing class in November as my like, you're gonna do it and I sewed a pair of pants for the first time I took a sewing class to like force myself into a non tech hobby, which is a good thing to do once in a while.

### Bryan Robinson  3:17  
Yeah, especially 14 conferences in 12 months. How many how many months were filled with more than two conferences? Did you did you group together and how exhausting was that?

### Jenn Creighton  3:28  
Some months were grouped together. Um, let's see, I think I know at least I did, in September, I did two. And I traveled really far for them. So I did JS Conf Korea, and Components Comf in Australia together. And I think I had some some weeks and breaks there but a couple of them were like, in the same month and so I would knock out like two or three in the same month and then have like a little bit of a break which usually Wasn't a break. Like between Components Conf and React Conf. I actually had to write my React Conf talk.

### Bryan Robinson  4:09  
The glamour of being a conference speaker!

### Jenn Creighton  4:11  
It's so not glamorous, it's so exhausting. And yet, we can like people who enjoy it can't stop doing it. I don't know if you remember this, but there was a survey that came out many many years ago that said that people are more afraid of public speaking than they are of death. And so conference speaking is actually like a near death experience. As you get like this ridiculous rush, you're terrified you feel great afterwards. You're like, I'll just do it again.

### Bryan Robinson  4:44  
I just watched the the Imagineering story the the story of all like the Disney theme park building and all that. And it talks about all the all the rides and how the goal is to make people feel like they're about to die without getting them actually all the way to death. So it's the same basic principle  just with public speaking.

### Jenn Creighton  5:01  
I think that happens with code too, Like, I just spent two days solving this issue of my tests failing on circle ci when they weren't failing locally. And I wanted to die. I want to lay down and die. I was like, take me, Lord, now and then I figured it out. I felt great.

### Bryan Robinson  5:20  
So this is a JAMstack podcast, let's talk about the JAMstack a little bit. What's been kind of your introduction into that world or into static sites or wherever you kind of came to it from?

### Jenn Creighton  5:30  
I think with static sites, the first time I remember seeing like a static site generator was Jekyll. And this was back at a startup many, many years ago. I remember we used it for I believe our marketing site, which was like pretty typical. And I really didn't know that there would be static site generators. It was kind of surprising to me. But I also didn't really play with it because I was just trying to learn JavaScript. I was like, this is where I'm like, trying to figure things out. The actual JAMstack, you know, JavaScript API's and markup, my introduction to that has come a lot later than I think a lot of people I actually just started, I'd say late last year getting interested in the concept and starting to learn about it. We use it at work for our marketing website. And then personally, we've used it for a meetup that I run here in New York called useReactNYC. 

### Bryan Robinson  6:28  
What's sort of technology stack are you messing with right now?

### Jenn Creighton  6:32  
So both of them are using Gatsby, but the marketing site is Gatsby plus Contentful. So that of course, our marketing people can make their own changes to the site, and we don't have to be, you know, nudged. "Hey Can you do a thing?"

### Bryan Robinson  6:48  
"Please deploy, please, deploy!"

### Jenn Creighton  6:49  
"Please make this change." So it gives them the freedom to do that without having to wait on us to make changes. It gives us the freedom not to think about the marketing site, very much. Then for useReactNYC, we wanted to create a website for the meetup so that people could learn more about us what we're about, and also join our community, both by attending the meetups, but also by joining our slack community, and also by helping us to build the site. And since we're a React meetup, it made a lot of sense that this would be a static site, and that we would make it with Gatsby.

### Bryan Robinson  7:27  
Very nice. And any sort of ... Is there any sort of like API integration? Are you pulling in like meetup information from a third party? Or is it all just manual entry into into Gatsby?

### Jenn Creighton  7:37  
Right now let's just manual entry. We definitely want to expand it at some point. We're just not sure that we have the time right now between the five organizers that there are, we actually took on another organizer this year to make five of us Yuraima joined us and we have just all been really stretched thin. So even with the fifth organizer, we're still like "huuu", but we're hopefully gonna start recording the meetup soon and hopefully we'll also host them there so that people can view the content.

### Bryan Robinson  8:08  
Pretty cool. I definitely understand that. That meetup organizer life where you're like, hey, PRs are accepted, and then no one submits a PR. 

### Jenn Creighton  8:16  
Yeah, we did have a particular member of the community, Nick, who came in and helped us really do a lot of work on the site, when we were all stretched very thin. And my very good friend Melissa, helped us actually by creating the design of the site, and it's really beautiful. She did a wonderful job. She also designed our stickers. So really, like all community events, it is really like we wouldn't have done it without the community like helping us out. That's was important. 

### Bryan Robinson  8:45  
Cool. So uh, are you You said that the marketing site at The Wing is currently built on Gatsby. What other sorts of projects do you work on at The Wing other than obviously getting the word out about these kind of co-working spaces?

### Jenn Creighton  8:58  
So what what I personally work on is that I work on our single page application. So Gatsby is for our marketing site. But we do have a single page application that is for our members. That's our members portal as well as an admin site for us to handle things like applications or members, information, adjusting settings for them, so on and so forth. But our members portal is where everything really happens for them, they're allowed to find other people in the community and chat with them. There are job postings on the site as well. And there are a lot of events at The Wing that are very specific to what our members want to hear and see. And so they can RSVP for those as well on the site, as well as just the general thing of like adjusting settings or registering guests. So I work on all of that and as we try to build out new features that are going to help our members connect more and forum like real in life connections are putting a lot of those in this single page application.

### Bryan Robinson  10:01  
Very cool. And so just like -- I have a degree in philosophy, so I have to sometimes dive into philosophy on the podcast -- So where would you kind of consider kind of breakpoint, because you said, you know, I'm using the JAMstack for the marketing site. And for the meetup site, I've always kind of thought of any SPA as having JAMstack asked qualities. Where do you kind of draw that line? Like, what what's JAMstack versus non JAMstack for you.

### Jenn Creighton  10:28  
So the reason that I qualified as a single page application instead of anything to do with the JAMstack, is because it's built using create react app. And so it actually has a server. So nothing's actually served by CDN, which I think is an important component of JAMstack sites, you know, they have to be served statically through CDN or some means of static. So they're not pre rendered. They're not static. It's it's an actual serving of just an index.html, and then we fill in the JavaScript for everything.

### Bryan Robinson  10:59  
I gotcha. Cool. That's the the kind of fun thing about running this podcast is that I hear lots of opinions. And they literally run the full gamut of like, everything's the JAMstack to like, even smaller like subsets. And it's just yeah, it's awesome.

### Jenn Creighton  11:15  
Yeah, I mean, and when you hear like that it's JavaScript API's and markup, you're like, well, how is this not every single page application? And that totally makes sense. Definitely. I think the JAMstack has some really specific qualities to it, though, that are very different from something built with like create react app that actually does have a server that you're not actually serving at statically. And you're relying on the JavaScript to do all the heavy lifting of creating all the page. It's not pre rendered. You know, we certainly don't have the ability for... One of the things I really like about the JAMstack is that it closes that gap for the user, right like they get the stuff immediately. And also how your deploys go. You know, you can roll them back and there get based. But you don't have that with the single page application. And sometimes I was wondering with that I was like, does this need to be anyway, I was like, but I'm not rewriting the whole thing. And that decision was made before I came into the company. And I was like, You know what, it's, it's fine.

### Bryan Robinson  12:22  
And still React. So you still get to work on react.

### Jenn Creighton  12:25  
Yeah, and I love I love react. So that like, is a joy for me.

### Bryan Robinson  12:29  
And so is there anything that you've that you've been learning based on your work in Gatsby that you're bringing back into the the server side and the Create React App side of all that 

### Jenn Creighton  12:41  
Not specifically? I think Gatsby comes with a lot of wonderful things that are not even technically part of JAMstack, right. Like I would say I would say that there is a great amount of focus on accessibility and Gatsby I really, really appreciate that. And that is something we're really focused on at work. So like many startups, so our product team is really new at the way. And like many startups, the first version of our product was built externally by a third party. And so we're now as a product team, picking it up and sort of changing the architecture and making it more of a long term scalable application. And that includes taking a look at our accessibility and realizing that we're really far off the mark right now. And we need to do something about that. I really appreciate that Gatsby, in addition to using JAMstack is actually really like moving forward with accessibility and giving you a lot of information about that along the way.

### Bryan Robinson  13:46  
Yeah. And the great thing for me is that there's so many people jumping on Gatsby right now, just in terms of like, it is like probably one of the hotness is in the JAMstack right now. And to have that their focus so that people who might not have learned about accessibility in the are getting those tips and tricks just by having that in their code base by default. I think that's amazing.

### Jenn Creighton  14:05  
Yeah, exactly. And that's one of the things I really enjoy about that project. And that's one of the things like, as you're working on that, you get to learn that you can bring that to all your future projects. It's not specific to the JAMstack. It is all about the web.

### Bryan Robinson  14:19  
Best platform there is... the web. 

### Jenn Creighton  14:21  
Yes. 

### Bryan Robinson  14:22  
Cool. So So would it be fair to say that in the JAMstack, the Gatsby is your jam? Are there any other technologies that you're really interested in right now?

### Jenn Creighton  14:30  
I think Gatsby is the main one. Obviously, we're really enjoying also Netlify and being able to like push things out really easy. So we use Netlify also for our preview links at work which is really great. So just definitely enjoying that. But yeah, I think definitely Gatsby considering that I've used it at work and now in this useReactNYC project.

### Bryan Robinson  14:54  
Nice and so work when when people are saving into contentful, are y'all deploying Preview deploys to send them links at same time. So like they can see it live on the site before they publish it.

### Jenn Creighton  15:06  
I think so. Yeah. I forget because I haven't worked with it in a hot second and if anyone's changed behind my back, but yeah.

### Bryan Robinson  15:14  
You never know.

### Jenn Creighton  15:15  
Honestly, with a startup you never know.

### Bryan Robinson  15:18  
It's so easy to deploy, right?

### Jenn Creighton  15:20  
Things happen in a startup that I'm like, wait a minute, you're doing what now? Can we just Can we just grab five really quickly and make sure this is a good idea? All the time.

### Bryan Robinson  15:30  
Okay, gotta move fast, right?

### Jenn Creighton  15:32  
Yes. Move fast break. Things. Break. ... Both of us are like "arrrrgh no!"

### Bryan Robinson  15:39  
Yeah. Don't Don't tell QA that you broke it. It's fine. 

### Jenn Creighton  15:44  
Yeah. 

### Bryan Robinson  15:46  
Cool. So let's, let's talk about actual musical jams. Then what are you listening to right now? It's in your headphones. What's going on there?

### Jenn Creighton  15:53  
So my number one thing right now is Halsey. Which is strange. I didn't listen to her before, but I actually so I'm a big fan of Saturday Night Live. I love Saturday Night Live. And she hosted not that long ago. And she was the host and the musical guests. And I wasn't familiar really with her music, but she had this song on there, You Should Be Sad. And I just fell in love with it. So I've actually been playing that on repeat for like a while. I love her vocals on it. It like just makes me feel really good.

### Bryan Robinson  16:28  
Yeah, so specifically that song but then kind of the whole, her whole artistry.

### Jenn Creighton  16:34  
I let I let that song play and then I'll listen to like a lot of the other ones on the album and I'm finding that I really enjoy her songs, which is really great.

### Jenn Creighton  16:44  
And just depends on what mood I'm in.

### Bryan Robinson  16:47  
What other moods strike you for, for other musical tastes.

### Jenn Creighton  16:51  
And sometimes we like to go old school like country. Little little like kind of plucky banjo sound You know, really enjoy that sometimes. So I went through an Iggy Azalea phase. That was an interesting period of my life.

### Bryan Robinson  17:10  
I think we've all been through that sort of phase. We've all been there.

### Jenn Creighton  17:14  
Sometimes my my discover weekly on Spotify, I think is consistently confused. It's like, remember when you were sad? Well, here's all the sad songs and I'm like, oh, but Spotify. I'm not sad anymore. It's like, Okay. Here's poppy feminist music. I'm like, no, we're not in that mood. We're angry, now. Where's the angry? It's like, I cannot help you, I'm sorry. Sorry, Spotify. 

### Bryan Robinson  17:39  
The algorithm can only do so much for you. Cool. So is there anything that you would like to promote something you're doing something you want get out to the JAMstack community?

### Jenn Creighton  17:47  
Well, first of all, if they're interested, they can follow me on Twitter. My handle is gurlcode girl with a "u". I'm also going to be speaking here in New York at React Day New York. Later in September, I'm going to be speaking about some things I have learned going from React to React Native, which is a whole new world for me. And then I'm also developing a course on React component architecture. That's my, my favorite sort of subject. I'm developing it for Thinkster. So that should be coming out, I think in a few months, if I have enough time to do all the recordings

### Bryan Robinson  18:24  
Very cool. And also, I haven't watched it yet, but I'm super excited now that I've seen it to go watch your the "What happens next", the choose your own adventure with iterators. Like, I have to go watch that I saw that topic. I said, Okay, carving out the time for that one.

### Jenn Creighton  18:39  
I love iterators I love them so much. They're wild. They're in so many things that we use in JavaScript, and we have no clue. And that's what that talk is about. And also it's like ridiculous and silly. You're on like an alien planet solving a mystery. And I had this artists do this beautiful work for it. So it's ridiculous, but yeah,

### Bryan Robinson  19:00  
Ridiculous is the best way to go.

### Jenn Creighton  19:03  
Yeah, it's like funny and weird. I enjoy it.

### Bryan Robinson  19:06  
Well, I appreciate you taking the time to talk with us. And we'll be sure to link all those, all those amazing things that you're doing up in the show notes. And yeah, thanks for taking the time.

### Jenn Creighton  19:14  
Thank you for having me really enjoyed it.

### Bryan Robinson  19:16  
And as always, thank you to the amazing JAMstack community, your continued support via shares, likes favorites, and all those mechanisms is so incredible that I literally just don't have the words to deal with it. 

### Bryan Robinson  19:29  
With that it's sponsored time, and we're talking about the amazing content platform take shape. This week, I want to mention their amazing GraphQL API. It's not an afterthought, but a fully realized part of their platform. It means that whether you use their CMS or another platform entirely, you have an incredibly easy access to all your data in one simple API call. Do you want to see what that's like? Head on over to takeshape.io/that'smyjamstack to sign up. And with that, I'll take my leave of your ears. So until next week, Keep doing amazing things on the web and keep things Jammy

Transcribed by https://otter.ai

Intro/outtro music by [bensound.com](https://bensound.com)