import { Model, fk, oneToOne, many, ORM, attr } from "redux-orm";

export const namespace = "UploadVideoSet"
export class UploadVideoSet extends Model {
    // static reducer(action, UploadVideoSet, session) {
    //     let modelName = UploadVideoSet.modelName
    //     switch (action.type) {
    //         case `${modelName}_ADD`:
    //             UploadVideoSet.create(action.payload)
    //             break
    //         case `${modelName}_DELETE`:
    //             UploadVideoSet.withId(action.payload).delete()
    //             break
    //         case `${modelName}_UPDATE`:
    //             UploadVideoSet.withId(action.payload.id).update(action.payload)
    //             break
    //     }
    // }
}
UploadVideoSet.modelName = namespace;
UploadVideoSet.fields = {
    // ...
}

const orm = new ORM;
orm.register(UploadVideoSet);

export { orm }