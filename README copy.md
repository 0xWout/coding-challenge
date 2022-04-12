# Coding challenge walktrough

## Start
I started off by setting up a NextJs project (which is overkill) simply because I like the file structure, beyond uses it & the 'potential future proofing'. But as clean as it is, it's also been a showstopper for me at the very end (more on this later)

## Coding

First, I created my [Influencer](/model/influencer.ts) model, as the CSV had spaces in the header row and it would've bugged my the entire time.

[InfluencerService](/util/InfluencerService.ts): It didn't take long before I stumbled upon papaparse, the fastest csv parsing tool. It was soon clear that it would only be possible to parse it to JSON and that's where that story ends, I was hoping it would've been able to help out in the querying as well.

After some custom parsing methods in the ```complete``` option, I found out it had a ```transform & transformHeader``` option which would make the parsing not only faster, but cleaner as well. It also uses a custom toFullNumber function to get rid of the trailing K and M by writing it fully.

After this was done, I had a clean Object. For some reason, it took a while to get used to TS and I couldn't make the group by & max working. So bad that I had to take a break as well. I'm pretty sure this is related because I'm not daily using TS (after this challenge, I am).

Finally, slapped on a quick FE in chakraUI & made sure to commit. I'm 100% aware that I didn't get this done in 2 hours. Mainly because of the groupBy & max functions. 

## Difficulties
I dove in (a little too soon) researching tools & potential paths to use before noticing the 2hour timespan. This caused me to search into GraphQL, prisma, a million json or csv parsers or query tools and a lot more. 
But after I've setup my nextjs architecture, I stepped back and got in when I had more time

The query from CSV felt a bit strange imo. Because I'm always used to using a db and an ORM to make these queries. That's why I've quickly pinged Shane to checkup on this & I've considered the change to prisma, but I already got the csv parser, so I continued this path

Didn't spent too much time on the FE as I knew I already went overtime. But I still finished the requirements because I'm not the kind of person to hand in nothing at all

## Learnings
Learned a lot of tools, but more so that I need to use TS a lot more in my daily life. I love the language and the speed, but it was too different from my daily Kotlin coding to be able to finish this task in 2 hours. & since I don't see myself working with Kotlin for that much longer, I'm going to need to code TS daily 


---

# Beyond Code Challenge

## What to do (summary)

1. Read this entire README -- you should have the full picture
   before you start.
2. Plan your time a little bit. Don't spend a long time on the challenge.
3. Build your solution.
4. Check in your code to a GitHub repo -- don't be afraid to continually 
   commit code, some history can be cool to see.
5. Either make your repo public, or add me as a viewer (ask me for my email).

## The challenge

In this challenge, a client will retrieve some data from a server, which 
returns the data from a static CSV file. The client does some processing
of the data to show a couple of helpful insights from the data.

This challenge is broken up into a few small chunks:

1. Creating an API to serve some data
2. Consuming the API to fetch the data
3. Parsing the data into a manageable format
4. Getting some insights from the data

How you approach the challenge is entirely up to you.

## Data

There is a data set in CSV format for you in the `data` directory -- this is
what we'll work with. This is an open data set from Kaggle.

It's a simple CSV file with data about various Instagram influencers. It's
pretty self explanatory, but if anything is unclear, you can ask.

## Requirements

1. Need to use TypeScript. All other tech choices are up to you.
2. Need to create an API endpoint which reads from the static data file and
   returns the data in some way.
3. Need to create a script that consumes the API endpoint
4. Need to create some output which gives some insights back to the user. How
   it's executed, and how it's presented is up to you.

## Insights

Your client should give the following insights from the data:

1. Who are the #1 top influencers per category, by followers?
2. Who are the #1 top influencers per country, by engagement avg?

## Skeleton code

I've provided some skeleton project structure in this repo, BUT feel free to
ignore it if you want. You have the freedom to build how you see fit.

## Watch out!

1. Some of the numbers are in millions (M) and some are in thousands (K)
2. What if the data set grew 10x? 100x?

## Not much time

You should aim to cap your time at around 2 hours. You've got your life to live.
The solution doesn't need to be perfect, but you should aim to get the main stuff
working, and include a README explaining what you'd do next, how you'd improve it
if you had more time, and any assumptions you made.

2 hours probably isn't enough time to create a really elegant solution for this
challenge. Part of the test is to see how you handle a limited time budget. So
it's totally expected that things may not be fully complete, and even a little 
scrappy in places.

To that end, I'd recommend planning your time a little bit and pretending 
you're already working in a startup.

## Deliver

You should check in your code to a GitHub (or similar) repo. Feel free to commit
regularly -- can be cool to see the history. When you're ready, share it with me.
You can either make it public, or just add me as a viewer ✌

## Help!

If anything needs clarifying, feel free to ask! You won't be judged negatively.
It's a great thing to ask for clarification when needed.

Reach me at `shane#1096` on Discord.
