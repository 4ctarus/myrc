import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'myrc-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  ext: string;
  icon: string | Observable<string>;
  @Input() set src(url) {
    if (url) {
      const urlSplit = url.split('.');
      const ext = urlSplit[urlSplit.length - 1];
      this.icon = ext === 'svg' ? this.http.get(url, { responseType: 'text' }) : url;
      this.ext = ext;
    }
  }
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}
