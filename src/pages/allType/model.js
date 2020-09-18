import { Model, fk, oneToOne, many, ORM, attr } from "redux-orm";

export const namespace = "AllTypeSet"
export class AllTypeSet extends Model {
    // static reducer(action, AllTypeSet, session) {
    //     let modelName = AllTypeSet.modelName
    //     switch (action.type) {
    //         case `${modelName}_ADD`:
    //             AllTypeSet.create(action.payload)
    //             break
    //         case `${modelName}_DELETE`:
    //             AllTypeSet.withId(action.payload).delete()
    //             break
    //         case `${modelName}_UPDATE`:
    //             AllTypeSet.withId(action.payload.id).update(action.payload)
    //             break
    //     }
    // }
}
AllTypeSet.modelName = namespace;
AllTypeSet.fields = {
    // ...
}

const orm = new ORM;
orm.register(AllTypeSet);

export { orm }