"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotionIntegrationUpdate = void 0;
/**
 * The definition of the `NotionIntegrationUpdate` object.
 */
class NotionIntegrationUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return NotionIntegrationUpdate.attributeTypeMap;
    }
}
exports.NotionIntegrationUpdate = NotionIntegrationUpdate;
/**
 * @ignore
 */
NotionIntegrationUpdate.attributeTypeMap = {
    credentials: {
        baseName: "credentials",
        type: "NotionCredentialsUpdate",
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
//# sourceMappingURL=NotionIntegrationUpdate.js.map