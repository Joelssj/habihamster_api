import { query } from "../../database/mysql";
import { Users } from "../domain/Users";
import { UsersRepository } from "../domain/UsersRepository";

export class MysqlUsersRepository implements UsersRepository {
  async login(correo: string, password: string): Promise<Users | null> {
    const sql = "SELECT * FROM users WHERE correo=? and password=?";
    const params: any[]=[correo, password];
    try {
      const result: any= await query(sql, params);
      const user = result[0][0];
      console.log(user)
      return user;
    } catch (error) {
      return null;
    }
  }
  async getById (id: number): Promise<Users | null> {
    const sql = "SELECT * FROM users WHERE id=?";
    const params: any[] = [id];
    try {
      const result: any = await query(sql, params);
      const user = result[0][0]
      console.log(user)
      return new Users(
        user.id,
        user.nombre,
        user.correo,
        user.password
      );
    } catch (error) {
      return null;
    }
  }
  async getAll(): Promise<Users[] | null> {
    const sql = "SELECT * FROM users";
    try {
      const [data]: any = await query(sql, []);
      const dataUsers = Object.values(JSON.parse(JSON.stringify(data)));
      return dataUsers.map(
        (user: any) =>
          new Users(
            user.id,
            user.nombre,
            user.correo,
            user.password
          )
      );
    } catch (error) {
      return null;
    }
  }

  async createUsers(
    nombre: string,
    correo: string,
    password: string,
  ): Promise<Users | null> {
    const sql = "INSERT INTO users (nombre, correo, password) VALUES (?, ?, ?)";
    const params: any[] = [nombre, correo, password];
    try {
      const [result]: any = await query(sql, params);
      return new Users(result.insertId, nombre, correo, password);
    } catch (error) {
      return null;
    }
  }
}