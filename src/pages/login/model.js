import { Model, fk, oneToOne, many, ORM, attr } from "redux-orm";

export const namespace = "LoginPageSet"
export class LoginPageSet extends Model {

}
LoginPageSet.modelName = namespace;
LoginPageSet.fields = {
    // ..
}

const orm = new ORM;
orm.register(LoginPageSet);

export { orm }