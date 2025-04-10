import type { Request, Response, NextFunction } from "express";

export function implementCors(
  req: Request,
  res: Response,
  next: NextFunction
): void {
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Credentials', 'false');
    res.setHeader('Access-Control-Allow-Headers', '');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    if(req.method === 'OPTIONS') {
      res.sendStatus(204); // No Content
      return ; // there is a bug here when I try return the "res.sendStatus()"
    };

    next();
};
