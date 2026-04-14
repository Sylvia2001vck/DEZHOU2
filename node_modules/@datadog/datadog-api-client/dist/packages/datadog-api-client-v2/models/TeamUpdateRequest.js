"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamUpdateRequest = void 0;
/**
 * Team update request
 */
class TeamUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamUpdateRequest.attributeTypeMap;
    }
}
exports.TeamUpdateRequest = TeamUpdateRequest;
/**
 * @ignore
 */
TeamUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "TeamUpdate",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamUpdateRequest.js.map