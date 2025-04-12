import http from "./http";

// 获取字典
type Dict = {
  dictKey: string;
  dictItems: { dictItemKey: string | number; dictItemName: string }[];
};
export function getDictList(): Promise<Dict[]> {
  return http.post("/dictList");
}
