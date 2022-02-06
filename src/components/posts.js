import encapList from '../images/encapsulateList.png';
import emTemp from '../images/emailTemplate.png';
import logoEmail from '../images/email_pic.jpeg';
import logoSdf from '../images/sdf_pic.jpeg';
import email_1 from '../images/SB_email.png';
import email_2 from '../images/SB_email_2.png';
import email_title from '../images/SB_email_title.jpeg';
import app_rec_1 from '../images/app_rec_1.png';
import app_rec_2 from '../images/app_rec_2.png';
import app_rec_title from '../images/app_rec_title.jpeg'
import sdf_intro from '../images/sdf_intro.gif'
import sdf_deploy from '../images/sdf_deploy.gif'

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
        title: 'Getting Started with SDF',
        summary: `Start using the SuiteCloud Development Framework can be challenging, 
        so this article gives the configuration process in a nutshell`,
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
        title: 'Sandbox Email Context',
        summary: `Testing email dependent solutions in SB
        NetSuite Sandbox offers a safe way to keep you from sending unwanted emails to your relationships.`,
        author: 'Avishai Asaf',
        date: '01/01/2021',
        img: email_title,
        body: [
            {
                type: 'text',
                content: `Testing email dependent solutions in SB
                NetSuite Sandbox offers a safe way to keep you from sending unwanted emails to your relationships. 
                And so, you can define the recipient of the Sandbox email under Setup>Company>Email Preferences:
                `
            },
            {
                type: 'image',
                content: email_1
            },
            {
                type: 'text',
                content: `*By three options:*
                1.	A constant email address (or multiple addresses)
                2.	Sending the emails to the logged in user (System default)
                3.	Do not send emails.
                In this article I will explain why the default option is not sufficient for your sandbox testing and how you can improve it. 
                While I was testing an Email Plug-in as a part of an Approval Process, I wanted to make sure that in a case of an exception, the Email Approver will receive an email notifying the exception that has just occurred. Well, the emails kept waiting in the Sent Email List yet were not sent to my email address. This is because of the second option (Logged in user) is depending on the execution context of the email sending, and thus, while sending the emails from a Plug-in while I’m not actually logged in, the context had no user, and the emails were not sent. 
                In order to resolve this, I’m using the constant email recipient approach, and while testing a solution that has another recipient in it forwarding the emails to them by the gmail filter.
                `
            },
            {
                type: 'image',
                content: email_2
            },
            {
                type: 'text',
                content: `Just type the name of the email original recipient in “Has the words” field and forward the mail to that recipient, 
                enabling him to test functionalities in the Sandbox.`
            }
        ]
    },
    {
        id: 4,
        title: 'Creating Record Approval Audit',
        summary: `Using an approval process for transactions is a very common procedure. Having said that, 
        there is a great importance of keeping the logs of the approval details, like the approver, exact time, context etc. 
        You can achieve all these by using a custom record for the approval audit.
        The custom record should look something like that:
        `,
        author: 'Avishai Asaf',
        date: '01/01/2021',
        img: app_rec_title,
        body: [
            {
                type: 'text',
                content: `Using an approval process for transactions is a very common procedure. 
                Having said that, there is a great importance of keeping the logs of the approval details, like the approver, 
                exact time, context etc. You can achieve all these by using a custom record for the approval audit.
                The custom record should look something like that:
                `
            },
            {
                type: 'image',
                content: app_rec_1
            },
            {
                type: 'text',
                content: `Once this record is created you can use it inside the approval workflow by activating the create record action. 
                Just make sure you populate the Document Number field with the workflow current record value. 
                Form here you can create a saved search with a “Document Number” available filter and attach it to a custom list under a custom tab on the required transaction.
                It should look like this:
                `
            },
            {
                type: 'image',
                content: app_rec_2
            }
        ]
    },
    {
        id: 5,
        title: 'Deploying via SDF',
        summary: `Once you have SDF configured locally you can easily deploy your projects.
        To maintain a successful deployment, here is my checklist:
        `,
        author: 'Avishai Asaf',
        date: '01/01/2021',
        img: sdf_deploy,
        body: [
            {
                type: 'text',
                content: `*Once you have SDF configured locally you can easily deploy your projects.*
                To maintain a successful deployment, here is my checklist:
                1.	Pre: consider deploying your WF/Script as not initiating/deployed to have another validation step before affecting the PROD environment.
                2.	Validate that all the project dependencies exist locally, import missing to the project if there are any.
                3.	Find the Account-Specific-Values in the project and replace those with their equivalent values from the target account (you can find the occurrences by the project validation command).
                4.	(Only if you have a WF with Send Email action) delete the email template id from the action xml and change the email template option to false. This action is not yet supported by SDF, and you’ll have to fix this manually after the deployment.
                5.	Add the dependencies to the manifest and validate again, if there are no errors you are good to go.
                6.	Select the account and deploy, this should be pretty fast.
                `
            },
            {
                type: 'image',
                content: sdf_deploy
            }
        ]
    },
    {
        id: 6,
        title: 'SDF Intro',
        summary: `How do you implement your customizations to a new environment?
        Using the SuiteCloud Development Framework (SDF) enables you to generate a quick and easy push to the requested environment. `,
        author: 'Avishai Asaf',
        date: '01/01/2021',
        img: sdf_intro,
        body: [
            {
                type: 'text',
                content: `*How do you implement your customizations to a new environment?*
                Using the SuiteCloud Development Framework (SDF) enables you to generate a quick and easy push to the requested environment. Using SDF allows you to work with all kinds of NetSuite records while offering a usable benefit for developers, the ability to create the Script and Script Deployment records locally and then to push a whole working script to the environment.
                For those who have worked with the SuiteBundles I see several differences between the two:
                
                *Pros*
                •	Ability to collect customizations from many environments into one project.
                •	Keep a backup of the project you’ve pushed.
                •	There are several records that are not supported using SuiteBundles (ex. Email Templates) and supported by the SDF.
                •	Fast implementation you don’t have to wait for installation.
                •	Managing Account Specific Values.
                *Cons*
                •	Unable to import locked records, unlike the SuiteBundles on SDF a project cannot depend on locked records.
                •	Manually import all dependencies, unlike the SuiteBundles here you’ll have to actively import all your dependencies, though the SDF will alert which dependencies are missed.
                
                And here it is in a glance:
                `
            },
            {
                type: 'image',
                content: sdf_intro
            }
        ]
    }
]
