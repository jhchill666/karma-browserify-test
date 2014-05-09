module.exports = function(config) {
  config.set({

    basePath: '',
    frameworks: ['jasmine', 'commonjs'],
    files: [
        'bower_components/angular/angular.js',
        'bower_components/angular-mocks/angular-mocks.js',
        'src/**/*.js'
    ],
    exclude: [],
    preprocessors: {
        'src/app.js': ['commonjs']
    },
    browsers: ['PhantomJS'],
    plugins: [
        'karma-jasmine',
        'karma-commonjs',
        'karma-chrome-launcher',
        'karma-phantomjs-launcher'
    ],


    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_DEBUG,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
    

  });
};
