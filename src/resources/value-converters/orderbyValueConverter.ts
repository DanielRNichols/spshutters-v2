import { SortOrderServices, SortOrderDirection, SortOrderConfig } from "../../services/sortOrderServices";

export class OrderbyValueConverter {

    toView(arrayToSort, config: SortOrderConfig) {
        return SortOrderServices.sortArray(arrayToSort, config);
    }
}

export class SortValueConverter {
    toView<T>(array: T[], config: SortOrderConfig): T[] {
         var factor = config.direction === SortOrderDirection.Ascending ? 1 : -1;
        return array
          .slice(0)
          .sort((a, b) => {
              return (a[config.propertyName] - b[config.propertyName]) * factor
          });
    }
}
