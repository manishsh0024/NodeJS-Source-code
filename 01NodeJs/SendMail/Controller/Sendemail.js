
const nodemailer = require("nodemailer");

const SendMail = async (req, res) => {
 
  const user = "REPLACE-WITH-YOUR-ALIAS@YOURDOMAIN.COM";
  const pass = "REPLACE-WITH-YOUR-GENERATED-PASSWORD";

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'johanna80@ethereal.email',
        pass: 'aXkMQjgrnQPDw6s17a'
    }
});


  async function main() {
    const info = await transporter.sendMail({
      from: '"Fred Foo" <foo@example.com>', 
      to: "bar@example.com, baz@example.com", 
      subject: "Hello ✔", 
      text: "Hello world?", 
      html: "<b>Hello world?</b>", 
    });

    console.log("Message sent: %s", info.messageId);

  }

  main().catch(console.error);

  res.send("This is mail");
};

module.exports = SendMail;
