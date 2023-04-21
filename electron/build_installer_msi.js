// ./build_installer.js

// 1. Import Modules
const { MSICreator } = require('electron-wix-msi');
const path = require('path');

// 2. Define input and output directory.
// Important: the directories must be absolute, not relative e.g
// appDirectory: "C:\\Users\sdkca\Desktop\OurCodeWorld-win32-x64", 
const APP_DIR = path.resolve('./angular-electron-practice-win32-x64');
// const APP_DIR = path.resolve('D:\Projects\angular-electron-practice\electron\angular-electron-practice-win32-x64');
// outputDirectory: "C:\\Users\sdkca\Desktop\windows_installer", 
const OUT_DIR = path.resolve(__dirname, './windows_installer');

// 3. Instantiate the MSICreator
const msiCreator = new MSICreator({
    appDirectory: APP_DIR,
    outputDirectory: OUT_DIR,

    // Configure metadata
    description: 'This is a demo application',
    exe: 'angular-electron-practice',
    name: 'angular-electron-practice',
    manufacturer: 'Josh software',
    version: '1.0.0',
    icon: 'assets/angular_icon.ico',

    // Configure installer User Interface
    ui: {
        chooseDirectory: true
    },
});

// 4. Create a .wxs template file
msiCreator.create().then(function(){

    // Step 5: Compile the template to a .msi file
    msiCreator.compile();
});


// import { MSICreator } from 'electron-wix-msi';

// // Step 1: Instantiate the MSICreator
// const msiCreator = await new MSICreator({
//   appDirectory: 'D:\\Projects\\angular-electron-practice\\electron\\demo-app-1-win32-x64',
//   description: 'This is a demo application',
//   exe: 'demo app.exe',
//   name: 'Demo App',
//   manufacturer: 'Josh Software',
//   version: '1.0.0',
//   outputDirectory: 'D:\\Projects\\angular-electron-practice\\electron\\windows_installer',
//   icon: 'D:\\Projects\\angular-electron-practice\\electron\\assets\\angular_icon.ico',
//   ui: {
//     chooseDirectory: true
//   }
// });

// // // Step 2: Create a .wxs template file
// // const supportBinaries = await msiCreator.create();

// // // 🆕 Step 2a: optionally sign support binaries if you
// // // sign you binaries as part of of your packaging script
// // supportBinaries.forEach(async (binary) => {
// //   // Binaries are the new stub executable and optionally
// //   // the Squirrel auto updater.
// //   await signFile(binary);
// // });

// // Step 3: Compile the template to a .msi file
// await msiCreator.compile();
