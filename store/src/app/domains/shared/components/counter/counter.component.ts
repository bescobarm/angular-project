import { Component, effect, inject, Input, signal, SimpleChanges } from '@angular/core';
import { PpService } from '@shared/services/pp.service';
import { sign } from 'crypto';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration = 0;
  @Input({required:true}) message = '';

  counter = signal(0)
  counterRef: number | undefined

  ppService = inject(PpService)
  l = false

  constructor(){
    // It's not async
    // before render
    console.log("constructor")
    console.log("-".repeat(10))

    effect(() => {
      this.l = this.ppService.getP()
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    // before and during render
    console.log("ngOnChange")
    console.log("changes: ", changes)
    console.log("-".repeat(10))

    const duration = changes['duration']
    if (duration && duration.currentValue !== duration.previousValue) {
      this.doSomething()
    }
  }

  ngOnInit() {
    // after render
    // only run once
    // async, then, subs
    console.log("ngOnInit")
    console.log("duration -> ", this.duration)
    console.log("message -> ", this.message)
    console.log("-".repeat(10))

    this.counterRef = window.setInterval(() => {
      this.counter.update(statePrev => statePrev + 1)
    }, 1000)

    // this.l.set(this.ppService.ppValue())
  }

  ngAfterViewInit() {
    // after render
    // when the child were rendered
    console.log("ngAfterViewInit")
    console.log("-".repeat(10))
  }

  ngOnDestroy() {
    console.log("ngOnDestroy")
    console.log("-".repeat(10))
    window.clearInterval(this.counterRef)
  }

  doSomething() {
    console.log('change duration')
  }
}
