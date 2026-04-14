"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityFilterResponse = void 0;
/**
 * Response object which includes a single security filter.
 */
class SecurityFilterResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityFilterResponse.attributeTypeMap;
    }
}
exports.SecurityFilterResponse = SecurityFilterResponse;
/**
 * @ignore
 */
SecurityFilterResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "SecurityFilter",
    },
    meta: {
        baseName: "meta",
        type: "SecurityFilterMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityFilterResponse.js.map