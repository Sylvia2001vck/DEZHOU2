"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewershipHistorySessionArray = void 0;
class ViewershipHistorySessionArray {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ViewershipHistorySessionArray.attributeTypeMap;
    }
}
exports.ViewershipHistorySessionArray = ViewershipHistorySessionArray;
/**
 * @ignore
 */
ViewershipHistorySessionArray.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<ViewershipHistorySessionData>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ViewershipHistorySessionArray.js.map