import { Model, fk, oneToOne, many, ORM, attr } from "redux-orm";

export const namespace = "CourseReleaseSet"
export class CourseReleaseSet extends Model {
    // static reducer(action, CourseReleaseSet, session) {
    //     let modelName = CourseReleaseSet.modelName
    //     switch (action.type) {
    //         case `${modelName}_ADD`:
    //             CourseReleaseSet.create(action.payload)
    //             break
    //         case `${modelName}_DELETE`:
    //             CourseReleaseSet.withId(action.payload).delete()
    //             break
    //         case `${modelName}_UPDATE`:
    //             CourseReleaseSet.withId(action.payload.id).update(action.payload)
    //             break
    //     }
    // }
}
CourseReleaseSet.modelName = namespace;
CourseReleaseSet.fields = {
    // ...
}

const orm = new ORM;
orm.register(CourseReleaseSet);

export { orm }