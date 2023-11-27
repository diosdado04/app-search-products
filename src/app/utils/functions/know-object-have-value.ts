export function knowObjectHaveValue<T extends {[key: string]: any}>(object: T): boolean {
    return !!Object.keys(object).length;
}