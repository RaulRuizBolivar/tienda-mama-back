// This method removes all null fields from an object
export function removeNullFields(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map((item) => this.removeNullFields(item));
  } else if (obj && typeof obj === 'object') {
    const newObj: any = {};
    for (const [key, value] of Object.entries(obj)) {
      if (value !== null && value !== undefined) {
        newObj[key] = this.removeNullFields(value);
      }
    }
    return newObj;
  }
  return obj;
}
