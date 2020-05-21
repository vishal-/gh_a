const defaultOptions = {
  // cols: [
  //   {
  //     title: "aslfkjslfjlsjflsdjflkjsdflkjsdfkljsadflkjsdlfkjsdl",
  //     newTitle: "ASDLFKJSFLJSLFJLSJFLSJFLSJFIUWEIPRWEROUXZVNXZVN",
  //     display: false
  //   }
  // ]
};

const getAllColumns = data =>
  Object.keys(data[0]).reduce(
    (a, c) => [
      ...a,
      {
        title: c,
        key: c
      }
    ],
    []
  );

const getFilteredColumns = (data, cols) =>
  cols.reduce(
    (a, c) =>
      data[0].hasOwnProperty(c.title) &&
      (!c.hasOwnProperty("display") ||
        (c.hasOwnProperty("display") && c.display === true))
        ? [
            ...a,
            {
              title:
                c.hasOwnProperty("newTitle") && c.newTitle
                  ? c.newTitle
                  : c.title,
              key: c.title
            }
          ]
        : [...a],
    []
  );

const getColumns = (data, options) =>
  Object.prototype.hasOwnProperty.call(options, "cols") &&
  Object.keys(options.cols > 0)
    ? getFilteredColumns(data, options.cols)
    : getAllColumns(data);

const getTableData = (data, options = defaultOptions) =>
  data instanceof Array && data.length > 0
    ? { columns: getColumns(data, options) }
    : {};

export default { getTableData };
