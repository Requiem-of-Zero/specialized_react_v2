import axios from "axios";
import resolveResponse from "contentful-resolve-response";
import flattenFields from "./flattenFields";

// const getEntryById = async (entryId) => {
//   let res = await axios.get(
//     `${process.env.CONTENTFUL_BASE_URL}/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&sys.id=${entryId}&include=3`
//   );
//   const items = resolveResponse(res.data);
//   const banners = [];
//   const responseArr = flattenFields(items[0].fields);

//   for
// };
