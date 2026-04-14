"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetActionConnectionResponse = void 0;
/**
 * The response for found connection
 */
class GetActionConnectionResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GetActionConnectionResponse.attributeTypeMap;
    }
}
exports.GetActionConnectionResponse = GetActionConnectionResponse;
/**
 * @ignore
 */
GetActionConnectionResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ActionConnectionData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GetActionConnectionResponse.js.map