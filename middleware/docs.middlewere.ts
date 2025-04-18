import type { Request, Response, NextFunction } from "express";

export function implementCors(
  req: Request,
  res: Response,
  next: NextFunction
): void {
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Credentials', 'false');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4321');

    if(req.method === 'OPTIONS') {
      res.sendStatus(204); // No Content
      return ; // there is a bug here when I try return the "res.sendStatus()"
    };

    next();
};
