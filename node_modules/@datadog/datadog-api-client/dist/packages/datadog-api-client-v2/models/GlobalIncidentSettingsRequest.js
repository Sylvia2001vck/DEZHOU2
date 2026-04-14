"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalIncidentSettingsRequest = void 0;
class GlobalIncidentSettingsRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GlobalIncidentSettingsRequest.attributeTypeMap;
    }
}
exports.GlobalIncidentSettingsRequest = GlobalIncidentSettingsRequest;
/**
 * @ignore
 */
GlobalIncidentSettingsRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "GlobalIncidentSettingsDataRequest",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GlobalIncidentSettingsRequest.js.map