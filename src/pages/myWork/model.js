import { Model, fk, oneToOne, many, ORM, attr } from "redux-orm";

export const namespace = "MyWorkSet"
export class MyWorkSet extends Model {
    // static reducer(action, MyWorkSet, session) {
    //     let modelName = MyWorkSet.modelName
    //     switch (action.type) {
    //         case `${modelName}_ADD`:
    //             MyWorkSet.create(action.payload)
    //             break
    //         case `${modelName}_DELETE`:
    //             MyWorkSet.withId(action.payload).delete()
    //             break
    //         case `${modelName}_UPDATE`:
    //             MyWorkSet.withId(action.payload.id).update(action.payload)
    //             break
    //     }
    // }
}
MyWorkSet.modelName = namespace;
MyWorkSet.fields = {
    // ...
}

const orm = new ORM;
orm.register(MyWorkSet);

export { orm }