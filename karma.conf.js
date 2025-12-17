// // Karma configuration file, see link for more information
// // https://karma-runner.github.io/1.0/config/configuration-file.html

// module.exports = function (config) {
//   config.set({
//     basePath: '',
//     frameworks: ['jasmine', '@angular-devkit/build-angular'],
//     plugins: [
//       require('karma-jasmine'),
//       require('karma-chrome-launcher'),
//       require('karma-jasmine-html-reporter'),
//       require('karma-coverage-istanbul-reporter'),
//       require('@angular-devkit/build-angular/plugins/karma')
//     ],
//     client: {
//       clearContext: false // leave Jasmine Spec Runner output visible in browser
//     },
//     coverageIstanbulReporter: {
//       dir: require('path').join(__dirname, './coverage/my-angular-project'),
//       reports: ['html', 'lcovonly', 'text-summary'],
//       fixWebpackSourcePaths: true
//     },
//     reporters: ['progress', 'kjhtml'],
//     port: 9876,
//     colors: true,
//     logLevel: config.LOG_INFO,
//     autoWatch: true,
//     browsers: ['Chrome'],
//     customLaunchers: {
//       ChromeHeadlessCI: {
//         base: 'ChromeHeadless',
//         flags: ['--no-sandbox']
//       }
//     },
//     singleRun: false,
//     restartOnFileChange: true
//   });
// };

// Karma configuration file
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],

    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],

    client: {
      clearContext: false
    },

    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage/my-angular-project'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },

    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,

    /** 🔴 CI에서 가장 중요한 부분 시작 */
    autoWatch: false,

    browsers: ['ChromeHeadlessCI'],

    customLaunchers: {
      ChromeHeadlessCI: {
        base: 'ChromeHeadless',
        flags: [
          '--no-sandbox',
          '--disable-gpu',
          '--disable-dev-shm-usage'
        ]
      }
    },

    singleRun: true,
    restartOnFileChange: false
    /** 🔴 CI에서 가장 중요한 부분 끝 */
  });
};
