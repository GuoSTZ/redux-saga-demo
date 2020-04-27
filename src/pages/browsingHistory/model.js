import { Model, fk, oneToOne, many, ORM, attr } from "redux-orm";

export const namespace = ""
export class BrowsingHistorySet extends Model {
    // static reducer(action, BrowsingHistorySet, session) {
    //     let modelName = BrowsingHistorySet.modelName
    //     switch (action.type) {
    //         case `${modelName}_ADD`:
    //             BrowsingHistorySet.create(action.payload)
    //             break
    //         case `${modelName}_DELETE`:
    //             BrowsingHistorySet.withId(action.payload).delete()
    //             break
    //         case `${modelName}_UPDATE`:
    //             BrowsingHistorySet.withId(action.payload.id).update(action.payload)
    //             break
    //     }
    // }
}
BrowsingHistorySet.modelName = namespace;
BrowsingHistorySet.fields = {
    // ...
}

const orm = new ORM;
orm.register(BrowsingHistorySet);

export { orm }