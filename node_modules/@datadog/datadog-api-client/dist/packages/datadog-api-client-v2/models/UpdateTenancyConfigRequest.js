"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTenancyConfigRequest = void 0;
class UpdateTenancyConfigRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateTenancyConfigRequest.attributeTypeMap;
    }
}
exports.UpdateTenancyConfigRequest = UpdateTenancyConfigRequest;
/**
 * @ignore
 */
UpdateTenancyConfigRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "UpdateTenancyConfigData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UpdateTenancyConfigRequest.js.map