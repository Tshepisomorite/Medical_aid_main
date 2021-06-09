require('./config/config');
require('./models/db');
require('./config/passportConfig');


//var Member = require('./models/member.model');
//var Beneficiary = require('./models/beneficiary.model');
const connectDB = require('./models/db');
const express = require('express');
const cors = require('cors');
//const mongoose = require('mongoose');
const passport = require('passport');

const rtsIndex = require('./routes/index.router');

const path = require('path'); // for getting file extension
const multer = require('multer'); // for uploading files
const {v4: uuidv4} = require('uuid'); // for naming files with random characters
const helpers = require('./helpers');
var app = express();

//middleware
//app.use('/members', memberController);
//app.use('/beneficiaries', beneficiaryController);

//Body Parser
app.use(express.urlencoded({ extended: false}))
app.use(express.json())
////app.use(express.static(__dirname + '/public'));
app.use('/file',express.static(path.join(__dirname, 'files')));
app.use(cors());
app.use(passport.initialize());
app.use('/api', rtsIndex);
//file upload
// const fileStorage = multer.diskStorage({
//       destination: (req, file, cb) => {
//          if(file.fieldname === "resume") {//fileName is = resume
//              cb(null, 'resumes/');

//          }else {
//              cb(null, 'images');
//          }
//       },
//       filename: (req, file, cb) => {
//         cb(null, file.fieldname + '-' + uuidv4()+ path.extname(file.originalname));
//       }
//     });
    
//    app.post('/upload-file', (req, res) => {
//    let upload = multer({ storage: storage, fileFilter: helpers.fileFilter }).array('multiple_files', 10)
//     upload(req, res, function(err){
//         if (req.fileValidationError) {
//             return res.send(req.fileValidationError);
//         }
//         else if (!req.file) {
//             return res.send('Please select a file to upload');
//         }
//         else if (err instanceof multer.MulterError) {
//             return res.send(err);
//         }
//         else if (err) {
//             return res.send(err);
//         }
//         let result = "You have uploaded these files: <hr />";
//         const files = req.files;
//         let index, len;
//        //loop thorugh all the uploaded files and display them on frontend
//        for(index=0, len = files.length; index<len; ++index){
//       //  result += `<img src="${files[index].path}" width="300" style="margin-right: 20px;">`;
//        }
//        result += '<hr/><a href="./">Upload more files</a>';
//         res.send(result);
//     })
//    })



connectDB();




//static files
// app.use(
//     multer(
//       { 
//         storage: fileStorage, 
//         limits:
//           { 
//             fileSize:'2mb' 
//           }, 
//         fileFilter: fileFilter 
//       }
//     ).fields(
//       [
//         { 
//           name: 'resume', 
//           maxCount: 1 
//         }, 
//         { 
//           name: 'image', 
//           maxCount: 1 
//         }
//       ]
//     )
//   );
//app.use('/getMember', rtsIndex);
// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
});

// start server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));