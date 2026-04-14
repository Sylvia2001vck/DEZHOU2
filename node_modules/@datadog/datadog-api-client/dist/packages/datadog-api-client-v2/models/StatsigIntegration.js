"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatsigIntegration = void 0;
/**
 * The definition of the `StatsigIntegration` object.
 */
class StatsigIntegration {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return StatsigIntegration.attributeTypeMap;
    }
}
exports.StatsigIntegration = StatsigIntegration;
/**
 * @ignore
 */
StatsigIntegration.attributeTypeMap = {
    credentials: {
        baseName: "credentials",
        type: "StatsigCredentials",
        required: true,
    },
    type: {
        baseName: "type",
        type: "StatsigIntegrationType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=StatsigIntegration.js.map