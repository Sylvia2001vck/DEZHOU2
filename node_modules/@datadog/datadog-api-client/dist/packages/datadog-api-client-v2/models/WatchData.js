"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WatchData = void 0;
class WatchData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return WatchData.attributeTypeMap;
    }
}
exports.WatchData = WatchData;
/**
 * @ignore
 */
WatchData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "WatchDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "WatchDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=WatchData.js.map