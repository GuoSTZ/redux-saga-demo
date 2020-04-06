import { Model, fk, oneToOne, many, ORM, attr } from "redux-orm";

export const namespace = "PositionSet"
export class PositionSet extends Model {
    static reducer(action, PositionSet, session) {
        let modelName = PositionSet.modelName
        switch (action.type) {
            case `${modelName}_ADD`:
                PositionSet.create(action.payload)
                break
            case `${modelName}_DELETE`:
                PositionSet.withId(action.payload).delete()
                break
            case `${modelName}_UPDATE`:
                PositionSet.withId(action.payload.id).update(action.payload)
                break
        }
    }
}
PositionSet.modelName = namespace;
PositionSet.fields = {
    post: attr()
}

export class StaffSet extends Model { }
StaffSet.modelName = "StaffSet";
// StaffSet.idAttribute = 'id'
StaffSet.fields = {
    name: attr(),
    postId: fk({ to: 'PositionSet', relatedName: 'staff' })
};

// export class Salary extends Model { }
// Salary.modelName = "Salary";
// Salary.fields = {

// }

const orm = new ORM;
orm.register(PositionSet, StaffSet);

const session = orm.session()
const PSet = session.PositionSet
const SSet = session.StaffSet

let positionMap = [
    {
        post: 'chairman',
        id: 1
    },
    {
        post: 'manager',
        id: 2
    },
    {
        post: 'worker',
        id: 3
    }
];

let staffMap = [
    {
        id: 1,
        name: 'a',
        postId: 1
    },
    {
        id: 2,
        name: 'b',
        postId: 2
    },
    {
        id: 3,
        name: 'c',
        postId: 2
    },
    {
        id: 4,
        name: 'd',
        postId: 3
    },
    {
        id: 5,
        name: 'e',
        postId: 3
    },
    {
        id: 6,
        name: 'f',
        postId: 3
    },
];

positionMap.map(item => {
    PSet.create(item)
})

staffMap.map(item => {
    SSet.create(item)
})

export { orm }