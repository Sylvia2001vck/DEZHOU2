"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewershipHistorySessionData = void 0;
class ViewershipHistorySessionData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ViewershipHistorySessionData.attributeTypeMap;
    }
}
exports.ViewershipHistorySessionData = ViewershipHistorySessionData;
/**
 * @ignore
 */
ViewershipHistorySessionData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ViewershipHistorySessionDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "ViewershipHistorySessionDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ViewershipHistorySessionData.js.map