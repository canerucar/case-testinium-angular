import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-canditates',
  templateUrl: './canditates.component.html',
  styleUrls: ['./canditates.component.scss'],
})
export class CanditatesComponent implements OnInit {

  usersFilter;
  filteredUsers: any[];
  filterBy;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((usersFilter) => {
        this.usersFilter = usersFilter;
        this.filteredUsers = [...this.usersFilter];
      });
  }

  filter() {
    this.filteredUsers = [
      ...this.usersFilter.filter((user) => user.name.includes(this.filterBy)),
    ];

    console.log(this.filteredUsers);
  }
}
