import { Model, fk, oneToOne, many, ORM, attr } from "redux-orm";

export const namespace = "MyCourseSet"
export class MyCourseSet extends Model {
    // static reducer(action, MyCourseSet, session) {
    //     let modelName = MyCourseSet.modelName
    //     switch (action.type) {
    //         case `${modelName}_ADD`:
    //             MyCourseSet.create(action.payload)
    //             break
    //         case `${modelName}_DELETE`:
    //             MyCourseSet.withId(action.payload).delete()
    //             break
    //         case `${modelName}_UPDATE`:
    //             MyCourseSet.withId(action.payload.id).update(action.payload)
    //             break
    //     }
    // }
}
MyCourseSet.modelName = namespace;
MyCourseSet.fields = {
    // ...
}

const orm = new ORM;
orm.register(MyCourseSet);

export { orm }