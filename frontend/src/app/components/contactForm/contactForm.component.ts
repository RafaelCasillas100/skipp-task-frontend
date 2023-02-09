import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Contact } from "src/app/models/contact.model";
import { ContactService } from "src/app/services/contact.service";

@Component({
  selector: 'app-contactForm',
  templateUrl: 'contactForm.component.html'
})

export class ContactFormComponent implements OnInit {
  contact: Contact = new Contact();
  contactId: string | null = null;
  errorMessage: string = '';
  successMessage: string = '';
  redirectCounter: number = 5;
  loading: boolean = false;

  constructor(
    private contactService: ContactService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (!params['id']) return;
      this.contactId = params['id'];
      this.getContact();
    });
  }

  onSubmit() {
    if (this.contactId) this.updateContact();
    else this.createContact();
  }

  getContact() {
    this.contactService.getContact(this.contactId!).subscribe({
      next: (contact) => {
        this.contact = contact;
        this.loading = false;
      },
      error: (error) => {
        this.errorMessage = error.error.message;
        this.loading = false;
      }
    })
  }

  createContact() {
    this.loading = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.contactService.createContact(this.contact).subscribe({
      next: () => {
        this.loading = false;
        this.redirectToHome('Contact successfully created!');
      },
      error: (error) => {
        this.errorMessage = error.error.message;
        this.loading = false;
      }
    })
  }

  updateContact() {
    this.loading = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.contactService.updateContact(this.contact).subscribe({
      next: () => {
        this.loading = false;
        this.redirectToHome('Contact successfully updated!');
      },
      error: (error) => {
        this.errorMessage = error.error.message;
        this.loading = false;
      }
    })
  }

  redirectToHome(successMessage: string) {
    this.successMessage = successMessage;
    setInterval(() => this.redirectCounter--, 1000);
    setTimeout(() => {
      this.router.navigate(['/'], { replaceUrl: true });
    }, 5000);
  }
}
