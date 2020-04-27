import { Model, fk, oneToOne, many, ORM, attr } from "redux-orm";

export const namespace = "RegisterPageSet"
export class RegisterPageSet extends Model {
    // static reducer(action, RegisterPageSet, session) {
    //     let modelName = RegisterPageSet.modelName
    //     switch (action.type) {
    //         case `${modelName}_ADD`:
    //             RegisterPageSet.create(action.payload)
    //             break
    //         case `${modelName}_DELETE`:
    //             RegisterPageSet.withId(action.payload).delete()
    //             break
    //         case `${modelName}_UPDATE`:
    //             RegisterPageSet.withId(action.payload.id).update(action.payload)
    //             break
    //     }
    // }
}
RegisterPageSet.modelName = namespace;
RegisterPageSet.fields = {
    // ...
}

const orm = new ORM;
orm.register(RegisterPageSet);

export { orm }