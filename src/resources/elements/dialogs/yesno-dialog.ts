import { autoinject } from "aurelia-framework";
import { DialogController } from "aurelia-dialog";

@autoinject()
export class YesnoDialog {

  prompt: string;
  constructor(private dialogController: DialogController) {
  }
  
  activate(prompt: string) {
    this.prompt = prompt;
  }
}
