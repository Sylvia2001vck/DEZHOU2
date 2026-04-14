/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EPSS } from "./EPSS";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Vulnerability risks.
 */
export declare class VulnerabilityRisks {
    /**
     * Vulnerability EPSS severity.
     */
    "epss"?: EPSS;
    /**
     * Vulnerability public exploit availability.
     */
    "exploitAvailable": boolean;
    /**
     * Vulnerability exploit sources.
     */
    "exploitSources": Array<string>;
    /**
     * Vulnerability exploitation probability.
     */
    "exploitationProbability": boolean;
    /**
     * Vulnerability POC exploit availability.
     */
    "pocExploitAvailable": boolean;
    /**
     * A container for additional, undeclared properties.
     * This is a holder for any undeclared properties as specified with
     * the 'additionalProperties' keyword in the OAS document.
     */
    "additionalProperties"?: {
        [key: string]: any;
    };
    /**
     * @ignore
     */
    "_unparsed"?: boolean;
    /**
     * @ignore
     */
    static readonly attributeTypeMap: AttributeTypeMap;
    /**
     * @ignore
     */
    static getAttributeTypeMap(): AttributeTypeMap;
    constructor();
}
