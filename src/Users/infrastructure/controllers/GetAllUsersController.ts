import { Request, Response } from "express";
import { GetAllUsersUseCase } from "../../application/GetAllUsersUseCase";
import jwt  from "jsonwebtoken";

export class GetAllUsersController{
   constructor(readonly getAllUsersUseCase: GetAllUsersUseCase){}
   async run(req: Request, res: Response) {
    const token = req.headers['authorization'];
    try {
      if (!token) {
        return res.status(403).json({ error: 'El acceso ha sido denegado' });
      }
      else{
        const valido: any = jwt.verify(token, 'tu_secreto', (err) => 
          {if (err) {
            return false;
          }else{
            return true;
          }}
        );
        if (valido){
          const users = await this.getAllUsersUseCase.run();
          if (users)
          res.status(200).send(users.map((user: any) => {
            return {
              id: user.id,
              nombre: user.nombre,
              correo: user.correo,
              password: user.password
            };
          }),
          );
          else
            res.status(400).send({
              status: "Error",
              msn: "Ha ocurrio un problema",
            });
        }else{
          res.status(401).json({ error: 'El token no es válido' })
        }
      }
    } catch (error) {
      res.status(204).send({
        status: "Error",
        data: "Ha ocurrio un error",
        msn: error,
      });
        
    }
   }
}