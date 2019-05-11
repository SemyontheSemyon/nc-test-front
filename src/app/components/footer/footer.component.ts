import {Component, OnInit} from '@angular/core';
import {faFacebook, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faYoutube = faYoutube;
  faFacebook = faFacebook;
  faTwitter = faTwitter;

  constructor() {
  }

  ngOnInit() {
  }

}
