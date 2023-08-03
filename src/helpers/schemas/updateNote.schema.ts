import { boolean, object, string } from "yup";

export default object({
  body: object({
    name: string(),
    category: string().oneOf(["Task", "Idea", "Random Thought"]),
    content: string(),
    archived: boolean(),
  })
    .noUnknown(true)
    .strict(),
});
