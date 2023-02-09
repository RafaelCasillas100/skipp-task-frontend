import { Component, OnInit } from "@angular/core";
import { Contact } from "src/app/models/contact.model";
import { AuthService } from "src/app/services/auth.service";
import { ContactService } from "src/app/services/contact.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
  errorMessage: string = '';
  loading: boolean = true;
  contacts: Contact[] = [];
  contactToDelete: Contact | null = null;

  constructor(
    private authService: AuthService,
    private contactService: ContactService
  ) { }

  ngOnInit(): void {
    this.getContacts();
  }

  get user() {
    return this.authService.user;
  }

  getContacts() {
    this.errorMessage = '';
    this.contactService.getContacts().subscribe({
      next: (contacts) => {
        this.contacts = contacts;
        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
        if (error.status = 404) {
          this.contacts = [];
          return;
        }
        this.errorMessage = error.error.message || 'An unespected error ocurred';
      }
    })
  }

  prepareDeleteHandler(contact: Contact | null) {
    this.contactToDelete = contact;
  }

  deleteContact() {
    this.loading = true;
    this.contactService.deleteContact(this.contactToDelete!._id!).subscribe({
      next: () => {
        this.getContacts();
      },
      error: (error) => {
        this.errorMessage = error.error.message || 'An unespected error ocurred';
        this.loading = false;
      }
    })
  }
}
