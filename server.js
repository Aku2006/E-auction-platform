// import app from "./app.js"
// import cloudinary from "cloudinary"
// import express from "express";
// import { sendEmail } from "./utils/sendEmail.js";
// cloudinary.v2.config({
//     cloud_name: process.env.CLODINARY_CLOUD_NAME,
//     api_key: process.env.CLODINARY_API_KEY,
//     api_secret: process.env.CLODINARY_API_SECRET,
// });
// app.listen(process.env.PORT,()=>
// {
//     console.log('server listening on port ${process.env.PORT}');
    

    
// });




// // ✅ Your test route
// app.get("/test-email", async (req, res) => {
//   try {
//     await sendEmail({
//       email: "yourgmail@gmail.com",
//       subject: "Test Email from Auction App",
//       message: "If you're reading this, email works!",
//     });
//     res.send("✅ Email sent!");
//   } catch (error) {
//     console.error("❌ Email error:", error);
//     res.status(500).send("❌ Email failed: " + error.message);
//   }
// });

// app.listen(5000, () => {
//   console.log("Server is running on port 5000");
// });
import app from "./app.js";
import cloudinary from "cloudinary";
import { sendEmail } from "./utils/sendEmail.js";
import dotenv from "dotenv";
dotenv.config();

cloudinary.v2.config({
  cloud_name: process.env.CLODINARY_CLOUD_NAME,
  api_key: process.env.CLODINARY_API_KEY,
  api_secret: process.env.CLODINARY_API_SECRET,
});

// ✅ Your test route (define before listen)
app.get("/test-email", async (req, res) => {
  try {
    await sendEmail({
      email: "yourgmail@gmail.com", // Replace with your email
      subject: "Test Email from Auction App",
      message: "If you're reading this, email works!",
    });
    res.send("✅ Email sent!");
  } catch (error) {
    console.error("❌ Email error:", error);
    res.status(500).send("❌ Email failed: " + error.message);
  }
});

// ✅ Only one app.listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});

