//
//  Paltform.m
//  ch05
//
//  Created by wecash on 2017/9/15.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "Platform.h"

@implementation Platform

RCT_EXPORT_MODULE()

- (NSDictionary *)constantsToExport{
  return @{
           @"systemName": @"iOS"
          };
}

@end
