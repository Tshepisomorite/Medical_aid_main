import { Component, OnInit } from '@angular/core';
import { Member } from '../Member';
import { MemberService } from '../member.service';
import {Location} from '@angular/common';
import {BeneficiaryService } from '../beneficiary.service';
import { Beneficiary } from '../Beneficiary';
import { Router} from '@angular/router';
declare var M: any; 
@Component({
  selector: 'app-manage-members',
  templateUrl: './manage-members.component.html',
  styleUrls: ['./manage-members.component.css'],
  providers: [MemberService]
})
export class ManageMembersComponent implements OnInit {

list: Member[];
benList: Beneficiary[];
  constructor(private beneficiaryService: BeneficiaryService,private _location: Location, public memberService: MemberService,private router: Router) { }
  //   this.memberService.detailForm = { 
  //     _id: "",
  //     title : "",
  //     initials: "",
  //     firstName : "",
  //     surname : "",
  //     idNumber : "",
  //     dateOfBirth : "",
  //     gender : "",
  //     contactNumber :  "",
  //     cellphoneNumber :  "",
  //     address: "",
  //     grossMonthlyIncome :  "",
  //     isBenefiaryLivesSameAddress :  "",
  //     city :  "",
  //     nameOfGeneralPractiner :  "",
  //     doctorAdddress :  "",
  //     numOfYearsConsulted :  "",
  //     weight :  "",
  //     height :  "",
  //     employer :  "",
  //     jobTitle :  "",
  //     duration :  "",
  //     refContactNumber :  "",
  //     bankName : "",
  //     bankCode : "",
  //     branchName :  "",
  //     accHolderName : "",
  //     accountNumber :  "",
  //     accountType :  "",
  //     fileUpload :  "",
  //   }
  // }
  

  ngOnInit(): void {
    this. onEdit();
  }
  public goBack() { 
    this._location.back()
  }
  onViewBeneficiary(_id: number){
    this.beneficiaryService.getBeneficiaryProfile().subscribe((res) =>{
      this.beneficiaryService.list = res as Beneficiary[];
      this.router.navigateByUrl('/benprofile');
      
    })


  }

  
  onEdit(){
    this.memberService.getMemberlist().subscribe((res) =>{
      this.memberService.list = res as Member[];
    });
  } 

  onDelete(_id: string) {
    if(confirm('Are you sure to delete this record?')==true) {
      this.memberService.deleteMember(_id).subscribe((res) => {
      M.toast({html: 'Deleted successfully', classes: 'rounded'});
      });
    }
  }

}

