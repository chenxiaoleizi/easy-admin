/**
 * @description 通过 a 标签下载文件
 * @param url 文件 url 地址
 * @param filename 文件名
 */
export function downloadByAElement(url: string, filename: string) {
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
}
