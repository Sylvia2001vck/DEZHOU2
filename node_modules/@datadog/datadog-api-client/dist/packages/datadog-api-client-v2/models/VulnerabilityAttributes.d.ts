/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CodeLocation } from "./CodeLocation";
import { Library } from "./Library";
import { Remediation } from "./Remediation";
import { VulnerabilityAdvisory } from "./VulnerabilityAdvisory";
import { VulnerabilityCvss } from "./VulnerabilityCvss";
import { VulnerabilityDependencyLocations } from "./VulnerabilityDependencyLocations";
import { VulnerabilityEcosystem } from "./VulnerabilityEcosystem";
import { VulnerabilityRisks } from "./VulnerabilityRisks";
import { VulnerabilityStatus } from "./VulnerabilityStatus";
import { VulnerabilityTool } from "./VulnerabilityTool";
import { VulnerabilityType } from "./VulnerabilityType";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * The JSON:API attributes of the vulnerability.
 */
export declare class VulnerabilityAttributes {
    /**
     * Advisory associated with the vulnerability.
     */
    "advisory"?: VulnerabilityAdvisory;
    /**
     * Vulnerability advisory ID.
     */
    "advisoryId"?: string;
    /**
     * Code vulnerability location.
     */
    "codeLocation"?: CodeLocation;
    /**
     * Vulnerability CVE list.
     */
    "cveList": Array<string>;
    /**
     * Vulnerability severities.
     */
    "cvss": VulnerabilityCvss;
    /**
     * Static library vulnerability location.
     */
    "dependencyLocations"?: VulnerabilityDependencyLocations;
    /**
     * Vulnerability description.
     */
    "description": string;
    /**
     * The related vulnerability asset ecosystem.
     */
    "ecosystem"?: VulnerabilityEcosystem;
    /**
     * Vulnerability exposure time in seconds.
     */
    "exposureTime": number;
    /**
     * First detection of the vulnerability in [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) format
     */
    "firstDetection": string;
    /**
     * Whether the vulnerability has a remediation or not.
     */
    "fixAvailable": boolean;
    /**
     * Vulnerability language.
     */
    "language": string;
    /**
     * Last detection of the vulnerability in [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) format
     */
    "lastDetection": string;
    /**
     * Vulnerability library.
     */
    "library"?: Library;
    /**
     * Vulnerability origin.
     */
    "origin": Array<string>;
    /**
     * List of remediations.
     */
    "remediations": Array<Remediation>;
    /**
     * Vulnerability `repo_digest` list (when the vulnerability is related to `Image` asset).
     */
    "repoDigests"?: Array<string>;
    /**
     * Vulnerability risks.
     */
    "risks": VulnerabilityRisks;
    /**
     * True if the vulnerability affects a package in the host’s running kernel, false if it affects a non-running kernel, and omit if it is not kernel-related.
     */
    "runningKernel"?: boolean;
    /**
     * The vulnerability status.
     */
    "status": VulnerabilityStatus;
    /**
     * Vulnerability title.
     */
    "title": string;
    /**
     * The vulnerability tool.
     */
    "tool": VulnerabilityTool;
    /**
     * The vulnerability type.
     */
    "type": VulnerabilityType;
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
