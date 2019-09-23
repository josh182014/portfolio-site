const dummyProjects = [
  {
    name: 'Roamly.app (in progress)', github: 'https://github.com/labs14-travel-website', mainLanguage: 'JavaScript', description: 'This is an app that allows you to build a complex itinerary for traveling! Built with React, we are using many different APIs and storing data on a Postgres database using GraphQL. The login system is built with OAuth, using Google to login or signup.', viewLive: 'http://roamly.app', img: 'assets/roamly.png', tech: ['React w/Hooks', 'Node.js', 'Express.js', 'GraphQL'],
  },
  {
    name: 'How To', github: 'https://github.com/bw-how-to/how-to-FE', mainLanguage: 'JavaScript', description: 'A web app build with React.js. Browse how-to videos or upload your own! I did the entire front-end of this project and styled according to a UI Designer on my team. We had 4 days to complete this project from scratch.', viewLive: 'https://bw-how-to.netlify.com', img: '/assets/how-to.png', tech: ['React', 'Axios'],
  },
  {
    name: 'Replate', github: 'https://github.com/lambda-replate/Lambda-Replate-BE', mainLanguage: 'JavaScript', description: 'A web app that allows restauraunts to post food for donation. A user can then claim the food and schedule a time to pick it up. I did the backend on this project. It is built with Node.js with Express. The database used is Postgres. I had 4 days to complete this project from scratch.', img: '/assets/replate.png', tech: ['Node.js', 'Express.js', 'Postgres'],
  },
  {
    name: 'Lambda Time Bot', github: 'https://github.com/lambdatime-slack-bot/lambda-time-calc', mainLanguage: 'JavaScript', description: "Say an instructor say's 'Lecture at 10 am Lambda Time (PST)', but you're in a different time zone. Simply type '/lambdatime 10 am EDT' into slack and it will spit you back what time the lecture will begin in eastern time! I'm using Slack's API to send a request to an Express server that converts the time to whichever time zone is passed in and then sending the converted time back.", img: '/assets/slackbot.png', tech: ['Node.js', 'Express.js'],
  },
];

export default dummyProjects;
