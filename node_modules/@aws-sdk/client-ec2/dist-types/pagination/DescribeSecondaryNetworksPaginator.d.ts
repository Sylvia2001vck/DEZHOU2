import type { Paginator } from "@smithy/types";
import { DescribeSecondaryNetworksCommandInput, DescribeSecondaryNetworksCommandOutput } from "../commands/DescribeSecondaryNetworksCommand";
import type { EC2PaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeSecondaryNetworks: (config: EC2PaginationConfiguration, input: DescribeSecondaryNetworksCommandInput, ...rest: any[]) => Paginator<DescribeSecondaryNetworksCommandOutput>;
