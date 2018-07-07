const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.post('/api/form', (req,res) =>{
  nodemailer.createTestAccount(( err, account) => {
    const htmlEmail = `
      <h3>Contact Details</h3>
      <ul>
        <li>First Name: ${req.body.firstName}</li>
        <li>Last Name: ${req.body.lastName}</li>
        <li>Replt To: ${req.body.email}</li>
        <li>Phone Number: ${req.body.phone}</li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p>
    `

    var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'langara.earthly@gmail.com',
    pass: 'wmdd4980team1'
  }
});

  let mailOptions = {
    from: 'test@testacount.com',
    to:'langara.earthly@gmail.com',
    replyTo: 'test@testacount.com',
    subject: 'new Message',
    text: req.body.message,
    html: htmlEmail
  }

    transporter.sendMail(mailOptions, function (err, info) {
    if(err)
     console.log(err)
    else
     console.log(info);
});
  })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
