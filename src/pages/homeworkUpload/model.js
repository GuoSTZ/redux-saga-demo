import { Model, fk, oneToOne, many, ORM, attr } from "redux-orm";

export const namespace = ""
export class HomeworkUploadSet extends Model {
    // static reducer(action, HomeworkUploadSet, session) {
    //     let modelName = HomeworkUploadSet.modelName
    //     switch (action.type) {
    //         case `${modelName}_ADD`:
    //             HomeworkUploadSet.create(action.payload)
    //             break
    //         case `${modelName}_DELETE`:
    //             HomeworkUploadSet.withId(action.payload).delete()
    //             break
    //         case `${modelName}_UPDATE`:
    //             HomeworkUploadSet.withId(action.payload.id).update(action.payload)
    //             break
    //     }
    // }
}
HomeworkUploadSet.modelName = namespace;
HomeworkUploadSet.fields = {
    // ...
}

const orm = new ORM;
orm.register(HomeworkUploadSet);

export { orm }