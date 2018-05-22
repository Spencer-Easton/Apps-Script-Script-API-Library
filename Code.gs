

/**
* Google Apps Script Library for the script API
* 
* Documentation can be found: 
* https://developers.google.com/apps-script/api/
* 
* OAuth2 Scopes
* https://www.googleapis.com/auth/userinfo.email
* https://www.google.com/calendar/feeds
* https://www.googleapis.com/auth/groups
* https://www.googleapis.com/auth/forms.currentonly
* https://www.googleapis.com/auth/drive
* https://www.googleapis.com/auth/spreadsheets
* https://mail.google.com/
* https://www.googleapis.com/auth/admin.directory.group
* https://www.googleapis.com/auth/admin.directory.user
* https://www.googleapis.com/auth/forms
*/

var BASEURL_="https://script.googleapis.com/";
var tokenService_;

/*
* Stores the function passed that is invoked to get a OAuth2 token;
* @param {function} service The function used to get the OAuth2 token;
*
*/
function setTokenService(service){
  tokenService_ = service;
}

/*
* Returns an OAuth2 token from your TokenService as a test
* @return {string} An OAuth2 token
*
*/
function testTokenService(){
 return tokenService_();
}

/**
 * Performs a Fetch
 * @param {string} url The endpoint for the URL with parameters
 * @param {Object.<string, string>} options Options to override default fetch options
 * @returns {Object.<string,string>} the fetch results
 * @private
 */
function CALL_(path,options){
  var fetchOptions = {method:"",muteHttpExceptions:true, contentType:"application/json", headers:{Authorization:"Bearer "+tokenService_()}}
  var url = BASEURL_ + path;
  
  for(option in options){
    fetchOptions[option] = options[option];
  }
  
  var response = UrlFetchApp.fetch(url, fetchOptions)
  if(response.getResponseCode() != 200){
    throw new Error(response.getContentText())
  }else{
    return JSON.parse(response.getContentText());
  }
}

/**
 * Performs a Fetch and accumulation using pageToken parameter of the returned results
 * @param {string} url The endpoint for the URL with parameters
 * @param {Object.<string, string>} options Options to override default fetch options
 * @param {string} returnParamPath The path of the parameter to be accumulated
 * @returns {Array.Object.<string,string>} An array of objects
 * @private
 */
function CALLPAGE_(path,options, returnParamPath){
  var fetchOptions = {method:"",muteHttpExceptions:true, contentType:"application/json", headers:{Authorization:"Bearer "+tokenService_()}}
  for(option in options){
    fetchOptions[option] = options[option];
  }
  var url = BASEURL_ + path;
  var returnArray = [];
  var nextPageToken;
  do{
    if(nextPageToken){
      url += "?pageToken=" + nextPageToken;
    }
    var results = UrlFetchApp.fetch(url, fetchOptions);
    if(results.getResponseCode() != 200){
      throw new Error(results.getContentText());
    }else{
      var resp = JSON.parse(results.getContentText())
      nextPageToken = resp.nextPageToken;
      returnArray  = returnArray.concat(resp[returnParamPath])
    }
  }while(nextPageToken);
  return returnArray;
}

/**
 * Builds a complete URL from a base URL and a map of URL parameters. Written by Eric Koleda in the OAuth2 library
 * @param {string} url The base URL.
 * @param {Object.<string, string>} params The URL parameters and values.
 * @returns {string} The complete URL.
 * @private
 */
function buildUrl_(url, params) {
  var params = params || {}; //allow for NULL options
  var paramString = Object.keys(params).map(function(key) {
    return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
  }).join('&');
  return url + (url.indexOf('?') >= 0 ? '&' : '?') + paramString;
}


/**
* Gets a script project's metadata.
*
* @param {string} scriptId The script project's Drive ID.
* @param {object} options Keypair of all optional parameters for this call
* @return {object} The returned ProjectResource object
*/
function projectsGet(scriptId,options){
  var path = buildUrl_("v1/projects/"+scriptId,options);
  var callOptions = {method:"GET"};
  var ProjectResource = CALL_(path,callOptions);
  return ProjectResource;
}

/**
* Updates the content of the specified script project.
This content is stored as the HEAD version, and is used when the script is
executed as a trigger, in the script editor, in add-on preview mode, or as
a web app or Apps Script API in development mode. This clears all the
existing files in the project.
*
* @param {string} scriptId The script project's Drive ID.
* @param {object} ContentResource An object containing the ContentResource for this method
* @param {object} options Keypair of all optional parameters for this call
* @return {object} The returned ContentResource object
*/
function projectsUpdateContent(scriptId,ContentResource,options){
  var path = buildUrl_("v1/projects/"+scriptId+"/content",options);
  var callOptions = {method:"PUT",payload:JSON.stringify(ContentResource)};
  var ContentResource = CALL_(path,callOptions);
  return ContentResource;
}

/**
* Creates a new, empty script project with no script files and a base
manifest file.
*
* @param {object} CreateProjectRequestResource An object containing the CreateProjectRequestResource for this method
* @param {object} options Keypair of all optional parameters for this call
* @return {object} The returned ProjectResource object
*/
function projectsCreate(CreateProjectRequestResource,options){
  var path = buildUrl_("v1/projects",options);
  var callOptions = {method:"POST",payload:JSON.stringify(CreateProjectRequestResource)};
  var ProjectResource = CALL_(path,callOptions);
  return ProjectResource;
}

/**
* Gets the content of the script project, including the code source and
metadata for each script file.
*
* @param {string} scriptId The script project's Drive ID.
* @param {object} options Keypair of all optional parameters for this call
* @return {object} The returned ContentResource object
*/
function projectsGetContent(scriptId,options){
  var path = buildUrl_("v1/projects/"+scriptId+"/content",options);
  var callOptions = {method:"GET"};
  var ContentResource = CALL_(path,callOptions);
  return ContentResource;
}

/**
* Get metrics data for scripts, such as number of executions and
active users.
*
* @param {string} scriptId Required field indicating the script to get metrics for.
* @param {object} options Keypair of all optional parameters for this call
* @return {object} The returned MetricsResource object
*/
function projectsGetMetrics(scriptId,options){
  var path = buildUrl_("v1/projects/"+scriptId+"/metrics",options);
  var callOptions = {method:"GET"};
  var MetricsResource = CALL_(path,callOptions);
  return MetricsResource;
}

/**
* Deletes a deployment of an Apps Script project.
*
* @param {string} scriptId The script project's Drive ID.
* @param {string} deploymentId The deployment ID to be undeployed.
* @param {object} options Keypair of all optional parameters for this call
* @return {object} The returned EmptyResource object
*/
function projectsDeploymentsDelete(scriptId,deploymentId,options){
  var path = buildUrl_("v1/projects/"+scriptId+"/deployments/"+deploymentId,options);
  var callOptions = {method:"DELETE"};
  var EmptyResource = CALL_(path,callOptions);
  return EmptyResource;
}

/**
* Gets a deployment of an Apps Script project.
*
* @param {string} scriptId The script project's Drive ID.
* @param {string} deploymentId The deployment ID.
* @param {object} options Keypair of all optional parameters for this call
* @return {object} The returned DeploymentResource object
*/
function projectsDeploymentsGet(scriptId,deploymentId,options){
  var path = buildUrl_("v1/projects/"+scriptId+"/deployments/"+deploymentId,options);
  var callOptions = {method:"GET"};
  var DeploymentResource = CALL_(path,callOptions);
  return DeploymentResource;
}

/**
* Lists the deployments of an Apps Script project.
*
* @param {string} scriptId The script project's Drive ID.
* @param {object} options Keypair of all optional parameters for this call
* @return {object} The returned ListDeploymentsResponseResource object
*/
function projectsDeploymentsList(scriptId,options){
  var path = buildUrl_("v1/projects/"+scriptId+"/deployments",options);
  var callOptions = {method:"GET"};
  var ListDeploymentsResponseItems = CALLPAGE_(path,callOptions,"items");
  return ListDeploymentsResponseItems;
}

/**
* Updates a deployment of an Apps Script project.
*
* @param {string} scriptId The script project's Drive ID.
* @param {string} deploymentId The deployment ID for this deployment.
* @param {object} UpdateDeploymentRequestResource An object containing the UpdateDeploymentRequestResource for this method
* @param {object} options Keypair of all optional parameters for this call
* @return {object} The returned DeploymentResource object
*/
function projectsDeploymentsUpdate(scriptId,deploymentId,UpdateDeploymentRequestResource,options){
  var path = buildUrl_("v1/projects/"+scriptId+"/deployments/"+deploymentId,options);
  var callOptions = {method:"PUT",payload:JSON.stringify(UpdateDeploymentRequestResource)};
  var DeploymentResource = CALL_(path,callOptions);
  return DeploymentResource;
}

/**
* Creates a deployment of an Apps Script project.
*
* @param {string} scriptId The script project's Drive ID.
* @param {object} DeploymentConfigResource An object containing the DeploymentConfigResource for this method
* @param {object} options Keypair of all optional parameters for this call
* @return {object} The returned DeploymentResource object
*/
function projectsDeploymentsCreate(scriptId,DeploymentConfigResource,options){
  var path = buildUrl_("v1/projects/"+scriptId+"/deployments",options);
  var callOptions = {method:"POST",payload:JSON.stringify(DeploymentConfigResource)};
  var DeploymentResource = CALL_(path,callOptions);
  return DeploymentResource;
}

/**
* Gets a version of a script project.
*
* @param {string} scriptId The script project's Drive ID.
* @param {integer} versionNumber The version number.
* @param {object} options Keypair of all optional parameters for this call
* @return {object} The returned VersionResource object
*/
function projectsVersionsGet(scriptId,versionNumber,options){
  var path = buildUrl_("v1/projects/"+scriptId+"/versions/"+versionNumber,options);
  var callOptions = {method:"GET"};
  var VersionResource = CALL_(path,callOptions);
  return VersionResource;
}

/**
* List the versions of a script project.
*
* @param {string} scriptId The script project's Drive ID.
* @param {object} options Keypair of all optional parameters for this call
* @return {object} The returned ListVersionsResponseResource object
*/
function projectsVersionsList(scriptId,options){
  var path = buildUrl_("v1/projects/"+scriptId+"/versions",options);
  var callOptions = {method:"GET"};
  var ListVersionsResponseItems = CALLPAGE_(path,callOptions,"items");
  return ListVersionsResponseItems;
}

/**
* Creates a new immutable version using the current code, with a unique
version number.
*
* @param {string} scriptId The script project's Drive ID.
* @param {object} VersionResource An object containing the VersionResource for this method
* @param {object} options Keypair of all optional parameters for this call
* @return {object} The returned VersionResource object
*/
function projectsVersionsCreate(scriptId,VersionResource,options){
  var path = buildUrl_("v1/projects/"+scriptId+"/versions",options);
  var callOptions = {method:"POST",payload:JSON.stringify(VersionResource)};
  var VersionResource = CALL_(path,callOptions);
  return VersionResource;
}

/**
* List information about a script's executed processes, such as process type
and current status.
*
* @param {object} options Keypair of all optional parameters for this call
* @return {object} The returned ListScriptProcessesResponseResource object
*/
function processesListScriptProcesses(options){
  var path = buildUrl_("v1/processes:listScriptProcesses",options);
  var callOptions = {method:"GET"};
  var ListScriptProcessesResponseItems = CALLPAGE_(path,callOptions,"items");
  return ListScriptProcessesResponseItems;
}

/**
* List information about processes made by or on behalf of a user,
such as process type and current status.
*
* @param {object} options Keypair of all optional parameters for this call
* @return {object} The returned ListUserProcessesResponseResource object
*/
function processesList(options){
  var path = buildUrl_("v1/processes",options);
  var callOptions = {method:"GET"};
  var ListUserProcessesResponseItems = CALLPAGE_(path,callOptions,"items");
  return ListUserProcessesResponseItems;
}

/**
* Runs a function in an Apps Script project. The project must be deployed
for use with the Apps Script API.

This method requires authorization with an OAuth 2.0 token that includes at
least one of the scopes listed in the [Authorization](#authorization)
section; script projects that do not require authorization cannot be
executed through this API. To find the correct scopes to include in the
authentication token, open the project in the script editor, then select
**File > Project properties** and click the **Scopes** tab.
*
* @param {string} scriptId The script ID of the script to be executed. To find the script ID, open
the project in the script editor and select **File > Project properties**.
* @param {object} ExecutionRequestResource An object containing the ExecutionRequestResource for this method
* @param {object} options Keypair of all optional parameters for this call
* @return {object} The returned OperationResource object
*/
function scriptsRun(scriptId,ExecutionRequestResource,options){
  var path = buildUrl_("v1/scripts/"+scriptId+":run",options);
  var callOptions = {method:"POST",payload:JSON.stringify(ExecutionRequestResource)};
  var OperationResource = CALL_(path,callOptions);
  return OperationResource;
}


