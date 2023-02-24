import { autoinject, bindable, bindingMode} from 'aurelia-framework';
import { Settings } from 'services/settings';


@autoinject()
export class SectionsTableCustomElement {
    @bindable({ defaultBindingMode: bindingMode.oneTime }) title: string;
    @bindable({ defaultBindingMode: bindingMode.oneTime }) sectionsList;
    @bindable({ defaultBindingMode: bindingMode.oneTime }) includeSubSectionWidth: boolean;

    titleStyle: string;
    headerStyle: string;
    cellStyle: string;

    constructor(private settings: Settings) {
        let textScaleFactor = settings.TextScaleFactor;
        this.titleStyle = `font-size:${textScaleFactor}em`;
        this.headerStyle = `font-size:${textScaleFactor}em`;
        this.cellStyle = `font-size:${textScaleFactor}em`;

    }
}

