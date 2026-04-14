"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateActionConnectionRequest = void 0;
/**
 * Request used to update an action connection.
 */
class UpdateActionConnectionRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateActionConnectionRequest.attributeTypeMap;
    }
}
exports.UpdateActionConnectionRequest = UpdateActionConnectionRequest;
/**
 * @ignore
 */
UpdateActionConnectionRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ActionConnectionDataUpdate",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UpdateActionConnectionRequest.js.map