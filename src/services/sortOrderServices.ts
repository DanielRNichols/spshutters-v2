import { autoinject } from "aurelia-framework";
import { CacheServices, Cache } from "./cacheServices";
import { LocalStorageServices } from "./localStorageServices";

function orderby<T>(property: string, direction: SortOrderDirection) {
  let factor = direction === SortOrderDirection.Ascending ? 1 : -1;
  return function (a: T, b: T) {
    let result =
      a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result * factor;
  };
}

export enum SortOrderDirection {
  Ascending = "+",
  Descending = "-",
}

export interface SortOrderConfig {
  propertyName: string;
  direction: SortOrderDirection;
}

@autoinject
export class SortOrderServices {
  cache: Cache<SortOrderConfig>;

  constructor(
    private cacheServices: CacheServices,
    private localStorageServices: LocalStorageServices
  ) {
    this.cache = this.cacheServices.getStore<SortOrderConfig>("sortOrders");
  }

  get(tableName: string, defSortOrder: SortOrderConfig): SortOrderConfig {
    const cachedValue = this.cache.get(tableName);

    // if not in cache, look in localstorage
    if (cachedValue) return cachedValue;

    let result = this.getFromLocalStorage(tableName);
    if (result) return result;

    this.put(tableName, defSortOrder);

    return defSortOrder;
  }

  put(tableName: string, sortOrder: SortOrderConfig): void {
    this.cache.put(tableName, sortOrder);
    this.saveToLocalStorage(tableName, sortOrder);
  }

  toggleSortOrder(tableName: string, defSortOrder: SortOrderConfig): SortOrderConfig {
    const sortOrder = this.get(tableName, defSortOrder);
    sortOrder.direction =
      sortOrder.direction == SortOrderDirection.Ascending
        ? SortOrderDirection.Descending
        : SortOrderDirection.Ascending;

    this.put(tableName, sortOrder);

    return sortOrder;
  }

  getLocalStorageKey(tableName: string): string {
    return `spshutters:sortorder:${tableName}`;
  }

  getFromLocalStorage(tableName: string): SortOrderConfig {
    let key = this.getLocalStorageKey(tableName);
    let localStorageValue = this.localStorageServices.getItem(key, "");
    if (!localStorageValue) return null;
    return JSON.parse(localStorageValue);
  }

  saveToLocalStorage(tableName: string, sortOrder: SortOrderConfig): void {
    let key = this.getLocalStorageKey(tableName);
    let value = JSON.stringify(sortOrder);
    this.localStorageServices.setItem(key, value);
  }

  static sortArray<T>(arrayToSort: T[], config: SortOrderConfig): T[] {
    if (arrayToSort && config && config.propertyName)
      return arrayToSort.sort(orderby(config.propertyName, config.direction));
    else 
      return arrayToSort;
  }
}
