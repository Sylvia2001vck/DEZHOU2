"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSONAPIErrorItem = void 0;
/**
 * API error response body
 */
class JSONAPIErrorItem {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return JSONAPIErrorItem.attributeTypeMap;
    }
}
exports.JSONAPIErrorItem = JSONAPIErrorItem;
/**
 * @ignore
 */
JSONAPIErrorItem.attributeTypeMap = {
    detail: {
        baseName: "detail",
        type: "string",
    },
    meta: {
        baseName: "meta",
        type: "{ [key: string]: any; }",
    },
    source: {
        baseName: "source",
        type: "JSONAPIErrorItemSource",
    },
    status: {
        baseName: "status",
        type: "string",
    },
    title: {
        baseName: "title",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=JSONAPIErrorItem.js.map