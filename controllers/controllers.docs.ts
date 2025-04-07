import type { Request, Response } from "express";
import { getFileContent } from "../services/docs.services";

export function docsController(req: Request, res: Response): void {
  const { id } = req.params;

  if (!id) {
    res.sendStatus(400); // bad request
    return;
  }

  const content = getFileContent(id);

  res.send(content);
}
