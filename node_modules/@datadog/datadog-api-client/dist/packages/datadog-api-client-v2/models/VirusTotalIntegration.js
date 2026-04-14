"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VirusTotalIntegration = void 0;
/**
 * The definition of the `VirusTotalIntegration` object.
 */
class VirusTotalIntegration {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return VirusTotalIntegration.attributeTypeMap;
    }
}
exports.VirusTotalIntegration = VirusTotalIntegration;
/**
 * @ignore
 */
VirusTotalIntegration.attributeTypeMap = {
    credentials: {
        baseName: "credentials",
        type: "VirusTotalCredentials",
        required: true,
    },
    type: {
        baseName: "type",
        type: "VirusTotalIntegrationType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=VirusTotalIntegration.js.map