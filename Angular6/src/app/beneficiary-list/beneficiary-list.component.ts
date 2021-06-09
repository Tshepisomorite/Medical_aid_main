import { Component, OnInit } from '@angular/core';
import { BeneficiaryService } from '../beneficiary.service';
@Component({
  selector: 'app-beneficiary-list',
  templateUrl: './beneficiary-list.component.html',
  styleUrls: ['./beneficiary-list.component.css']
})
export class BeneficiaryListComponent implements OnInit {
benDetails:any
  constructor(public beneficiaryService: BeneficiaryService) { }

  ngOnInit(): void {
    this.beneficiaryService.getBeneficiaryProfile().subscribe(
      
      (res:any) => {
          this.benDetails =res['beneficiary'];
        },
        err => { 
          console.log(err);
          
        }
      );
    
  }

}
