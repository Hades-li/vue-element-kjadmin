export const optionalChaining = (obj, ...rest) => {
  let tmp = obj;
  for (let key in rest) {
    let name = rest[key];
    tmp = tmp?.[name];
  }
  return tmp || "";
}

export const getExtension = (name) => {
  return name.substring(name.lastIndexOf("."))
}
