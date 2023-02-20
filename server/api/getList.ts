import { axios2 } from "../useAxios2";
import { qs2 } from "../qs";
export default defineEventHandler(async (event) => {
  // path: "/api/" + event.context.params.hello,
  //   let query = event.context.params.getRead;
  const query = qs2.stringify({
    filters: {
      type: {
        $eq: event.context.params.type || "",
      },
    },
  });
  let result: Object = {};
  await axios2
    .find("jj-contents/", "&sort[0]=hot:desc" + (query ? "&" + query : ""))
    .then((res) => {
      result = res.data.data;
    });
  return result;
});
