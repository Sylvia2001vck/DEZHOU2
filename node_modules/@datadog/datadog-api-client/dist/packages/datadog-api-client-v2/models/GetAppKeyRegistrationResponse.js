"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAppKeyRegistrationResponse = void 0;
/**
 * The response object after getting an app key registration.
 */
class GetAppKeyRegistrationResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GetAppKeyRegistrationResponse.attributeTypeMap;
    }
}
exports.GetAppKeyRegistrationResponse = GetAppKeyRegistrationResponse;
/**
 * @ignore
 */
GetAppKeyRegistrationResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "AppKeyRegistrationData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GetAppKeyRegistrationResponse.js.map