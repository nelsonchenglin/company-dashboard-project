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
  userName: string = '';
  userProjects: Project[] = [];
  memberId: number = 0;
  memberName: string = '';

  constructor(private apiService: APIService) {}

  ngOnInit(): void {
    this.memberName = this.apiService.getMemberName();
    console.log(this.memberName, this.apiService.getMemberName());
    this.apiService
      .getUserProjects(this.apiService.getMemberId())
      .subscribe((data) => {
        this.userProjects = JSON.parse(JSON.stringify(data));
        console.log(this.userProjects);
      });
  }
}
