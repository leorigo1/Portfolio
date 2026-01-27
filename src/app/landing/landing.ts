import { Component } from '@angular/core';
import { Project } from '../models/project.model';
import { ProjectModalComponent } from '../modal/modal';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, ProjectModalComponent],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing {

  selectedProject: Project | null = null;
  modalOpen = false;

  projects: Project[] = [
    {
      title: 'Allbum',
      image: 'allbumlogo.png',
      image_detailed: ['allbumlogo.png', 'pixelart-logo.png'],
      description: 'Álbum digital e Comunidade ativa',
      description_detailed:'O projeto tem como objetivo o desenvolvimento de um app web para o compartilhamento de fotos/álbuns com a função de login via Google e sistema de geolocalização para definir a localização do álbum no mapa da aplicação. O Allbum une geolocalização, autenticação e compartilhamento de fotos em uma plataforma simples e eficiente. Suas tecnologias modernas garantem segurança, rapidez e facilidade de uso, destacando a importância da colaboração e da aplicação prática de conceitos atualizados.',
      techs: ['devicon-sqlite-plain', 'devicon-angularjs-plain', 'devicon-nodejs-plain'],
      techs_detailed: ['devicon-sqlite-plain', 'devicon-angularjs-plain','devicon-javascript-plain', 'devicon-typescript-plain', 'devicon-sass-original', 'devicon-firebase-plain', 'devicon-mongodb-plain'],
        github: 'https://github.com/leorigo1'
    },

    {
      title: 'ChamadoPRO',
      image: 'eu.jpeg',
      image_detailed: ['allbumlogo.png', 'pixelart-logo.png'],
      description: 'API segura com OAuth2 e monitoramento.',
      description_detailed:'',
      techs: [
        'devicon-sqlite-plain', 'devicon-angularjs-plain', 'devicon-nodejs-plain'
      ],
      techs_detailed: [''],
      github: 'https://github.com/leorigo1'
    },

    {
      title: 'Portfólio pessoal',
      image: 'eu.jpeg',
      image_detailed: ['allbumlogo.png', 'pixelart-logo.png'],
      description: 'API segura com OAuth2 e monitoramento.',
      description_detailed:'',
      techs: [
        'devicon-sqlite-plain', 'devicon-angularjs-plain', 'devicon-nodejs-plain'
      ],
      techs_detailed: [''],
      github: 'https://github.com/leorigo1'
    }
  ];

  openProject(project: Project) {
    this.selectedProject = project;
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
    this.selectedProject = null;
  }

  redirect(url: string) {
    window.open(url,'_blank')
  }

}
