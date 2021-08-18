import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { WindowConfig } from '../window-config';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css']
})
export class WindowComponent implements OnInit {
  @Input() set config(cfg:WindowConfig) {
  this._config = cfg;
} get config():WindowConfig {return this._config};


  public resizeStr="resize:0:0";
  public text = "Test-Content";
  public _config : WindowConfig = {
    wtitle:"Title1",
    visible:true,
    dontCancel:false,
    zIndex:100,
  };
  
  @ViewChild('dialog') dialog:any;

  constructor() { }

  doWindowAction(event:any,actionType:string){
    console.log(actionType,event);
    switch(actionType){
      case 'resize_end':
        this.resizeStr = "resize:"+event.pageX+":"+event.pageY;
        return;
      case 'show':
      case 'hide':
      case 'resize_init':
      case 'drag_end':
      case 'maximize':
        break;
      default:
        return;
    }
  }



  ngOnInit(): void {
  }

}
