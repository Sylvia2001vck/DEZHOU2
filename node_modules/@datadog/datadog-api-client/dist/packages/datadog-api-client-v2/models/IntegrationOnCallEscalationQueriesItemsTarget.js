"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationOnCallEscalationQueriesItemsTarget = void 0;
class IntegrationOnCallEscalationQueriesItemsTarget {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IntegrationOnCallEscalationQueriesItemsTarget.attributeTypeMap;
    }
}
exports.IntegrationOnCallEscalationQueriesItemsTarget = IntegrationOnCallEscalationQueriesItemsTarget;
/**
 * @ignore
 */
IntegrationOnCallEscalationQueriesItemsTarget.attributeTypeMap = {
    dynamicTeamPaging: {
        baseName: "dynamic_team_paging",
        type: "boolean",
    },
    teamId: {
        baseName: "team_id",
        type: "string",
    },
    userId: {
        baseName: "user_id",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IntegrationOnCallEscalationQueriesItemsTarget.js.map