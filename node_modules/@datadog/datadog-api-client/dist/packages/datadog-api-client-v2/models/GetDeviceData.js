"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDeviceData = void 0;
/**
 * Get device response data.
 */
class GetDeviceData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GetDeviceData.attributeTypeMap;
    }
}
exports.GetDeviceData = GetDeviceData;
/**
 * @ignore
 */
GetDeviceData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "GetDeviceAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GetDeviceData.js.map