"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceList = void 0;
class ServiceList {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceList.attributeTypeMap;
    }
}
exports.ServiceList = ServiceList;
/**
 * @ignore
 */
ServiceList.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ServiceListData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceList.js.map