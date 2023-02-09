import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { Contact } from "../models/contact.model";

@Injectable({
  providedIn: 'root'
})

export class ContactService {
  constructor(private http: HttpClient) { }

  getContact(contactId: string) {
    return this.http.get<Contact>(environment.API + '/contact/' + contactId);
  }

  getContacts() {
    return this.http.get<Contact[]>(environment.API + '/contact');
  }

  createContact(contact: Contact) {
    return this.http.post<Contact>(environment.API + '/contact', { contact });
  }

  updateContact(contact: Contact) {
    return this.http.put<Contact>(environment.API + '/contact', { contact });
  }

  deleteContact(contactId: string) {
    return this.http.delete(environment.API + '/contact/' + contactId);
  }
}