"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceListDataAttributes = void 0;
class ServiceListDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceListDataAttributes.attributeTypeMap;
    }
}
exports.ServiceListDataAttributes = ServiceListDataAttributes;
/**
 * @ignore
 */
ServiceListDataAttributes.attributeTypeMap = {
    metadata: {
        baseName: "metadata",
        type: "Array<ServiceListDataAttributesMetadataItems>",
    },
    services: {
        baseName: "services",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceListDataAttributes.js.map