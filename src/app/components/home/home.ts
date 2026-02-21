import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeToggle } from '../theme-toggle/theme-toggle';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ThemeToggle],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {}