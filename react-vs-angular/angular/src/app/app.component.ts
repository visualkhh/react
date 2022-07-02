import { Component } from '@angular/core';
import {ProjectService} from "./services/ProjectService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count?: number;

  constructor(public projectService: ProjectService) {
    projectService.$countSubject.subscribe(it => this.count = it)
  }
}
