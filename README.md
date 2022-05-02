# icats - Illumina Connected Analytics TypeScript

This is wrapper for ICA SDK generated OpenAPI in TypeScript.

# Overview

This is a wrapper on top of [ICA v2 OpenAPI](https://ica.illumina.com/ica/api/swagger/index.html) generated by an [OpenAPI Generator](https://openapi-generator.tech/) with `typescript-axios` as the engine. `.yaml` file from OpenAPI is attached as `ica-openapi.yaml` in this repo.

The idea of this project is to re-use the generated code, instead of re-generating the wrapper for every project. Instrucstions below.

See [axios package](https://axios-http.com/) docs used in this repo.


# How to use

### The Setup
___

The only requirements for this wrapper is `axios` as it is used for the api call. You can install this via npm or yarn.  
yarn command:
```
yarn add axios
```
npm command:
```
npm install axios
```

After the `axios` installation, you could clone this repository and ready to use. When importing this to your project, you specify the path to this `icats` directory.

```
git clone https://github.com/umccr-illumina/icats.git
```

Alternatively, you could clone this repository as part of your `node_modules`. This allows you to use `icats` without specifying the path to the this directory. This can be done via `npm` or `yarn`.

```
yarn add https://github.com/umccr-illumina/icats.git
```
or 

```
npm install https://github.com/umccr-illumina/icats.git
```

### Usage
___

The default `axios` config is set, you could modify the config if needed. See [axios docs](https://axios-http.com/docs/req_config) for reference. The default base_url is pointing to `https://ica.illumina.com/ica/rest`, if you somehow run the ICA api elsewhere do change this config accordingly.
Example changing config in `icats`

```
import { SetBasicConfig } from "icats";  // If icats not in node_modules, change "icats" to "./path/to/icats/src"

SetBasicConfig({
  "baseURL": "https://ica.illumina.com/ica/rest",
  "method": "GET",

  // other config here ...

})

```

In order the API to work, you will need to set the token used to access the API.
```
import { SetToken } from "icats";  // If icats not in node_modules, change "icats" to "./path_to/icats"

SetToken("eyJh...shorten...Qssw5c")

```

To use the API you could use basic config of axios and run it to `icats`. Ideally you would need additonal config to make the specific request to the api. Example, you would need to add api path, query parameter, etc.
Example in taking project list from ica endpoint from `icats`. 
```
import { RunAxios, ProjectPagedList, ProjectApiAxiosParamCreator } from "icats";  // If icats not in node_modules, change "icats" to "./path/to/icats/src"

async function getProjectData(): Promise<ProjectPagedList> {
  // Generate axios parameter
  const ProjectParamCreator = ProjectApiAxiosParamCreator();
  const getProjectsParamter = await ProjectParamCreator.getProjects();

  // Calling axios
  const axiosData = await RunAxios(getProjectsParamter);
  return axiosData.data;
}

console.log(getProjectData())

```
### Modification
___

Feel free to modify/improve by creating a PR to the `main` branch.

The OpenApi is created via OpenApi with `typescript-axios` as the engine, to update this OpenAPI code please use `yarn codegen` that will update based on the Swagger.

For simplictiy, the project is build and published in this repository. To re-build and publish, please use `yarn build` to update the lib folder (This will allow usage from `yarn add https://github.com/umccr-illumina/icats.git` command).
