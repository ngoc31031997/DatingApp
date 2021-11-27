import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from '../_model/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model :any = {};
  currentUser$ : Observable<User>;
  constructor(
    public accountService: AccountService,
    private router:Router,
    private toastrService:ToastrService)
    {
     }

  ngOnInit(): void {
    this.currentUser$ = this.accountService.currentUser$;
  }

  login(){
    console.log(this.model);
    this.accountService.login(this.model).subscribe(response =>{
      this.router.navigateByUrl('/members')
      console.log(response);
    },error=>{
      console.log(error);
      this.toastrService.error(error.error);
    });
  }

  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/')
  }
}
