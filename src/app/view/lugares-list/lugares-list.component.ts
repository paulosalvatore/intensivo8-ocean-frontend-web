import { Component } from '@angular/core';
import { LugaresService } from '../../_services/lugares.service';

@Component({
  selector: 'app-lugares-list',
  templateUrl: './lugares-list.component.html',
  styleUrls: ['./lugares-list.component.sass']
})
export class LugaresListComponent {
  constructor(public service: LugaresService) {
  }
}
