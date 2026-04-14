"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityFilterCreateData = void 0;
/**
 * Object for a single security filter.
 */
class SecurityFilterCreateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityFilterCreateData.attributeTypeMap;
    }
}
exports.SecurityFilterCreateData = SecurityFilterCreateData;
/**
 * @ignore
 */
SecurityFilterCreateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SecurityFilterCreateAttributes",
        required: true,
    },
    type: {
        baseName: "type",
        type: "SecurityFilterType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityFilterCreateData.js.map