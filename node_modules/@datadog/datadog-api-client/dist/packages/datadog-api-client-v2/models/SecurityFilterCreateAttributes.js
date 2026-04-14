"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityFilterCreateAttributes = void 0;
/**
 * Object containing the attributes of the security filter to be created.
 */
class SecurityFilterCreateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityFilterCreateAttributes.attributeTypeMap;
    }
}
exports.SecurityFilterCreateAttributes = SecurityFilterCreateAttributes;
/**
 * @ignore
 */
SecurityFilterCreateAttributes.attributeTypeMap = {
    exclusionFilters: {
        baseName: "exclusion_filters",
        type: "Array<SecurityFilterExclusionFilter>",
        required: true,
    },
    filteredDataType: {
        baseName: "filtered_data_type",
        type: "SecurityFilterFilteredDataType",
        required: true,
    },
    isEnabled: {
        baseName: "is_enabled",
        type: "boolean",
        required: true,
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    query: {
        baseName: "query",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityFilterCreateAttributes.js.map