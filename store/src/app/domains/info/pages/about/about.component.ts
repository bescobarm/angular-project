import { Component, signal } from '@angular/core';
import { CounterComponent } from '@shared/components/counter/counter.component';
import { HighlightDirective } from '@shared/directives/highlight.directive';

import { WaveAudioComponent } from '@info/components/wave-audio/wave-audio.component';
import { CineComponent } from '@shared/components/cine/cine.component';

@Component({
  selector: 'app-about',
  imports: [CounterComponent, WaveAudioComponent, HighlightDirective,CineComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export default class AboutComponent {
  duration = signal(1000)
  message = signal('hola')

  row = 5
  col = 4

  changeDuration(event: Event) {
    const input = event.target as HTMLInputElement
    this.duration.set(input.valueAsNumber)
  }

  changeMessage(event: Event) {
    const input = event.target as HTMLInputElement
    this.message.set(input.value)
  }
}
