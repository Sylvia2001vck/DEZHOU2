"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsAggregateBucket = void 0;
/**
 * A bucket values
 */
class LogsAggregateBucket {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsAggregateBucket.attributeTypeMap;
    }
}
exports.LogsAggregateBucket = LogsAggregateBucket;
/**
 * @ignore
 */
LogsAggregateBucket.attributeTypeMap = {
    by: {
        baseName: "by",
        type: "{ [key: string]: any; }",
    },
    computes: {
        baseName: "computes",
        type: "{ [key: string]: LogsAggregateBucketValue; }",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsAggregateBucket.js.map