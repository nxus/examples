/*
* @Author: mike
* @Date:   2016-05-20 09:16:22
* @Last Modified 2016-05-20eich
* @Last Modified time: 2016-05-20 09:21:06
*/

'use strict';

/**
 * To add an icon in the left-hand Nav menu, specify an `iconClass` option. The value of `iconClass` will be used as is for the menu
 * icon.
 */

export default (app) => {
  app.get('admin-ui').adminPage('myPage', '/page', {iconClass: 'fa fa-star'}, "my-template")
}