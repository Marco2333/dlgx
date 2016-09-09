<?php
return array(
    'DB_TYPE' =>  'mysql',
    'DB_PORT'  =>  '3306',
    'DB_HOST' =>  '127.0.0.1',
    'DB_NAME' =>  '',
    'DB_USER' =>  '',
    'DB_PWD'  =>  '',
    'LANG_SWITCH_ON' => true,   // 开启语言包功能
    //'SHOW_PAGE_TRACE' => true,  //开启调试模式
    'URL_CASE_INSENSITIVE' =>true,   //关闭大小写敏感
    'LOG_RECORD' => true, // 开启日志记录
    'LOG_LEVEL'  =>'EMERG,ALERT,CRIT,ERR', // 只记录EMERG ALERT CRIT ERR 错误
    'DATA_CACHE_TIME'=>'600',              //数据缓存时间设置为60s
    'DB_SQL_BUILD_CACHE' => true,         //添加sql解析缓存
    'DB_SQL_BUILD_QUEUE' => 'xcache',     //缓存方式
    'DB_SQL_BUILD_LENGTH' => 30, // SQL缓存的队列长度
    'view_filter' => array('Behavior\TokenBuild'),    //开启表单令牌功能，防止表单的重复提交
    // 'URL_HTML_SUFFIX' => ".php",
    //邮件配置
     'THINK_EMAIL' => array(
        'SMTP_HOST'   => 'smtp.126.com', //SMTP服务器
        'SMTP_PORT'   => '465', //SMTP服务器端口
        'SMTP_USER'   => 'mrwhoareyou@126.com', //SMTP服务器用户名
        'SMTP_PASS'   => 'hohutntxbifwdycl', //SMTP服务器密码
        'FROM_EMAIL'  => 'mrwhoareyou@126.com', //发件人EMAIL
        'FROM_NAME'   => 'ADA', //发件人名称
        'REPLY_EMAIL' => '', //回复EMAIL（留空则为发件人EMAIL）
        'REPLY_NAME'  => '', //回复名称（留空则为发件人名称）
     ),

    'TMPL_PARSE_STRING' => array(
        '__STATIC__' => __ROOT__ . '/Static',
        '__UPLOADS__' => __ROOT__ . '/Uploads',
        '__PLUGINS__' => __ROOT__ . '/Public/plugins',
    ) 
);
