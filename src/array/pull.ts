/**
 * 移除数组中与给定值相同的元素，返回一个新数组。
 *
 * @param arr 待处理的数组
 * @param values 待移除的值
 * @returns 处理后的新数组
 */
export function pull<T>(arr: T[], ...values:T[]):T[] {
    return arr.filter(x=>!values.includes(x));
}