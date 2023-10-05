import { Component ,OnInit, ChangeDetectorRef} from '@angular/core';
import { Users } from 'src/app/Login/users';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  newUser: Users = new Users();
  UsersArray!: Users[] 

  constructor(private userService: UserService , private cdRef: ChangeDetectorRef) { }
  
  ngOnInit() {
    this.UsersArray = this.userService.UsersArray;
  }

  openForEdit(user: Users){
    this.newUser = user;
  }

  addEditUser(){
    this.userService.addUser(this.newUser);
    this.newUser = new Users();
  }

  DeleteUser() {
      console.log('Deleting user:', this.newUser);
     this.userService.deleteUser(this.newUser);
      this.cdRef.detectChanges();
      this.newUser = new Users(); 
  }

}
