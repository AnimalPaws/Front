/*import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/AuthServices/auth.service';

@Injectable()
export class JwtInterceptorInterceptor implements HttpInterceptor {

  constructor(private authService:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    request = request.clone({
      headers: request.headers.set('AUTH', this.authService.token)
    })

    return next.handle(request);
  }
}
export const JwtInterceptorInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: JwtInterceptorInterceptor,
  multi: true,
}*/