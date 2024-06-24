import { Component, Input } from '@angular/core';
import { APIService } from 'src/app/api.service';
import { Project } from 'src/app/project.model';
import { User, defaultUser } from 'src/app/user.model';

@Component({
  selector: 'app-user-projects',
  templateUrl: './user-projects.component.html',
  styleUrls: ['./user-projects.component.css'],
})
export class UserProjectsComponent {
  userProjects: Project[] = [];
  memberId: number = 0;
  member: User = defaultUser;

  constructor(private apiService: APIService) {}

  ngOnInit(): void {
    this.apiService
      .getUserProjects(this.apiService.getMemberId())
      .subscribe((data) => {
        this.userProjects = JSON.parse(JSON.stringify(data));
      });

    this.apiService
      .findUserById(this.apiService.getMemberId())
      .subscribe((userData) => {
        this.member = userData;
        console.log('member info', this.member);
        console.log(this.userProjects);
      });
  }
}
