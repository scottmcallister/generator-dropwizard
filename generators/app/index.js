'use strict';

var Generator = require('yeoman-generator');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
        this.argument('appname', { type: String, required: false });
    }

    prompting() {
        return this.prompt([{
            type: 'input',
            name: 'name',
            message: 'Your project name',
            default: (this.options.appname ? this.options.appname : 'DropWizardExample')
        },
        {
            type: 'input',
            name: 'groupId',
            message: 'Your group ID',
            default: 'com.example'
        },
        {
            type: 'input',
            name: 'artifactId',
            message: 'Your artifact ID',
            default: 'DropWizardExample'
        },
        {
            type: 'input',
            name: 'package',
            message: 'Your package name',
            default: 'com.example.dwexample'
        }])
        .then((answers) => {
            this.log('app name:', answers.name);
            this.log('group ID:', answers.groupId);
            this.log('artifact ID:', answers.artifactId);
            this.log('package:', answers.package);
            this.props = answers;
        });
    }

    writing() {
        const args = [
            'archetype:generate',
            `-DgroupId=${this.props.groupId}`,
            `-DartifactId=${this.props.artifactId}`,
            `-Dname=${this.props.name}`,
            `-Dpackage=${this.props.package}`,
            '-DarchetypeGroupId=io.dropwizard.archetypes',
            '-DarchetypeArtifactId=java-simple',
            '-DinteractiveMode=false`'
        ];
        this.spawnCommand('mvn', args, {} );
    }
};
