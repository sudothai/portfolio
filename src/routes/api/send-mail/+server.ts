import { SENDGRID_API_KEY } from "$env/static/private";
import sgMail from "@sendgrid/mail";
import { json } from "@sveltejs/kit";

sgMail.setApiKey(SENDGRID_API_KEY);

// function delay(ms:number) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

export async function POST({ request }) {
    const { contactMail, contactName, informationAboutProject } = await request.json();

    if (!contactMail || !contactName || !informationAboutProject) {
        json({ message: "Could not send email. Missing data." }, { status: 400 });
    }

    const message = {
        to: "thai@techrealm.io",
        from: "thai@techrealm.io",
        subject: `${contactName}: Contact Form on your Portfolio`,
        html: `Somebody used the contact form on your site. <br/>
        Name: ${contactName}<br/>,
        Email: ${contactMail}<br/>,
        Information about the project: ${informationAboutProject}`,
    };

    try {
        await sgMail.send(message);
        return json({ emailSentSuccessfully: true });
    } catch (err) {
        console.error('SendGrid error:', err);
        return json({ err }, { status: 500 });
    }

    // await delay(2000);
}