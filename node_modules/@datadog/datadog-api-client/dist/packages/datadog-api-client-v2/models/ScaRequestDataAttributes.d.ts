/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ScaRequestDataAttributesCommit } from "./ScaRequestDataAttributesCommit";
import { ScaRequestDataAttributesDependenciesItems } from "./ScaRequestDataAttributesDependenciesItems";
import { ScaRequestDataAttributesFilesItems } from "./ScaRequestDataAttributesFilesItems";
import { ScaRequestDataAttributesRelationsItems } from "./ScaRequestDataAttributesRelationsItems";
import { ScaRequestDataAttributesRepository } from "./ScaRequestDataAttributesRepository";
import { ScaRequestDataAttributesVulnerabilitiesItems } from "./ScaRequestDataAttributesVulnerabilitiesItems";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
export declare class ScaRequestDataAttributes {
    "commit"?: ScaRequestDataAttributesCommit;
    "dependencies"?: Array<ScaRequestDataAttributesDependenciesItems>;
    "env"?: string;
    "files"?: Array<ScaRequestDataAttributesFilesItems>;
    "relations"?: Array<ScaRequestDataAttributesRelationsItems>;
    "repository"?: ScaRequestDataAttributesRepository;
    "service"?: string;
    "tags"?: {
        [key: string]: string;
    };
    "vulnerabilities"?: Array<ScaRequestDataAttributesVulnerabilitiesItems>;
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
