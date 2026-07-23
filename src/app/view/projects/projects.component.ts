import { Component, OnInit, AfterViewInit } from '@angular/core';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  disclaimer?: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  projects: Project[] = [
    {
      id: 1,
      title: 'MarvelX Flutter App',
      description: 'Aplicación móvil desarrollada en Flutter con integración a backend Node.js para la gestión de personal, inventario de materiales y seguimiento de operaciones en proyectos del sector construcción.',
      image: '../../../assets/img/web/c_product_node.jpg',
      technologies: ['Flutter', 'Node.js', 'SQLite', 'Express'],
      github: 'https://github.com/dilmer23',
      featured: true
    },
    {
      id: 2,
      title: 'E.COL - App Ambiental',
      description: 'Aplicación móvil desarrollada junto al SENA para apoyar el monitoreo ambiental, permitiendo determinar la calidad de los ecosistemas acuáticos del Huila mediante metodologías basadas en macroinvertebrados bioindicadores.',
      image: '../../../assets/img/web/logo_ecol.png',
      technologies: ['Java', 'PHP', 'Android'],
      featured: true
    },
    {
      id: 3,
      title: 'HomeBrain IA',
      description: 'Home Brain es una aplicación móvil inteligente que te ayuda a recordar tareas, eventos y objetos importantes en el momento adecuado. Recibe recordatorios basados en la hora o en tu ubicación, por ejemplo, al salir de casa, al llegar al trabajo o al regresar a casa, para que no olvides llevar tus llaves, documentos, medicamentos, compras o cualquier otra tarea importante.',
      image: '../../../assets/img/web/logoHomeBrain.png',
      technologies: ['Flutter', 'Firebase', 'Supabase'],
      github: 'https://github.com/dilmer23/web-personal-dev',
      featured: true
    },
    // Factus Client: cliente de la API comercial de https://www.factus.com.co/ — ni la API ni las imágenes son mías
    {
      id: 4,
      title: 'Factus Client',
      description: 'Cliente Dart/Flutter para la API de Facturación Electrónica de Factus (DIAN Colombia). Crea, valida y gestiona facturas, notas crédito y débito desde tu app Flutter.',
      image: '../../../assets/img/web/logo-factus-white.png',
      technologies: ['Dart', 'Flutter'],
      github: 'https://github.com/dilmer23/factus_client',
      featured: true,
      disclaimer: 'Cliente de API comercial — factus.com.co'
    }
  ];

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.projects-section .fade-in, .projects-section .scale-in').forEach(el => {
      observer.observe(el);
    });
  }
}
