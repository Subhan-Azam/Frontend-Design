import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (req) => {
  try {
    const body = await req.json();
    const firstName = body.firstName;
    const lastName = body.lastName;
    const company = body.company;
    const email = body.email;
    const phone = body.phone;
    const message = body.message;

    if (!firstName || !lastName || !company || !email || !phone || !message) {
      console.log("all field are necessary");
    }

    console.log("body", body);
    console.log("email", email);

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    console.log("transporter", transporter);

    const userDetailLink = `${process.env.NEXTAUTH_URL}/userdetail`;
    console.log("userDetailLink", userDetailLink);

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "subhanshabeer2005@gmail.com",
      subject: "User Detail",
      html: `html: First Name :  ${firstName}, <br/> Last Name : ${lastName}, <br/> Mail :  ${email}, <br/> Company : ${company}, <br/> Phone : ${phone}, <br/> Message : ${message}`,
    };

    console.log("mailOptions", mailOptions);

    const sendMail = await transporter.sendMail(mailOptions);
    console.log("sendMail", sendMail);

    return NextResponse.json({ message: "POST is working" });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({ message: "something error in POST" });
  }
};
