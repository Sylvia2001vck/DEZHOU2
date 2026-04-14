"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationOnCallEscalationQueriesItems = void 0;
class IntegrationOnCallEscalationQueriesItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IntegrationOnCallEscalationQueriesItems.attributeTypeMap;
    }
}
exports.IntegrationOnCallEscalationQueriesItems = IntegrationOnCallEscalationQueriesItems;
/**
 * @ignore
 */
IntegrationOnCallEscalationQueriesItems.attributeTypeMap = {
    enabled: {
        baseName: "enabled",
        type: "boolean",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    query: {
        baseName: "query",
        type: "string",
    },
    target: {
        baseName: "target",
        type: "IntegrationOnCallEscalationQueriesItemsTarget",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IntegrationOnCallEscalationQueriesItems.js.map