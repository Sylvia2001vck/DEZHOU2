"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAPIsResponseData = void 0;
/**
 * Data envelope for `ListAPIsResponse`.
 */
class ListAPIsResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ListAPIsResponseData.attributeTypeMap;
    }
}
exports.ListAPIsResponseData = ListAPIsResponseData;
/**
 * @ignore
 */
ListAPIsResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ListAPIsResponseDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ListAPIsResponseData.js.map