import { Injectable} from '@angular/core';
import { HttpClient, HttpRequest  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

const TOTAL_PAGES = 7;

export class AccessControlPost {
  title: string;
  link: string;
  creator: string;
  text: string;
}

export class OKResponse {
  status: string;
  data:any;
}

@Injectable()
export class AccessControlService {

  constructor(private http: HttpClient) {}
  private baseUrl = 'https://bankdemoapi.azurewebsites.net/api';

  load(page: number, pageSize: number): Observable<AccessControlPost[]> {
    const startIndex = ((page - 1) % TOTAL_PAGES) * pageSize;

    return this.http
      .get<AccessControlPost[]>('assets/data/news.json')
      .pipe(
        map(news => news.splice(startIndex, pageSize)),
        delay(1500),
      );
  }

  
  GetCustomers(){

    return this.http.get<OKResponse>(`${this.baseUrl+"/user"}`);
  }

  AddCustomer(data): Observable<Object> {

    return this.http.put(`${this.baseUrl+"/user"}`, data);
  }

}
