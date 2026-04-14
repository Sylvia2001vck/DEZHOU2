"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateActionConnectionResponse = void 0;
/**
 * The response for an updated connection.
 */
class UpdateActionConnectionResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateActionConnectionResponse.attributeTypeMap;
    }
}
exports.UpdateActionConnectionResponse = UpdateActionConnectionResponse;
/**
 * @ignore
 */
UpdateActionConnectionResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ActionConnectionData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UpdateActionConnectionResponse.js.map