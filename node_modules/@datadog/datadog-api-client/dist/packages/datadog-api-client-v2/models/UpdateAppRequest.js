"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAppRequest = void 0;
/**
 * A request object for updating an existing app.
 */
class UpdateAppRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateAppRequest.attributeTypeMap;
    }
}
exports.UpdateAppRequest = UpdateAppRequest;
/**
 * @ignore
 */
UpdateAppRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "UpdateAppRequestData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UpdateAppRequest.js.map