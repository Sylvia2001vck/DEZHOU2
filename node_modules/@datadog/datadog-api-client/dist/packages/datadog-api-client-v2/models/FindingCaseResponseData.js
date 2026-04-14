"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindingCaseResponseData = void 0;
/**
 * Data of the case.
 */
class FindingCaseResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FindingCaseResponseData.attributeTypeMap;
    }
}
exports.FindingCaseResponseData = FindingCaseResponseData;
/**
 * @ignore
 */
FindingCaseResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "FindingCaseResponseDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    relationships: {
        baseName: "relationships",
        type: "FindingCaseResponseDataRelationships",
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
//# sourceMappingURL=FindingCaseResponseData.js.map