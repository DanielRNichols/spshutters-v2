import { Formatters } from "../../services/formatters";
import { CompanyDefaults } from "../../static/companyDefaults";

export class FractionFormatValueConverter {
    toView(value) {
        let roundToNearest = CompanyDefaults.RoundToNearest;

        return (Formatters.ToFraction(value, roundToNearest));
    }
}
