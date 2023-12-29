import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SimplifiedFormComponent } from './simplified-form/simplified-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SimplifiedFormComponent, CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'simplified-from-development';
}
