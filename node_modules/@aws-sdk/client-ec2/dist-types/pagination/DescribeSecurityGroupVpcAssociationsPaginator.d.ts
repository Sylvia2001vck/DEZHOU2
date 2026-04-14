import type { Paginator } from "@smithy/types";
import { DescribeSecurityGroupVpcAssociationsCommandInput, DescribeSecurityGroupVpcAssociationsCommandOutput } from "../commands/DescribeSecurityGroupVpcAssociationsCommand";
import type { EC2PaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeSecurityGroupVpcAssociations: (config: EC2PaginationConfiguration, input: DescribeSecurityGroupVpcAssociationsCommandInput, ...rest: any[]) => Paginator<DescribeSecurityGroupVpcAssociationsCommandOutput>;
