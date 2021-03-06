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

import {ApiClient} from '../ApiClient';

/**
 * The Account model module.
 * @module model/Account
 * @version v1
 */
export class Account {
  /**
   * Constructs a new <code>Account</code>.
   * @alias module:model/Account
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Account</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Account} obj Optional instance to populate.
   * @return {module:model/Account} The populated <code>Account</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Account();
      if (data.hasOwnProperty('uuid'))
        obj.uuid = ApiClient.convertToType(data['uuid'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('alerts'))
        obj.alerts = ApiClient.convertToType(data['alerts'], ['String']);
    }
    return obj;
  }
}

/**
 * @member {String} uuid
 */
Account.prototype.uuid = undefined;

/**
 * @member {String} email
 */
Account.prototype.email = undefined;

/**
 * @member {Array.<String>} alerts
 */
Account.prototype.alerts = undefined;


