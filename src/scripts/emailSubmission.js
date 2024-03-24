// LIBRARIES
import emailjs from "@emailjs/browser";

// todo: newsletter that recommends a new, generated book every 3 months to whoever signs up to newsletter

export async function contactUsEmail(data, captcha) {

  // TAKES SUBMITTED FORM DATA + G-CAPTCHA TOKEN AND PASSES IT TO EMAILJS SERVICE
  const params = {
    ...data,
    "g-recaptcha-response": captcha
  }

  // EMAILJS EMAIL SUBMISSION  
  emailjs
    .send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      params,
      import.meta.env.VITE_PUBLIC_KEY
    )
    .then(
      (result) => {
        console.log(`Email sent!`);
        console.log(result.text);

        return true;
      },
      (error) => {
        console.log(`Email was not sent!`);
        console.log(error.text);
        return false;
      }
    );



}
