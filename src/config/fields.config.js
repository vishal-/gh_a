export const TYPES = {
  STR: "string",
  TXT: "text"
};

export const OFFERING_FIELDS = [
  {
    label: "name",
    type: TYPES.STR,
    colsize: 12
  },
  {
    label: "title",
    type: TYPES.STR,
    colsize: 6
  },
  {
    label: "subtext",
    type: TYPES.STR,
    colsize: 6
  },
  {
    label: "description",
    type: TYPES.TXT,
    colsize: 12
  }
];

export const OFFERING_COLS = [
  {
    title: "id"
  },
  {
    title: "name",
    newTitle: "Name"
  },
  {
    title: "title",
    newTitle: "Title"
  },
  {
    title: "subtext",
    newTitle: "Sub Text"
  },
  {
    title: "description",
    newTitle: "Description",
    display: true
  }
];
