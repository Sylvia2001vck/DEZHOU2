"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindingData = void 0;
class FindingData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FindingData.attributeTypeMap;
    }
}
exports.FindingData = FindingData;
/**
 * @ignore
 */
FindingData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "FindingDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FindingData.js.map