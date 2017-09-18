//
//  Deviceinfo.m
//  ch05
//
//  Created by wecash on 2017/9/15.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "MyDeviceInfo.h"
#import <UIKit/UIKit.h>

@implementation MyDeviceInfo

RCT_EXPORT_MODULE()

- (NSDictionary *)constantsToExport {
  UIDevice * currentDevice = [UIDevice currentDevice];
  
  return @{
           @"systemName": currentDevice.systemName,
           @"systemVersion": currentDevice.systemVersion,
           @"deviceLocale": self.deviceLocale,
           @"appVersion": [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleShortVersionString"],
          };
}

- (NSString *)deviceLocale {
  NSString *language = [[NSLocale preferredLanguages] objectAtIndex:0];
  return language;
}

- (NSString *)deviceCountry {
  NSString *country = [[NSLocale currentLocale] objectForKey:NSLocaleCountryCode];
  return country;
}

@end
