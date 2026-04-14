"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalIncidentSettingsResponse = void 0;
class GlobalIncidentSettingsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GlobalIncidentSettingsResponse.attributeTypeMap;
    }
}
exports.GlobalIncidentSettingsResponse = GlobalIncidentSettingsResponse;
/**
 * @ignore
 */
GlobalIncidentSettingsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "GlobalIncidentSettingsDataResponse",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GlobalIncidentSettingsResponse.js.map