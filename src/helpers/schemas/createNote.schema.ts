import { object, string } from "yup";

export default object({
  body: object({
    name: string().required("Name is a required field"),
    category: string()
      .required("Category is a required field")
      .oneOf(["Task", "Idea", "Random Thought"]),
    content: string().required("Content is a required field"),
  })
    .noUnknown(true)
    .strict(),
});
