import { axios2 } from "../useAxios2";
export default defineEventHandler(async (event) => {
  // path: "/api/" + event.context.params.hello,
  //   let query = event.context.params.getRead
  let type = "";

  if (event.context.params.getList != "getList") {
    type =
      "filters[tag][name][$eq]=" +
      decodeURI(event.context.params.getList.split("/").pop());
  }
  let result: Object = {};
  await axios2
    .find("jj-contents/", "&sort[0]=hot:desc" + (type ? "&" + type : ""))
    .then((res) => {
      result = res.data.data;
    });
  return result;
});
