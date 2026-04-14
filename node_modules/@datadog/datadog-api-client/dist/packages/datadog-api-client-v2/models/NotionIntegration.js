"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotionIntegration = void 0;
/**
 * The definition of the `NotionIntegration` object.
 */
class NotionIntegration {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return NotionIntegration.attributeTypeMap;
    }
}
exports.NotionIntegration = NotionIntegration;
/**
 * @ignore
 */
NotionIntegration.attributeTypeMap = {
    credentials: {
        baseName: "credentials",
        type: "NotionCredentials",
        required: true,
    },
    type: {
        baseName: "type",
        type: "NotionIntegrationType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=NotionIntegration.js.map