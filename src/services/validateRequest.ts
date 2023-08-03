import { NextFunction, Request, Response } from "express";
import { AnySchema, ValidationError } from "yup";

const validate =
  (schema: AnySchema) => (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.validateSync({
        body: req.body,
        query: req.query,
        params: req.params,
      });

      next();
    } catch (error: unknown) {
      if (error instanceof ValidationError) {
        return res.status(400).send("Validation error: " + error.message);
      }
      return res.sendStatus(400);
    }
  };
export default validate;
