import {bindable, bindingMode} from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

export class ComboInputCustomElement {
    @bindable({ defaultBindingMode: bindingMode.toView }) value: string;
    @bindable({ defaultBindingMode: bindingMode.oneTime }) label: string;
    @bindable({ defaultBindingMode: bindingMode.oneTime }) placeholder: string;
    @bindable({ defaultBindingMode: bindingMode.toView }) options: string[];
    @bindable({ defaultBindingMode: bindingMode.oneTime }) key: string;
    @bindable({ defaultBindingMode: bindingMode.oneTime }) callback: ({ newValue: string }) => void;

    valueInput: HTMLInputElement;

    blur() {
        this.value = this.valueInput.value;
        if (this.callback) {
          this.callback({ newValue: this.value });
        }
    }

    optionChanged(newValue: string) {
      this.value = newValue;

        if (this.callback) {
            this.callback({ newValue: this.value });
        }
    }

}

