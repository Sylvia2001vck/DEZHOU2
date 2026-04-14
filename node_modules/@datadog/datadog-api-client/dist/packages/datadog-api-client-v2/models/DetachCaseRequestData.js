"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetachCaseRequestData = void 0;
/**
 * Data for detaching security findings from their case.
 */
class DetachCaseRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DetachCaseRequestData.attributeTypeMap;
    }
}
exports.DetachCaseRequestData = DetachCaseRequestData;
/**
 * @ignore
 */
DetachCaseRequestData.attributeTypeMap = {
    relationships: {
        baseName: "relationships",
        type: "DetachCaseRequestDataRelationships",
    },
    type: {
        baseName: "type",
        type: "CaseDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DetachCaseRequestData.js.map