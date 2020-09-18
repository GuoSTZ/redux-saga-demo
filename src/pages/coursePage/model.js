import { Model, fk, oneToOne, many, ORM, attr } from "redux-orm";

export const namespace = "CoursePageSet"
export class CoursePageSet extends Model {
    // static reducer(action, CoursePageSet, session) {
    //     let modelName = CoursePageSet.modelName
    //     switch (action.type) {
    //         case `${modelName}_ADD`:
    //             CoursePageSet.create(action.payload)
    //             break
    //         case `${modelName}_DELETE`:
    //             CoursePageSet.withId(action.payload).delete()
    //             break
    //         case `${modelName}_UPDATE`:
    //             CoursePageSet.withId(action.payload.id).update(action.payload)
    //             break
    //     }
    // }
}
CoursePageSet.modelName = namespace;
CoursePageSet.fields = {
    // ...
}

const orm = new ORM;
orm.register(CoursePageSet);

export { orm }