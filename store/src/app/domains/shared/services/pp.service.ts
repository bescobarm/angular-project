import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PpService {
  // this is an example to use a shared signal value in different components
  // check counter and header components to view the usage
  pp = signal(false)

  public ppValue = computed(() => { return this.pp() } );

  getP() {
    return this.ppValue()
  }

  changeP() {
    const pV = this.pp()
    this.pp.set(!pV)
  }

}
