import { Model, fk, oneToOne, many, ORM, attr } from "redux-orm";

export const namespace = "VideoPageSet"
export class VideoPageSet extends Model {
    // static reducer(action, VideoPageSet, session) {
    //     let modelName = VideoPageSet.modelName
    //     switch (action.type) {
    //         case `${modelName}_ADD`:
    //             VideoPageSet.create(action.payload)
    //             break
    //         case `${modelName}_DELETE`:
    //             VideoPageSet.withId(action.payload).delete()
    //             break
    //         case `${modelName}_UPDATE`:
    //             VideoPageSet.withId(action.payload.id).update(action.payload)
    //             break
    //     }
    // }
}
VideoPageSet.modelName = namespace;
VideoPageSet.fields = {
    // ...
}

const orm = new ORM;
orm.register(VideoPageSet);

export { orm }