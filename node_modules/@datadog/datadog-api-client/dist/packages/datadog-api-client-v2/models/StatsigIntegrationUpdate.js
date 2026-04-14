"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatsigIntegrationUpdate = void 0;
/**
 * The definition of the `StatsigIntegrationUpdate` object.
 */
class StatsigIntegrationUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return StatsigIntegrationUpdate.attributeTypeMap;
    }
}
exports.StatsigIntegrationUpdate = StatsigIntegrationUpdate;
/**
 * @ignore
 */
StatsigIntegrationUpdate.attributeTypeMap = {
    credentials: {
        baseName: "credentials",
        type: "StatsigCredentialsUpdate",
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
//# sourceMappingURL=StatsigIntegrationUpdate.js.map