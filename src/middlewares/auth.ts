import { NextFunction, Request, Response } from "express";

export const Auth = {
  private: (req: Request, res: Response, next: NextFunction) => {
    let success = false;

    //Fazer processo de verificação

    if (success) {
      next();
    } else {
      res.status(403);
      res.json({ error: "Não autorizado" });
    }
  },
};
