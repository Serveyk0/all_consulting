
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');




const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "All.Consulting.Ukraine@gmail.com",
    pass: "All.Consulting.Ukraine.2020",
  },
});

exports.sendMailCall = functions.https.onRequest((req: any, res: any) => {
  const data = JSON.parse(req.body);
  const template = 
  data.name === "call" ?
    `
    <ul>
    <li> организаиця: ${data.field_1}</li>
    <li> контакное лицо: ${data.field_2}</li>
    <li> телефон: ${data.field_3}</li>
    <li> удобное время: ${data.field_4}</li>
    <li> тема звонка: ${data.field_5}</li>
    </ul>
    `
    :
    `
    <ul>
    <li> организаиця: ${data.field_1}</li>
    <li> контакное лицо: ${data.field_2}</li>
    <li> телефон: ${data.field_3}</li>
    <li> электронная почта: ${data.field_4}</li>
    <li> сообщение: ${data.field_5}</li>
    </ul>
    `
  ;
  const mailOptions = {
    from: `All.Consulting.Ukraine@gmail.com`,
    to: `All.Consulting.Ukraine@gmail.com`,
    subject: data.name === "call" ? `Заказать звонок` : `Консультация`,
    html: template,
  };

  mailTransport.sendMail(mailOptions, (error: any, info: any) => {
    if (error) {
      return res.status(500).send(JSON.stringify({ error: req }));
    }
    return res.status(200).send(info.envelope.to);
  });
});