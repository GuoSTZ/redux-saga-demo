import { Model, fk, oneToOne, many, ORM, attr } from "redux-orm";

export const namespace = "PersonalCenterSet"
export class PersonalCenterSet extends Model {
    // static reducer(action, PersonalCenterSet, session) {
    //     let modelName = PersonalCenterSet.modelName
    //     switch (action.type) {
    //         case `${modelName}_ADD`:
    //             PersonalCenterSet.create(action.payload)
    //             break
    //         case `${modelName}_DELETE`:
    //             PersonalCenterSet.withId(action.payload).delete()
    //             break
    //         case `${modelName}_UPDATE`:
    //             PersonalCenterSet.withId(action.payload.id).update(action.payload)
    //             break
    //     }
    // }
}
PersonalCenterSet.modelName = namespace;
PersonalCenterSet.fields = {
    // ...
}

const orm = new ORM;
orm.register(PersonalCenterSet);

export { orm }