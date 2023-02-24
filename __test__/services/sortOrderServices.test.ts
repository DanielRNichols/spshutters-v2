import { ISortOrder, SortOrderDirection, SortOrderServices } from "../../src/services/sortOrderServices";
//import { LocalStorageServices } from "../../src/services/localStorageServices";
//import { CacheServices } from "../../src/services/cacheServices";
import {Container} from 'aurelia-dependency-injection';
import 'aurelia-polyfills';
  
let container: Container;
let _sortOrderServices: SortOrderServices;

describe('SortOrderServices', () => {

  beforeAll(() => {
  });

  beforeEach(() => {
    container = new Container();
    _sortOrderServices = container.get(SortOrderServices);
  })

  it('Default', () => {
    const key = "test";
    const defSortOrder: ISortOrder = {propertyName: "test", direction: SortOrderDirection.Descending };
    const result = _sortOrderServices.get(key, defSortOrder);
    expect(result).toMatchObject(defSortOrder);

  });

  it('Toggle', () => {
    const key = "test";
    const defSortOrder: ISortOrder = {propertyName: "test", direction: SortOrderDirection.Descending };
    _sortOrderServices.put(key, defSortOrder);
    _sortOrderServices.toggleSortOrder(key, defSortOrder);
    const result = _sortOrderServices.get(key, defSortOrder);
    console.log(result);
    expect(result).toMatchObject(defSortOrder);

  });
});
