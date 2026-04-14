"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityFindingsData = void 0;
/**
 * A single security finding.
 */
class SecurityFindingsData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityFindingsData.attributeTypeMap;
    }
}
exports.SecurityFindingsData = SecurityFindingsData;
/**
 * @ignore
 */
SecurityFindingsData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SecurityFindingsAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "SecurityFindingsDataType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityFindingsData.js.map