import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit{
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if(!this.authService.isAuthenticated) {
      this.router.navigate(['login']);
    }
  }
}
