import { bindable, bindingMode } from "aurelia-framework";

function getNumberFromString(value: string): number {
  let number = 0;
  let wholeNum = 0;
  let fracNum = 0;
  let input = value.trim();
  let fraction = "";
  // it is a fraction if it contains a /
  if (input.search("/") >= 0) {
    if (input.search(" ") >= 0) {
      let parts = input.split(" ");
      wholeNum = parseInt(parts[0]);
      fraction = parts[1];
    } else {
      fraction = input;
    }
    if (fraction.search("/") >= 0) {
      let parts = fraction.split("/");
      fracNum = parseInt(parts[0]) / parseInt(parts[1]);
    }
    number = wholeNum + fracNum;
  } else {
    number = parseFloat(value);
  }

  return number;
}

function getNumber(value: string) {
  let number = 0;

  number = getNumberFromString(value);

  return !isNaN(number) && isFinite(number) ? number : 0;
}

export class LengthInputCustomElement {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) value: number;
  @bindable({ defaultBindingMode: bindingMode.oneTime }) label: string;
  @bindable({ defaultBindingMode: bindingMode.oneTime }) placeholder: string;

  textValue: string;

  bind() {
    this.textValue = this.value.toString();
  }

  textInputChanged() {
    console.log("length-input:blur:textInputValue", this.textValue);
    let numVal = getNumber(this.textValue);
    this.value = numVal;
    this.textValue = numVal.toString();
  }
}
