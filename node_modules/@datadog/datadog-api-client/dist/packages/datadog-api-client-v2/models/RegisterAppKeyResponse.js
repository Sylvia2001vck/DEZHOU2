"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterAppKeyResponse = void 0;
/**
 * The response object after creating an app key registration.
 */
class RegisterAppKeyResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RegisterAppKeyResponse.attributeTypeMap;
    }
}
exports.RegisterAppKeyResponse = RegisterAppKeyResponse;
/**
 * @ignore
 */
RegisterAppKeyResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "AppKeyRegistrationData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RegisterAppKeyResponse.js.map