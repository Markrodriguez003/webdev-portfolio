import { useState, useRef, useEffect, createRef } from "react";

// STYLED COMPONENTS
import { FormContainer } from "./ContactForm.design";

// COMPONENT
import SiteButton from "../../ui/SiteButton";

// LIBRARY
import ReCAPTCHA from "react-google-recaptcha";
import SAlert from "sweetalert2";
// import DOMPurify from "dompurify";

// SCRIPTS
import { contactUsEmail } from "../../../scripts/emailSubmission";

// ICONS
import { FaRegEnvelope } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

//CSS
import "./customSweetAlertStyles.css";

// DATA
// Country JSON list
import countries from "../../../../data/countries.json";

export default function ContactForm() {
  // EMAIL FORM SUBMISSION SUCCESS OR FAILURE PANEL
  const [emailSuccess, setEmailSuccess] = useState(null);

  // GOOGLE CAPTCHA REF
  const recaptcha = useRef();

  // FORM DATA SETTER + GETTER
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    country: "",
    email: "",
    message: "",
    "g-recaptcha-response": "",
  });

  // HANDLES GRABBING DATA FROM FORM
  const handleChange = (event) => {
    const { name, value } = event.target;
    // console.log(`Form event:`, event, `form name:`, name, `form value:`, value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // LISTENS TO SEE RESULT OF FORM / EMAIL SUBMISSION

  useEffect(() => {
    if (emailSuccess === null) {
      <></>;
    } else if (emailSuccess === false) {
      SAlert.fire({
        confirmButtonColor: "black",
        customClass: {
          validationMessage: "my-validation-message",
        },
        title: "Form submissions unsuccessful!",
        text: "Houston..transmission was unsuccessful! We are working on it!",
        width: 600,
        padding: "3em",
        color: "#ffffff",
        // background: `url(${alien}) rgba(0, 0, 0, 0.8)`,
        background: `rgba(0, 0, 0, 0.8)`,
        imageWidth: 400,
        imageHeight: 500,
        imageAlt: "Successful message",
      });
    } else {
      SAlert.fire({
        confirmButtonColor: "black",
        customClass: {
          validationMessage: "my-validation-message",
        },
        title: "Form submissions successful!",
        text: "Houston..transmission successful!",
        width: 600,
        padding: "3em",
        color: "#ffffff",
        // background: `url(${alien}) rgba(0, 0, 0, 0.8)`,
        background: `rgba(0, 0, 0, 0.8)`,
        imageWidth: 400,
        imageHeight: 500,
        imageAlt: "Successful message",
      });
    }
  }, [emailSuccess, setEmailSuccess]);

  // HANDLE FORM SUBMISSION + EMAILJS
  const handleSubmit = async (event) => {
    event.preventDefault();
    const captchaValue = recaptcha.current.getValue();

    if (!captchaValue) {
      SAlert.fire({
        confirmButtonColor: "black",
        customClass: {
          validationMessage: "my-validation-message",
        },
        title: "Please verify you are not a robot!",
        text: "Houston is advising to verify you're not a robot by clicking the captcha below!",
        width: 600,
        padding: "3em",
        color: "#ffffff",
        // background: `url(${alien}) rgba(0, 0, 0, 0.8)`,
        background: `rgba(0, 0, 0, 0.8)`,
        // imageWidth: 400,
        // imageHeight: 500,
        // imageAlt: "Successful message",
      });
    } else {
      setEmailSuccess(await contactUsEmail(formData, captchaValue));
    }
  };

  return (
    <FormContainer
      onSubmit={handleSubmit}
      autoComplete="off"
      role="presentation"
      method="post"
      action=""
    >
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        autoComplete="off"
        role="presentation"
        required
      />

      <label htmlFor="email">
        Company <small>(Optional)</small>:
      </label>
      <input
        type="text"
        id="company"
        name="company"
        value={formData.company}
        onChange={handleChange}
        autoComplete="off"
        role="presentation"
      />
      <label htmlFor="country">
        Country <small>(Optional)</small>:
      </label>
      <select
        name="country"
        id="country"
        value={formData.country}
        onChange={handleChange}
      >
        {countries.map((country) => {
          return (
            <option key={(`option_`, country.name)} value={country.name}>
              {country.name}
            </option>
          );
        })}
      </select>

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        autoComplete="off"
        role="presentation"
        required
      />

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        maxLength={150}
      />

      <div>
        <SiteButton
          type="submit"
          icon={<FaRegEnvelope />}
          title="Submit"
        ></SiteButton>
        <SiteButton
          type="button"
          icon={<FaTrashAlt />}
          title="Clear Form"
          styling="youtube"
        ></SiteButton>
        <ReCAPTCHA
          ref={recaptcha}
          sitekey={import.meta.env.VITE_CAPTCHA_SITE_KEY}
        />
      </div>
    </FormContainer>
  );
}

{
  /* <QRCode></QRCode> */
}
