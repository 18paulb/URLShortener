import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments"

@Component({
  selector: 'app-urlshortener',
  templateUrl: './urlshortener.component.html',
  styleUrls: ['./urlshortener.component.css']
})
export class UrlshortenerComponent {

  constructor(private http: HttpClient) {}

  submitUrl = environment.apiBaseUrl + 'submit-url'

  // The string that is typed into the form
  inputString: string = "";

  // The returned value of the submit-url API call
  shortenedUrl: string = "";
  invalidUrl: boolean = false;
  errorOccurred: boolean = false;

  // Submits the original url and sets the result of shortenedUrl to be the return value of the API call
  onSubmitUrl() {
    // Reset error values
    this.invalidUrl = false;
    this.errorOccurred = false;
    let validUrl = this.validateHttpsUrl(this.inputString);

    if (!validUrl) {
      this.invalidUrl = true;
      this.shortenedUrl = "";
      return
    }

    const body = { url: this.inputString };

    this.http.post<UrlResponse>(this.submitUrl, body).subscribe({
      next: (response) => {
        this.shortenedUrl = response.shortenedUrl
      },
      error: (error) => {
        this.errorOccurred = true
      }
    });
  }

  // This method just makes sure that the start of the url is http(s)
  validateHttpsUrl(url: string): boolean {
    try {
      // Parse url to make sure that it is valid
      const parsedUrl = new URL(url);
      return parsedUrl.protocol === 'https:' || parsedUrl.protocol === 'http:';
    } catch (error) {
      return false;
    }
  }
}


export interface UrlResponse {
  shortenedUrl: string;
}
