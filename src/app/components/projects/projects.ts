import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ThemeToggle } from '../theme-toggle/theme-toggle';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink, ThemeToggle],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class Projects {
  projects = [
    {
      title: 'Garage Cafe',
      description: 'Garage Café is a website that showcases a neighborhood café offering quality drinks, light meals, and a cozy atmosphere for the community.',
      image: 'assets/Frame-1.png',
      link: 'https://visitgaragecafe.com/'
    },
    {
      title: 'Barangay Information System',
      description: 'The Barangay Information System is a digital platform that provides easy access to barangay services and community information.',
      image: 'assets/Frame-2.png',
      link: 'https://github.com/cassandraarcilla/6WCSERVER-Final-Project.git'
    },
    {
      title: 'Memoir Of Art',
      description: 'Memoir of Art is a website made using WordPress.com, and its purpose is to explore and share insights about art and creativity.',
      image: 'assets/Frame-3.png',
      link: 'https://memoirofart.wordpress.com/'
    }
  ];
}