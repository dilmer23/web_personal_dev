import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'https://formspree.io/f/your-form-id';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, AfterViewInit {
  form = { name: '', email: '', message: '' };
  sending = false;
  sent = false;
  error = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.contact-section .fade-in, .contact-section .slide-in-left, .contact-section .slide-in-right').forEach(el => {
      observer.observe(el);
    });
  }

  onSubmit(): void {
    if (!this.form.name || !this.form.email || !this.form.message) return;
    this.sending = true;
    this.error = '';
    this.http.post(API_URL, this.form).subscribe({
      next: () => { this.sent = true; this.sending = false; this.form = { name: '', email: '', message: '' }; },
      error: () => { this.error = 'Error al enviar. Intenta de nuevo.'; this.sending = false; }
    });
  }
}
