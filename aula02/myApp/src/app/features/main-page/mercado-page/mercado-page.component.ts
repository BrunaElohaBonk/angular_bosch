import { Component } from '@angular/core';
import MockMercado, {Mercado} from './CardMercado.mock';

@Component({
  selector: 'app-mercado-page',
  templateUrl: './mercado-page.component.html',
  styleUrls: ['./mercado-page.component.css']
})
export class MercadoPageComponent {
  protected mercados: Mercado[] = []

  protected modalAberto = false;

  constructor () {
    this.mercados = MockMercado;
  }

  abrirModal(mercadoo: any) {
    this.modalAberto = true;
  }

  fecharModal() {
    this.modalAberto = false;
  }
}
