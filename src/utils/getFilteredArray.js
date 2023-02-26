export const getFilteredArray = (items, filteredValue) =>
  items.filter(item =>
    [item.name.toLowerCase(), item.phone]
      .join(' ')
      .includes(filteredValue.toLowerCase().trim())
  );
// export const getFilteredArray = (items, key, filteredValue) =>
//   items.filter(item =>
//     item[key].toLowerCase().includes(filteredValue.toLowerCase().trim())
//   );
