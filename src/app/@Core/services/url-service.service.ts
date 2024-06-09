import { Injectable } from '@angular/core';
import { Router, UrlSegment } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UrlService {
  private currentUrlSubject = new BehaviorSubject<string>(window.location.href);
  currentUrl$: Observable<string> = this.currentUrlSubject.asObservable();

  constructor(private router: Router) {}

  getParam(key: string): string | null {
    const urlSearchParams = new URLSearchParams(window.location.search);
    return urlSearchParams.get(key);
  }

  putParam(key: string, value: string): void {
    const urlTree = this.router.createUrlTree([], {
      queryParams: { [key]: value },
      queryParamsHandling: 'merge' // Optional for merging with existing params
    });
    this.router.navigateByUrl(urlTree);
    this.updateCurrentUrl();
  }

  updateCurrentUrl() {
    this.currentUrlSubject.next(window.location.href);
  }
}
