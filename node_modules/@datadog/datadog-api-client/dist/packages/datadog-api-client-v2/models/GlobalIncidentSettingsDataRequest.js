"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalIncidentSettingsDataRequest = void 0;
class GlobalIncidentSettingsDataRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GlobalIncidentSettingsDataRequest.attributeTypeMap;
    }
}
exports.GlobalIncidentSettingsDataRequest = GlobalIncidentSettingsDataRequest;
/**
 * @ignore
 */
GlobalIncidentSettingsDataRequest.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "GlobalIncidentSettingsAttributesRequest",
    },
    type: {
        baseName: "type",
        type: "GlobalIncidentSettingsType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GlobalIncidentSettingsDataRequest.js.map