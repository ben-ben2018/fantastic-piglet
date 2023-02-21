import { axios2 } from "../useAxios2";
export default defineEventHandler(async (event) => {
  // path: "/api/" + event.context.params.hello,
  //   let query = event.context.params.getRead;
  let result: Object = {};
  await axios2.find("author-lists/1", "").then(async (res) => {
    let users = res.data.data.attributes.jj_users.data;
    res.data.data.attributes.authors = [];
    for (let u of users) {
      await axios2.find("jj-users/" + u.id, "").then((_res: any) => {
        res.data.data.attributes.authors.push(_res.data.data.attributes);
      });
    }
    result = res.data.data.attributes.authors;
  });
  return result;
});
