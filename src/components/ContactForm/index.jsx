import { useState } from "react";
import { FormContainer } from "./ContactForm.design";
import SiteButton from "../ui/SiteButton";
import { FaRegEnvelope } from "react-icons/fa";
import dish from "../../assets/textures/sat.png";
// import dish from "../../assets/icons/satellite-dish.png";
export default function Multiple() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Name: ${formData.name}, Company: ${formData.compant},Email: ${formData.email}, Message: ${formData.message}`
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <FormContainer onSubmit={handleSubmit}>
        <h1>Contact me!</h1>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
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
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />

        <SiteButton
          type="submit"
          icon={<FaRegEnvelope />}
          title="Submit"
        ></SiteButton>
      </FormContainer>
      <img
        src={dish}
        width={"950px"}
        height="700px"
        style={{
          // paddingTop: "280px",
          transform: "translate(-20px, 475px) scale(0.9)",
          // transform: "scaleX(-1) translate(-80px, 505px) scale(0.9)",
          overflow:"hidden",
          // filter: "invert(100%)",
          
        }}
      ></img>
    </div>
  );
}
