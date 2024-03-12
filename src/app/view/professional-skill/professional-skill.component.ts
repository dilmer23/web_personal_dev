import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/entity/skillmodel';

@Component({
  selector: 'app-professional-skill',
  templateUrl: './professional-skill.component.html',
  styleUrls: ['./professional-skill.component.css']
})
export class ProfessionalSkillComponent {

  skillRender: Skill[] = [
    //   { 
    //   id: 1, title: "APP de cosumo de Api RICKY AND MORTY", 
    //   text: "Esta app fue desarrollada en flutter consumiendo api publica de ricky and morty , construida con clean arquiteture.",
    //   img: "../../../assets/img/web/app_ricky_and_morty.png",
    //   tecnologic1:"API REST",
    //   tecnologic2:"FLUTTER",
    //   tecnologic3:"SQLITE",
    //   repository:"pruebas"
    //  },
    {
      id: 1, title: "MavelX con flutter ",
      text: "Desarrollé una aplicación móvil para una empresa del sector de la construcción, diseñada para gestionar de manera eficiente el personal y los materiales. La aplicación, creada con Flutter de Google, se integra con un servicio desarrollado en Node.js con Express que también contribuí a desarrollar. Esta solución proporciona un enfoque estratégico para mantener un orden óptimo en el flujo de trabajo y los recursos.",
      img: "../../../assets/img/web/c_product_node.jpg",
      tecnologic1: "angular.js",
      tecnologic2: "flutter",
      tecnologic3: "sqlite",
      repository: "pruebas"
    },
    {
      id: 1, title: "Aplicación para la determinación ambiental E.COL",
      text: "He desarrollado una aplicación móvil en colaboración con el SENA, diseñada específicamente para determinar y monitorear los estados hídricos en Huila. Esta app utiliza la presencia de macroinvertebrados acuáticos como indicadores clave. ¡Es una forma innovadora de contribuir al cuidado de nuestros recursos naturales desde la comodidad de tu teléfono",
      img: "../../../assets/img/web/logo_ecol.png",
      tecnologic1: "php",
      tecnologic2: "JAVA",
      tecnologic3: "ANDROID",
      repository: "SQLITE"
    },
    //  { 
    //   id: 1, title: "web portafolio dev", 
    //   text: "Pagina web desarrollada desde cero , bajo un diseño visto en internet donde se visualiza mi portafolio personal",
    //   img: "../../../assets/img/web/web_dilmer.jpg",
    //   tecnologic1:"angular.js",
    //   tecnologic2:"firabase",
    //   tecnologic3:"html",
    //   repository:"GITHUB"
    //  }
  ]
}

