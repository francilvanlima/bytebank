import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bytebank';
  // destino: number;
  // valor: number;
  // Ao invés de usar as variáveisa acima. Usaremos:
  transferencia: any;

  transferir($event) {
    console.log($event);
    this.transferencia = $event;
  }
}
