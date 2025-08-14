import { Component, Input, OnInit, OnChanges, OnDestroy, SimpleChange, SimpleChanges } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-logger',
  imports: [CommonModule],
  template: `

          <div class = "logger">
            <h2> Logger Component</h2>
            <p> Message from parent: <strong>{{ message }} </strong></p>
            <div *ngFor = "let log of logs">
                {{log}}
            </div>
          </div>
  
  `,
  styleUrl: './logger.css'
})
export class Logger implements OnInit, OnChanges, OnDestroy{

  // Input property to receive the data from parent
  @Input() message:string = '';

  logs: string[] = [];
  
    constructor()
    {
      this.logs.push("Constructor called.");
        console.log("Logger: Constructor Called.");
    }

    ngOnChanges(changes: SimpleChanges): void {
      const changesString = JSON.stringify(changes, null,2);
      this.logs.push(`ngOnChanges called. Changes: ${changesString}`);
    console.log(`Logger: ngOnChanges called. Changes:`, changes);
    }

    ngOnInit(): void {
       this.logs.push('ngOnInit called.');
    console.log('Logger: ngOnInit called.');
    }

    ngOnDestroy(): void {
       console.log('Logger: ngOnDestroy called.');
    //alert('Logger component is being destroyed!');
    }
}
