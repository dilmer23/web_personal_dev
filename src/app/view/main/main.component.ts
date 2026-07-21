import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterViewInit {
  experienceItems = [
    {
      role: 'Programador Mobile',
      company: 'ProximateApps',
      period: 'Agosto 2023 - Presente',
      description: 'Desarrollo de soluciones web y móviles del sector de la salud de medicina prepagada, mantenimiento y desarrollo de nuevas funcionalidades.',
      current: true
    },
    {
      role: 'Desarrollador Mobile',
      company: 'INTEREDES.S.A.S',
      period: 'Agosto 2021 - Agosto 2023',
      description: 'Mantenimiento de app Móvil SAMI "Sistema administrativo móvil inteligente" de la electrificadora del Huila, desarrollo de nuevas funcionalidades.',
      current: false
    },
    {
      role: 'Desarrollador',
      company: 'CANO SOLUCIONES TECNOLOGICAS',
      period: 'Agosto 2020 - Agosto 2021',
      description: 'Mantenimiento de aplicativos del sector financieros y microservicios, desarrollo de nuevas funcionalidades en aplicaciones web.',
      current: false
    },
    {
      role: 'Desarrollador Mobile',
      company: 'SENA',
      period: 'Julio 2019 - Diciembre 2019',
      description: 'Desarrollo de app móvil para la determinación de estados acuíferos del Huila por indicadores de macroinvertebrados.',
      current: false
    }
  ];

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initScrollAnimations();
  }

  private initScrollAnimations(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in').forEach(el => {
      observer.observe(el);
    });
  }
}
