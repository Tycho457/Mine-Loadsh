/**
 * 将数组的所有元素转换为由分隔符分隔的字符串。
 *
 * @param arr 待处理的数组
 * @param separator 分隔符
 * @returns 处理后的字符串
 */
export function join(arr: any[], separator = ','): string{
    return arr.join(separator);
}