"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SplitIntegrationUpdate = void 0;
/**
 * The definition of the `SplitIntegrationUpdate` object.
 */
class SplitIntegrationUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SplitIntegrationUpdate.attributeTypeMap;
    }
}
exports.SplitIntegrationUpdate = SplitIntegrationUpdate;
/**
 * @ignore
 */
SplitIntegrationUpdate.attributeTypeMap = {
    credentials: {
        baseName: "credentials",
        type: "SplitCredentialsUpdate",
    },
    type: {
        baseName: "type",
        type: "SplitIntegrationType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SplitIntegrationUpdate.js.map