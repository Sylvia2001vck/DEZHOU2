"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WatcherData = void 0;
class WatcherData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return WatcherData.attributeTypeMap;
    }
}
exports.WatcherData = WatcherData;
/**
 * @ignore
 */
WatcherData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "WatcherDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "WatcherDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=WatcherData.js.map