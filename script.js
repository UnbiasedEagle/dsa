function getResultByPath(path, obj) {
  let result = null;
  let currentObj = obj;
  const pathArr = path.replace(/\[(\d+)\]/g, ".$1").split(".");

  for (const key of pathArr) {
    result = currentObj[key];
    if (!result) {
      return result;
    }
    currentObj = result;
  }

  return result;
}
const path = "data.results.status";
const obj = {
  data: {
    results: {
      status: "completed",
      error: "",
    },
  },
};
getResultByPath(path, obj);
module.exports = getResultByPath;
