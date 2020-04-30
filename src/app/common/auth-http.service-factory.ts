import { AuthHttp, AuthConfig } from "angular2-jwt";
import { RequestOptions, Http } from "@angular/http";

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'token',
          tokenGetter: (() => localStorage.getItem('token')),
          globalHeaders: [{'Content-Type':'application/json'}],
     }), http, options);
}