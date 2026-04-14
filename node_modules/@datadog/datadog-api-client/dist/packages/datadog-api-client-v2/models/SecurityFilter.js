"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityFilter = void 0;
/**
 * The security filter's properties.
 */
class SecurityFilter {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityFilter.attributeTypeMap;
    }
}
exports.SecurityFilter = SecurityFilter;
/**
 * @ignore
 */
SecurityFilter.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SecurityFilterAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "SecurityFilterType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityFilter.js.map