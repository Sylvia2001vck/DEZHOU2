"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = void 0;
/**
 * Object description of a log after being processed and stored by Datadog.
 */
class Log {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return Log.attributeTypeMap;
    }
}
exports.Log = Log;
/**
 * @ignore
 */
Log.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "LogAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "LogType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=Log.js.map