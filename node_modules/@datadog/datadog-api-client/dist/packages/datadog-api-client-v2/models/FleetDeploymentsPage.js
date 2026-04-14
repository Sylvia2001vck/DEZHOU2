"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleetDeploymentsPage = void 0;
/**
 * Pagination details for the list of deployments.
 */
class FleetDeploymentsPage {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FleetDeploymentsPage.attributeTypeMap;
    }
}
exports.FleetDeploymentsPage = FleetDeploymentsPage;
/**
 * @ignore
 */
FleetDeploymentsPage.attributeTypeMap = {
    totalCount: {
        baseName: "total_count",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FleetDeploymentsPage.js.map