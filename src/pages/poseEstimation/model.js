import { Model, fk, oneToOne, many, ORM, attr } from "redux-orm";

export const namespace = "TemplateSet"
export class TemplateSet extends Model {
    // static reducer(action, TemplateSet, session) {
    //     let modelName = TemplateSet.modelName
    //     switch (action.type) {
    //         case `${modelName}_ADD`:
    //             TemplateSet.create(action.payload)
    //             break
    //         case `${modelName}_DELETE`:
    //             TemplateSet.withId(action.payload).delete()
    //             break
    //         case `${modelName}_UPDATE`:
    //             TemplateSet.withId(action.payload.id).update(action.payload)
    //             break
    //     }
    // }
}
TemplateSet.modelName = namespace;
TemplateSet.fields = {
    // ...
}

const orm = new ORM;
orm.register(TemplateSet);

export { orm }