"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenancyConfigList = void 0;
class TenancyConfigList {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TenancyConfigList.attributeTypeMap;
    }
}
exports.TenancyConfigList = TenancyConfigList;
/**
 * @ignore
 */
TenancyConfigList.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<TenancyConfigData>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TenancyConfigList.js.map