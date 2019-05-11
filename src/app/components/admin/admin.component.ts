import {Component, OnInit} from '@angular/core';
import {TokenService} from '../../services/token.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  currentTab: string;

  constructor(private tokenService: TokenService) {
  }

  ngOnInit() {
    this.setTab('tests');
    this.tokenService.checkAuthorities('ROLE_MANAGER');
  }

  setTab(tab: string) {
    this.currentTab = tab;
  }
}
