"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Span = void 0;
/**
 * Object description of a spans after being processed and stored by Datadog.
 */
class Span {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return Span.attributeTypeMap;
    }
}
exports.Span = Span;
/**
 * @ignore
 */
Span.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SpansAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "SpansType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=Span.js.map