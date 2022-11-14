// Task 1

const http = require ('http')

console.log('Hello World')

// Task 2 

http.createServer(function(req,res){
    res.write('Hello Node!!!!')
    res.end()
}).listen(3000)


// Task 3 

const fs = require ('fs')
console.log('creating file')

fs.writeFile('./welcome.txt','Hello Node',function(err){

    if (err){

        return console.error(err)
    }
})


fs.readFile('./welcome.txt','utf8',function(err,fafa){

    if (err){

        return console.error(err)
    }
    console.log("This file contains :" + `${fafa}`)
})

// Task 4 

const generator = require('generate-password')
const passwords = generator.generate({
	length: 13,
	numbers: true
})

fs.writeFile('./passwordgenerator.txt',passwords,function(err){

    if (err){

        return console.error(err)
    }
    
})
console.log(passwords)

// Task 5

const nodemailer = require ('nodemailer') 
fs.writeFile('./sender')

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'youremail@gmail.com',
      pass: 'yourpassword'
  })

  var mailOptions = {
    from: 'youremail@gmail.com',
    to: 'myfriend@yahoo.com',
    subject: 'Testing email with this code ! ',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
