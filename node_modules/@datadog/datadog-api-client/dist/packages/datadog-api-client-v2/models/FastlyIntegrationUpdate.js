"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FastlyIntegrationUpdate = void 0;
/**
 * The definition of the `FastlyIntegrationUpdate` object.
 */
class FastlyIntegrationUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FastlyIntegrationUpdate.attributeTypeMap;
    }
}
exports.FastlyIntegrationUpdate = FastlyIntegrationUpdate;
/**
 * @ignore
 */
FastlyIntegrationUpdate.attributeTypeMap = {
    credentials: {
        baseName: "credentials",
        type: "FastlyCredentialsUpdate",
    },
    type: {
        baseName: "type",
        type: "FastlyIntegrationType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FastlyIntegrationUpdate.js.map