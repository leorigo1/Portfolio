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
      techs_detailed: ['devicon-sqlite-plain', 'devicon-angularjs-plain','devicon-javascript-plain', 'devicon-typescript-plain', 'devicon-sass-original', 'devicon-firebase-plain', 'devicon-mongodb-plain']
    },

    {
      title: 'ChamadoPRO',
      image: 'eu.jpeg',
      image_detailed: ['allbumlogo.png', 'pixelart-logo.png'],
      description: 'API segura com OAuth2 e monitoramento.',
      description_detailed:'O ChamadoPRO é um sistema de gerenciamento de chamados desenvolvido com foco em organização, usabilidade e controle de solicitações técnicas. O projeto foi pensado para simular um ambiente real de suporte, permitindo o registro, acompanhamento e gerenciamento de chamados de forma prática e eficiente. A aplicação conta com funcionalidades como criação de chamados, definição de prioridades, categorias, forma de contato, além do acompanhamento do status e da data de criação. O sistema foi estruturado para facilitar tanto o uso por usuários finais quanto a organização por parte do suporte técnico. No desenvolvimento, foram aplicados conceitos de arquitetura bem definida, separação de responsabilidades e boas práticas de desenvolvimento, visando um código limpo, escalável e de fácil manutenção. O projeto também explora a integração entre front-end e back-end, simulando fluxos comuns de sistemas corporativos.',
      techs: [ 'devicon-sqlite-plain', 'devicon-angularjs-plain', 'devicon-nodejs-plain' ],
      techs_detailed: [ 'devicon-sqlite-plain', 'devicon-angularjs-plain', 'devicon-nodejs-plain' ],
    },

    {
      title: 'Portfólio pessoal',
      image: 'pixelart-logo.png',
      image_detailed: ['allbumlogo.png', 'pixelart-logo.png'],
      description: 'API segura com OAuth2 e monitoramento.',
      description_detailed:'Este portfólio pessoal foi desenvolvido com Angular, com foco em performance, organização de código e experiência do usuário. O projeto apresenta meus principais trabalhos, habilidades técnicas, formação acadêmica e certificações, tudo estruturado de forma clara e responsiva. A aplicação utiliza componentes reutilizáveis, data binding, diretivas estruturais e roteamento, garantindo uma navegação fluida e uma arquitetura escalável. O layout foi pensado para destacar informações de forma objetiva, com atenção especial à responsividade e ao design moderno, adaptando-se a diferentes tamanhos de tela. Além disso, o projeto explora boas práticas de HTML semântico, CSS modular (SCSS) e integração com bibliotecas de ícones, reforçando a identidade visual e a legibilidade do conteúdo. O portfólio também serve como um ambiente de aprendizado contínuo, onde novas funcionalidades e melhorias visuais são constantemente implementadas.',
      techs: [ 'devicon-sqlite-plain', 'devicon-angularjs-plain', 'devicon-nodejs-plain' ],
      techs_detailed: ['devicon-angularjs-plain','devicon-typescript-plain','devicon-sass-original','devicon-html5-plain']
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
