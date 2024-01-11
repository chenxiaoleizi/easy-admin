// 保留小数点后几位
export function toFixed(num: number, digits: number) {
  const scalar = Math.pow(10, digits);
  const fixedNum = Math.round(num * scalar) / scalar;

  const fixedStr = fixedNum.toString();
  const [integer, fraction = ""] = fixedStr.split(".");

  return integer + "." + fraction.padEnd(digits, "0");
}

// 格式化数字
export function formatNumberWithCommas(num: number) {
  const stringNum = num.toString();
  return stringNum.replace(/\B(?=(\d{3})+(?!\d))/, ",");
}

// 是否是手机号
export const isPhone = (value: string) => {
  const reg = /^1[3456789]\d{9}$/;
  return reg.test(value);
};

// 是否是邮箱
export const isEmail = (value: string) => {
  const reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  return reg.test(value);
};
