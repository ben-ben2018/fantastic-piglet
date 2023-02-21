import { axios2 } from "../useAxios2";
export default defineEventHandler(async (event) => {
  // path: "/api/" + event.context.params.hello,
  // let query = event.context.params.getRead;
  let result: Object = {};

  // let query = getQuery(event.node.req.originalUrl);
  await axios2
    .find("jj-contents/" + event.node.req.originalUrl.split("=")[1], "")
    .then(async (res: any) => {
      await axios2
        .find("jj-users/" + res.data.data.attributes.author_id, "")
        .then((_res: any) => {
          res.data.data.attributes.author = _res.data.data.attributes;
        });
      result = res.data.data.attributes;
    });
  return result;
});
