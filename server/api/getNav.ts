import { axios2 } from "../useAxios2";
export default defineEventHandler(async (event) => {
  // path: "/api/" + event.context.params.hello,
  //   let query = event.context.params.getRead;
  let result: Object = {};
  await axios2.find("jj-navs/", "").then((res) => {
    result = res.data.data;
  });
  return result;
});
