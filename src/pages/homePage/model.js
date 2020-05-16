import { Model, fk, oneToOne, many, ORM, attr } from "redux-orm";

export const namespace = "HomePageSet"
export class HomePageSet extends Model {
    // static reducer(action, HomePageSet, session) {
    //     let modelName = HomePageSet.modelName
    //     switch (action.type) {
    //         case `${modelName}_ADD`:
    //             HomePageSet.create(action.payload)
    //             break
    //         case `${modelName}_DELETE`:
    //             HomePageSet.withId(action.payload).delete()
    //             break
    //         case `${modelName}_UPDATE`:
    //             HomePageSet.withId(action.payload.id).update(action.payload)
    //             break
    //     }
    // }
}
HomePageSet.modelName = namespace;
HomePageSet.fields = {
    // ...
}

const orm = new ORM;
orm.register(HomePageSet);

export { orm }