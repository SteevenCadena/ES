
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ES');

  // Modal y mensajes
  showModal = false;
  mensajes = [
    '¡Solo tú!',
    'No necesito más',
    'Te adoraría lo que dure la ETERNIDAD',
    'Debes ser perfecta para...',
    '...perfecto para...',
    'Perfecata para mi',
    'MI AMOR',
    '¿Cómo fue?',
    '¿Qué de papel cambié?',
    'Eras mi amiga y ahora eres mi mujer',
    'Debes ser perfectamente',
    'EXACTAMENTE',
    'Lo que yo siempre soñé',
  ];
  mensajeIndex = 0;

  abrirModal() {
    this.showModal = true;
    this.mensajeIndex = 0;
  }

  cerrarModal() {
    this.showModal = false;
  }

  siguienteMensaje() {
    if (this.mensajeIndex < this.mensajes.length - 1) {
      this.mensajeIndex++;
    } else {
      this.mensajeIndex = 0;
    }
  }
}
