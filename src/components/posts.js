import encapList from '../images/encapsulateList.png';
import emTemp from '../images/emailTemplate.png';
import logoEmail from '../images/email_pic.jpeg';
import logoSdf from '../images/sdf_pic.jpeg';

export const posts = [
    {
        id: 1,
        title: 'Printing Custom Lists into PDF or Email Templates',
        summary: `If you ever used the PDF generator to create a transaction template, 
                    you are probably familiar with the list FreeMarker element used to drill down lists and print those line by line. `,
        author: 'Avishai Asaf',
        date: '01/01/2021',
        img: logoEmail,
        body: [
            {
                type: 'text',
                content: `*Overview:*\n
                If you ever used the PDF generator to create a transaction template, you are probably familiar with the list FreeMarker element used to drill down lists and print those line by line. However, when trying to use the same mechanism with a custom list on a certain record, something is not quite sure working. 
                *Solution:*\n
                *Step 1*\n\n encapsulate the custom list into a JSON shaped structure and store it in a Custom Field _(e.g., custbody_customlist)_
                `
            },
            {
                type: 'image',
                content: encapList
            },
            {
                type: 'text',
                content: `*Step 2*\n\n use the list element to read the custom list line by line and print it:`
            },
            {
                type: 'image',
                content: emTemp
            }
        ]
    },
    {
        id: 2,
        title: 'Deploying via SDF',
        summary: `lLorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Molestias aut, repellat ipsum facere voluptate dicta 
                 obcaecati deserunt nobis suscipit eaque?`,
        author: 'Avishai Asaf',
        date: '01/01/2021',
        img: logoSdf,
        body: [
            {
                type: 'text',
                content: `*Start using the SuiteCloud Development Framework can be challenging, so this article gives the configuration process in a nutshell*. 

                The first issue is connecting the IDE to NetSuite, this process is straightforward if you are using either WebStorm or Eclipse, and a bit more challenging with Node.js CLI.
                To configure WebStorm you can just follow the help topic: “Adding the SuiteCloud IDE Plug-in to WebStorm”. In this article will guide you how to add the SDF plug-in to WebStorm and authorize its access to NetSuite.
                
                To work with other IDE’s, you’ll need the Node.js framework as well as npm, and run the installation command on the terminal. You can find the command and following instructions at help topic: “Installing CLI for Node.js”. using the CLI all your communication to NetSuite will be via the terminal, though it is not inferior to the UI interface, there is a considerable discomfort while importing files & object from NetSuite and scrolling the terminal one by one.
                
                *In general, the interface is the same and will allow you to:*
                •	Upload/Compare/Import files from the File Cabinet.
                •	Import Object/s.
                •	Update/Compare with account object.
                •	Add dependencies to the manifest – this will track dependencies across the project objects and add those to the manifest which indicated of all the project dependencies. 
                •	Validate project locally/ against the account – check if all manifest dependencies exist in the project/environment, Account Specific Values, and unsupported features.
                •	Deploy project to account – select or deploy to the default account.
                •	Generate project zip
                •	Set up the account for the project – this will be the default account. While using Node.js CLI every command will run against the default account, and you’ll need to actively change the default to run commands against other account. on WebStorm a dialog allowing you to change the default account, will pop-up before any action.
                `
            }
        ]
    },
    {
        id: 3,
        title: 'Email Approvals',
        summary: `lLorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Molestias aut, repellat ipsum facere voluptate dicta 
                 obcaecati deserunt nobis suscipit eaque?`,
        author: 'Avishai Asaf',
        date: '01/01/2021',
        img: encapList,
        body: []
    },
    {
        id: 4,
        title: 'Saved Searches',
        summary: `lLorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Molestias aut, repellat ipsum facere voluptate dicta 
                 obcaecati deserunt nobis suscipit eaque?`,
        author: 'Avishai Asaf',
        img: encapList,
        body: []
    },
    {
        id: 5,
        title: 'Saved Searches',
        summary: `lLorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Molestias aut, repellat ipsum facere voluptate dicta 
                 obcaecati deserunt nobis suscipit eaque?`,
        author: 'Avishai Asaf',
        date: '01/01/2021',
        img: encapList,
        body: []
    },
    {
        id: 6,
        title: 'Saved Searches',
        summary: `lLorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Molestias aut, repellat ipsum facere voluptate dicta 
                 obcaecati deserunt nobis suscipit eaque?`,
        author: 'Avishai Asaf',
        img: encapList,
        body: []
    },
    {
        id: 7,
        title: 'Saved Searches',
        summary: `lLorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Molestias aut, repellat ipsum facere voluptate dicta 
                 obcaecati deserunt nobis suscipit eaque?`,
        author: 'Avishai Asaf',
        img: encapList,
        body: []
    },
    {
        id: 8,
        title: 'Saved Searches',
        summary: `lLorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Molestias aut, repellat ipsum facere voluptate dicta 
                 obcaecati deserunt nobis suscipit eaque?`,
        author: 'Avishai Asaf',
        img: encapList,
        body: []
    }
]
