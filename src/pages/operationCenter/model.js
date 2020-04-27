import { Model, fk, oneToOne, many, ORM, attr } from "redux-orm";

export const namespace = "VideoUploadSet"
export class VideoUploadSet extends Model {
    // static reducer(action, VideoUploadSet, session) {
    //     let modelName = VideoUploadSet.modelName
    //     switch (action.type) {
    //         case `${modelName}_ADD`:
    //             VideoUploadSet.create(action.payload)
    //             break
    //         case `${modelName}_DELETE`:
    //             VideoUploadSet.withId(action.payload).delete()
    //             break
    //         case `${modelName}_UPDATE`:
    //             VideoUploadSet.withId(action.payload.id).update(action.payload)
    //             break
    //     }
    // }
}
VideoUploadSet.modelName = namespace;
VideoUploadSet.fields = {
    // ...
}

const orm = new ORM;
orm.register(VideoUploadSet);

export { orm }