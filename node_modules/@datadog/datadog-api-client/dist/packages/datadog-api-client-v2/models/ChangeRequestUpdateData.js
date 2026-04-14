"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeRequestUpdateData = void 0;
/**
 * Data object to update a change request.
 */
class ChangeRequestUpdateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ChangeRequestUpdateData.attributeTypeMap;
    }
}
exports.ChangeRequestUpdateData = ChangeRequestUpdateData;
/**
 * @ignore
 */
ChangeRequestUpdateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ChangeRequestUpdateAttributes",
    },
    relationships: {
        baseName: "relationships",
        type: "ChangeRequestUpdateRelationships",
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
//# sourceMappingURL=ChangeRequestUpdateData.js.map