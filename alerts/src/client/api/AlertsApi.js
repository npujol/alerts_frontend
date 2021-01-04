/*
 * My ebay alerts API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.17
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from "../ApiClient";
import {Alert} from '../model/Alert';

/**
* Alerts service.
* @module api/AlertsApi
* @version v1
*/
export class AlertsApi {

    /**
    * Constructs a new AlertsApi. 
    * @alias module:api/AlertsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create an alert
     * @param {module:model/Alert} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Alert} and HTTP response
     */
    alertsCreateWithHttpInfo(data) {
      let postBody = data;

      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling alertsCreate");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Alert;

      return this.apiClient.callApi(
        '/alerts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create an alert
     * @param {module:model/Alert} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Alert}
     */
    alertsCreate(data) {
      return this.alertsCreateWithHttpInfo(data)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete an alert
     * @param {String} uuid A UUID string identifying this alert.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    alertsDeleteWithHttpInfo(uuid) {
      let postBody = null;

      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling alertsDelete");
      }


      let pathParams = {
        'uuid': uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/alerts/{uuid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete an alert
     * @param {String} uuid A UUID string identifying this alert.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    alertsDelete(uuid) {
      return this.alertsDeleteWithHttpInfo(uuid)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Send an email to delete an alert
     * @param {String} uuid A UUID string identifying this alert.
     * @param {module:model/Alert} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Alert} and HTTP response
     */
    alertsEmailToDeleteWithHttpInfo(uuid, data) {
      let postBody = data;

      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling alertsEmailToDelete");
      }

      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling alertsEmailToDelete");
      }


      let pathParams = {
        'uuid': uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Alert;

      return this.apiClient.callApi(
        '/alerts/{uuid}/email_to_delete', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Send an email to delete an alert
     * @param {String} uuid A UUID string identifying this alert.
     * @param {module:model/Alert} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Alert}
     */
    alertsEmailToDelete(uuid, data) {
      return this.alertsEmailToDeleteWithHttpInfo(uuid, data)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * uuid -- The uuid for an account
     * @param {String} uuid uuid from the account
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Alert>} and HTTP response
     */
    alertsListWithHttpInfo(uuid) {
      let postBody = null;

      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling alertsList");
      }


      let pathParams = {
      };
      let queryParams = {
        'uuid': uuid
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [Alert];

      return this.apiClient.callApi(
        '/alerts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * uuid -- The uuid for an account
     * @param {String} uuid uuid from the account
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Alert>}
     */
    alertsList(uuid) {
      return this.alertsListWithHttpInfo(uuid)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Patch an alert
     * @param {String} uuid A UUID string identifying this alert.
     * @param {module:model/Alert} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Alert} and HTTP response
     */
    alertsPartialUpdateWithHttpInfo(uuid, data) {
      let postBody = data;

      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling alertsPartialUpdate");
      }

      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling alertsPartialUpdate");
      }


      let pathParams = {
        'uuid': uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Alert;

      return this.apiClient.callApi(
        '/alerts/{uuid}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Patch an alert
     * @param {String} uuid A UUID string identifying this alert.
     * @param {module:model/Alert} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Alert}
     */
    alertsPartialUpdate(uuid, data) {
      return this.alertsPartialUpdateWithHttpInfo(uuid, data)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve an alert
     * @param {String} uuid A UUID string identifying this alert.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Alert} and HTTP response
     */
    alertsReadWithHttpInfo(uuid) {
      let postBody = null;

      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling alertsRead");
      }


      let pathParams = {
        'uuid': uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Alert;

      return this.apiClient.callApi(
        '/alerts/{uuid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Retrieve an alert
     * @param {String} uuid A UUID string identifying this alert.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Alert}
     */
    alertsRead(uuid) {
      return this.alertsReadWithHttpInfo(uuid)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update an alert
     * @param {String} uuid A UUID string identifying this alert.
     * @param {module:model/Alert} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Alert} and HTTP response
     */
    alertsUpdateWithHttpInfo(uuid, data) {
      let postBody = data;

      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling alertsUpdate");
      }

      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling alertsUpdate");
      }


      let pathParams = {
        'uuid': uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Alert;

      return this.apiClient.callApi(
        '/alerts/{uuid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update an alert
     * @param {String} uuid A UUID string identifying this alert.
     * @param {module:model/Alert} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Alert}
     */
    alertsUpdate(uuid, data) {
      return this.alertsUpdateWithHttpInfo(uuid, data)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
