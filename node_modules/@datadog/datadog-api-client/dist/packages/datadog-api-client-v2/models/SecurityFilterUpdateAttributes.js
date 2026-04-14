"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityFilterUpdateAttributes = void 0;
/**
 * The security filters properties to be updated.
 */
class SecurityFilterUpdateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityFilterUpdateAttributes.attributeTypeMap;
    }
}
exports.SecurityFilterUpdateAttributes = SecurityFilterUpdateAttributes;
/**
 * @ignore
 */
SecurityFilterUpdateAttributes.attributeTypeMap = {
    exclusionFilters: {
        baseName: "exclusion_filters",
        type: "Array<SecurityFilterExclusionFilter>",
    },
    filteredDataType: {
        baseName: "filtered_data_type",
        type: "SecurityFilterFilteredDataType",
    },
    isEnabled: {
        baseName: "is_enabled",
        type: "boolean",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    query: {
        baseName: "query",
        type: "string",
    },
    version: {
        baseName: "version",
        type: "number",
        format: "int32",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityFilterUpdateAttributes.js.map