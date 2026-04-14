/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The related vulnerability asset ecosystem.
 */
export declare type VulnerabilityEcosystem = typeof PYPI | typeof MAVEN | typeof NUGET | typeof NPM | typeof RUBY_GEMS | typeof GO | typeof PACKAGIST | typeof DEB | typeof RPM | typeof APK | typeof WINDOWS | typeof GENERIC | typeof MAC_OS | typeof OCI | typeof BOTTLE_ROCKET | typeof NONE | UnparsedObject;
export declare const PYPI = "PyPI";
export declare const MAVEN = "Maven";
export declare const NUGET = "NuGet";
export declare const NPM = "Npm";
export declare const RUBY_GEMS = "RubyGems";
export declare const GO = "Go";
export declare const PACKAGIST = "Packagist";
export declare const DEB = "Deb";
export declare const RPM = "Rpm";
export declare const APK = "Apk";
export declare const WINDOWS = "Windows";
export declare const GENERIC = "Generic";
export declare const MAC_OS = "MacOs";
export declare const OCI = "Oci";
export declare const BOTTLE_ROCKET = "BottleRocket";
export declare const NONE = "None";
