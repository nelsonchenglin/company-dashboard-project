import { Component, Input, OnInit } from '@angular/core';
import { APIService } from 'src/app/api.service';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.css'],
})
export class TeamCardComponent implements OnInit {
  @Input() team: any;
  @Input() numProjects: string = '';

  teamMemberId: number = 0;
  teamMemberName: string = '';

  constructor(private apiService: APIService) {}

  ngOnInit(): void {
    console.log(this.team);
  }

  handleClick(memberId: number, memberName: string) {
    this.apiService.setMemberId(memberId, memberName);
    console.log(memberName);
  }
}
