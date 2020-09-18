import { Model, fk, oneToOne, many, ORM, attr } from "redux-orm";

export const namespace = "ChangeMessageSet"
export class ChangeMessageSet extends Model {
    // static reducer(action, ChangeMessageSet, session) {
    //     let modelName = ChangeMessageSet.modelName
    //     switch (action.type) {
    //         case `${modelName}_ADD`:
    //             ChangeMessageSet.create(action.payload)
    //             break
    //         case `${modelName}_DELETE`:
    //             ChangeMessageSet.withId(action.payload).delete()
    //             break
    //         case `${modelName}_UPDATE`:
    //             ChangeMessageSet.withId(action.payload.id).update(action.payload)
    //             break
    //     }
    // }
}
ChangeMessageSet.modelName = namespace;
ChangeMessageSet.fields = {
    // ...
}

const orm = new ORM;
orm.register(ChangeMessageSet);

export { orm }