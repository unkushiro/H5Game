'use strict';

module.exports = {
  app: 'H5Game', // 项目英文名
  appId: '8616c5a0-d33b-11e7-a6d0-e9363ca6dd0a', // 项目ID
  description: '存放H5小游戏公开项目',
  platform: 'mobile', // 平台 pc or mobile
  common: 'gb', // 公共模块名称
  moduleList: ['gb', 'jumping'],
  tmpId: '571499180d135d447a523ce2', // 选用模板
  shtml: {  //页面片配置
    use: false, //是否使用
    needCombo: true // 页面片中链接是否合并
  },
  deploy: { //项目部署配置，可自己增加另外的需要进行ftp上传的机器
    local: { // 本地预览配置
      fdPath: '/'
    },
    jdcfinder: { // jdcfinder
      mode: 'http',
      host: 'jdcfinder',
      user: 'liweiliang',
      pass: 'athena:WGvFEjshlGzRFB2UPzQZdzKmu',
      fdPath: '/demo/ting/',
      domain: 'jdc.jd.com',
      remotePath: '/demo/ting/H5Game', // 上传代码的目录
      cssi: '/sinclude/cssi/demo/ting/H5Game', // 上传页面片的目录
      assestPrefix: '/demo/ting/H5Game', // 发布完静态资源后，静态资源路径
      shtmlPrefix: '/sinclude/cssi/demo/ting/H5Game' // 发布完页面片后，静态资源路径
    }
  }
};
