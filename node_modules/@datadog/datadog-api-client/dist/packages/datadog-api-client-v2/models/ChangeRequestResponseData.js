"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeRequestResponseData = void 0;
/**
 * Data object for a change request response.
 */
class ChangeRequestResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ChangeRequestResponseData.attributeTypeMap;
    }
}
exports.ChangeRequestResponseData = ChangeRequestResponseData;
/**
 * @ignore
 */
ChangeRequestResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ChangeRequestResponseAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    relationships: {
        baseName: "relationships",
        type: "ChangeRequestRelationships",
    },
    type: {
        baseName: "type",
        type: "ChangeRequestResourceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ChangeRequestResponseData.js.map