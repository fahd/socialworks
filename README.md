# socialworks
Chance the Rapper's charity, SocialWorks, v1.


From 2016 to 2018, I created and managed the marketing and software engineering behind SocialWorks, a Chicago charity created by Chance the Rapper. 
The code I have here is a cross-section of the early client-facing application I built for SocialWorks in my time there.

I joined as the only technical person - leaving my job at Consumer Reports and taking on the challenge of creating a great visual to represent the
artistic brand of Chance the Rapper and the artful mosaic of Chicago youth and their ambitions - as well as the technical challenge of building unique
functionality for viral online initiatives designed to raise money (funds for local, on-the-ground initiatives) and raise attention (address lack of funding
in Chicago public schools, educate voters).

I initially created a LinkedIn-for-Chicago-youth, where Chicago students could network with each other and connect at a number of our after-school events in Chicago.
WIth a famous and local founder, we had access to many, many nonprofits and organizations in Chicago as well as a reach to many of the high schools there.

I built our platform with JavaScript, React.js, and Node.js integrated with a Firebase store. In addition to handling all of the design among some of the things I built included:

- a headless CMS integrated with Medium that I built in two days - I needed to onboard about 12 writers from an external marketing agency, Performics, in Chicago
who had tons of content to boost on our online presence, and inform people who were searching for us with little fresh content. I used CloudWatch and AWS
Lambda to automate scraping of Medium blogs posts that were then stored in our DB, and a utility tool that enabled writers to crosspost from Medium to our site immediately upon publishing,
solving our time constraints with getting a lot of people to write content all at once. I later built in an internal CMS tool for editing and publishing posts.

- custom Events Registration with free/Stripe-integrated paid events and a ticket system leveraging SendGrid for confirmations and reminders. I took heavy inspiration
from Airbnb and The Y App (which I don't think is still active?) in order to create an event system that was custom to the feel of our site, reduced the percentage of fees a
platform like Eventbrite might take (we had enough people signing up that any advantage EventBrite conferred upon SEO was lost in fees, which for a nonprofit that wasn't yet a formal 501c3, is crucial),
and provide extra customization that our stakeholders wanted, like a live comments section, no auth locked participant list.

- a voting tool detailing Chicago's 2018 midterm elections candidates' voting histories, district representations, and policy positions to inform voters, with citations on candidates' prior
record

- a viral Twitter initiative called #supportCPS that automated prepopulating and sending tweets from our site, and sending them through regularly scheduled intervals towards
businesses and politicans in Chicago in order to address the at-the-time $215 million education budget deficit. With the gracious help of our founder, Chance, we raised over $2 million
for Chicago Public Schools!

I really enjoyed my time with SocialWorks!
