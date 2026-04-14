"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RUMApplication = void 0;
/**
 * RUM application.
 */
class RUMApplication {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RUMApplication.attributeTypeMap;
    }
}
exports.RUMApplication = RUMApplication;
/**
 * @ignore
 */
RUMApplication.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "RUMApplicationAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "RUMApplicationType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RUMApplication.js.map