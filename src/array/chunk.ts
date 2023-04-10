/**
 * 创建一个将数组拆分成指定大小的多个块的新数组。
 * 如果无法均匀拆分，则最后一个块将包含剩余的元素。
 *
 * @param arr 待拆分的数组
 * @param size 块的大小
 * @returns 新数组，其中包含拆分后的块
 */

export function chunk<T>(arr: T[], size = 1): T[][] {
    const result:T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  }