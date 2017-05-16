import { Component, Input, ElementRef, OnInit } from '@angular/core';
import { QuillEditorComponent} from 'ngx-quill-editor/quillEditor.component';

@Component({
  selector: 'ql-editor',
  templateUrl: './quill-editor.component.html',
  styleUrls: ['./quill-editor.component.scss']
})
export class QlEditorComponent {
  @Input() placeHolder: string = "";
  public editor;
  public editorContent = `<h3>I am Example content</h3>`;
  defaultModules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote'],

      [{ 'list': 'ordered'}, { 'list': 'bullet' }],      
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],

      ['clean'],                                         // remove formatting button

    ]
  };
  public editorOptions = {
    modules: this.defaultModules,
    placeholder: "Insert Text Heare.."
  };
  constructor(private elmtRef: ElementRef) {
    
  }

  ngOnInit() {
    this.editorOptions.placeholder = this.placeHolder;
  }

}
