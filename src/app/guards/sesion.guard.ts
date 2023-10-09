import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from '../session.service';
import { UsuarioService } from '../usuario.service';


@Injectable({
  providedIn: 'root'
})
export class SesionGuard implements CanActivate{

  constructor(private sessionService: SessionService,
    private usuService : UsuarioService,
    private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    console.log(this.usuService.inUsu.id !== -1)
    if (this.usuService.inUsu.id !== -1) {
      return true;
    }
    this.router.navigate(['/login']); 
    return false;

  }

}
