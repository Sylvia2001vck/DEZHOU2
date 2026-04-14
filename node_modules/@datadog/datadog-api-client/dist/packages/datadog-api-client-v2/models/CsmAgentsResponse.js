"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsmAgentsResponse = void 0;
/**
 * Response object that includes a list of CSM Agents.
 */
class CsmAgentsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CsmAgentsResponse.attributeTypeMap;
    }
}
exports.CsmAgentsResponse = CsmAgentsResponse;
/**
 * @ignore
 */
CsmAgentsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<CsmAgentData>",
    },
    meta: {
        baseName: "meta",
        type: "CSMAgentsMetadata",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CsmAgentsResponse.js.map