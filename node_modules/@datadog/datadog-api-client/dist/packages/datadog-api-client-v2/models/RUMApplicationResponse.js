"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RUMApplicationResponse = void 0;
/**
 * RUM application response.
 */
class RUMApplicationResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RUMApplicationResponse.attributeTypeMap;
    }
}
exports.RUMApplicationResponse = RUMApplicationResponse;
/**
 * @ignore
 */
RUMApplicationResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "RUMApplication",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RUMApplicationResponse.js.map