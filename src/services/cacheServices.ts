export class CacheServices {
  cacheStores: { [cacheName: string]: Cache<any> } = {};
  constructor() {}

  getStore<T>(cacheName: string) : Cache<T> {
    if (!this.cacheStores[cacheName]) {
      this.cacheStores[cacheName] = new Cache<T>();
    }
    return this.cacheStores[cacheName];
  }

  get<T>(cacheStoreName: string, key: string): T {
    const cache = this.getStore<T>(cacheStoreName);
    return cache.get(key);
  }
}

export class Cache<T> {
  cache: { [key: string]: T } = {};

  get(key: string): T {
    return this.cache[key];
  }

  put(key: string, value: T): void {
    this.cache[key] = this.cloneValue(value);
  }

  private cloneValue(value: any): any {
    // Handle the 3 simple types, and null or undefined
    if (null == value || "object" != typeof value) 
      return value;

    // Handle Date
    if (value instanceof Date) {
      let copy = new Date();
      copy.setTime(value.getTime());
      return copy;
    }

    // Handle Array
    if (value instanceof Array) {
      return [...value];
    }
  
    // Handle Object
    if (value instanceof Object) {
      return {...value};
    }

    return null;
  
  }
}
