"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicrosoftTeamsConfigurationReference = void 0;
/**
 * A reference to a Microsoft Teams Configuration resource.
 */
class MicrosoftTeamsConfigurationReference {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MicrosoftTeamsConfigurationReference.attributeTypeMap;
    }
}
exports.MicrosoftTeamsConfigurationReference = MicrosoftTeamsConfigurationReference;
/**
 * @ignore
 */
MicrosoftTeamsConfigurationReference.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "MicrosoftTeamsConfigurationReferenceData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MicrosoftTeamsConfigurationReference.js.map