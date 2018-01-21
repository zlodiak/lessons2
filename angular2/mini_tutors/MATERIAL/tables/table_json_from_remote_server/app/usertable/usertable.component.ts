import { Component, OnInit, ViewEncapsulation } from '@angular/core';


import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';

import { UserService } from '../services/user.service';
import { User} from '../models/user-model';


@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.scss'],
  providers: [UserService]
})
export class UsertableComponent implements OnInit {

	dataSource = new UserDataSource(this.userService);
	displayedColumns = ['name', 'email', 'phone', 'company'];

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}


export class UserDataSource extends DataSource<any>{

	constructor(private userService: UserService) { 
		super();
	}

	connect(): Observable<User[]> {
		return this.userService.getUser();
	}

	disconnect() {

	}

}