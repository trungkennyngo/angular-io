import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  displayCounter(count) {
    alert('parent count'+count);
  }  
}

/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}

import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-root',
    template: `
    test output<hr>
    <app-child></app-child>`
})
export class AppComponent implements OnInit {
    ngOnInit() {
    }
}


*/