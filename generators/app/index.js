'use strict';

var Generator = require('yeoman-generator');

module.exports = class extends Generator {
    // The name `constructor` is important here
    constructor(args, opts) {
        // Calling the super constructor is important so our generator is correctly set up
        super(args, opts);

        // Next, add your custom code
        this.argument('appname', { type: String, required: false });
    }

    prompting() {
        return this.prompt([{
            type: 'input',
            name: 'name',
            message: 'Your project name',
            default: (this.options.appname ? this.options.appname : this.appname)
        }])
        .then((answers) => {
            this.log('app name:', answers.name);
            this.props = answers;
        });
    }

    writing() {
        this.fs.copyTpl(
            this.templatePath('index.html'),
            this.destinationPath(this.props.name+'/index.html'),
            { title: this.props.name }
        );
    }
};
