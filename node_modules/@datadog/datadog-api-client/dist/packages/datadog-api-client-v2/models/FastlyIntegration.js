"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FastlyIntegration = void 0;
/**
 * The definition of the `FastlyIntegration` object.
 */
class FastlyIntegration {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FastlyIntegration.attributeTypeMap;
    }
}
exports.FastlyIntegration = FastlyIntegration;
/**
 * @ignore
 */
FastlyIntegration.attributeTypeMap = {
    credentials: {
        baseName: "credentials",
        type: "FastlyCredentials",
        required: true,
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
//# sourceMappingURL=FastlyIntegration.js.map