import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SmxUidService {

  constructor() { }

  /**
   * generates unique id
   * use this to generate id's for name components, radio, checkbox etc.
   * @param prefix prefix to the generated Id
   */
  generate(prefix: string = 'id') {
    let date = new Date().getTime();
    const uid = `${prefix}_xxxx_xx`.replace(/[xy]/g, function (c) {
      var r = (date + Math.random() * 16) % 16 | 0;
      date = Math.floor(date / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    // This is to prevent the failing scenarios, for safe check.
    console.warn(`
      id generated using 'uid service' dynamic and hence is not recommended,
      please create and attach ids manually in HTML
    `)
    return uid
  }

}
