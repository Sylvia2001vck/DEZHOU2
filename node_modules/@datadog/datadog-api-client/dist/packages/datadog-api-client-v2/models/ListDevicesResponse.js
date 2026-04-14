"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListDevicesResponse = void 0;
/**
 * List devices response.
 */
class ListDevicesResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ListDevicesResponse.attributeTypeMap;
    }
}
exports.ListDevicesResponse = ListDevicesResponse;
/**
 * @ignore
 */
ListDevicesResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<DevicesListData>",
    },
    meta: {
        baseName: "meta",
        type: "ListDevicesResponseMetadata",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ListDevicesResponse.js.map