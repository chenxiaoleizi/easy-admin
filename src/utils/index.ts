// 保留小数点后几位
export function toFixed(num: number, digits: number): number {
  const scalar = Math.pow(10, digits);
  return Math.round(num * scalar) / scalar;
}

// 格式化数字
export function formatNumberWithCommas(num: number) {
  const stringNum = num.toString();
  return stringNum.replace(/\B(?=(\d{3})+(?!\d))/, ",");
}
