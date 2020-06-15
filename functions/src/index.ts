const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'maximum.lenovo.ml@gmail.com',
    pass: '_STalker19',
  },
});

exports.sendMailCall = functions.https.onRequest((req: any, res: any) => {
  const template = req.body.name === "call" ?
  `
  <ul>
  <li> организаиця: ${req.body.field_1}</li>
  <li> контакное лицо: ${req.body.field_2}</li>
  <li> телефон: ${req.body.field_3}</li>
  <li> удобное время: ${req.body.field_4}</li>
  <li> тема звонка: ${req.body.field_5}</li>
  </ul>
  `
  :
  `
  <ul>
  <li> организаиця: ${req.body.field_1}</li>
  <li> контакное лицо: ${req.body.field_2}</li>
  <li> телефон: ${req.body.field_3}</li>
  <li> электронная почта: ${req.body.field_4}</li>
  <li> сообщение: ${req.body.field_5}</li>
  </ul>
  `
  ;

  const mailOptions = {
    from: req.body.name === "call" ? `Заказ звонка` : `Консультация`,
    to: 'maximum.lenovo.ml@gmail.com',
    subject: req.body.name === "call" ? `Заказ звонка` : `Консультация`,
    html: template,
  };

  mailTransport.sendMail(mailOptions, (error: any, info: any) => {
    if (error) {
      return res.status(500).send(JSON.stringify({ error: error.message }));
    }
    return res.status(200).send(info.envelope.to);
  });
});