// Write your code in this file!
const currentUser = 'Grace Hopper';

const welcomeMessage = 'Welcome to Flatbook, ' + currentUser + '!';

const excitedWelcomeMessage = 'WELCOME TO FLATBOOK, ' + currentUser.toUpperCase() + '!';

const firstInitial = currentUser[0];
const restOfName = currentUser.slice(1)

// const shortGreeting = `Welcome, ${firstInitial}!`;
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;