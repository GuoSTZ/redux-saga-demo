import { Model, fk, oneToOne, many, ORM, attr } from "redux-orm";

export const namespace = "PersonalPageSet"
export class PersonalPageSet extends Model {
    // static reducer(action, PersonalPageSet, session) {
    //     let modelName = PersonalPageSet.modelName
    //     switch (action.type) {
    //         case `${modelName}_ADD`:
    //             PersonalPageSet.create(action.payload)
    //             break
    //         case `${modelName}_DELETE`:
    //             PersonalPageSet.withId(action.payload).delete()
    //             break
    //         case `${modelName}_UPDATE`:
    //             PersonalPageSet.withId(action.payload.id).update(action.payload)
    //             break
    //     }
    // }
}
PersonalPageSet.modelName = namespace;
PersonalPageSet.fields = {
    // ...
}

const orm = new ORM;
orm.register(PersonalPageSet);

export { orm }