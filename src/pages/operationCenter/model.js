import { Model, fk, oneToOne, many, ORM, attr } from "redux-orm";

export const namespace = "CommentDetailSet"
export class CommentDetailSet extends Model {
    // static reducer(action, CommentDetailSet, session) {
    //     let modelName = CommentDetailSet.modelName
    //     switch (action.type) {
    //         case `${modelName}_ADD`:
    //             CommentDetailSet.create(action.payload)
    //             break
    //         case `${modelName}_DELETE`:
    //             CommentDetailSet.withId(action.payload).delete()
    //             break
    //         case `${modelName}_UPDATE`:
    //             CommentDetailSet.withId(action.payload.id).update(action.payload)
    //             break
    //     }
    // }
}
CommentDetailSet.modelName = namespace;
CommentDetailSet.fields = {
    // ...
}

const orm = new ORM;
orm.register(CommentDetailSet);

export { orm }