import { useState } from "react";
import {
  FormContainer,
  SatellightContainer,
  AstronautContact,
  Satellite,
} from "./ContactForm.design";
import SiteButton from "../ui/SiteButton";
import { FaRegEnvelope } from "react-icons/fa";

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
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        border: "rgba(255, 255, 255, 0.1) 0.5px solid",
      }}
    >
      <FormContainer
        onSubmit={handleSubmit}
        autoComplete="off"
        role="presentation"
        method="post"
        action=""
      >
        <h1>Contact me!</h1>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          autoComplete="off"
          role="presentation"
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

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          autoComplete="off"
          role="presentation"
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
      <SatellightContainer>
        <Satellite />
        <AstronautContact />
      </SatellightContainer>
    </div>
  );
}
