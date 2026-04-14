"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenancyConfig = void 0;
class TenancyConfig {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TenancyConfig.attributeTypeMap;
    }
}
exports.TenancyConfig = TenancyConfig;
/**
 * @ignore
 */
TenancyConfig.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "TenancyConfigData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TenancyConfig.js.map