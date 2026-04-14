"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleetDeploymentHostsPage = void 0;
/**
 * Pagination details for the list of hosts in a deployment.
 */
class FleetDeploymentHostsPage {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FleetDeploymentHostsPage.attributeTypeMap;
    }
}
exports.FleetDeploymentHostsPage = FleetDeploymentHostsPage;
/**
 * @ignore
 */
FleetDeploymentHostsPage.attributeTypeMap = {
    currentPage: {
        baseName: "current_page",
        type: "number",
        format: "int64",
    },
    pageSize: {
        baseName: "page_size",
        type: "number",
        format: "int64",
    },
    totalHosts: {
        baseName: "total_hosts",
        type: "number",
        format: "int64",
    },
    totalPages: {
        baseName: "total_pages",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FleetDeploymentHostsPage.js.map