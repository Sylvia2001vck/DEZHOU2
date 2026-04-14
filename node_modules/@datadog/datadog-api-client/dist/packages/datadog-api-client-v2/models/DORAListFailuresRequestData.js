"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DORAListFailuresRequestData = void 0;
/**
 * The JSON:API data.
 */
class DORAListFailuresRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DORAListFailuresRequestData.attributeTypeMap;
    }
}
exports.DORAListFailuresRequestData = DORAListFailuresRequestData;
/**
 * @ignore
 */
DORAListFailuresRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "DORAListFailuresRequestAttributes",
        required: true,
    },
    type: {
        baseName: "type",
        type: "DORAListFailuresRequestDataType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DORAListFailuresRequestData.js.map