"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetachCaseRequestDataRelationships = void 0;
/**
 * Relationships detaching security findings from their case.
 */
class DetachCaseRequestDataRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DetachCaseRequestDataRelationships.attributeTypeMap;
    }
}
exports.DetachCaseRequestDataRelationships = DetachCaseRequestDataRelationships;
/**
 * @ignore
 */
DetachCaseRequestDataRelationships.attributeTypeMap = {
    findings: {
        baseName: "findings",
        type: "Findings",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DetachCaseRequestDataRelationships.js.map