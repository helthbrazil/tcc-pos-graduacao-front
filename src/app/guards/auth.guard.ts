import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoginService } from '../shared/services/login.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private loginService: LoginService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(environment.mockup){
            return true;
        }
        
        const token = localStorage.getItem('token');
        if (token) {
            return this.loginService.isLogged().pipe(map(dat => {
                if (dat) {
                    return true;
                }
            }, err => {
                this.router.navigate(['/login']);
                return false;
            }));
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}