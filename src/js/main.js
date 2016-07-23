import angular from 'angular';
import 'angular-ui-router';

console.log (angular);

// controller
import { DownloadPicController } from './controllers/downloadPic.controller';
import { UploadController} from "./controllers/upload.controller";
import { LikesController } from "./controllers/likes.controller";
import { SingleImgController } from "./controllers/single.img.controller"
// config
import { config } from "./config";

import { serverLink } from './server.link';

angular
  .module('app', ['ui.router'])
  .config(config)
  .constant('SERVER', serverLink)
  .controller("DownloadPicController" , DownloadPicController)
  .controller('UploadController', UploadController)
  .controller("SingleImgController", SingleImgController);