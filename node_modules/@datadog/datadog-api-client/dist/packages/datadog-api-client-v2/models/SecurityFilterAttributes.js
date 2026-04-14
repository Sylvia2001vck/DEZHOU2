"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityFilterAttributes = void 0;
/**
 * The object describing a security filter.
 */
class SecurityFilterAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityFilterAttributes.attributeTypeMap;
    }
}
exports.SecurityFilterAttributes = SecurityFilterAttributes;
/**
 * @ignore
 */
SecurityFilterAttributes.attributeTypeMap = {
    exclusionFilters: {
        baseName: "exclusion_filters",
        type: "Array<SecurityFilterExclusionFilterResponse>",
    },
    filteredDataType: {
        baseName: "filtered_data_type",
        type: "SecurityFilterFilteredDataType",
    },
    isBuiltin: {
        baseName: "is_builtin",
        type: "boolean",
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
//# sourceMappingURL=SecurityFilterAttributes.js.map