"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZoomConfigurationReference = void 0;
/**
 * A reference to a Zoom configuration resource.
 */
class ZoomConfigurationReference {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ZoomConfigurationReference.attributeTypeMap;
    }
}
exports.ZoomConfigurationReference = ZoomConfigurationReference;
/**
 * @ignore
 */
ZoomConfigurationReference.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ZoomConfigurationReferenceData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ZoomConfigurationReference.js.map