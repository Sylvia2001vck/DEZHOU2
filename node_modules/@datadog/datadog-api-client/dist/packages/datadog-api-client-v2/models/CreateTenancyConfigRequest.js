"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTenancyConfigRequest = void 0;
class CreateTenancyConfigRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateTenancyConfigRequest.attributeTypeMap;
    }
}
exports.CreateTenancyConfigRequest = CreateTenancyConfigRequest;
/**
 * @ignore
 */
CreateTenancyConfigRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CreateTenancyConfigData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateTenancyConfigRequest.js.map