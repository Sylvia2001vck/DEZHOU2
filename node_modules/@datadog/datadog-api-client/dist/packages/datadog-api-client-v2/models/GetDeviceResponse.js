"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDeviceResponse = void 0;
/**
 * The `GetDevice` operation's response.
 */
class GetDeviceResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GetDeviceResponse.attributeTypeMap;
    }
}
exports.GetDeviceResponse = GetDeviceResponse;
/**
 * @ignore
 */
GetDeviceResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "GetDeviceData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GetDeviceResponse.js.map