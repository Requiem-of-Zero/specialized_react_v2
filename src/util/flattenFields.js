const isObject = (data) => {
  const object =
    typeof data === "object" && !Array.isArray(data) && data !== null;

  return object;
};

const flattenFields = (data, final = {}) => {
  const isDataObject = isObject(data);
  if (isDataObject) {
    // if object i want to check the fields
    for (const key in data) {
      // if key is  metadata or sys idc, so i skip
      if (key === "metadata" || key === "sys") continue;
      const value = data[key];
      // if value is array, I want to flatten the elements of the array
      if (Array.isArray(value)) {
        final[key] = value.map((ele) => flattenFields(ele));
      }

      if (key === "fields") {
        final = { ...data[key] };
      } else if (isObject(data[key])) {
        final[key] = flattenFields(data[key]);
      } else {
        final[key] = data[key];
      }
    }
  }

  return final;
};

export default flattenFields;
