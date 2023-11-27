export function formatedStringSpecialCharacterObject<T extends {[key: string]: any}>(object: T): string {
   let first: boolean = false;
   let stringReturn = '';
    for (let key in object) {
      stringReturn = stringReturn + `${first ? '&' : '?'}${key}=${object[key]}`;
      if(!first )  first = true;
    }
    return stringReturn;
}