"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Integration = void 0;
/**
 * Integration resource object.
 */
class Integration {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return Integration.attributeTypeMap;
    }
}
exports.Integration = Integration;
/**
 * @ignore
 */
Integration.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "IntegrationAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    links: {
        baseName: "links",
        type: "IntegrationLinks",
    },
    type: {
        baseName: "type",
        type: "IntegrationType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=Integration.js.map