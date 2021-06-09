import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BeneficiaryService } from '../beneficiary.service';
import { Member } from '../Member';
import {Location} from '@angular/common';
import { MemberService} from '../member.service';
import { UserService } from '../shared/user.service'
@Component({
  selector: 'app-benefiaciary',
  templateUrl: './benefiaciary.component.html',
  styleUrls: ['./benefiaciary.component.css']
})
export class BenefiaciaryComponent implements OnInit {
  detailForm: FormGroup;
  membersList: Member[];
  showSuccessMessage : boolean;
  serverErrorMessages: string;
  userDetails: any;
  benDetails: any;



  constructor(private _location: Location,private fb: FormBuilder,private router:
    Router, public memberService: MemberService, public beneficiaryService: BeneficiaryService, private userService: UserService) {
      this.detailForm = fb.group({
      selectMember : new FormControl(''),
      _id : new FormControl(''),
      title : new FormControl(''),
      initials: new FormControl(''),
      firstName : new FormControl(''),
      surname : new FormControl(''),
      idNumber : new FormControl(''),
      dateOfBirth : new FormControl(''),
      gender : new FormControl(''),
      contactNumber : new FormControl(''),
      cellphoneNumber : new FormControl(''),
      address: new FormControl(''),
      grossMonthlyIncome : new FormControl(''),
      relationshipToMember : new FormControl(''),
      isBenefiaryLivesSameAddress : new FormControl(''),
      city : new FormControl(''),
      nameOfGeneralPractiner : new FormControl(''),
      doctorAdddress : new FormControl(''),
      doctorContactNumber :new FormControl(''),
      numOfYearsConsulted : new FormControl(''),
      weight : new FormControl(''),
      height : new FormControl(''),
      employer : new FormControl(''),
      jobTitle : new FormControl(''),
      duration : new FormControl(''),
      refContactNumber : new FormControl(''),
      bankName : new FormControl(''),
      bankCode : new FormControl(''),
      branchName : new FormControl(''),
      accHolderName : new FormControl(''),
      accountNumber : new FormControl(''),
      accountType : new FormControl('')

  })
 
  }
   public goBack() { 
    this._location.back()
  }

  ngOnInit(): void {
   
   // this.beneficiaryService.retrieveMembers();
    this.userService.getUserProfile().subscribe(
      
      (res:any) => {
          this.userDetails =res['user'];
        },
        err => { 
          console.log(err);
          
        }
      );
    }
    
   //this.membersList = this.memberService.list;
  
   onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }
  
  saveBeneficiary(){
    this.beneficiaryService.postBeneficiary(this.detailForm.value).subscribe(
      res =>{
        this.showSuccessMessage = true;
              setTimeout(() => this.showSuccessMessage = false,4000 );
              // this.router.navigateByUrl('/beneficiary');
             // this.resetForm();
      },
      
      err => {
        console.log(err);
        if(err.status === 422){
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else {
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
        }
      }
      
    )
    //include a reset form
    console.log("form was successfully submitted",this.detailForm.value);
    // after validating and successfully adding member navigate to add beneficiary page
   // this.router.navigateByUrl('/usertable');
  }
  resetForm(){
    
      this.detailForm =new FormGroup({
        id     : new FormControl(''),
        title : new FormControl(''),
        initials: new FormControl(''),
        firstName : new FormControl(''),
        surname : new FormControl(''),
        idNumber : new FormControl(''),
        dateOfBirth : new FormControl(''),
        gender : new FormControl(''),
        contactNumber : new FormControl(''),
        cellphoneNumber : new FormControl(''),
        address: new FormControl(''),
        grossMonthlyIncome : new FormControl(''),
        relationshipToMember : new FormControl(''),
        isBenefiaryLivesSameAddress : new FormControl(''),
        city : new FormControl(''),
        nameOfGeneralPractiner : new FormControl(''),
        doctorAdddress : new FormControl(''),
        doctorContactNumber :new FormControl(''),
        numOfYearsConsulted : new FormControl(''),
        weight : new FormControl(''),
        height : new FormControl(''),
        employer : new FormControl(''),
        jobTitle : new FormControl(''),
        duration : new FormControl(''),
        refContactNumber : new FormControl(''),
        bankName : new FormControl(''),
        bankCode : new FormControl(''),
        branchName : new FormControl(''),
        accHolderName : new FormControl(''),
        accountNumber : new FormControl(''),
        accountType : new FormControl('')
  
    });
   this.resetForm();
    this.serverErrorMessages= '';
  }

}
