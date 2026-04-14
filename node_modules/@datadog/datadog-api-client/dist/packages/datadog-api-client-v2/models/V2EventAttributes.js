"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V2EventAttributes = void 0;
/**
 * Event attributes.
 */
class V2EventAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return V2EventAttributes.attributeTypeMap;
    }
}
exports.V2EventAttributes = V2EventAttributes;
/**
 * @ignore
 */
V2EventAttributes.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "V2EventAttributesAttributes",
    },
    message: {
        baseName: "message",
        type: "string",
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    timestamp: {
        baseName: "timestamp",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=V2EventAttributes.js.map