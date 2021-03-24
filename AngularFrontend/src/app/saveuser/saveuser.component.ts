import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {User} from '../models/User';
@Component({
  selector: 'app-saveuser',
  templateUrl: './saveuser.component.html',
  styleUrls: ['./saveuser.component.css']
})
export class SaveuserComponent implements OnInit {

  isClicked;
  message = '';
  user: User = {};
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }
  saveUser() {
    if (this.user.email.length > 0 && this.user.name.length > 0
       && this.user.password.length >= 8 && this.user.age > 0) {
    this.dataService.saveUser(this.user).subscribe(
      data => {
        this.isClicked = true;
        this.message = 'User saved Successfully';
      },
      err => {
        this.isClicked = true;
        this.message = err.error.message;
      }
    );
    }
  }

}
