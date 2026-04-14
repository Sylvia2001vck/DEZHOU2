"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageDataObject = void 0;
/**
 * Usage data.
 */
class UsageDataObject {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageDataObject.attributeTypeMap;
    }
}
exports.UsageDataObject = UsageDataObject;
/**
 * @ignore
 */
UsageDataObject.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "UsageAttributesObject",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "UsageTimeSeriesType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageDataObject.js.map