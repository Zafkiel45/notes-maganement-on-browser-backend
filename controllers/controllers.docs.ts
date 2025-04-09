import type { Request, Response } from "express";
import {
  getFileContent,
  getFolders,
  getFilesByType,
} from "../services/docs.services";

export function docsController(req: Request, res: Response): void {
  const { id } = req.params;

  if (!id) {
    res.sendStatus(400); // bad request
    return;
  }

  const content = getFileContent(id);

  res.send(content);
}

export function foldersController(req: Request, res: Response) {
  res.send(getFolders());
}

export function filesTypeController(req: Request, res: Response) {
  const { type } = req.params;
  console.log(type + ' THIS IS THE TYPE')
  if (!type) {
    res.sendStatus(400); // bad request
    return;
  }

  res.send(getFilesByType(type))
}
