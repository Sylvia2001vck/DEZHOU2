"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Datastore = void 0;
/**
 * A datastore's complete configuration and metadata.
 */
class Datastore {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return Datastore.attributeTypeMap;
    }
}
exports.Datastore = Datastore;
/**
 * @ignore
 */
Datastore.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "DatastoreData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=Datastore.js.map