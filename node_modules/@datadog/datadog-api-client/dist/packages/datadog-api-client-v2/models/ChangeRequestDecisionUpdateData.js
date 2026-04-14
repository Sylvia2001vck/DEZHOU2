"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeRequestDecisionUpdateData = void 0;
/**
 * Data object to update a change request decision.
 */
class ChangeRequestDecisionUpdateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ChangeRequestDecisionUpdateData.attributeTypeMap;
    }
}
exports.ChangeRequestDecisionUpdateData = ChangeRequestDecisionUpdateData;
/**
 * @ignore
 */
ChangeRequestDecisionUpdateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ChangeRequestDecisionUpdateDataAttributes",
    },
    relationships: {
        baseName: "relationships",
        type: "ChangeRequestDecisionUpdateDataRelationships",
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
//# sourceMappingURL=ChangeRequestDecisionUpdateData.js.map