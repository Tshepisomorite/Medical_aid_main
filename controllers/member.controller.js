const mongoose = require('mongoose');
const express = require('express');
var router = express.Router();
//const ObjectId = require('mongoose').Types.ObjectId;

var { Member } = require('../models/member.model');

var request = require('request');
var fetch = require('node-fetch');
var utils = require('../utils');



//BulkSMS
const https = require('https');

var Beneficiary = require('../models/beneficiary.model');

//GET METHODS

module.exports.getmember = (req, res) =>
{
  res.send('Helo');
} 

module.exports.allMembers= (req, res) => {
  Member.find(function(err, result) {
    if(err) return next(err);
    res.send(result);
  })
}

module.exports.getOneMember = (req, res) => {
  Member.findById(req.params.id, function(err, member){
    if(err) return next(err);
    res.send(member);
  })
}

module.exports.get = (req, res) => {
  Member.findByIdAndRemove(req.params.id, function(err, member){
    if(err) return next(err);
    res.send('Member deleted successfully');
  });
};


//POST METHODS
  

//add new member
//localhost:3000/api/registerMember
module.exports.registerMember = (req, res, next) =>{
const title = req.body.title;
const initials= req.body.initials;
const firstName =req.body.firstName;
const surname = req.body.surname;
const idNumber = req.body.idNumber;
const dateOfBirth = req.body.dateofBirth;
const gender = req.body.gender;
const contactNumber = req.body.contactNumber;
const cellphoneNumber = req.body.cellphoneNumber;
const address= req.body.address;
const grossMonthlyIncome = req.body.grossMonthlyIncome;
const relationshipToMember = req.body.relationshipToMember;
const isBenefiaryLivesSameAddress = req.body.isBenefiaryLivesSameAddress;
const city = req.body.city;
const nameOfGeneralPractiner = req.body.nameOfGeneralPractiner;
const doctorAdddress = req.body.doctorAdddress;
const doctorContactNumber = req.body.doctorContactNumber;
const numOfYearsConsulted = req.body.numOfYearsConsulted;
const weight = req.body.weight;
const height = req.body.height;
const employer = req.body.employer;
const jobTitle = req.body.jobTitle;
const duration= req.body.duration;
const refContactNumber = req.body.refContactNumber;
const bankName = req.body.bankName;
const bankCode = req.body.bankCode;
const branchName = req.body.branchName;
const accHolderName = req.body.accHolderName;
const accountNumber = req.body.accountNumber;
const accountType = req.body.accountType;
const fileUpload = req.file;

var member = new Member({
  title: title,
  initials: initials,
  firstName: firstName,
  surname: surname,
  idNumber: idNumber,
  dateOfBirth: dateOfBirth,
  gender: gender,
  contactNumber: contactNumber,
  cellphoneNumber: cellphoneNumber,
  address: address,
  grossMonthlyIncome: grossMonthlyIncome,
  relationshipToMember, relationshipToMember,
  isBenefiaryLivesSameAddress: isBenefiaryLivesSameAddress,
  city: city,
  nameOfGeneralPractiner: nameOfGeneralPractiner,
  doctorAdddress: doctorAdddress,
  doctorContactNumber: doctorContactNumber,
  numOfYearsConsulted: numOfYearsConsulted,
  weight: weight,
  height: height,
  employer: employer,
  jobTitle: jobTitle,
  duration: duration,
  refContactNumber: refContactNumber,
  bankCode: bankCode,
  bankName: bankName,
  branchName: branchName,
  accHolderName: accHolderName,
  accountNumber: accountNumber,
  accountType: accountType,
  fileUpload: fileUpload,
  beneficiaryId: req.beneficiary._id
});
member.save((err, doc) => {
    if (!err)
            res.send(doc);
            const smsCode = Math.floor(Math.random()*90000)+10000;
           
               request.get({
                 headers: {'Content-Type': 'application/json', 
                           'Authorization': 'Basic ' + 
                           Buffer('2ad515aa-5a5b-40af-b1c5-3a1901d9e796:JdnPfPVZ7MKdJ261I8tSd75rAnLQyImq').toString('base64')},
                 url: 'https://rest.smsportal.com/v1/Authentication',
                 json: true,
              }, function (error, response, body) {
                 console.log(body);
                 console.log(body.token);
                 const url = 'https://rest.smsportal.com/v1/BulkMessages';
                 const options = {
                     method: 'POST',
                     headers: {Accept: 'application/json', 'Content-Type': 'text/json'}
                   };
                   var sendRequest = {
                     'messages': [ {'content': + smsCode,
                      'destination': "27606197336"} ]
                    };
                    //send message
                    request.post({
                     headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + body.token},
                     url: 'https://rest.smsportal.com/v1/bulkmessages',
                     json: true,
                     body: sendRequest
                     }, function (error, response, body) {
                     console.log(body);
                  });
                 }) 
})

}




//Update
router.put('/:id', (req,res) => {
  if(!ObjectId.isValid(req.params.id))
  return res.status(400).send(`No record with given id : ${req.params.id}`);
 
  var memb = {  
         title : req.body.title,
        initials: req.body.initials,
        firstName :req.body.firstName,
        surname : req.body.surname,
        idNumber : req.body.idNumber,
        dateOfBirth : req.body.dateofBirth,
        gender : req.body.gender,
        contactNumber : req.body.contactNumber,
        cellphoneNumber : req.body.cellphoneNumber,
        address: req.body.address,
        grossMonthlyIncome : req.body.grossMonthlyIncome,
        relationshipToMember : req.body.relationshipToMember,
        isBenefiaryLivesSameAddress : req.body.isBenefiaryLivesSameAddress,
        city : req.body.city,
        nameOfGeneralPractiner : req.body.nameOfGeneralPractiner,
        doctorAdddress : req.body.doctorAdddress,
        doctorContactNumber : req.body.doctorContactNumber,
        numOfYearsConsulted : req.body.numOfYearsConsulted,
        weight : req.body.weight,
        height : req.body.height,
        employer : req.body.employer,
        jobTitle : req.body.jobTitle,
        duration : req.body.duration,
        refContactNumber : req.body.refContactNumber,
        bankName : req.body.bankName,
        bankCode : req.body.bankCode,
        branchName : req.body.branchName,
        accHolderName : req.body.accHolderName,
        accountNumber : req.body.accountNumber,
        accountType : req.body.accountType,
};
Member.findByIdAndUpdate(req.params.id, {$set: memb},  {new:true}, (err,doc) =>{
  if(!err) {res.send(doc);}
  else{console.log('Error in member update:' + JSON.stringify(err, undefined,2)); }
})
//delete
router.delete('/:id', (req,res) => {
  if(!ObjectId.isValid(req.params.id))
  return res.status(400).send(`No record with given id : ${req.params.id}`);
 
  Member.findOneAndRemove(req.params.id, (err, doc) => {
    if(!err) {res.send(doc);}
  else{console.log('Error in member Delete:' + JSON.stringify(err, undefined,2)); }
})
})

  // Member.findByIdAndUpdate({_id:req.params.id}, req.body, {new:true, upsert: true }, function(err, member){
  //   if(err) return next(err);
  //   res.send('Updated Successfully');
  //  // res.json(member);
  // });

 });

