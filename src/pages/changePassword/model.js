import { Model, fk, oneToOne, many, ORM, attr } from "redux-orm";

export const namespace = "ChangePasswordSet"
export class ChangePasswordSet extends Model {
    // static reducer(action, ChangePasswordSet, session) {
    //     let modelName = ChangePasswordSet.modelName
    //     switch (action.type) {
    //         case `${modelName}_ADD`:
    //             ChangePasswordSet.create(action.payload)
    //             break
    //         case `${modelName}_DELETE`:
    //             ChangePasswordSet.withId(action.payload).delete()
    //             break
    //         case `${modelName}_UPDATE`:
    //             ChangePasswordSet.withId(action.payload.id).update(action.payload)
    //             break
    //     }
    // }
}
ChangePasswordSet.modelName = namespace;
ChangePasswordSet.fields = {
    // ...
}

const orm = new ORM;
orm.register(ChangePasswordSet);

export { orm }