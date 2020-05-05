import { Model, fk, oneToOne, many, ORM, attr } from "redux-orm";

export const namespace = "OperationCenterSet"
export class OperationCenterSet extends Model {
    // static reducer(action, OperationCenterSet, session) {
    //     let modelName = OperationCenterSet.modelName
    //     switch (action.type) {
    //         case `${modelName}_ADD`:
    //             OperationCenterSet.create(action.payload)
    //             break
    //         case `${modelName}_DELETE`:
    //             OperationCenterSet.withId(action.payload).delete()
    //             break
    //         case `${modelName}_UPDATE`:
    //             OperationCenterSet.withId(action.payload.id).update(action.payload)
    //             break
    //     }
    // }
}
OperationCenterSet.modelName = namespace;
OperationCenterSet.fields = {
    // ...
}

const orm = new ORM;
orm.register(OperationCenterSet);

export { orm }