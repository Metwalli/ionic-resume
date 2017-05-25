import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from './translation.service';
@Pipe({
  name: 'languageDir',
  pure: false
})
export class LanguageDirPipe implements PipeTransform {
  constructor(private _translateService: TranslationService){}

  transform(value: any, args?: any): any {    
    return this._translateService.getDir();
  }

}
