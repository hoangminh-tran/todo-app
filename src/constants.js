export const TODO_LIST = [
  {
    id: crypto.randomUUID(),
    name: "Study FrontEnd",
    isImportant: true,
    isCompleted: true,
    isDeleted: false,
    categoryName: "Personal",
  },
  {
    id: crypto.randomUUID(),
    name: "Study BackEnd",
    isImportant: true,
    isCompleted: false,
    isDeleted: false,
    categoryName: "Personal",
  },
  {
    id: crypto.randomUUID(),
    name: "Study DataBase",
    isImportant: true,
    isCompleted: true,
    isDeleted: false,
    categoryName: "Personal",
  },
  {
    id: crypto.randomUUID(),
    name: "Study DevOps",
    isImportant: false,
    isCompleted: false,
    isDeleted: false,
    categoryName: "Personal",
  },
  {
    id: crypto.randomUUID(),
    name: "Study Cloud",
    isImportant: false,
    isCompleted: false,
    isDeleted: false,
    categoryName: "Company",
  },
  {
    id: crypto.randomUUID(),
    name: "Study AI",
    isImportant: true,
    isCompleted: true,
    isDeleted: false,
    categoryName: "Future",
  },
  {
    id: crypto.randomUUID(),
    name: "Study ML",
    isImportant: true,
    isCompleted: false,
    isDeleted: true,
    categoryName: "Idea",
  },
  {
    id: crypto.randomUUID(),
    name: "Study DS",
    isImportant: false,
    isCompleted: false,
    isDeleted: true,
    categoryName: "Idea",
  },
];

export const CATEGORY_ITEM = [
  {
    id: "personal",
    name: "Personal",
  },
  {
    id: "company",
    name: "Company",
  },
  {
    id: "future",
    name: "Future",
  },
  {
    id: "idea",
    name: "Idea",
  },
];

export const FILTER_ITEM = [
  {
    id: "all",
    label: "All",
    iconPath: "/inbox.png",
  },
  {
    id: "important",
    label: "Important",
    iconPath: "/flag.png",
  },
  {
    id: "completed",
    label: "Completed",
    iconPath: "/check.png",
  },
  {
    id: "deleted",
    label: "Delete",
    iconPath: "/delete.png",
  },
];
