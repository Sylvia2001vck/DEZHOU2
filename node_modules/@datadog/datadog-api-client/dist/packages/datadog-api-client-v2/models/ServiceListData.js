"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceListData = void 0;
class ServiceListData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceListData.attributeTypeMap;
    }
}
exports.ServiceListData = ServiceListData;
/**
 * @ignore
 */
ServiceListData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ServiceListDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "ServiceListDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceListData.js.map