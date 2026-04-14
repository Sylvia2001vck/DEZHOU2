"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceArray = void 0;
class MaintenanceArray {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MaintenanceArray.attributeTypeMap;
    }
}
exports.MaintenanceArray = MaintenanceArray;
/**
 * @ignore
 */
MaintenanceArray.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<MaintenanceData>",
        required: true,
    },
    included: {
        baseName: "included",
        type: "Array<DegradationIncluded>",
    },
    meta: {
        baseName: "meta",
        type: "PaginationMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MaintenanceArray.js.map