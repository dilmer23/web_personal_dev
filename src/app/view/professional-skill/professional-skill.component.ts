import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/entity/skillmodel';

@Component({
  selector: 'app-professional-skill',
  templateUrl: './professional-skill.component.html',
  styleUrls: ['./professional-skill.component.css']
})
export class ProfessionalSkillComponent  {

  skillRender: Skill[] = [
    { 
    id: 1, title: "APP de cosumo de Api RICKY AND MORTY", 
    text: "Esta app fue desarrollada en flutter consumiendo api publica de ricky and morty , construida con clean arquiteture.",
    img: "../../../assets/img/web/app_ricky_and_morty.png",
    tecnologic1:"API REST",
    tecnologic2:"FLUTTER",
    tecnologic3:"SQLITE",
    repository:"pruebas"
   },
   { 
    id: 1, title: "Producto c node  con flutter ", 
    text: "App móvil creada para el inventario de una empresa del sector de la construción, creada desde cero con flutter y servicios node.js",
    img: "../../../assets/img/web/c_product_node.jpg",
    tecnologic1:"angular.js",
    tecnologic2:"flutter",
    tecnologic3:"sqlite",
    repository:"pruebas"
   },
   { 
    id: 1, title: "Aplicación para la determinación ambiental E.COL", 
    text: "Aplicación móvil del SENA para la determinación de estados hidricos del Huila por medio de macroinvertebrados  ",
    img: "../../../assets/img/web/logo_ecol.png",
    tecnologic1:"php",
    tecnologic2:"JAVA",
    tecnologic3:"ANDROID",
    repository:"SQLITE"
   },
   { 
    id: 1, title: "web portafolio dev", 
    text: "Pagina web desarrollada desde cero , bajo un diseño visto en internet donde se visualiza mi portafolio personal",
    img: "../../../assets/img/web/web_dilmer.jpg",
    tecnologic1:"angular.js",
    tecnologic2:"firabase",
    tecnologic3:"html",
    repository:"GITHUB"
   }
  ]
}

