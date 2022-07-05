import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-primary',
  templateUrl: './button-primary.component.html',
  styleUrls: ['./button-primary.component.css']
})
export class ButtonPrimaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() buttonName: string = ""; // Receive parameter from parent component

  @Input() buttonDisabled: boolean = false;  // Receive parameter from parent component


}
