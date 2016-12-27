---
title: 使用V2EX的CDN解决Gravatar加载慢问题
layout: post
permalink: /159
categories:
  - WordPress
---
在主题的function.php中，在最后面添加：

<pre class="brush: php; title: ; notranslate" title="">//replace Gravatar from V2EX
function my_get_avatar( $avatar ) {
    $avatar = preg_replace("/https:\/\/(secure|\d).gravatar.com\/avatar\//","https://cdn.v2ex.com/gravatar/",$avatar);
    return $avatar;
}
add_filter('get_avatar', 'my_get_avatar');
</pre>