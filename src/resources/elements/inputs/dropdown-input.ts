import { bindable, bindingMode } from "aurelia-framework";
import { EventAggregator } from "aurelia-event-aggregator";

export interface DropDownInputOption {
  value: any;
  label: string;
}

export class DropdownInputCustomElement {
  @bindable({ defaultBindingMode: bindingMode.toView }) value: any;
  @bindable({ defaultBindingMode: bindingMode.oneTime }) label: string;
  @bindable({ defaultBindingMode: bindingMode.oneTime }) placeholder: string;
  @bindable({ defaultBindingMode: bindingMode.toView })  options: DropDownInputOption[];
  @bindable({ defaultBindingMode: bindingMode.oneTime }) key: string;
  @bindable({ defaultBindingMode: bindingMode.oneTime }) callback: ({newValue: any}) => void;

  selectedOption: DropDownInputOption;
  valueInput: HTMLInputElement;

  setOption = (value: any) => {
    if (this.options) {
      this.selectedOption = this.options.find((o) => o.value === value);
    }
    if (!this.selectedOption) {
      this.selectedOption = { value: "", label: "" };
    }

    this.valueInput.value = this.selectedOption.label;
  };

  bind() {
    this.setOption(this.value);
  }

  optionChanged(newValue: any) {
    this.setOption(newValue);

    if (this.callback) {
      this.callback({ newValue: newValue });
    }
  }
}
