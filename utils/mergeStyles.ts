export default function mergeStyles(...inputs: any[]) {
    const result = {};
  
    const merge = (obj: any) => {
      if (!obj) return;
      if (Array.isArray(obj)) {
        obj.forEach(merge);
        return;
      }
      if (typeof obj === 'object') {
        Object.assign(result, obj);
      }
    };
  
    inputs.forEach(merge);
  
    return result;
  }