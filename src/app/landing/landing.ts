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

Allbum(){
  alert('Allbum')
}

  selectedProject: Project | null = null;
  modalOpen = false;


  projects: Project[] = [
    {
      title: 'Allbum',
      image: ['eu.jpeg', 'pixelart-logo.png', 'eu.jpeg'],
      description: 'Controle financeiro com autenticação JWT.',
      techs: ['devicon-sqlite-plain', 'devicon-angularjs-plain', 'devicon-nodejs-plain'
      ],
        github: 'https://github.com/leorigo1'
    },

    {
      title: 'ChamadoPRO',
      image: ['/eu.jpeg', 'pixelart-logo.png', 'eu.jpeg'],
      description: 'API segura com OAuth2 e monitoramento.',
      techs: [
        'devicon-sqlite-plain', 'devicon-angularjs-plain', 'devicon-nodejs-plain'
      ],
      github: 'https://github.com/leorigo1'
    },

    {
      title: 'Portfólio pessoal',
      image: ['eu.jpeg', 'pixelart-logo.png', 'eu.jpeg'],
      description: 'API segura com OAuth2 e monitoramento.',
      techs: [
        'devicon-sqlite-plain', 'devicon-angularjs-plain', 'devicon-nodejs-plain'
      ],
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


}
