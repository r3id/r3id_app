---
layout:			  default
title:  		  How to&#58; Add Disqus to your Jekyll site
type:			    post
navigation: 	false

date:   		  2016-11-3
excerpt: 		  Disqus is a awesome commenting system which you can easily add to your Jekyll site
categories:		html jekyll howto development
gradient: 		1
image: 			  articles/add-disqus/add-disqus.png
details:		  false

author: 		  Alan Reid
bio: 			    I'm a freelance designer/developer who enjoys creating beautiful and standard compliant solutions for my clients from all around the world.
---

You will need to modify the file `_layouts/default.html` and include the line:

{% raw %}
```jekyll
{% include comments.html %}
```
{% endraw %}

You will then need to create the file `_includes/comments.html` which we will add the following code snippet to and is provided by Disqus:

{% raw %}
```jekyll
{% if page.comments %}
  <!-- Add Disqus comments. -->
    <div id="disqus_thread"></div>
    <script type="text/javascript">
    /* CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE */
      // required: replace example with your forum shortname
      var disqus_shortname = '<USERNAME>';

      var disqus_identifier = "{{ site.disqusid }}{{ page.url | replace:'index.html','' }}";
      /* * * DON'T EDIT BELOW THIS LINE * * */
      (function() {
        var dsq = document.createElement('script');
         dsq.type = 'text/javascript'; dsq.async = true;
         dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';

         (document.getElementsByTagName('head')[0] ||
          document.getElementsByTagName('body')[0])
                  .appendChild(dsq);
       })();
    </script>
    <noscript>
      Please enable JavaScript to view the
      <a href="http://disqus.com/?ref_noscript">
        comments powered by Disqus
      </a>
    </noscript>
    <a href="http://disqus.com" class="dsq-brlink">
      comments powered by <span class="logo-disqus">Disqus</span>
    </a>
{% endif %}
```
{% endraw %}

By setting up the code this way allows you can enable commenting on a page-by-page basis. All that is needed to enable comments is to set `comments: True` in the YAML header of the post. Nice and simple :-)
