import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Contact } from "src/app/models/contact.model";

@Component({
  selector: 'app-contactCard',
  templateUrl: 'contactCard.component.html',
  styleUrls: ['contactCard.component.css']
})

export class ContactCardComponent {
  @Input() contact: Contact | null = null;
  @Output() prepareDeleteHandler = new EventEmitter<Contact | null>();

  prepareDelete() {
    this.prepareDeleteHandler.emit(this.contact);
  }
}
