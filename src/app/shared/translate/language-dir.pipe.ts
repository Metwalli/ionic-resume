import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from './translate.service';
@Pipe({
  name: 'languageDir',
  pure: false
})
export class LanguageDirPipe implements PipeTransform {
  constructor(private _translateService: TranslateService){}

  transform(value: any, args?: any): any {    
    return this._translateService.getDir();
  }

}
