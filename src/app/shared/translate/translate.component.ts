import { Component, Directive, OnInit } from '@angular/core';
import { TranslateService, TranslateLanguage } from './translate.service';

@Directive({
  selector: '[laguageDir]',
})
export class LanguageDir {
  constructor(private _translateService: TranslateService) {
    this._translateService.getDir();
  }
}

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent implements OnInit {  
  languageList: TranslateLanguage[] = [
    {code: 'ar', name: 'عربي', symbol: 'ع', dir: "rtl"},
    {code: 'en', name: 'English', symbol: 'en', dir: "ltr"},
  ]  
  constructor(private _translate: TranslateService) { }

  ngOnInit() {
    
  }
  selectLang(lang: TranslateLanguage) {    
    this._translate.use(lang);    
  }
}
