import { Component, OnInit } from '@angular/core';
import { UserVm } from '../../models/UserVm';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  // public imgSrc: string = '~~\ApplicationDesign\src\app\img_resource\3588964.jpg';
  public userList: UserVm[] = [
    {userName: 'sazzad', password: '1234'},
    {userName: 'shuvo', password: '1234'},
    {userName: 'mehedi', password: '1234'},
    {userName: 'samir', password: '1234'},
    {userName: 'nakib', password: '1234'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
