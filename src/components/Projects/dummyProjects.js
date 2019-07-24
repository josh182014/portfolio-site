const dummyProjects = [
    {
        name: 'Roamly.app', github: 'https://github.com/labs14-travel-website', mainLanguage: 'JavaScript', description: "This is an app that allows you to build a complex itinerary for traveling! Built with React, we are using many different APIs and storing data on a Postgres database using GraphQL. The login system is built with OAuth, using Google to login or signup.", viewLive: 'http://roamly.app', img: 'assets/great-idea.PNG'
    },
    {
        name: 'How To', github: 'https://github.com/bw-how-to/how-to-FE', mainLanguage: 'JavaScript', description: 'A web app build with React.js. Browse how-to videos or upload your own!', viewLive: 'https://bw-how-to.netlify.com', img: '/assets/bleep.png'
    },
    {
        name: 'Replate', github: 'https://github.com/lambda-replate/Lambda-Replate-BE', mainLanguage: 'JavaScript', description: 'A web app that allows restauraunts to post food for donation. A user can then claim the food and schedule a time to pick it up. I did the backend on this project. It is built with Node.js with Express. The database used is Postgres.', img: '/assets/bleep.png'
    },
    {
        name: 'Lambda Time Bot', github: 'https://github.com/lambdatime-slack-bot/lambda-time-calc', mainLanguage: 'JavaScript', description: "Say an instructor say's 'Lecture at 10 am Lambda Time (PST)', but you're in a different time zone. Simply type '/lambdatime 10 am EDT' into slack and it will spit you back what time the lecture will begin in eastern time! I'm using Slack's API to send a request to an Express server that converts the time to whichever time zone is passed in and then sending the converted time back.", viewLive: 'http://netlify.com', img: '/assets/bleep.png'
    },

]
 
export default dummyProjects;