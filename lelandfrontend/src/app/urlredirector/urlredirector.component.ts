import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-urlredirector',
  templateUrl: './urlredirector.component.html',
  styleUrls: ['./urlredirector.component.css']
})
export class UrlredirectorComponent implements OnInit {

  constructor(private http: HttpClient) {}

  getUrlApiPath: string = environment.apiBaseUrl + 'get-url'
  homePagePath: string = ''

  urlValid: Boolean = true

  // Gets the current URL of the page and makes an API call to see get the original url, if it does not exist, shows error message
  // If it does exist, redirect to the page
  ngOnInit(): void {
    let url = window.location.href

    this.getFullUrl(url).subscribe({
      next: (response) => {
        this.urlValid = true;
        this.goToExternalUrl(response.fullUrl);
      },
      error: (error) => {
        this.urlValid = false;
      },
    });
  }

  // API call to get the original url from the shortenedUrl
  getFullUrl(shortenedUrl: string): Observable<FullUrlResponse> {
    return this.http.get<FullUrlResponse>(`${this.getUrlApiPath}?shortenedUrl=${shortenedUrl}`);
  }

  // Navigates to the url
  goToExternalUrl(url: string) {
    window.location.href = url;
  }
}

export interface FullUrlResponse {
  fullUrl: string;
}
