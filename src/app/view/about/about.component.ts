import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit {
  isPdfOpen = false;
  cvPdfPath = 'assets/pdf/Dilmer_Ramirez_Ramirez_CV.pdf';

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.about-section .fade-in, .about-section .slide-in-left, .about-section .slide-in-right').forEach(el => {
      observer.observe(el);
    });
  }

  openPdfViewer(): void {
    this.isPdfOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closePdfViewer(): void {
    this.isPdfOpen = false;
    document.body.style.overflow = '';
  }
}
