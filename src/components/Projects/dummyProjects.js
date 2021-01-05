const dummyProjects = [
  {
    name: 'Roamly.app', github: 'https://github.com/labs14-travel-website', mainLanguage: 'JavaScript', description: 'This app allows you to search for any city in the world and view popular attractions at that location. You can also sign up/login with Google to be able to favorite attractions to save them for later. Built with React, we are using many different APIs and storing data on a Postgres database using GraphQL. The login system is built with OAuth, using Google to login or signup.', img: 'assets/roamly.png', tech: ['React w/Hooks,', 'Node.js,', 'Express.js,', 'GraphQL'],
  },
  {
    name: 'RLACF Volunteer App', github: 'https://github.com/RLACF-App', mainLanguage: 'JavaScript', description: 'An app I built for the Red Lodge Area Community Foundation. People are able to browse volunteer opportunites in their community and sign up to volunteer for them. Users can create an account and favorite opportunities to access them later on their profile. The frontend is build with React.js, Hooks and Redux and the backend is built using Express.js and Postgres to store user data and volunteer opportunity data.', viewLive: 'https://volunteer.rlacf.org', img: 'assets/rlacf.png', tech: ['React w/Hooks,', 'Redux,', 'Node.js,', 'Express.js,', 'Postgres'],
  },
  {
    name: 'How To', github: 'https://github.com/bw-how-to/how-to-FE', mainLanguage: 'JavaScript', description: 'A web app build with React.js. Browse how-to videos or upload your own! I did the entire front-end of this project and styled according to a UI Designer on my team. We had 4 days to complete this project from scratch.', img: '/assets/how-to.png', tech: ['React,', 'Axios'],
  },
  {
    name: 'Replate', github: 'https://github.com/lambda-replate/Lambda-Replate-BE', mainLanguage: 'JavaScript', description: 'A web app that allows restauraunts to post food for donation. A user can then claim the food and schedule a time to pick it up. I did the backend on this project. It is built with Node.js with Express. The database used is Postgres. I had 4 days to complete this project from scratch.', img: '/assets/replate.png', tech: ['Node.js,', 'Express.js,', 'Postgres'],
  },
  {
    name: 'Lambda Time Bot', github: 'https://github.com/lambdatime-slack-bot/lambda-time-calc', mainLanguage: 'JavaScript', description: "Say an instructor say's 'Lecture at 10 am Lambda Time (PST)', but you're in a different time zone. Simply type '/lambdatime 10 am EDT' into slack and it will spit you back what time the lecture will begin in eastern time! I'm using Slack's API to send a request to an Express server that converts the time to whichever time zone is passed in and then sending the converted time back.", img: '/assets/slackbot.png', tech: ['Node.js,', 'Express.js'],
  },
];

export default dummyProjects;
