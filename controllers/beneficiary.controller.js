const { Router } = require('express');
const { result } = require('lodash');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
//const ObjectId = require('mongoose').Types.ObjectId;

const Beneficiary =  require('../models/beneficiary.model');
//const beneficiary = require('../models/beneficiary.model');


//Inserting all the beneficiary info into the database
//localhost:3000/api/registerBeneficiary
exports.registerBeneficiary = (req, res, next) =>{
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

const beneficiary = new Beneficiary({
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
  memberId: req.member._id
});
beneficiary.save()
.then(result => {
  console.log('Created Beneficiary!');
  res.status(200).json(doc);
})
.catch(err =>{

  console.log(err);
})
console.log(req.member._id)
    // beneficiary.save((err, doc) => {
    //     if (!err)
    //             res.send(doc);
    //         else {
    //             if (err.code == 11000)
    //                 res.status(422).send(['Duplicate member   found.']);
    //             else
    //                 return next(err);
    //         }
    // })
    
}

//localhost:3000/api/getbenecifiary
module.exports.getbeneficiary = (req, res) =>
{
  res.send('Helo from ben');
} 

//Get all beneficiaries
module.exports.allBeneficiaries= (req, res) => {
    Beneficiary.find({})
    .populate('memberId')
    .exec((err,result) =>{
        if(err)
         return next(err);
         else
         res.send(result);

    })
//   Beneficiary.find(function(err, result) {
//     if(err) return next(err);
//     res.send(result);
//   })
  
}
module.exports.getOneBen = (req, res) => {
    Beneficiary.findById(req.params.id, function(err, beneficiary){
      if(err) return next(err);
      res.send(beneficiary);
    })
  }
  
  module.exports.get = (req, res) => {
    Beneficiary.findByIdAndRemove(req.params.id, function(err, beneficiary){
      if(err) return next(err);
      res.send('Beneficiary deleted successfully');
    });
  };
  
  module.exports.put = (req, res) => {
    Member.findByIdAndUpdate({_id:req.params.id}, req.body, {new:true, upsert: true }, function(err, beneficiary){
      if(err) return next(err);
      res.send('Updated Successfully');
     // res.json(member);
    });
  };



// //Update
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

const ben = {
    title : req.body.title,
    initials: req.body.initials,
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
Beneficiary.findByIdAndUpdate(req.params.id, {$set: ben},  {new:true}, (err,doc) =>{
  if(!err) {res.send(doc);}
  else{console.log('Error in beneficiary update:' + JSON.stringify(err, undefined,2)); }
})
//delete
router.delete('/:id', (req,res) => {
  if(!ObjectId.isValid(req.params.id))
  return res.status(400).send(`No record with given id : ${req.params.id}`);
 
  Beneficiary.findOneAndRemove(req.params.id, (err, doc) => {
    if(!err) {res.send(doc);}
  else{console.log('Error in beneficiary Delete:' + JSON.stringify(err, undefined,2)); }
})
})

});

//getting all the benefiiaries of a particular member.
module.exports.benProfile = (req, res, next) => {
    Beneficiary.findOne({_id: req._id},
        (err, beneficiary)=> {
            if(!beneficiary)
               return res.status(404).json({ status: false, message: 'Beneficiary record not found.' });
             else
                return res.status(200).json({ status: true, beneficiary : _.pick(beneficiary,
                    ['idNumber','firstName', 'title']) });
        })
}


// module.exports = router;