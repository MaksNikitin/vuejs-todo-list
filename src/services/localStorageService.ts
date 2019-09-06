export default class LocalStorageService {
  static add(key: string, item: any) {
    localStorage.setItem(key, JSON.stringify(item));
  }

  static get(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }

  static remove(key: string) {
    localStorage.removeItem(key);
  }
}