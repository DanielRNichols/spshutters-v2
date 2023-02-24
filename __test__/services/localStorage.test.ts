import {LocalStorageServices} from "../../src/services/localStorageServices";

let _localStorage: LocalStorageServices;

const getKey = (key: string): string => {
  return `spshutters:test-${key}`;
}

beforeAll(() => {

  // set up jests mocking of local storage methods
  jest.spyOn(window.localStorage.__proto__, 'setItem');
  jest.spyOn(window.localStorage.__proto__, 'getItem');
  jest.spyOn(window.localStorage.__proto__, 'removeItem');
});


describe('LocalStorageServices', () => {

  beforeEach(() => {
    _localStorage = new LocalStorageServices();
  });
  
  afterEach(() => {
  });

  it('Add/Remove Item', () => {
    const value = "test value";
    const defValue = "default value";
    const key = getKey("addremoveTest");
    _localStorage.setItem(key, value);
    //set, should return value
    let result = _localStorage.getItem(key, defValue);
    expect(result).toBe(value);

    _localStorage.removeItem(key);
    // not set, should return default
    result = _localStorage.getItem(key, defValue);
    expect(result).toBe(defValue);
});
  
  describe('Strings', () => {
    it('Default', () => {
      const value = "default value";
      const key = getKey("defaultTest");
      _localStorage.removeItem(key);
      // not set, should return default
      let result = _localStorage.getItem(key, value);
      expect(result).toBe(value);
    });
  
    it('Set/Get', () => {
      const value = "test value";
      const key = getKey("stringTest");
      _localStorage.setItem(key, value);
      const result = _localStorage.getItem(key, "");
      expect(result).toBe(value);
    });
  });

  describe('Booleans', () => {
    it('Default false', () => {
      const value = false;
      const key = getKey("boolTest");
      _localStorage.removeItem(key);
      // not set, should return default
      let result = _localStorage.getBool(key, value);
      expect(result).toBe(value);
    });

    it('Default true', () => {
      const value = true;
      const key = getKey("boolTest");
      _localStorage.removeItem(key);
      // not set, should return default
      let result = _localStorage.getBool(key, value);
      expect(result).toBe(value);
    });

    it('Set/Get false', () => {
      const value = false;
      const key = getKey("boolTest");
      _localStorage.setBool(key, value);
      const result = _localStorage.getBool(key, !value);
      expect(result).toBe(value);
    });

    it('Set/Get true', () => {
      const value = true;
      const key = getKey("boolTest");
      _localStorage.setBool(key, value);
      const result = _localStorage.getBool(key, !value);
      expect(result).toBe(value);
    });
  });

  describe('Integers', () => {
    it('Default', () => {
      const value = 10;
      const key = getKey("intTest");
      _localStorage.removeItem(key);
      // not set, should return default
      let result = _localStorage.getInt(key, value);
      expect(result).toBe(value);
    });

    it('Set/Get positive value', () => {
      const value = 10;
      const key = getKey("intTest");
      _localStorage.setInt(key, value);
      const result = _localStorage.getInt(key, 0);
      expect(result).toBe(value);
    });

    it('Set/Get positive passing in decimal', () => {
      const value = 10.1234;
      const key = getKey("intTest");
      _localStorage.setInt(key, value);
      const result = _localStorage.getInt(key, 0);
      expect(result).toBe(Math.trunc(value));
    });

    it('Set/Get negative value', () => {
      const value = -10;
      const key = getKey("intTest");
      _localStorage.setInt(key, value);
      const result = _localStorage.getInt(key, 0);
      expect(result).toBe(value);
    });

    it('Set/Get negative passing in decimal', () => {
      const value = -10.1234;
      const key = getKey("intTest");
      _localStorage.setInt(key, value);
      const result = _localStorage.getInt(key, 0);
      expect(result).toBe(Math.trunc(value));
    });

    it('Get a value that is not a number', () => {
      const value = "ABC";
      const defVal = 10;
      const key = getKey("intTest");
      _localStorage.setItem(key, value);
      const result = _localStorage.getInt(key, defVal);
      expect(result).toBe(Math.trunc(defVal));
    });

  });

  describe('Reals', () => {
    it('Default', () => {
      const value = 1.1234;
      const key = getKey("realTest");
      _localStorage.removeItem(key);
      // not set, should return default
      let result = _localStorage.getReal(key, value);
      expect(result).toBe(value);
    });

    it('Set/Get positive value', () => {
      const value = 1.1234;
      const key = getKey("realTest");
      _localStorage.setReal(key, value);
      const result = _localStorage.getReal(key, 0);
      expect(result).toBe(value);
    });

    it('Set/Get negative value', () => {
      const value = -1.1234;
      const key = getKey("realTest");
      _localStorage.setReal(key, value);
      const result = _localStorage.getReal(key, 0);
      expect(result).toBe(value);
    });


    it('Get a value that is not a number', () => {
      const value = "ABC";
      const defVal = 1.1234;
      const key = getKey("realTest");
      _localStorage.setItem(key, value);
      const result = _localStorage.getReal(key, defVal);
      expect(result).toBe(defVal);
    });

  });




});
