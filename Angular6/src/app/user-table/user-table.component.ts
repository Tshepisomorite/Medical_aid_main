import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, FormArray, FormControl,Validators } from '@angular/forms';
import { UserService } from '../shared/user.service';
import {HttpClient} from '@angular/common/http';
import {MemberService } from '../member.service';   

declare var M: any;

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
  providers : [MemberService]
})
export class UserTableComponent implements OnInit {
  userDetails:any;
  panelOpenState = false;

  

  showSuccessMessage : boolean;
  serverErrorMessages: string;
 
  detailForm: FormGroup;

  @ViewChild('fileInput', {static: false}) fileInput: ElementRef;
  constructor(private userService: UserService,private fb: FormBuilder,private memberService: MemberService ,private router:
    Router, private http:HttpClient) {

    this.detailForm = fb.group({
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
      accountType : new FormControl(''),
      fileUpload : new FormControl('')



  })
  }

  ngOnInit(): void {
    this.userService.getUserProfile().subscribe(
      
      (res:any) => {
          this.userDetails =res['user'];
        },
        err => { 
          console.log(err);
          
        }
      );
    }
    onLogout(){
      this.userService.deleteToken();
      this.router.navigate(['/login']);
    }
    onFileUpload(){
      const imageBlob = this.fileInput.nativeElement.files[0];
      const file = new FormData();
      file.set('file', imageBlob);
      this.http.post
      this.http.post('http://localhost:3000', file).subscribe(response => {
        console.log(response)
      });
    }

  saveAndAddBeneficiary(){
   this.memberService.postMember(this.detailForm.value).subscribe(
     res => {
       this.showSuccessMessage = true;
       setTimeout(() => this.showSuccessMessage = false,4000 );
       console.log('user saved successfully',this.detailForm.value)
      this.router.navigateByUrl('/beneficiary');
     },
     err => {
      console.log(err);
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      }
   )
    }
  //  resetForm(form: NgForm) {
  //    this.detailForm = fb.group({
  //     title : new FormControl(''),
  //     initials: new FormControl(''),
  //     firstName : new FormControl(''),
  //     surname : new FormControl(''),
  //     idNumber : new FormControl(''),
  //     dateOfBirth : new FormControl(''),
  //     gender : new FormControl(''),
  //     contactNumber : new FormControl(''),
  //     cellphoneNumber : new FormControl(''),
  //     address: new FormControl(''),
  //     grossMonthlyIncome : new FormControl(''),
  //     relationshipToMember : new FormControl(''),
  //     isBenefiaryLivesSameAddress : new FormControl(''),
  //     city : new FormControl(''),
  //     nameOfGeneralPractiner : new FormControl(''),
  //     doctorAdddress : new FormControl(''),
  //     doctorContactNumber :new FormControl(''),
  //     numOfYearsConsulted : new FormControl(''),
  //     weight : new FormControl(''),
  //     height : new FormControl(''),
  //     employer : new FormControl(''),
  //     jobTitle : new FormControl(''),
  //     duration : new FormControl(''),
  //     refContactNumber : new FormControl(''),
  //     bankName : new FormControl(''),
  //     bankCode : new FormControl(''),
  //     branchName : new FormControl(''),
  //     accHolderName : new FormControl(''),
  //     accountNumber : new FormControl(''),
  //     accountType : new FormControl(''),
  //     fileUpload : new FormControl('')



  // })
    //};
  //}
}

