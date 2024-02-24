import { Users } from "./Users";

export interface UsersRepository{
    getAll(): Promise<Users[] | null>;
    getById(userId: number): Promise<Users | null>,
    createUsers(
       nombre: string,
       correo: string,
       password: string 
    ): Promise<Users | null>,
    login(
       correo: string,
       password: string
    ): Promise<Users | null>;
        
}