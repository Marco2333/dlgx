<?php 
 function think_send_mail($to, $name, $subject = '', $body = '', $attachment = null){
     $config = C('THINK_EMAIL');
     vendor('PHPMailer.class#phpmailer'); //从PHPMailer目录导class.phpmailer.php类文件
     $mail             = new PHPMailer(); //PHPMailer对象
     $mail->CharSet    = 'UTF-8'; //设定邮件编码，默认ISO-8859-1，如果发中文此项必须设置，否则乱码
     $mail->IsSMTP();  // 设定使用SMTP服务
     $mail->SMTPDebug  = 0;                     // 关闭SMTP调试功能
                                                // 1 = errors and messages
                                                // 2 = messages only
     $mail->SMTPAuth   = true;                  // 启用 SMTP 验证功能
     $mail->SMTPSecure = 'ssl';                 // 使用安全协议
     $mail->Host       = $config['SMTP_HOST'];  // SMTP 服务器
     $mail->Port       = $config['SMTP_PORT'];  // SMTP服务器的端口号
     $mail->Username   = $config['SMTP_USER'];  // SMTP服务器用户名
     $mail->Password   = $config['SMTP_PASS'];  // SMTP服务器密码
     $mail->SetFrom($config['FROM_EMAIL'], $config['FROM_NAME']);
     $replyEmail       = $config['REPLY_EMAIL']?$config['REPLY_EMAIL']:$config['FROM_EMAIL'];
     $replyName        = $config['REPLY_NAME']?$config['REPLY_NAME']:$config['FROM_NAME'];
     $mail->AddReplyTo($replyEmail, $replyName);
     $mail->Subject    = $subject;
     $mail->MsgHTML($body);
     $mail->AddAddress($to, $name);
     if(is_array($attachment)){ // 添加附件
         foreach ($attachment as $file){
             is_file($file) && $mail->AddAttachment($file);
         }
     }
     return $mail->Send() ? true : $mail->ErrorInfo;
  }

function pageProduct($count,$row){
    $page = new \Think\Page($count,$row);

    $page->setConfig('header','条记录');
    $page->setConfig('prev','<');
    $page->setConfig('next','>');
    $page->setConfig('first','<<');
    $page->setConfig('last','>>');
    $page->setConfig('theme','%FIRST% %UP_PAGE% %LINK_PAGE% %DOWN_PAGE% %END% <span>共 %TOTAL_ROW% %HEADER%</span>');
    $page->rollPage=6; //控制页码数量
        
    return $page;
}

/**
 * post
 * @param type $url
 * @param type $data
 * @return type
 */
function post($url,$data){
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_HEADER, false);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_NOBODY, true);
    curl_setopt($curl, CURLOPT_POST, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
    
    $return_str = curl_exec($curl);
    if($return_str === false){
        $return_str = curl_error($curl);
    }
    curl_close($curl);
    return $return_str;
}

function get($url){
    $ch=curl_init();
    curl_setopt($ch,CURLOPT_URL,$url);
    curl_setopt($ch,CURLOPT_POST,false);
    curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
    $strRes=curl_exec($ch);
    curl_close($ch);
    return $strRes;
    
}
