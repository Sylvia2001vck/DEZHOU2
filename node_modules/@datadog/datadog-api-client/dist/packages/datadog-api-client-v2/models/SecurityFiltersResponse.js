"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityFiltersResponse = void 0;
/**
 * All the available security filters objects.
 */
class SecurityFiltersResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityFiltersResponse.attributeTypeMap;
    }
}
exports.SecurityFiltersResponse = SecurityFiltersResponse;
/**
 * @ignore
 */
SecurityFiltersResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<SecurityFilter>",
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
//# sourceMappingURL=SecurityFiltersResponse.js.map