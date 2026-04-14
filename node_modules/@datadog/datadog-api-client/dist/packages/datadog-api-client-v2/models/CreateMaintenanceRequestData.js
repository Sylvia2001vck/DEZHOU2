"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMaintenanceRequestData = void 0;
class CreateMaintenanceRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateMaintenanceRequestData.attributeTypeMap;
    }
}
exports.CreateMaintenanceRequestData = CreateMaintenanceRequestData;
/**
 * @ignore
 */
CreateMaintenanceRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CreateMaintenanceRequestDataAttributes",
        required: true,
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
//# sourceMappingURL=CreateMaintenanceRequestData.js.map