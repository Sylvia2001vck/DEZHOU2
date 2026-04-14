"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DORAListDeploymentsRequestData = void 0;
/**
 * The JSON:API data.
 */
class DORAListDeploymentsRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DORAListDeploymentsRequestData.attributeTypeMap;
    }
}
exports.DORAListDeploymentsRequestData = DORAListDeploymentsRequestData;
/**
 * @ignore
 */
DORAListDeploymentsRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "DORAListDeploymentsRequestAttributes",
        required: true,
    },
    type: {
        baseName: "type",
        type: "DORAListDeploymentsRequestDataType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DORAListDeploymentsRequestData.js.map