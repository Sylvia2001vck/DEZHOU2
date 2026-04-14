"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpsgenieServiceCreateData = void 0;
/**
 * Opsgenie service data for a create request.
 */
class OpsgenieServiceCreateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OpsgenieServiceCreateData.attributeTypeMap;
    }
}
exports.OpsgenieServiceCreateData = OpsgenieServiceCreateData;
/**
 * @ignore
 */
OpsgenieServiceCreateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "OpsgenieServiceCreateAttributes",
        required: true,
    },
    type: {
        baseName: "type",
        type: "OpsgenieServiceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OpsgenieServiceCreateData.js.map