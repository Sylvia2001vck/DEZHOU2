"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusPageAsIncluded = void 0;
/**
 * The included status page resource.
 */
class StatusPageAsIncluded {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return StatusPageAsIncluded.attributeTypeMap;
    }
}
exports.StatusPageAsIncluded = StatusPageAsIncluded;
/**
 * @ignore
 */
StatusPageAsIncluded.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "StatusPageAsIncludedAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
        format: "uuid",
    },
    relationships: {
        baseName: "relationships",
        type: "StatusPageAsIncludedRelationships",
    },
    type: {
        baseName: "type",
        type: "StatusPageDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=StatusPageAsIncluded.js.map