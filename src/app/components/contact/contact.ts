import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ThemeToggle } from '../theme-toggle/theme-toggle';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, ThemeToggle],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact implements OnInit {
  formData = { 
    name: '', 
    email: '', 
    subject: '', 
    message: '' 
  };

  statusMessage: string = '';
  isSuccess: boolean = false;
  isSending: boolean = false;

  ngOnInit() {
    emailjs.init("68z0uBlWRfsJZ27os");
  }

  onSubmit(): void {
    if (this.isSending) return;

    this.isSending = true;
    this.statusMessage = "Sending your message...";

    const serviceID = "service_smleevn";
    const templateID = "template_tfp5wtk";
    const autoReplyID = "template_g6bul6l";

    const templateParams = {
      name: this.formData.name,
      email: this.formData.email,
      subject: this.formData.subject,
      message: this.formData.message
    };

    emailjs.send(serviceID, templateID, templateParams)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        return emailjs.send(serviceID, autoReplyID, templateParams);
      })
      .then(() => {
        this.isSuccess = true;
        this.statusMessage = "Message sent!";
        this.formData = { name: '', email: '', subject: '', message: '' };
      })
      .catch((error) => {
        console.error('FAILED...', error);
        this.isSuccess = false;
        this.statusMessage = "Something went wrong. Please check your connection and try again.";
      })
      .finally(() => {
        this.isSending = false;
      });
  }
}
