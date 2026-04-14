"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevicesListData = void 0;
/**
 * The devices list data
 */
class DevicesListData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DevicesListData.attributeTypeMap;
    }
}
exports.DevicesListData = DevicesListData;
/**
 * @ignore
 */
DevicesListData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "DeviceAttributes",
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
//# sourceMappingURL=DevicesListData.js.map