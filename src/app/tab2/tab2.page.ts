import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  peso: number = 0;
  pesoLB: number = 0;
  isVisible: boolean = false;
  audio: HTMLAudioElement;

  constructor() {
    this.audio = new Audio('assets/audio/alerta.mp3');
  }

  calcularPeso() {  
    this.pesoLB = this.peso * 2.20462;

    if(this.peso >= 70)
      {
        this.isVisible = true;
        this.audio.play();
        this.pesoLB = 100000000;
      }
    else
      {
        this.isVisible = false;
        this.audio.pause();
        this.audio.currentTime = 0;
      }
  }  
}
