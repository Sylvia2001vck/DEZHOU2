"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatastoreTrigger = void 0;
/**
 * Trigger a workflow from a Datastore. For automatic triggering a handle must be configured and the workflow must be published.
 */
class DatastoreTrigger {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DatastoreTrigger.attributeTypeMap;
    }
}
exports.DatastoreTrigger = DatastoreTrigger;
/**
 * @ignore
 */
DatastoreTrigger.attributeTypeMap = {
    rateLimit: {
        baseName: "rateLimit",
        type: "TriggerRateLimit",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DatastoreTrigger.js.map