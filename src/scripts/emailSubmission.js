// LIBRARIES
import emailjs from "@emailjs/browser";

// todo: newsletter that recommends a new, generated book every 3 months to whoever signs up to newsletter

export async function contactUsEmail(data) {
  emailjs
    .send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      data,
      import.meta.env.VITE_PUBLIC_KEY
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

  return console.log(`Email sent! with `, data);
}

// export default contactUsEmail;
