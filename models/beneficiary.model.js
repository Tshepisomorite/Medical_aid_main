const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const beneficiarySchema =  new Schema({ 

    title: {
        type: String,
        
    },
    initials: {
        type: String,
       
    },
    firstName: {
        type: String,
        
    },
    surname: {
        type: String,
       
    },
    idNumber: {
        type: Number,
       
    },
    dateOfBirth:{
        type:Date,
        
    },
    gender: {
        type:String,
        
    },
    contactNumber:{
        type: Number,
        
    },
    cellphoneNumber:{
        type: Number,
       
    },
    address:{
        type: String,
        
    },
    grossMonthlyIncome:{
        type: Number,
        
    },
    relationshipToMember :{
        type: String,
  
    },
    isBenefiaryLivesSameAddress: {
        type: String,
        
    },
    city: {
        type: String,
        
    },
    nameOfGeneralPractiner:{
        type: String,
       
    },
    doctorAdddress: {
        type: String,
      
    },
    doctorContactNumber: {
        type: Number,
        
    },
    numOfYearsConsulted: {
        type: Number,
        
    },
    weight: {
        type: Number,
      
    },
    height: {
        type: Number,
    
    },
    employer: {
        type: String,
     
    },
    jobTitle: {
        type: String,
       
    },
    duration: {
        type: Number,
        
    },
    refContactNumber: {
        type: Number,
       
    },
    bankName: {
        type: String,
     
    },
    bankCode: {
        type: Number,
        
    },
    branchName: {
        type: String,
       
    },
    accHolderName: {
        type: String,
       
    },
    accountNumber: {
        type: Number,
       
    },
    accountType: {
        type: String,
       
    },
    fileUpload: {
        type: String,
 
    },
    memberId: {
        type: Schema.Types.ObjectId,
        ref: 'Member',
        required: false
        
    }

});
module.exports =  mongoose.model('Beneficiary', beneficiarySchema);
