import axios from "axios";

const getEntryById = async (entryId) => {
    const primary = `${process.env.CONTENTFUL_BASE_URL}/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}sys.id=${entryId}&include=3`;
//   let res = await axios.get(
//     `${process.env.CONTENTFUL_BASE_URL}/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}sys.id=${entryId}&include=3`
//   );
//   /uhj6sitpnkxv/environments/master/entries?access_token=3uK_8tLdb60MS_92bWreXwQqTiTGTYgb9RYzcRao0v0&sys.id=${sysId}&include=3`
//   const data = res.data;
console.log(primary)
//   return data;
};

export default getEntryById;
