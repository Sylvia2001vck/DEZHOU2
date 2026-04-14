import type { Paginator } from "@smithy/types";
import { DescribeSecondarySubnetsCommandInput, DescribeSecondarySubnetsCommandOutput } from "../commands/DescribeSecondarySubnetsCommand";
import type { EC2PaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeSecondarySubnets: (config: EC2PaginationConfiguration, input: DescribeSecondarySubnetsCommandInput, ...rest: any[]) => Paginator<DescribeSecondarySubnetsCommandOutput>;
