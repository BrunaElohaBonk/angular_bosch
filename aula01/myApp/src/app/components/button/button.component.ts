import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  // isClicked: boolean = false;

  @Output()
  Click: EventEmitter<void> = new EventEmitter();

  @Input()
  label: string = "";

  clicked = () => {
    this.Click.emit();
  }

  // clicked = () => {
  //   console.log("clicado");
  //   this.isClicked = !this.isClicked;
  // }
}
