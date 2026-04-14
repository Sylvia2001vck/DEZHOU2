"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatastoreArray = void 0;
/**
 * A collection of datastores returned by list operations.
 */
class DatastoreArray {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DatastoreArray.attributeTypeMap;
    }
}
exports.DatastoreArray = DatastoreArray;
/**
 * @ignore
 */
DatastoreArray.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<DatastoreData>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DatastoreArray.js.map