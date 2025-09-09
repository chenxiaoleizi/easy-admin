export function useValidateFileType(fileTypes: string[]) {
  const ACCEPT_TYPE = fileTypes.map((item) => item.toLocaleLowerCase()); // ["png", "txt"]
  const ACCEPT_EXTENSIONS = ACCEPT_TYPE.map((item) => `.${item}`); // [".png", ".txt"]
  const ACCEPT = ACCEPT_EXTENSIONS.join(","); // ".png,.txt"

  function isValid(fileName: string) {
    const extension = fileName.split(".")?.pop()?.toLowerCase();
    return extension && ACCEPT_TYPE.includes(extension);
  }

  return { isValid, ACCEPT };
}
