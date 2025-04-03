import type { Request, Response, NextFunction } from "express";

export function implementCors(
  req: Request,
  res: Response,
  next: NextFunction
) {
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Credentials', 'false');
    res.setHeader('Access-Control-Allow-Headers', '');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    if(req.method === 'OPTIONS') {
        res.sendStatus(405) // method does not allowed
    };

    next();
};
