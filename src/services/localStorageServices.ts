export class LocalStorageServices {
  storageSupported = false;
  constructor() {
    if (typeof Storage != "undefined") this.storageSupported = true;
  }

  setItem(key: string, value: string): void {
    if (this.storageSupported) 
      localStorage.setItem(key, value);
  }

  getItem(key: string, defVal: string): string {
    var retVal = defVal;
    if (this.storageSupported) {
      var storageStr = localStorage.getItem(key);
      if (storageStr != null) retVal = storageStr;
    }

    return retVal;
  }

  getBool(key: string, defVal: boolean): boolean {
    const item = this.getItem(key, defVal.toString());

    return !item || item === "false" || item === "0" ? false : true;
  }

  setBool(key: string, value: boolean): void {
    this.setItem(key, value.toString());
  }

  getInt(key: string, defVal: number): number {
    let retVal = Number.parseInt(this.getItem(key, defVal.toString()));
    if (Number.isNaN(retVal)) 
      retVal = defVal;

    return retVal;
  }

  setInt(key: string, value: number): void {
    this.setItem(key, Math.trunc(value).toString());
  }

  getReal(key: string, defVal: number) {
    let retVal = Number.parseFloat(this.getItem(key, defVal.toString()));
    if (Number.isNaN(retVal)) 
      retVal = defVal;

    return retVal;
  }
  
  setReal(key: string, value: number): void {
    this.setItem(key, value.toString());
  }

  removeItem(key: string) {
    if (this.storageSupported) localStorage.removeItem(key);
  }
}
