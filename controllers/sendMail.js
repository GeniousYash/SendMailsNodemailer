const nodemailer = require('nodemailer');

const sendMail = async (req, res) => {
    const { sendersname, emailadd, subject, text } = req.body;
    console.log(req.body);

    // Connect with SMTP server
    let transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
               user: 'singhyash3012@gmail.com',
               pass: 'srpuizcwefatsdme'
        },
    });

    let info = await transporter.sendMail({
        from: `${sendersname} <${emailadd}>`,
        to: "singhyash3012@gmail.com",
        subject: `${subject}`,
        text: `${text}`,
        html: `<b>${text}</b>`,
    });

    console.log("Message sent: %s", info.messageId);
    res.json(info);
};

module.exports = sendMail;
