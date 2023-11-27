export function deleteObjectValuesNullUndefinedEmpty<T extends {[key: string]: any}>(object: T): T {
    for (let key in object) {
      if (!object[key] && object[key] !== 0) {
        delete object[key];
      }
    }
    return object;
}