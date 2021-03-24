import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-updateusers',
  templateUrl: './updateusers.component.html',
  styleUrls: ['./updateusers.component.css']
})
export class UpdateusersComponent implements OnInit {
  users;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getUsers().subscribe(
      data => {
        this.users = data;
      }
    );
  }

  updateUser(user) {
    this.dataService.updateUser(user).subscribe(
        data => {
          this.ngOnInit();
        }
    );
  }
}
