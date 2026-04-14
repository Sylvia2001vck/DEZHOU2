"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineSumoLogicSource = void 0;
/**
 * The `sumo_logic` source receives logs from Sumo Logic collectors.
 *
 * **Supported pipeline types:** logs
 */
class ObservabilityPipelineSumoLogicSource {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineSumoLogicSource.attributeTypeMap;
    }
}
exports.ObservabilityPipelineSumoLogicSource = ObservabilityPipelineSumoLogicSource;
/**
 * @ignore
 */
ObservabilityPipelineSumoLogicSource.attributeTypeMap = {
    addressKey: {
        baseName: "address_key",
        type: "string",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ObservabilityPipelineSumoLogicSourceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineSumoLogicSource.js.map