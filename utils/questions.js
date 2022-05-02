// // TODO: Create an array of questions for user input
const questionsArr = [
    {
        name: 'title',
        message: 'What is your project title? (Required)',
        type: 'input',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a project title')
                return false;
            }
        }
    },
    {
        name: 'purpose',
        message: 'What is the purpose of this project? (Required)',
        type: 'input',
        validate: purposeInput => {
            if (purposeInput) {
                return true;
            } else {
                console.log('Please enter a project purpose')
                return false;
            }
        }

    },
    {
        name: 'description',
        message: 'Please enter a project description: (Required)',
        type: 'input',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description')
                return false;
            }
        }

    },
    {
        name: 'userStory',
        message: 'Enter a User Story: (Required)',
        type: 'input',
        validate: storyInput => {
            if (storyInput) {
                return true;
            } else {
                console.log('Please enter a user story')
                return false;
            }
        }

    },
    {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you build this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
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
        name: 'license',
        message: 'Please select a license.',
        type: 'rawlist',
        choices: ['None', 'MIT', 'Apache', 'GPL'],
        default: 0
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
        message: 'Enter your GitHub username: (Required)',
        type: 'input',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter a project title')
                return false;
            }
        }

    },
    {
        name: 'email',
        message: 'Enter an email address to be contacted at for questions: (Required)',
        type: 'input',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter an email address')
                return false;
            }
        }

    }
];

module.exports = questionsArr;