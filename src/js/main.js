import angular from 'angular';
import 'angular-ui-router';

console.log (angular);

// controller
import { DownLoadPicController } from './controllers/downloadPic.controller';
import { UploadController} from "./controllers/upload.controller"

// config
import { config } from "./config";

import { serverLink } from './server.link';

angular
  .module('app', ['ui.router'])
  .config(config)
  .constant('SERVER', serverLink)
  .controller("DownLoadPicController" , DownLoadPicController)
  .controller('UploadController', UploadController);