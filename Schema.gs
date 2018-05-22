
/**
*Representation of a single script deployment.
**/


var Deployment_ = function(deploymentObj){ this.deploymentObj_ = deploymentObj }


/**
*Set of scopes required by the deployment.
**/
Deployment_.prototype.ScopeSet = function(){return new GoogleAppsScriptTypeScopeSet_( this.deploymentObj_.scopeSet)}
/**
*Script's defined set of functions.
**/
Deployment_.prototype.FunctionSet = function(){return new GoogleAppsScriptTypeFunctionSet_( this.deploymentObj_.functionSet)}
/**
*The deployment configuration.
**/
Deployment_.prototype.DeploymentConfig = function(){return new DeploymentConfig_( this.deploymentObj_.deploymentConfig)}
/**
*Last modified date time stamp.
**/
Deployment_.prototype.UpdateTime = function(){return this.deploymentObj_.updateTime}


/**
*The deployment ID for this deployment.
**/
Deployment_.prototype.DeploymentId = function(){return this.deploymentObj_.deploymentId}


/**
*The deployment's entry points.
**/
Deployment_.prototype.EntryPoints = function(){return new IteratorService_(this.deploymentObj_.entryPoints.map(function(element){return new EntryPoint_(element)}))}


/**
*An add-on entry point.
**/


var GoogleAppsScriptTypeAddOnEntryPoint_ = function(googleAppsScriptTypeAddOnEntryPointObj){ this.googleAppsScriptTypeAddOnEntryPointObj_ = googleAppsScriptTypeAddOnEntryPointObj }


/**
*The add-on's optional help URL.
**/
GoogleAppsScriptTypeAddOnEntryPoint_.prototype.HelpUrl = function(){return this.googleAppsScriptTypeAddOnEntryPointObj_.helpUrl}


/**
*The add-on's required title.
**/
GoogleAppsScriptTypeAddOnEntryPoint_.prototype.Title = function(){return this.googleAppsScriptTypeAddOnEntryPointObj_.title}


/**
*The add-on's optional report issue URL.
**/
GoogleAppsScriptTypeAddOnEntryPoint_.prototype.ReportIssueUrl = function(){return this.googleAppsScriptTypeAddOnEntryPointObj_.reportIssueUrl}


/**
*The add-on's required post install tip URL.
**/
GoogleAppsScriptTypeAddOnEntryPoint_.prototype.PostInstallTipUrl = function(){return this.googleAppsScriptTypeAddOnEntryPointObj_.postInstallTipUrl}


/**
*The add-on's optional description.
**/
GoogleAppsScriptTypeAddOnEntryPoint_.prototype.Description = function(){return this.googleAppsScriptTypeAddOnEntryPointObj_.description}


/**
*The add-on's required list of supported container types.
**/
GoogleAppsScriptTypeAddOnEntryPoint_.prototype.AddOnType = function(){return this.googleAppsScriptTypeAddOnEntryPointObj_.addOnType}


/**
*A stack trace through the script that shows where the execution failed.
**/


var ScriptStackTraceElement_ = function(scriptStackTraceElementObj){ this.scriptStackTraceElementObj_ = scriptStackTraceElementObj }


/**
*The line number where the script failed.
**/
ScriptStackTraceElement_.prototype.LineNumber = function(){return this.scriptStackTraceElementObj_.lineNumber}


/**
*The name of the function that failed.
**/
ScriptStackTraceElement_.prototype.Function_ = function(){return this.scriptStackTraceElementObj_.function_}


/**
*Response with the list of
Process resources.
**/


var ListScriptProcessesResponse_ = function(listScriptProcessesResponseObj){ this.listScriptProcessesResponseObj_ = listScriptProcessesResponseObj }


/**
*Token for the next page of results. If empty, there are no more pages
remaining.
**/
ListScriptProcessesResponse_.prototype.NextPageToken = function(){return this.listScriptProcessesResponseObj_.nextPageToken}


/**
*List of processes matching request parameters.
**/
ListScriptProcessesResponse_.prototype.Processes = function(){return new IteratorService_(this.listScriptProcessesResponseObj_.processes.map(function(element){return new GoogleAppsScriptTypeProcess_(element)}))}


/**
*Web app entry point configuration.
**/


var GoogleAppsScriptTypeWebAppConfig_ = function(googleAppsScriptTypeWebAppConfigObj){ this.googleAppsScriptTypeWebAppConfigObj_ = googleAppsScriptTypeWebAppConfigObj }


/**
*Who has permission to run the web app.
**/
GoogleAppsScriptTypeWebAppConfig_.prototype.Access = function(){return this.googleAppsScriptTypeWebAppConfigObj_.access}


/**
*Who to execute the web app as.
**/
GoogleAppsScriptTypeWebAppConfig_.prototype.ExecuteAs = function(){return this.googleAppsScriptTypeWebAppConfigObj_.executeAs}


/**
*The script project resource.
**/


var Project_ = function(projectObj){ this.projectObj_ = projectObj }


/**
*The script project's Drive ID.
**/
Project_.prototype.ScriptId = function(){return this.projectObj_.scriptId}


/**
*The title for the project.
**/
Project_.prototype.Title = function(){return this.projectObj_.title}


/**
*User who last modified the script.
**/
Project_.prototype.LastModifyUser = function(){return new GoogleAppsScriptTypeUser_( this.projectObj_.lastModifyUser)}
/**
*The parent's Drive ID that the script will be attached to. This is usually
the ID of a Google Document or Google Sheet. This filed is optional, and
if not set, a stand-alone script will be created.
**/
Project_.prototype.ParentId = function(){return this.projectObj_.parentId}


/**
*When the script was created.
**/
Project_.prototype.CreateTime = function(){return this.projectObj_.createTime}


/**
*When the script was last updated.
**/
Project_.prototype.UpdateTime = function(){return this.projectObj_.updateTime}


/**
*User who originally created the script.
**/
Project_.prototype.Creator = function(){return new GoogleAppsScriptTypeUser_( this.projectObj_.creator)}
/**
*Response with the list of deployments for the specified Apps Script project.
**/


var ListDeploymentsResponse_ = function(listDeploymentsResponseObj){ this.listDeploymentsResponseObj_ = listDeploymentsResponseObj }


/**
*The list of deployments.
**/
ListDeploymentsResponse_.prototype.Deployments = function(){return new IteratorService_(this.listDeploymentsResponseObj_.deployments.map(function(element){return new Deployment_(element)}))}


/**
*The token that can be used in the next call to get the next page of
results.
**/
ListDeploymentsResponse_.prototype.NextPageToken = function(){return this.listDeploymentsResponseObj_.nextPageToken}


/**
*An individual file within a script project.
A file is a third-party source code created by one or more
developers. It can be a server-side JS code, HTML, or a
configuration file. Each script project can contain multiple files.
**/


var File_ = function(fileObj){ this.fileObj_ = fileObj }


/**
*The defined set of functions in the script file, if any.
**/
File_.prototype.FunctionSet = function(){return new GoogleAppsScriptTypeFunctionSet_( this.fileObj_.functionSet)}
/**
*Last modified date timestamp.
This read-only field is only visible to users who have WRITER
permission for the script project.
**/
File_.prototype.UpdateTime = function(){return this.fileObj_.updateTime}


/**
*The name of the file. The file extension is not part of the file
name, which can be identified from the type field.
**/
File_.prototype.Name = function(){return this.fileObj_.name}


/**
*The type of the file.
**/
File_.prototype.Type = function(){return this.fileObj_.type}


/**
*The user who modified the file most recently.
This read-only field is only visible to users who have WRITER
permission for the script project.
**/
File_.prototype.LastModifyUser = function(){return new GoogleAppsScriptTypeUser_( this.fileObj_.lastModifyUser)}
/**
*The file content.
**/
File_.prototype.Source = function(){return this.fileObj_.source}


/**
*Creation date timestamp.
This read-only field is only visible to users who have WRITER
permission for the script project.
**/
File_.prototype.CreateTime = function(){return this.fileObj_.createTime}


/**
*An object that provides the return value of a function executed using the
Apps Script API. If the script function returns successfully, the response
body's response field contains this
`ExecutionResponse` object.
**/


var ExecutionResponse_ = function(executionResponseObj){ this.executionResponseObj_ = executionResponseObj }


/**
*The return value of the script function. The type matches the object type
returned in Apps Script. Functions called using the Apps Script API cannot
return Apps Script-specific objects (such as a `Document` or a `Calendar`);
they can only return primitive types such as a `string`, `number`, `array`,
`object`, or `boolean`.
**/
ExecutionResponse_.prototype.Result = function(){return this.executionResponseObj_.result}


/**
*A set of scopes. No duplicates are permitted.
**/


var GoogleAppsScriptTypeScopeSet_ = function(googleAppsScriptTypeScopeSetObj){ this.googleAppsScriptTypeScopeSetObj_ = googleAppsScriptTypeScopeSetObj }


/**
*List of scope values in the set.
**/
GoogleAppsScriptTypeScopeSet_.prototype.Values = function(){return new IteratorService_(this.googleAppsScriptTypeScopeSetObj_.values.map(function(element){return new GoogleAppsScriptTypeScope_(element)}))}


/**
*Represents an authorization scope.
**/


var GoogleAppsScriptTypeScope_ = function(googleAppsScriptTypeScopeObj){ this.googleAppsScriptTypeScopeObj_ = googleAppsScriptTypeScopeObj }


/**
*The scope's identifying string.
**/
GoogleAppsScriptTypeScope_.prototype.Name = function(){return this.googleAppsScriptTypeScopeObj_.name}


/**
*Who authorized the scope.
**/
GoogleAppsScriptTypeScope_.prototype.Authorizer = function(){return this.googleAppsScriptTypeScopeObj_.authorizer}


/**
*Response with the list of the versions for the specified script project.
**/


var ListVersionsResponse_ = function(listVersionsResponseObj){ this.listVersionsResponseObj_ = listVersionsResponseObj }


/**
*The token use to fetch the next page of records. if not exist in the
response, that means no more versions to list.
**/
ListVersionsResponse_.prototype.NextPageToken = function(){return this.listVersionsResponseObj_.nextPageToken}


/**
*The list of versions.
**/
ListVersionsResponse_.prototype.Versions = function(){return new IteratorService_(this.listVersionsResponseObj_.versions.map(function(element){return new Version_(element)}))}


/**
*Resource containing usage stats for a given script, based on the supplied
filter and mask present in the request.
**/


var Metrics_ = function(metricsObj){ this.metricsObj_ = metricsObj }


/**
*Number of active users.
**/
Metrics_.prototype.ActiveUsers = function(){return new IteratorService_(this.metricsObj_.activeUsers.map(function(element){return new MetricsValue_(element)}))}


/**
*Number of total executions.
**/
Metrics_.prototype.TotalExecutions = function(){return new IteratorService_(this.metricsObj_.totalExecutions.map(function(element){return new MetricsValue_(element)}))}


/**
*Number of failed executions.
**/
Metrics_.prototype.FailedExecutions = function(){return new IteratorService_(this.metricsObj_.failedExecutions.map(function(element){return new MetricsValue_(element)}))}


/**
*A set of functions. No duplicates are permitted.
**/


var GoogleAppsScriptTypeFunctionSet_ = function(googleAppsScriptTypeFunctionSetObj){ this.googleAppsScriptTypeFunctionSetObj_ = googleAppsScriptTypeFunctionSetObj }


/**
*A list of functions composing the set.
**/
GoogleAppsScriptTypeFunctionSet_.prototype.Values = function(){return new IteratorService_(this.googleAppsScriptTypeFunctionSetObj_.values.map(function(element){return new GoogleAppsScriptTypeFunction_(element)}))}


/**
*The Content resource.
**/


var Content_ = function(contentObj){ this.contentObj_ = contentObj }


/**
*The list of script project files.
One of the files is a script manifest; it must be named "appsscript",
must have type of JSON, and include the manifest configurations for the
project.
**/
Content_.prototype.Files = function(){return new IteratorService_(this.contentObj_.files.map(function(element){return new File_(element)}))}


/**
*The script project's Drive ID.
**/
Content_.prototype.ScriptId = function(){return this.contentObj_.scriptId}


/**
*A web application entry point.
**/


var GoogleAppsScriptTypeWebAppEntryPoint_ = function(googleAppsScriptTypeWebAppEntryPointObj){ this.googleAppsScriptTypeWebAppEntryPointObj_ = googleAppsScriptTypeWebAppEntryPointObj }


/**
*The URL for the web application.
**/
GoogleAppsScriptTypeWebAppEntryPoint_.prototype.Url = function(){return this.googleAppsScriptTypeWebAppEntryPointObj_.url}


/**
*The entry point's configuration.
**/
GoogleAppsScriptTypeWebAppEntryPoint_.prototype.EntryPointConfig = function(){return new GoogleAppsScriptTypeWebAppConfig_( this.googleAppsScriptTypeWebAppEntryPointObj_.entryPointConfig)}
/**
*A generic empty message that you can re-use to avoid defining duplicated
empty messages in your APIs. A typical example is to use it as the request
or the response type of an API method. For instance:

    service Foo {
      rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
    }

The JSON representation for `Empty` is empty JSON object `{}`.
**/


var Empty_ = function(emptyObj){ this.emptyObj_ = emptyObj }


/**
*Request with deployment information to update an existing deployment.
**/


var UpdateDeploymentRequest_ = function(updateDeploymentRequestObj){ this.updateDeploymentRequestObj_ = updateDeploymentRequestObj }


/**
*The deployment configuration.
**/
UpdateDeploymentRequest_.prototype.DeploymentConfig = function(){return new DeploymentConfig_( this.updateDeploymentRequestObj_.deploymentConfig)}
/**
*An API executable entry point.
**/


var GoogleAppsScriptTypeExecutionApiEntryPoint_ = function(googleAppsScriptTypeExecutionApiEntryPointObj){ this.googleAppsScriptTypeExecutionApiEntryPointObj_ = googleAppsScriptTypeExecutionApiEntryPointObj }


/**
*The entry point's configuration.
**/
GoogleAppsScriptTypeExecutionApiEntryPoint_.prototype.EntryPointConfig = function(){return new GoogleAppsScriptTypeExecutionApiConfig_( this.googleAppsScriptTypeExecutionApiEntryPointObj_.entryPointConfig)}
/**
*An object that provides information about the nature of an error resulting
from an attempted execution of a script function using the Apps Script API.
If a run call
succeeds but the script function (or Apps Script itself) throws an exception,
the response body's error field
contains a
Status object. The `Status` object's `details` field
contains an array with a single one of these `ExecutionError` objects.
**/


var ExecutionError_ = function(executionErrorObj){ this.executionErrorObj_ = executionErrorObj }


/**
*The error type, for example `TypeError` or `ReferenceError`. If the error
type is unavailable, this field is not included.
**/
ExecutionError_.prototype.ErrorType = function(){return this.executionErrorObj_.errorType}


/**
*The error message thrown by Apps Script, usually localized into the user's
language.
**/
ExecutionError_.prototype.ErrorMessage = function(){return this.executionErrorObj_.errorMessage}


/**
*An array of objects that provide a stack trace through the script to show
where the execution failed, with the deepest call first.
**/
ExecutionError_.prototype.ScriptStackTraceElements = function(){return new IteratorService_(this.executionErrorObj_.scriptStackTraceElements.map(function(element){return new ScriptStackTraceElement_(element)}))}


/**
*Response with the list of
Process resources.
**/


var ListUserProcessesResponse_ = function(listUserProcessesResponseObj){ this.listUserProcessesResponseObj_ = listUserProcessesResponseObj }


/**
*List of processes matching request parameters.
**/
ListUserProcessesResponse_.prototype.Processes = function(){return new IteratorService_(this.listUserProcessesResponseObj_.processes.map(function(element){return new GoogleAppsScriptTypeProcess_(element)}))}


/**
*Token for the next page of results. If empty, there are no more pages
remaining.
**/
ListUserProcessesResponse_.prototype.NextPageToken = function(){return this.listUserProcessesResponseObj_.nextPageToken}


/**
*A simple user profile resource.
**/


var GoogleAppsScriptTypeUser_ = function(googleAppsScriptTypeUserObj){ this.googleAppsScriptTypeUserObj_ = googleAppsScriptTypeUserObj }


/**
*The user's domain.
**/
GoogleAppsScriptTypeUser_.prototype.Domain = function(){return this.googleAppsScriptTypeUserObj_.domain}


/**
*The user's photo.
**/
GoogleAppsScriptTypeUser_.prototype.PhotoUrl = function(){return this.googleAppsScriptTypeUserObj_.photoUrl}


/**
*The user's identifying email address.
**/
GoogleAppsScriptTypeUser_.prototype.Email = function(){return this.googleAppsScriptTypeUserObj_.email}


/**
*The user's display name.
**/
GoogleAppsScriptTypeUser_.prototype.Name = function(){return this.googleAppsScriptTypeUserObj_.name}


/**
*A request to run the function in a script. The script is identified by the
specified `script_id`. Executing a function on a script returns results
based on the implementation of the script.
**/


var ExecutionRequest_ = function(executionRequestObj){ this.executionRequestObj_ = executionRequestObj }


/**
*The name of the function to execute in the given script. The name does not
include parentheses or parameters.
**/
ExecutionRequest_.prototype.Function_ = function(){return this.executionRequestObj_.function_}


/**
*If `true` and the user is an owner of the script, the script runs at the
most recently saved version rather than the version deployed for use with
the Apps Script API. Optional; default is `false`.
**/
ExecutionRequest_.prototype.DevMode = function(){return this.executionRequestObj_.devMode}


/**
*The parameters to be passed to the function being executed. The object type
for each parameter should match the expected type in Apps Script.
Parameters cannot be Apps Script-specific object types (such as a
`Document` or a `Calendar`); they can only be primitive types such as
`string`, `number`, `array`, `object`, or `boolean`. Optional.
**/
ExecutionRequest_.prototype.Parameters = function(){return new IteratorService_(this.executionRequestObj_.parameters.map(function(element){return new undefined_(element)}))}


/**
*For Android add-ons only. An ID that represents the user's current session
in the Android app for Google Docs or Sheets, included as extra data in the
[Intent](https://developer.android.com/guide/components/intents-filters.html)
that launches the add-on. When an Android add-on is run with a session
state, it gains the privileges of a
[bound](https://developers.google.com/apps-script/guides/bound)
script&mdash;that is, it can access information like the user's current
cursor position (in Docs) or selected cell (in Sheets). To retrieve the
state, call
`Intent.getStringExtra("com.google.android.apps.docs.addons.SessionState")`.
Optional.
**/
ExecutionRequest_.prototype.SessionState = function(){return this.executionRequestObj_.sessionState}


/**
*A configuration that defines how a deployment is accessed externally.
**/


var EntryPoint_ = function(entryPointObj){ this.entryPointObj_ = entryPointObj }


/**
*The type of the entry point.
**/
EntryPoint_.prototype.EntryPointType = function(){return this.entryPointObj_.entryPointType}


/**
*Add-on properties.
**/
EntryPoint_.prototype.AddOn = function(){return new GoogleAppsScriptTypeAddOnEntryPoint_( this.entryPointObj_.addOn)}
/**
*An entry point specification for web apps.
**/
EntryPoint_.prototype.WebApp = function(){return new GoogleAppsScriptTypeWebAppEntryPoint_( this.entryPointObj_.webApp)}
/**
*An entry point specification for Apps Script API execution calls.
**/
EntryPoint_.prototype.ExecutionApi = function(){return new GoogleAppsScriptTypeExecutionApiEntryPoint_( this.entryPointObj_.executionApi)}
/**
*A resource representing a script project version. A version is a "snapshot"
of a script project and is similar to a read-only branched release. When
creating deployments, the version to use must be specified.
**/


var Version_ = function(versionObj){ this.versionObj_ = versionObj }


/**
*The script project's Drive ID.
**/
Version_.prototype.ScriptId = function(){return this.versionObj_.scriptId}


/**
*When the version was created.
**/
Version_.prototype.CreateTime = function(){return this.versionObj_.createTime}


/**
*The description for this version.
**/
Version_.prototype.Description = function(){return this.versionObj_.description}


/**
*The incremental ID that is created by Apps Script when a version is
created. This is system assigned number and is immutable once created.
**/
Version_.prototype.VersionNumber = function(){return this.versionObj_.versionNumber}


/**
*API executable entry point configuration.
**/


var GoogleAppsScriptTypeExecutionApiConfig_ = function(googleAppsScriptTypeExecutionApiConfigObj){ this.googleAppsScriptTypeExecutionApiConfigObj_ = googleAppsScriptTypeExecutionApiConfigObj }


/**
*Who has permission to run the API executable.
**/
GoogleAppsScriptTypeExecutionApiConfig_.prototype.Access = function(){return this.googleAppsScriptTypeExecutionApiConfigObj_.access}


/**
*Representation of a single script process execution that was started from
the script editor, a trigger, an application, or using the Apps Script API.
This is distinct from the `Operation`
resource, which only represents exeuctions started via the Apps Script API.
**/


var GoogleAppsScriptTypeProcess_ = function(googleAppsScriptTypeProcessObj){ this.googleAppsScriptTypeProcessObj_ = googleAppsScriptTypeProcessObj }


/**
*Name of the script being executed.
**/
GoogleAppsScriptTypeProcess_.prototype.ProjectName = function(){return this.googleAppsScriptTypeProcessObj_.projectName}


/**
*The executions status.
**/
GoogleAppsScriptTypeProcess_.prototype.ProcessStatus = function(){return this.googleAppsScriptTypeProcessObj_.processStatus}


/**
*Duration the execution spent executing.
**/
GoogleAppsScriptTypeProcess_.prototype.Duration = function(){return this.googleAppsScriptTypeProcessObj_.duration}


/**
*Name of the function the started the execution.
**/
GoogleAppsScriptTypeProcess_.prototype.FunctionName = function(){return this.googleAppsScriptTypeProcessObj_.functionName}


/**
*Time the execution started.
**/
GoogleAppsScriptTypeProcess_.prototype.StartTime = function(){return this.googleAppsScriptTypeProcessObj_.startTime}


/**
*The executing users access level to the script.
**/
GoogleAppsScriptTypeProcess_.prototype.UserAccessLevel = function(){return this.googleAppsScriptTypeProcessObj_.userAccessLevel}


/**
*User-facing name for the user executing the script.
**/
GoogleAppsScriptTypeProcess_.prototype.ExecutingUser = function(){return this.googleAppsScriptTypeProcessObj_.executingUser}


/**
*The executions type.
**/
GoogleAppsScriptTypeProcess_.prototype.ProcessType = function(){return this.googleAppsScriptTypeProcessObj_.processType}


/**
*Metadata the defines how a deployment is configured.
**/


var DeploymentConfig_ = function(deploymentConfigObj){ this.deploymentConfigObj_ = deploymentConfigObj }


/**
*The manifest file name for this deployment.
**/
DeploymentConfig_.prototype.ManifestFileName = function(){return this.deploymentConfigObj_.manifestFileName}


/**
*The description for this deployment.
**/
DeploymentConfig_.prototype.Description = function(){return this.deploymentConfigObj_.description}


/**
*The version number on which this deployment is based.
**/
DeploymentConfig_.prototype.VersionNumber = function(){return this.deploymentConfigObj_.versionNumber}


/**
*The script project's Drive ID.
**/
DeploymentConfig_.prototype.ScriptId = function(){return this.deploymentConfigObj_.scriptId}


/**
*Request to create a script project.
**/


var CreateProjectRequest_ = function(createProjectRequestObj){ this.createProjectRequestObj_ = createProjectRequestObj }


/**
*The Drive ID of a parent file that the created script project is bound to.
This is usually the ID of a Google Doc, Google Sheet, Google Form, or
Google Slides file. If not set, a standalone script project is created.
**/
CreateProjectRequest_.prototype.ParentId = function(){return this.createProjectRequestObj_.parentId}


/**
*The title for the project.
**/
CreateProjectRequest_.prototype.Title = function(){return this.createProjectRequestObj_.title}


/**
*A representation of a execution of an Apps Script function that is started using run. The execution response does not arrive until the function finishes executing. The maximum execution runtime is listed in the [Apps Script quotas guide](/apps-script/guides/services/quotas#current_limitations). <p>After the execution is started, it can have one of four outcomes:</p> <ul> <li> If the script function returns successfully, the
  response field contains an
  ExecutionResponse object
  with the function's return value in the object's `result` field.</li>
<li> If the script function (or Apps Script itself) throws an exception, the
  error field contains a
  Status object. The `Status` object's `details`
  field contains an array with a single
  ExecutionError object that
  provides information about the nature of the error.</li>
<li> If the execution has not yet completed,
  the done field is `false` and
  the neither the `response` nor `error` fields are present.</li>
<li> If the `run` call itself fails (for example, because of a
  malformed request or an authorization error), the method returns an HTTP
  response code in the 4XX range with a different format for the response
  body. Client libraries automatically convert a 4XX response into an
  exception class.</li>
</ul>
**/


var Operation_ = function(operationObj){ this.operationObj_ = operationObj }


/**
*This field indicates whether the script execution has completed. A completed execution has a populated `response` field containing the ExecutionResponse from function that was executed.
**/
Operation_.prototype.Done = function(){return this.operationObj_.done}


/**
*If the script function returns successfully, this field contains an ExecutionResponse object with the function's return value.
**/
Operation_.prototype.Response = function(){var newObj = {};Object.keys(this.operationObj_.response).map(function(key){Object.defineProperty(newObj, key , {value: function(){return new undefined_(this.operationObj_.response)}})}); return newObj;};
/**
*If a `run` call succeeds but the script function (or Apps Script itself) throws an exception, this field contains a Status object. The `Status` object's `details` field contains an array with a single ExecutionError object that provides information about the nature of the error.
**/
Operation_.prototype.Error = function(){return new Status_( this.operationObj_.error)}
/**
*If a `run` call succeeds but the script function (or Apps Script itself) throws an exception, the response body's error field contains this `Status` object.
**/


var Status_ = function(statusObj){ this.statusObj_ = statusObj }


/**
*A developer-facing error message, which is in English. Any user-facing error message is localized and sent in the [google.rpc.Status.details](google.rpc.Status.details) field, or localized by the client.
**/
Status_.prototype.Message = function(){return this.statusObj_.message}


/**
*An array that contains a single ExecutionError object that provides information about the nature of the error.
**/
Status_.prototype.Details = function(){return new IteratorService_(this.statusObj_.details.map(function(element){return new undefined_(element)}))}


/**
*The status code. For this API, this value either: <ul> <li> 10, indicating a `SCRIPT_TIMEOUT` error,</li> <li> 3, indicating an `INVALID_ARGUMENT` error, or</li> <li> 1, indicating a `CANCELLED` execution.</li> </ul>
**/
Status_.prototype.Code = function(){return this.statusObj_.code}


/**
*Metrics value that holds number of executions counted.
**/


var MetricsValue_ = function(metricsValueObj){ this.metricsValueObj_ = metricsValueObj }


/**
*Required field indicating the end time of the interval.
**/
MetricsValue_.prototype.EndTime = function(){return this.metricsValueObj_.endTime}


/**
*Required field indicating the start time of the interval.
**/
MetricsValue_.prototype.StartTime = function(){return this.metricsValueObj_.startTime}


/**
*Indicates the number of executions counted.
**/
MetricsValue_.prototype.Value = function(){return this.metricsValueObj_.value}


/**
*Represents a function in a script project.
**/


var GoogleAppsScriptTypeFunction_ = function(googleAppsScriptTypeFunctionObj){ this.googleAppsScriptTypeFunctionObj_ = googleAppsScriptTypeFunctionObj }


/**
*The function name in the script project.
**/
GoogleAppsScriptTypeFunction_.prototype.Name = function(){return this.googleAppsScriptTypeFunctionObj_.name}


