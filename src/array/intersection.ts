/**
 * 创建一个新数组，其中包含两个数组中所有相同的元素。
 * 返回的数组中的每个元素都是唯一的，即使它在一个或两个原始数组中重复出现。
 *
 * @param arr1 数组1
 * @param arr2 数组2
 * @returns 两个数组中的交集
 */
export function intersection<T>(arr1:T[],arr2:T[]): T[] {
    const set2 = new Set(arr2);
    return [...new Set(arr1.filter(x => set2.has(x)))];
}