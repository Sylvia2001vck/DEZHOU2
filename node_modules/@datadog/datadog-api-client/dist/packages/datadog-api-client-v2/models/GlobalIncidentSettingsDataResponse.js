"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalIncidentSettingsDataResponse = void 0;
class GlobalIncidentSettingsDataResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GlobalIncidentSettingsDataResponse.attributeTypeMap;
    }
}
exports.GlobalIncidentSettingsDataResponse = GlobalIncidentSettingsDataResponse;
/**
 * @ignore
 */
GlobalIncidentSettingsDataResponse.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "GlobalIncidentSettingsAttributesResponse",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
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
//# sourceMappingURL=GlobalIncidentSettingsDataResponse.js.map