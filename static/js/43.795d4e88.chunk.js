(this["webpackJsonp@uiw/react-textarea-code-editor"]=this["webpackJsonp@uiw/react-textarea-code-editor"]||[]).push([[43],{470:function(e,r,n){"use strict";n.r(r),r.default='//\r\n//  Copyright (c) Microsoft Corporation. All rights reserved.\r\n//\r\n\r\n#import "UseQuotes.h"\r\n#import <Use/GTLT.h> \r\n\r\n/*\r\n  Multi \r\n  Line\r\n  Comments \r\n*/\r\n@implementation Test\r\n\r\n- (void) applicationWillFinishLaunching:(NSNotification *)notification\r\n{\r\n}\r\n\r\n- (IBAction)onSelectInput:(id)sender\r\n{\r\n    NSString* defaultDir = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, true)[0];\r\n    \r\n    NSOpenPanel* panel = [NSOpenPanel openPanel];\r\n    [panel setAllowedFileTypes:[[NSArray alloc] initWithObjects:@"ipa", @"xcarchive", @"app", nil]];\r\n    \r\n    [panel beginWithCompletionHandler:^(NSInteger result)\r\n     {\r\n         if (result == NSFileHandlingPanelOKButton)\r\n             [self.inputTextField setStringValue:[panel.URL path]];\r\n     }];\r\n     return YES;\r\n\r\n     int hex = 0xFEF1F0F;\r\n   float ing = 3.14;\r\n   ing = 3.14e0;\r\n   ing = 31.4e-2;\r\n}\r\n\r\n-(id) initWithParams:(id<anObject>) aHandler withDeviceStateManager:(id<anotherObject>) deviceStateManager\r\n{\r\n    // add a tap gesture recognizer\r\n    UITapGestureRecognizer *tapGesture = [[UITapGestureRecognizer alloc] initWithTarget:self action:@selector(handleTap:)];\r\n    NSMutableArray *gestureRecognizers = [NSMutableArray array];\r\n    [gestureRecognizers addObject:tapGesture];\r\n    [gestureRecognizers addObjectsFromArray:scnView.gestureRecognizers];\r\n    scnView.gestureRecognizers = gestureRecognizers;\r\n\r\n  return tapGesture;\r\n  return nil;\r\n}\r\n\r\n@end\r\n'}}]);
//# sourceMappingURL=43.795d4e88.chunk.js.map