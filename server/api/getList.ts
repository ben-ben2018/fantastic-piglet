import { axios2 } from "../useAxios2";
export default defineEventHandler(async (event) => {
  // path: "/api/" + event.context.params.hello,
  //   let query = event.context.params.getRead
  const getQuery = (url: String) => {
    const str = url.substr(url.indexOf("?") + 1);
    const arr = str.split("&");
    const result: any = {};
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i].split("=");
      result[item[0]] = item[1];
    }
    return result;
  };

  let type = "";
  let query = getQuery(event.node.req.originalUrl);
  // if (event.context.params.getList != "getList") {
  //   type = decodeURI(
  //     event.context.params.getList.split("/").pop().split("?")[0]
  //   );
  // }
  type = decodeURI(query.type);
  console.log("query", query);
  let result: Object = {};
  let path =
    "&pagination[pageSize]=10&" +
    "pagination[page]=" +
    (query.page || 1) +
    (type ? "&filters[tag][name][$eq]=" + type : "") +
    (query.sort == "hot" ? "&sort[0]=hot:desc" : "");

  console.log(path);
  await axios2.find("jj-contents/", path).then((res) => {
    result = res.data.data;
  });
  return result;
});
