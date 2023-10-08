import { Component ,OnInit} from '@angular/core';
import { Users } from './users';
import { UserService } from 'src/app/Services/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{

  email: string = ''; 
  password: string = '';

  newUser: Users = new Users();
  UsersArray!: Users[] 

  constructor(private userService: UserService) { }
  
  ngOnInit() {
    this.UsersArray = this.userService.UsersArray;
  }
  Access() {
    this.userService.Access(this.email,this.password);
    this.email=''; 
    this.password= '';
  }

  addEditUser(){
    this.userService.addUser(this.newUser);
    this.newUser = new Users();
  }

 

}
