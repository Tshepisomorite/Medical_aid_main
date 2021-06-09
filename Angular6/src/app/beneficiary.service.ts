import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Member } from './Member';
import { MemberService } from './member.service';
import { Beneficiary } from './Beneficiary';

@Injectable({
  providedIn: 'root'
})
export class BeneficiaryService {
  list: Beneficiary[];
  constructor( private http: HttpClient) { }
  
postBeneficiary(benefiaciary: Beneficiary){
  return this.http.post(environment.apiBaseUrl + '/registerBeneficiary',benefiaciary)
}

  // retrieveMembers(){
  //   return  this.http.get(environment.apiBaseUrl + '/registerMember')
  //   .toPromise()
  //   .then(response =>{
  //     this.list = response as Beneficiary[]
  //   })
  getBeneficiaryProfile() {
    return this.http.get(environment.apiBaseUrl + '/benprofile')
  }
      
 getMemberlist() {
  return this.http.get(environment.apiBaseUrl + '/allMembers')
 }
  
    }
   
   

