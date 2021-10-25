import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  userData;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser() {
    const userId = Number(this.route.snapshot.paramMap.get('id'));
    this.userService
      .getById(userId)
      .subscribe((data) => (this.userData = data));
  }
}
