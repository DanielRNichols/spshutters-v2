import { autoinject } from "aurelia-framework";
import { ApiError, HttpServices } from "./httpServices";
import { CacheServices, Cache } from "./cacheServices";
import { ListItem } from "models/listItem";

export interface IListItemQueryParameters {
  listName: string;
  orderby?: string;
  pageSize?: number;
  skip?: number;
  filter?: string;

  includeHidden?: boolean;
}

@autoinject()
export class ListItemsDataService {
  _cache: Cache<ListItem[]>;
  _resourceName = "lists";

  constructor(
    private _httpServices: HttpServices,
    private _cacheServices: CacheServices
  ) {
    this._cache = _cacheServices.getStore("listItems");
  }

  async getItemsList(
    params: IListItemQueryParameters,
    clearCache: boolean = false
  ): Promise<ListItem[] | ApiError> {
    let listItems = this._cache.get(params.listName);
    if (listItems) {
      return listItems;
    }
    listItems = [];
    const queryStr = this.getListItemsQueryString(params);
    const url = `${this._resourceName}${queryStr}`;
    const result = await this._httpServices.get(url);
    if (result instanceof ApiError) return result;
    const mappedData = result.data.map(
      (listItem: any): ListItem => {
        let mappedListItem: ListItem = { ...listItem };
        mappedListItem.hide = !!listItem.hide;
        return mappedListItem;
      }
    );
    this._cache.put(params.listName, mappedData);

    return mappedData;
  }

  getJobNames(): Promise<ListItem[] | ApiError> {
    return this.getItemsList({
      listName: "jobName",
      orderby: "value asc",
    });
  }

  getWoodTypes(): Promise<ListItem[] | ApiError> {
    return this.getItemsList({
      listName: "woodType",
      orderby: "value asc",
    });
  }

  getListItemsQueryString(params: IListItemQueryParameters): string {
    let orderbyParam = params.orderby ? "orderby=" + params.orderby : "";
    let pageSizeParam = params.pageSize ? "top=" + params.pageSize : "";
    let skipParam = params.skip ? "skip=" + params.skip : "";

    let filterParam = `filter=listName='${params.listName}'`;
    filterParam += params.filter ? ` and ${params.filter}` : "";
    filterParam += params.includeHidden ? ` and hide=0` : "";

    let paramStr = orderbyParam ? "?" + orderbyParam : "";
    paramStr += pageSizeParam ? (paramStr ? "&" : "?") + pageSizeParam : "";
    paramStr += skipParam ? (paramStr ? "&" : "?") + skipParam : "";
    paramStr += filterParam ? (paramStr ? "&" : "?") + filterParam : "";

    paramStr += params.filter ? "&wildcards=true" : "";

    return paramStr;
  }
}
