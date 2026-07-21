import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-professional-skill',
  templateUrl: './professional-skill.component.html',
  styleUrls: ['./professional-skill.component.css']
})
export class ProfessionalSkillComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.skill-section .fade-in').forEach(el => {
      observer.observe(el);
    });
  }
}
