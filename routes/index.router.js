const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const ctrlMember = require('../controllers/member.controller');
const ctrlBeneficiary = require('../controllers/beneficiary.controller');

const jwtHelper = require('../config/jwtHelper');
//user registration and login routes
router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);

router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);

//member routes
router.post('/registerMember', ctrlMember.registerMember);
router.get('/getmember', ctrlMember.getmember );
router.get('/allMembers', ctrlMember.allMembers)
router.get(':/id', ctrlMember.getOneMember);
//router.put('/:id', ctrlMember.put);
router.delete('/:id', ctrlMember.get);

//beneficiaries routes

router.get('/getbeneficiary', ctrlBeneficiary.getbeneficiary);
router.post('/registerBeneficiary', ctrlBeneficiary.registerBeneficiary);
router.get('/allBeneficiaries',ctrlBeneficiary.allBeneficiaries);
router.get(':/id', ctrlBeneficiary.getOneBen);
router.get('/benprofile' ,ctrlBeneficiary.benProfile)
//router.put('/:id', ctrlBeneficiary.put);
router.delete('/:id', ctrlBeneficiary.get)

module.exports = router; 



 