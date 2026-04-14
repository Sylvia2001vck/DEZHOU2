"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpansListRequestData = void 0;
/**
 * The object containing the query content.
 */
class SpansListRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SpansListRequestData.attributeTypeMap;
    }
}
exports.SpansListRequestData = SpansListRequestData;
/**
 * @ignore
 */
SpansListRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SpansListRequestAttributes",
    },
    type: {
        baseName: "type",
        type: "SpansListRequestType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SpansListRequestData.js.map