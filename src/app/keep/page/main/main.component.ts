import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { SidenavComponent } from '../../../shared/sidenav/sidenav.component';
import { InputComponent } from '../../components/input/input.component';
import { NotesComponent } from '../../components/notes/notes.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NavbarComponent,SidenavComponent,InputComponent,NotesComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
