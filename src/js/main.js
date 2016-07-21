import angular from 'angular';
import 'angular-ui-router';

console.log (angular);

// controller
import { MainController } from './controllers/main.controller';
import { UploadController} from "./controllers/upload.controller"

// config
import { config } from "./config";

import { serverLink } from './server.link';

angular
  .module('app', ['ui.router'])
  .config(config)
  .constant('SERVER', serverLink)
  .controller("MainController" , MainController)
  .controller('UploadController', UploadController);