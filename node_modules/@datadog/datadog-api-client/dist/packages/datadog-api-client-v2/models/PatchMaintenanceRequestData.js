"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchMaintenanceRequestData = void 0;
class PatchMaintenanceRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PatchMaintenanceRequestData.attributeTypeMap;
    }
}
exports.PatchMaintenanceRequestData = PatchMaintenanceRequestData;
/**
 * @ignore
 */
PatchMaintenanceRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "PatchMaintenanceRequestDataAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
        format: "uuid",
    },
    type: {
        baseName: "type",
        type: "PatchMaintenanceRequestDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PatchMaintenanceRequestData.js.map