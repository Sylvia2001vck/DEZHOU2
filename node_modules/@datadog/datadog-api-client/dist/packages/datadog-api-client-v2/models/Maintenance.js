"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Maintenance = void 0;
class Maintenance {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return Maintenance.attributeTypeMap;
    }
}
exports.Maintenance = Maintenance;
/**
 * @ignore
 */
Maintenance.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "MaintenanceData",
    },
    included: {
        baseName: "included",
        type: "Array<DegradationIncluded>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=Maintenance.js.map