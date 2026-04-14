"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetFindingResponse = void 0;
/**
 * The expected response schema when getting a finding.
 */
class GetFindingResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GetFindingResponse.attributeTypeMap;
    }
}
exports.GetFindingResponse = GetFindingResponse;
/**
 * @ignore
 */
GetFindingResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "DetailedFinding",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GetFindingResponse.js.map