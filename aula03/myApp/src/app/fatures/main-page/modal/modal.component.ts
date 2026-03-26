import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  //oioioioioioioi
  
  @Output()
  onClose: EventEmitter<void> = new EventEmitter();

  toggleClose = () => {
    this.onClose.emit();
  }

}