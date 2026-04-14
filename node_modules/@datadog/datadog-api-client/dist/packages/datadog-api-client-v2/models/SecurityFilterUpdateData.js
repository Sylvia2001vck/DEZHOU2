"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityFilterUpdateData = void 0;
/**
 * The new security filter properties.
 */
class SecurityFilterUpdateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityFilterUpdateData.attributeTypeMap;
    }
}
exports.SecurityFilterUpdateData = SecurityFilterUpdateData;
/**
 * @ignore
 */
SecurityFilterUpdateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SecurityFilterUpdateAttributes",
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
//# sourceMappingURL=SecurityFilterUpdateData.js.map