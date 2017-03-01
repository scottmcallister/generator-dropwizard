# generator-dropwizard

A [Yeoman](http://yeoman.io/) generator for scaffolding a [Dropwizard](http://www.dropwizard.io/) project.

## Getting Started

Follow these instructions to install this generator.

### Prerequisites

You'll need NodeJS, npm, Java, and maven installed on your system. Make sure all of these are installed on your system before installing this generator.

```
$ node --version; npm --version; java -version; mvn --version
```

### Installation

You can install this generator one of two ways. Either install this generator globally using NPM:

```
$ npm install -g yo generator-dropwizard
```

...or clone this repository and use `npm link` to create an alias.

```
$ git clone https://github.com/scottmcallister/generator-dropwizard.git
$ cd generator-dropwizard
$ npm link
```

### Usage

Use the generator to scaffold out a default Dropwizard app.

```
$ yo dropwizard
```

After following the prompts, change into your project's directory, clean/install your Maven dependencies and run the jar.

```
$ cd {YourApp}
$ mvn clean install
$ java -jar target/{YourApp}-1.0-SNAPSHOT.jar server config.yml
```
