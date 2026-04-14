"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListDevicesResponseMetadata = void 0;
/**
 * Object describing meta attributes of response.
 */
class ListDevicesResponseMetadata {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ListDevicesResponseMetadata.attributeTypeMap;
    }
}
exports.ListDevicesResponseMetadata = ListDevicesResponseMetadata;
/**
 * @ignore
 */
ListDevicesResponseMetadata.attributeTypeMap = {
    page: {
        baseName: "page",
        type: "ListDevicesResponseMetadataPage",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ListDevicesResponseMetadata.js.map