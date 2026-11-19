import { Component, ElementRef, ViewChild, signal } from '@angular/core';
import { Project } from '../../../data/projects';
@Component({
  selector: 'app-project-dialog',
  template: `<dialog #dialog (click)="backdrop($event)" aria-labelledby="project-title">
    <button class="dialog-close" type="button" aria-label="Cerrar detalle" (click)="dialog.close()">
      ×
    </button>
    @if (project(); as project) {
      <img class="dialog-image" [src]="project.image" [alt]="project.name" />
      <div class="dialog-content">
        <p class="kicker">Experiencia profesional</p>
        <h2 id="project-title">{{ project.name }}</h2>
        <p>{{ project.detail }}</p>
        <div class="tags">
          @for (tech of project.technologies; track tech) {
            <span>{{ tech }}</span>
          }
        </div>
      </div>
    }
  </dialog>`,
})
export class ProjectDialog {
  @ViewChild('dialog') dialog!: ElementRef<HTMLDialogElement>;
  project = signal<Project | null>(null);
  open(project: Project) {
    this.project.set(project);
    this.dialog.nativeElement.showModal();
  }
  backdrop(event: MouseEvent) {
    if (event.target === this.dialog.nativeElement) this.dialog.nativeElement.close();
  }
}
