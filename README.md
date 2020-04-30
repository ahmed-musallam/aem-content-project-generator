## Motivation

You've used other generators before, like archtype and lazybones AEM project generators, they are great for full projects, but if you just want something that deploys a content package?

This generator generates an extremely simple maven project whose sole job is to create a vault package and deploy it. There is no bundle, no frontend module or anything else! this is for working with content/pure JCR structure.

## Installation
```
npm install -g aem-content-project-generator
```

## Usage
To generate a simple content project:

```
aemcg content-project new
```

enter requested value and voila! A new simple content project is generated.


## Example
Here is the generated structure for a sample project:

```
.
├── README.md
├── jcr_root
│   └── apps
│       └── sample-content-project
└── pom.xml
```