// // TODO: Create an array of questions for user input
const questionsArr = [
    {
        name: 'title',
        message: 'What is your project title? (Required)',
        type: 'input'
    },
    {
        name: 'purpose',
        message: 'Please write your project purpose.',
        type: 'input'
    },
    {
        name: 'description',
        message: 'Please enter a project description:',
        type: 'input'
    },
    {
        name: 'userStory',
        message: 'Enter a User Story',
        type: 'input',
    },
    {
        name: 'instructions',
        message: 'What are the installation instructions?',
        type: 'input'
    },
    {
        name: 'useage',
        message: 'What is the useage information?',
        type: 'input'
    },
    {
        name: 'contributions',
        message: 'What are the contribution guidelines?',
        type: 'input'
    },
    {
        name: 'test',
        message: 'What are the testing instructions?',
        type: 'input'
    },
    {
        name: 'github',
        message: 'Enter your GitHub username:',
        type: 'input'
    }
];

module.exports = questionsArr;