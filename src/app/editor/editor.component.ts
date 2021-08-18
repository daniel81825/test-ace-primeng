import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import {ConfirmationService} from 'primeng/api';
import * as ace from "ace-builds";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements AfterViewInit  {

  @Input() set text(otext:string) {
    this._text = otext;
    if (typeof this.aceSession !== 'undefined') {
      this.aceSession.setValue(this.text);
      this.aceSession.setMode('ace/mode/text');
    }
  } get text():string {return this._text};

  @Input() set resize(rsize:string) {
    const msgSplit = rsize.split(":");
    this.updateMyStyle(parseInt(msgSplit[1]),parseInt(msgSplit[2]));
  } get resize():string {return "resize:"+this.cwidth+":"+this.cheight};


  @Output('menuAction') menuAction= new EventEmitter<string>();
  
  @ViewChild("editor") private editor: ElementRef<HTMLElement>|undefined;
  private aceEditor:ace.Ace.Editor|undefined;
  private aceSession:ace.Ace.EditSession|undefined;

  public _text:string = "";
  private fileinfo:any;
  private cwidth : number = 0;
  private cheight : number = 0;
  constructor(
    private confirmationService: ConfirmationService
    ) { }

  onSave(event:any) {
    const itext = this.aceEditor?this.aceEditor.getValue():"";
    this.fileinfo.content = itext;
    this.fileinfo.save01_start(this.fileinfo.file);
  }
  onCancel(event:any) {
    var other = this;
    if (typeof this.aceEditor === 'undefined') return;
    if (this.text == this.aceEditor.getValue()) {
      //closeaction
      return;
    } 
    this.confirmationService.confirm({
      target: event.target,
      message: 'Willst Du ohne Speichern schliessen?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {//confirm action
      },
      reject: () => {
          //reject action
      }    
    })
}

  myStyle(): object {
    if (this.cwidth > 0 && this.cheight > 0)
    {
      return {
        "min-width":"200px",
        "min-height":"200px",
        "width": this.cwidth+'px',
        "height":this.cheight+'px',
        "overflow":"auto"
      };
    }
    else
    {
      return {
        "min-width":"100px",
        "min-height":"100px",
        "width": '100%',
        "height":'85%',
        "overflow":"auto"
      };
  
    }
  }  
  private updateMyStyle(twidth:number,theight:number) {
    // this.cwidth = twidth;
    // this.cheight = theight;
    if (typeof this.aceEditor !== 'undefined') {
      this.aceEditor.resize(true);
      this.aceEditor.renderer.updateFull()
    }
  }

  ngAfterViewInit(): void {
    ace.config.set('basePath', 'https://unpkg.com/ace-builds@1.4.12/src-noconflict');
    ace.config.set("fontSize", "14px");
    if (typeof this.aceEditor === 'undefined' && typeof this.editor !== 'undefined') {
      this.aceEditor = ace.edit(this.editor.nativeElement);
    } else {
      return;
    }
    this.aceEditor.setAutoScrollEditorIntoView(true);
    this.aceEditor.setTheme('ace/theme/twilight');
    this.aceSession = new ace.EditSession(this._text);
    this.aceSession.setMode('ace/mode/text');
    this.aceEditor.setSession(this.aceSession);
  }
}
