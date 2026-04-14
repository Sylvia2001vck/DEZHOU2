"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SplitIntegration = void 0;
/**
 * The definition of the `SplitIntegration` object.
 */
class SplitIntegration {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SplitIntegration.attributeTypeMap;
    }
}
exports.SplitIntegration = SplitIntegration;
/**
 * @ignore
 */
SplitIntegration.attributeTypeMap = {
    credentials: {
        baseName: "credentials",
        type: "SplitCredentials",
        required: true,
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
//# sourceMappingURL=SplitIntegration.js.map