/**
 * 创建一个新数组，其中不包含任何已经包含在其他数组中的元素。
 * 返回的数组的元素顺序与原始数组保持一致。
 *
 * @param arrays 待取差集的数组列表
 * @returns 取差集后的新数组
 */

export function difference<T>(...arrays: T[][]): T[] {
    const flat = arrays.reduce((acc, cur) => acc.concat(cur), []);
    const counts = new Map(flat.map(x => [x, 1]));
    return flat.filter(x => counts.get(x) === 1);
  }