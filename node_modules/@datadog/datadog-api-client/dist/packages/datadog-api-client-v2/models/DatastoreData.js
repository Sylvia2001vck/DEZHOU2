"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatastoreData = void 0;
/**
 * Core information about a datastore, including its unique identifier and attributes.
 */
class DatastoreData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DatastoreData.attributeTypeMap;
    }
}
exports.DatastoreData = DatastoreData;
/**
 * @ignore
 */
DatastoreData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "DatastoreDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "DatastoreDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DatastoreData.js.map