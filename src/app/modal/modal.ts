import { Component,Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../models/project.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
})
export class ProjectModalComponent {

  @Input() project!: Project | null;
    @Input() isOpen = false;

    @Output() close = new EventEmitter<void>();

    onClose() {
      this.close.emit();
    }

  redirect(url: string) {
    window.open(url,'_blank')
  }

}
