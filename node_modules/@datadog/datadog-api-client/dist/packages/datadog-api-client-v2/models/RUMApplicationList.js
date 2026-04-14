"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RUMApplicationList = void 0;
/**
 * RUM application list.
 */
class RUMApplicationList {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RUMApplicationList.attributeTypeMap;
    }
}
exports.RUMApplicationList = RUMApplicationList;
/**
 * @ignore
 */
RUMApplicationList.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "RUMApplicationListAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "RUMApplicationListType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RUMApplicationList.js.map