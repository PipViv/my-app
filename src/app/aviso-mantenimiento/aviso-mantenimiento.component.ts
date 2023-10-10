import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aviso-mantenimiento',
  templateUrl: './aviso-mantenimiento.component.html',
  styleUrls: ['./aviso-mantenimiento.component.css']
})


export class AvisoMantenimientoComponente implements OnInit {
  //ESTADO DEL ANUNCIO POR DEFAULT
  anuncio: boolean = false;
  texto: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
    //console.log("Componente de aviso de mantenimiento inicializado.");

    const hoy = new Date('2023-9-13');
    const siguienteSemana = new Date();
    // Calcula la fecha del próximo fin de semana en este caso (sábado)
    siguienteSemana.setDate(hoy.getDate() + (5 - hoy.getDay() + 7) % 7);

    // Verifica si hoy es viernes o el fin de semana (sábado o domingo)
    if (hoy.getDay() == 5 || hoy.getDay() == 6 || hoy.getDay() == 0) {
      this.texto = false;
      this.anuncio = true;
      alert('¡Atención! El sitio estará en mantenimiento durante el próximo fin de semana.');

    }
  }
  closeVentanaAnuncio() {
    //console.log("Cerrando el aviso de mantenimiento.");
    this.anuncio = false;
  }

}
