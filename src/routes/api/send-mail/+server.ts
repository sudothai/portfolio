import { SENDGRID_API_KEY } from "$env/static/private";
import sgMail from "@sendgrid/mail";
import { json } from "@sveltejs/kit";

// function delay(ms:number) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

export async function POST({ request }) {
    const data = await request.json();
    console.log(data);

    // await delay(2000);

    return json({ emailSentSuccessfully: true });
}