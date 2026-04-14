"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsmAgentData = void 0;
/**
 * Single Agent Data.
 */
class CsmAgentData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CsmAgentData.attributeTypeMap;
    }
}
exports.CsmAgentData = CsmAgentData;
/**
 * @ignore
 */
CsmAgentData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CsmAgentsAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "CSMAgentsType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CsmAgentData.js.map