"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GcpUcConfigResponseData = void 0;
/**
 * The definition of `GcpUcConfigResponseData` object.
 */
class GcpUcConfigResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GcpUcConfigResponseData.attributeTypeMap;
    }
}
exports.GcpUcConfigResponseData = GcpUcConfigResponseData;
/**
 * @ignore
 */
GcpUcConfigResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "GcpUcConfigResponseDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "GcpUcConfigResponseDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GcpUcConfigResponseData.js.map