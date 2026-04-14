"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomFrameworkRequirement = void 0;
/**
 * Framework Requirement.
 */
class CustomFrameworkRequirement {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomFrameworkRequirement.attributeTypeMap;
    }
}
exports.CustomFrameworkRequirement = CustomFrameworkRequirement;
/**
 * @ignore
 */
CustomFrameworkRequirement.attributeTypeMap = {
    controls: {
        baseName: "controls",
        type: "Array<CustomFrameworkControl>",
        required: true,
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomFrameworkRequirement.js.map