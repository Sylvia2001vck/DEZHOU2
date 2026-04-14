import type { Paginator } from "@smithy/types";
import { DescribeSpotFleetRequestsCommandInput, DescribeSpotFleetRequestsCommandOutput } from "../commands/DescribeSpotFleetRequestsCommand";
import type { EC2PaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeSpotFleetRequests: (config: EC2PaginationConfiguration, input: DescribeSpotFleetRequestsCommandInput, ...rest: any[]) => Paginator<DescribeSpotFleetRequestsCommandOutput>;
