import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { map, Subscription } from 'rxjs';
import * as fromApp from '../store/app.reducer';
import { Store } from '@ngrx/store';
import { logout } from '../store/auth.actions';
import { fetchRecipes, storeRecipes } from '../store/recipes.actions';

@Component({
  templateUrl: './header.component.html',
  selector: 'app-header',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSub: Subscription;
  isAuthenticated = false;
  isMenuCollapsed = '';

  constructor(
    private authService: AuthService,
    private store: Store<fromApp.AppState>
  ) {}

  onToggledMenu() {
    if (this.isMenuCollapsed === '') {
      this.isMenuCollapsed = 'show';
    } else {
      this.isMenuCollapsed = '';
    }
  }

  ngOnInit() {
    this.userSub = this.store
      .select('auth')
      .pipe(
        map((authState) => {
          return authState.user;
        })
      )
      .subscribe((user) => {
        this.isAuthenticated = !!user;
      });
  }

  onSave() {
    this.store.dispatch(storeRecipes());
  }

  onFetch() {
    this.store.dispatch(fetchRecipes());
  }

  onLogout() {
    this.store.dispatch(logout());
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
