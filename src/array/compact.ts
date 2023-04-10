/**
 * 从数组中删除所有假值（false、null、0、""、undefined 和 0n）。
 * 返回一个新数组。
 *
 * @param arr 待处理的数组
 * @returns 处理后的新数组
 */
export function compact<T>(arr: (T | null | undefined | false | 0n | '' | 0)[]): T[] {
    return arr.reduce<T[]>((res, val) => {
        if(val) {
            res.push(val);
        }
        return res;
    },[]);
}
  