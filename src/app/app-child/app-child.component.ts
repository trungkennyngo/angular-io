
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-app-child',
  templateUrl: './app-child.component.html',
  styleUrls: ['./app-child.component.css']
})
export class AppChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() valueChange = new EventEmitter();
  counter = 0;
  valueChanged() { 
      this.counter = this.counter + 1;
      let counter = this.counter + 1; alert(counter);
      this.valueChange.emit(counter);
  }

}
