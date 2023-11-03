import { Component, OnInit } from '@angular/core';
import { Cafe } from './cafe';
import { CafeService } from './cafe.service';

@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.component.html',
  styleUrls: ['./cafe.component.css']
})
export class CafeComponent implements OnInit {
  cafes: Array<Cafe> = [];
  constructor(private cafeService: CafeService) { }

  getCafes(): void {
    this.cafeService.getCafes().subscribe((cafes) => {
      this.cafes = cafes;
    });
  }

  countCafesByTipo(tipo: string): number {
    return this.cafes.filter(cafe => cafe.tipo === tipo).length;
  }

  getCafeTipoContador(): { [tipo: string]: number } {
    const cafeTipoContador: { [tipo: string]: number } = {};
    this.cafes.forEach(cafe => {
      if (cafe.tipo in cafeTipoContador) {
        cafeTipoContador[cafe.tipo]++;
      } else {
        cafeTipoContador[cafe.tipo] = 1;
      }
    });
    return cafeTipoContador;
  }

  ngOnInit() {
    this.getCafes();
  }

}
