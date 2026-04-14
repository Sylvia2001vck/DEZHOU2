"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Finding = void 0;
/**
 * A single finding without the message and resource configuration.
 */
class Finding {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return Finding.attributeTypeMap;
    }
}
exports.Finding = Finding;
/**
 * @ignore
 */
Finding.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "FindingAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "FindingType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=Finding.js.map