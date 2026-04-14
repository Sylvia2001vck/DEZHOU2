"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatastoreTriggerWrapper = void 0;
/**
 * Schema for a Datastore-based trigger.
 */
class DatastoreTriggerWrapper {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DatastoreTriggerWrapper.attributeTypeMap;
    }
}
exports.DatastoreTriggerWrapper = DatastoreTriggerWrapper;
/**
 * @ignore
 */
DatastoreTriggerWrapper.attributeTypeMap = {
    datastoreTrigger: {
        baseName: "datastoreTrigger",
        type: "DatastoreTrigger",
        required: true,
    },
    startStepNames: {
        baseName: "startStepNames",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DatastoreTriggerWrapper.js.map