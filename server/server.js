import express, { json } from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8888;

const app = express();

// const SITE_SECRET = process.env.VITE_CAPTCHA_SITE_KEY;
const SITE_SECRET = process.env.VITE_CAPTCHA_PRIVATE_KEY;

app.use(cors());
app.use(json());


app.post('/verify', async (request, response) => {
  const { captchaValue } = request.body
  const { data } = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${SITE_SECRET}&response=${captchaValue}`,
  )
  response.send(data);
})


app.listen(PORT, () => {
  console.log(`FROM SERVER:::`, SITE_SECRET);
  console.log(`Server listening on ${PORT}`);
});
















