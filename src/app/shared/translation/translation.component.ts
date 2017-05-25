import { Component, Directive, OnInit } from '@angular/core';
import { TranslationService, TranslationLanguage } from './translation.service';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.css']
})
export class TranslationComponent implements OnInit {  
  languageList: TranslationLanguage[] = [
    {code: 'ar', name: 'عربي', symbol: 'ع', dir: "rtl"},
    {code: 'en', name: 'English', symbol: 'en', dir: "ltr"},
  ]  
  constructor(private _translate: TranslationService) { }

  ngOnInit() {
    
  }
  selectLang(lang: TranslationLanguage) {    
    this._translate.use(lang);    
  }
}
