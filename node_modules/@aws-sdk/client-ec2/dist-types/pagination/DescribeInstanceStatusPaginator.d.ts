import type { Paginator } from "@smithy/types";
import { DescribeInstanceStatusCommandInput, DescribeInstanceStatusCommandOutput } from "../commands/DescribeInstanceStatusCommand";
import type { EC2PaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeInstanceStatus: (config: EC2PaginationConfiguration, input: DescribeInstanceStatusCommandInput, ...rest: any[]) => Paginator<DescribeInstanceStatusCommandOutput>;
