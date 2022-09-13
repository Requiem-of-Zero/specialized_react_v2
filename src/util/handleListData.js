const handleData = (list, categoryTitle) => {
  const data = [];
  const result = {};
  for (const obj of list) {
    const { fields } = obj;
    data.push(fields);
  }

  result[categoryTitle] = data;

  return result;
};

export default handleData;