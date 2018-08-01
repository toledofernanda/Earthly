const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const path = require('path');

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
    user: process.env.GMAIL_EMAIL,
    pass: process.env.GMAIL_PASS
  }
});

  let mailOptions = {
    from: req.body.email,
    to:'app.earthly@gmail.com',
    replyTo: req.body.email,
    subject: req.body.category,
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

//const PORT = process.env.PORT || 3001
// res.sendFile(path.join(__dirname, '../public', 'index.html'));


app.use(express.static(__dirname + '/build'));



app.listen(process.env.PORT, '0.0.0.0', function(err) {
  console.log("Started listening on %s", app.url);
});
