
// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = [
  {
    type: 'input',
    name: 'name',
    message: "JCR Name (can only contain alphanumericals and '-')",
    validate(value) {
      const valid = /^[a-z0-9\-]+$/i.test(value);
      if (!valid) {
        return "JCR Name can only contain letters, numbers and/or '-'";
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'title',
    message: "Title"
  },
  {
    type: 'input',
    name: 'artifactId',
    message: "Maven Artifact ID"
  },
  {
    type: 'input',
    name: 'groupId',
    message: "Maven Group ID"
  },
  {
    type: 'input',
    name: 'description',
    message: "Maven Project Description (can leave empty)"
  },
]
