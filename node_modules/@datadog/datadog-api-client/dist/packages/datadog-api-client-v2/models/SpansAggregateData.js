"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpansAggregateData = void 0;
/**
 * The object containing the query content.
 */
class SpansAggregateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SpansAggregateData.attributeTypeMap;
    }
}
exports.SpansAggregateData = SpansAggregateData;
/**
 * @ignore
 */
SpansAggregateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SpansAggregateRequestAttributes",
    },
    type: {
        baseName: "type",
        type: "SpansAggregateRequestType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SpansAggregateData.js.map