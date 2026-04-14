"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RUMEventProcessingScale = void 0;
/**
 * RUM event processing scale configuration.
 */
class RUMEventProcessingScale {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RUMEventProcessingScale.attributeTypeMap;
    }
}
exports.RUMEventProcessingScale = RUMEventProcessingScale;
/**
 * @ignore
 */
RUMEventProcessingScale.attributeTypeMap = {
    lastModifiedAt: {
        baseName: "last_modified_at",
        type: "number",
        format: "int64",
    },
    state: {
        baseName: "state",
        type: "RUMEventProcessingState",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RUMEventProcessingScale.js.map