export function isEqual(a: any, b: any): boolean {
    if (a === b) {
      return true;
    }
  
    if (typeof a !== typeof b || a === null || b === null) {
      return false;
    }
  
    if (typeof a === "object") {
      const aKeys = Object.keys(a);
      const bKeys = Object.keys(b);
  
      if (aKeys.length !== bKeys.length) {
        return false;
      }
  
      for (const key of aKeys) {
        if (!isEqual(a[key], b[key])) {
          return false;
        }
      }
  
      return true;
    }
  
    return false;
  }
  