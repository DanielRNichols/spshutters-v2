import { CacheServices } from "../../src/services/cacheServices";

interface ICacheTest {
  prop1: string;
  prop2: boolean;
  prop3: number;
  prop4: Date;
}

describe('CacheServices', () => {

  let cacheServices:CacheServices;

  beforeAll(() => {
  });
  

  beforeEach(() => {
    cacheServices = new CacheServices();
  });
  
  afterEach(() => {
  });

  it('not found test', () => {

    const store = "testCache";
    const key = "testKey";
    const value: ICacheTest = {prop1: "Test String", prop2: true, prop3: 10, prop4: new Date(Date.now()) };
    const cache = cacheServices.getStore<ICacheTest>(store);
    let result = cache.get(key);
    expect(result).toBeUndefined();
  });

  it('Set/Get object', () => {

    const store = "testCache";
    const key = "testKey";
    let value: ICacheTest = {prop1: "Test String", prop2: true, prop3: 10, prop4: new Date(Date.now()) };
    const cache = cacheServices.getStore<ICacheTest>(store);
    cache.put(key, value);

    // modifying the local value should not affect the cached value
    let origValue = {...value};

    value = {prop1: "Modified String", prop2: false, prop3: 20, prop4: new Date(Date.now()) };

    let result = cache.get(key);
    expect(result).toMatchObject(origValue);
  });

  it('Set/Get string', () => {

    const store = "testCache";
    const key = "testKey";
    const value = "Test String";
    const cache = cacheServices.getStore<string>(store);
    cache.put(key, value);
    let result = cache.get(key);

    expect(result).toBe(value);
  });


});
