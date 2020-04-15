import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugaresService } from '../../_services/lugares.service';

@Component({
  selector: 'app-lugares-view',
  templateUrl: './lugares-view.component.html',
  styleUrls: ['./lugares-view.component.sass']
})
export class LugaresViewComponent {
  @Input()
  public lugar;

  @Input()
  public index: number;

  public exibirMapa: boolean;

  constructor(
    private route: ActivatedRoute,
    public lugaresService: LugaresService
  ) {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id');

      if (!isNaN(id)) {
        this.lugar = this.lugaresService.lugares[id];
        this.index = id;
      }
    });
  }

  public toogleMap() {
    this.exibirMapa = !this.exibirMapa;
  }
}
