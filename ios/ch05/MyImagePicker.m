//
//  MyImagePicker.m
//  ch05
//
//  Created by wecash on 2017/9/18.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "MyImagePicker.h"
#import <React/RCTConvert.h>
#import <AssetsLibrary/AssetsLibrary.h>
#import <AVFoundation/AVFoundation.h>
#import <Photos/Photos.h>

@import MobileCoreServices;

@interface MyImagePicker()

@property (nonatomic, retain) NSMutableDictionary *options, * response;
@property (nonatomic, strong) RCTResponseSenderBlock callback;
@property (nonatomic, strong) UIImagePickerController *picker;

@end

@implementation MyImagePicker

RCT_EXPORT_MODULE();

@end
