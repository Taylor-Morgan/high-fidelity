Ember.TEMPLATES.application=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f,g;e={},f={},g={hash:{},contexts:[a],types:["ID"],hashContexts:f,hashTypes:e,data:b},b.buffer.push(p((d=c.t||a.t,d?d.call(a,"tabs.myPodcasts",g):o.call(a,"t","tabs.myPodcasts",g))))}function g(a,b){var d,e,f,g;e={},f={},g={hash:{},contexts:[a],types:["ID"],hashContexts:f,hashTypes:e,data:b},b.buffer.push(p((d=c.t||a.t,d?d.call(a,"tabs.popular",g):o.call(a,"t","tabs.popular",g))))}function h(a,b){var d,e,f,g;e={},f={},g={hash:{},contexts:[a],types:["ID"],hashContexts:f,hashTypes:e,data:b},b.buffer.push(p((d=c.t||a.t,d?d.call(a,"tabs.search",g):o.call(a,"t","tabs.search",g))))}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var i,j,k,l,m,n="",o=c.helperMissing,p=this.escapeExpression,q=this;return e.buffer.push("<x-layout>\n    <header>\n        <x-appbar>\n            <h1>"),k={},l={},m={hash:{},contexts:[b],types:["ID"],hashContexts:l,hashTypes:k,data:e},e.buffer.push(p((i=c.t||b.t,i?i.call(b,"app.title",m):o.call(b,"t","app.title",m)))),e.buffer.push("</h1>\n            "),k={},l={},m={hash:{},contexts:[b],types:["ID"],hashContexts:l,hashTypes:k,data:e},e.buffer.push(p((i=c.outlet||b.outlet,i?i.call(b,"headerAction",m):o.call(b,"outlet","headerAction",m)))),e.buffer.push("\n        </x-appbar>\n    </header>\n    <section>\n        "),k={},l={},e.buffer.push(p(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:l,hashTypes:k,data:e}))),e.buffer.push('\n    </section>\n    <footer>\n        <!-- We interact with this programatically for various reasons. -->\n        <audio id="audio-player" preload="auto"></audio>\n\n        '),k={},l={},m={hash:{},contexts:[b],types:["STRING"],hashContexts:l,hashTypes:k,data:e},e.buffer.push(p((i=c.render||b.render,i?i.call(b,"player",m):o.call(b,"render","player",m)))),e.buffer.push("\n        \n        <x-tabbar>\n            <x-tabbar-tab>"),k={},l={},m={hash:{},inverse:q.noop,fn:q.program(1,f,e),contexts:[b],types:["STRING"],hashContexts:l,hashTypes:k,data:e},i=c["link-to"]||b["link-to"],j=i?i.call(b,"podcasts",m):o.call(b,"link-to","podcasts",m),(j||0===j)&&e.buffer.push(j),e.buffer.push("</x-tabbar-tab>\n            <x-tabbar-tab>"),k={},l={},m={hash:{},inverse:q.noop,fn:q.program(3,g,e),contexts:[b],types:["STRING"],hashContexts:l,hashTypes:k,data:e},i=c["link-to"]||b["link-to"],j=i?i.call(b,"index",m):o.call(b,"link-to","index",m),(j||0===j)&&e.buffer.push(j),e.buffer.push("</x-tabbar-tab>\n            <x-tabbar-tab>"),k={},l={},m={hash:{},inverse:q.noop,fn:q.program(5,h,e),contexts:[b],types:["STRING"],hashContexts:l,hashTypes:k,data:e},i=c["link-to"]||b["link-to"],j=i?i.call(b,"index",m):o.call(b,"link-to","index",m),(j||0===j)&&e.buffer.push(j),e.buffer.push("</x-tabbar-tab>\n        </x-tabbar>\n    </footer>\n</x-layout>\n"),n}),Ember.TEMPLATES.episode=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f="";return b.buffer.push("\n        <tr>\n            <td>\n                <strong>"),d={},e={},b.buffer.push(n(c._triageMustache.call(a,"key",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push(":</strong>\n            </td>\n            <td>\n                "),d={},e={},b.buffer.push(n(c._triageMustache.call(a,"value",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push("\n            </td>\n        </tr>\n    "),f}function g(a,b){b.buffer.push("Change")}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var h,i,j,k,l,m="",n=this.escapeExpression,o=this,p=c.helperMissing;return e.buffer.push("<h1>Episode</h1>\n\n<table>\n    "),j={},k={},h=c.each.call(b,"model.attributes",{hash:{},inverse:o.noop,fn:o.program(1,f,e),contexts:[b],types:["ID"],hashContexts:k,hashTypes:j,data:e}),(h||0===h)&&e.buffer.push(h),e.buffer.push("\n</table>\n\n"),j={},k={},l={hash:{},inverse:o.noop,fn:o.program(3,g,e),contexts:[b,b],types:["STRING","ID"],hashContexts:k,hashTypes:j,data:e},h=c["link-to"]||b["link-to"],i=h?h.call(b,"episode.edit","model",l):p.call(b,"link-to","episode.edit","model",l),(i||0===i)&&e.buffer.push(i),e.buffer.push("\n\n"),j={},k={},e.buffer.push(n(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:k,hashTypes:j,data:e}))),e.buffer.push("\n"),m}),Ember.TEMPLATES["episode/edit"]=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f,g,h="";return b.buffer.push("\n        <tr>\n            <td>\n                <strong>"),e={},f={},b.buffer.push(k(c._triageMustache.call(a,"key",{hash:{},contexts:[a],types:["ID"],hashContexts:f,hashTypes:e,data:b}))),b.buffer.push(":</strong>\n            </td>\n            <td>\n                "),f={value:a},e={value:"ID"},g={hash:{value:"value"},contexts:[],types:[],hashContexts:f,hashTypes:e,data:b},b.buffer.push(k((d=c.input||a.input,d?d.call(a,g):l.call(a,"input",g)))),b.buffer.push("\n            </td>\n        </tr>\n    "),h}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var g,h,i,j="",k=this.escapeExpression,l=c.helperMissing,m=this;return e.buffer.push("<h1>Episode</h1>\n\n<table>\n    "),h={},i={},g=c.each.call(b,"buffer",{hash:{},inverse:m.noop,fn:m.program(1,f,e),contexts:[b],types:["ID"],hashContexts:i,hashTypes:h,data:e}),(g||0===g)&&e.buffer.push(g),e.buffer.push("\n</table>\n\n<button "),h={},i={},e.buffer.push(k(c.action.call(b,"save",{hash:{},contexts:[b],types:["STRING"],hashContexts:i,hashTypes:h,data:e}))),e.buffer.push(">Update</button>\n\n"),h={},i={},e.buffer.push(k(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:i,hashTypes:h,data:e}))),e.buffer.push("\n"),j}),Ember.TEMPLATES.episodes=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f,h,i,j="";return b.buffer.push("\n    <div "),f={},h={},b.buffer.push(m(c.action.call(a,"setEpisode","",{hash:{},contexts:[a,a],types:["ID","ID"],hashContexts:h,hashTypes:f,data:b}))),b.buffer.push(" "),h={"class":a},f={"class":"STRING"},i={hash:{"class":":episode isNew"},contexts:[],types:[],hashContexts:h,hashTypes:f,data:b},b.buffer.push(m((d=c["bind-attr"]||a["bind-attr"],d?d.call(a,i):n.call(a,"bind-attr",i)))),b.buffer.push('>\n      <div class="name">\n        '),f={},h={},e=c["if"].call(a,"isNew",{hash:{},inverse:o.noop,fn:o.program(2,g,b),contexts:[a],types:["ID"],hashContexts:h,hashTypes:f,data:b}),(e||0===e)&&b.buffer.push(e),b.buffer.push("\n        "),f={},h={},b.buffer.push(m(c._triageMustache.call(a,"name",{hash:{},contexts:[a],types:["ID"],hashContexts:h,hashTypes:f,data:b}))),b.buffer.push("\n      </div>\n\n      "),b.buffer.push("\n    </div>\n  "),j}function g(a,b){b.buffer.push("\n          <strong>New:</strong>\n        ")}function h(a,b){b.buffer.push("\n    <p>Loading episodes...</p>\n  ")}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var i,j,k,l="",m=this.escapeExpression,n=c.helperMissing,o=this;return e.buffer.push('<div class="episodes">\n  '),j={content:b},k={content:"ID"},i=c.each.call(b,{hash:{content:"controller"},inverse:o.program(4,h,e),fn:o.program(1,f,e),contexts:[],types:[],hashContexts:j,hashTypes:k,data:e}),(i||0===i)&&e.buffer.push(i),e.buffer.push("\n</div>\n"),l}),Ember.TEMPLATES["header-actions/podcast"]=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f,g,h="",i=this.escapeExpression;return e.buffer.push("<h1>"),f={},g={},e.buffer.push(i(c._triageMustache.call(b,"title",{hash:{},contexts:[b],types:["ID"],hashContexts:g,hashTypes:f,data:e}))),e.buffer.push('</h1>\n<button class="update" '),f={},g={},e.buffer.push(i(c.action.call(b,"update",{hash:{},contexts:[b],types:["ID"],hashContexts:g,hashTypes:f,data:e}))),e.buffer.push('><i class="fa fa-refresh"></i></button>\n'),h}),Ember.TEMPLATES["header-actions/podcasts"]=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){b.buffer.push('<i class="fa fa-plus"></i>')}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var g,h,i,j,k,l="",m=this,n=c.helperMissing;return i={},j={},k={hash:{},inverse:m.noop,fn:m.program(1,f,e),contexts:[b],types:["STRING"],hashContexts:j,hashTypes:i,data:e},g=c["link-to"]||b["link-to"],h=g?g.call(b,"podcast.new",k):n.call(b,"link-to","podcast.new",k),(h||0===h)&&e.buffer.push(h),e.buffer.push("\n"),l}),Ember.TEMPLATES.player=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f,i,j,k="";return b.buffer.push('\n    <div id="time-info">\n      <span id="time-elapsed">'),f={},i={},b.buffer.push(o(c._triageMustache.call(a,"timeElapsed",{hash:{},contexts:[a],types:["ID"],hashContexts:i,hashTypes:f,data:b}))),b.buffer.push('</span>\n      <progress id="audio-progress" '),i={max:a},f={max:"ID"},j={hash:{max:"progressBar.max"},contexts:[],types:[],hashContexts:i,hashTypes:f,data:b},b.buffer.push(o((d=c["bind-attr"]||a["bind-attr"],d?d.call(a,j):p.call(a,"bind-attr",j)))),b.buffer.push("\n                                    "),i={value:a},f={value:"ID"},j={hash:{value:"progressBar.value"},contexts:[],types:[],hashContexts:i,hashTypes:f,data:b},b.buffer.push(o((d=c["bind-attr"]||a["bind-attr"],d?d.call(a,j):p.call(a,"bind-attr",j)))),b.buffer.push('>\n      </progress>\n      <span id="time-remaining">'),f={},i={},b.buffer.push(o(c._triageMustache.call(a,"timeTotal",{hash:{},contexts:[a],types:["ID"],hashContexts:i,hashTypes:f,data:b}))),b.buffer.push("</span>\n    </div>\n    "),f={},i={},e=c["if"].call(a,"isPlaying",{hash:{},inverse:q.program(4,h,b),fn:q.program(2,g,b),contexts:[a],types:["ID"],hashContexts:i,hashTypes:f,data:b}),(e||0===e)&&b.buffer.push(e),b.buffer.push("\n    <span>"),f={},i={},b.buffer.push(o(c._triageMustache.call(a,"name",{hash:{},contexts:[a],types:["ID"],hashContexts:i,hashTypes:f,data:b}))),b.buffer.push("</span>\n  "),k}function g(a,b){var d,e,f="";return b.buffer.push("\n      <a "),d={},e={},b.buffer.push(o(c.action.call(a,"pause","model",{hash:{},contexts:[a,a],types:["ID","ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push(' class="play-pause">\n        <i class="fa fa-pause"></i>\n      </a>\n    '),f}function h(a,b){var d,e,f="";return b.buffer.push("\n      <a "),d={},e={},b.buffer.push(o(c.action.call(a,"play","model",{hash:{},contexts:[a,a],types:["ID","ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push(' class="play-pause">\n        <i class="fa fa-play"></i>\n      </a>\n    '),f}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var i,j,k,l,m,n="",o=this.escapeExpression,p=c.helperMissing,q=this;return e.buffer.push('<div id="player" '),k={"class":b},l={"class":"STRING"},m={hash:{"class":"isPopulated"},contexts:[],types:[],hashContexts:k,hashTypes:l,data:e},e.buffer.push(o((i=c["bind-attr"]||b["bind-attr"],i?i.call(b,m):p.call(b,"bind-attr",m)))),e.buffer.push(">\n  "),l={},k={},j=c["if"].call(b,"audio",{hash:{},inverse:q.noop,fn:q.program(1,f,e),contexts:[b],types:["ID"],hashContexts:k,hashTypes:l,data:e}),(j||0===j)&&e.buffer.push(j),e.buffer.push("\n</div>\n"),n}),Ember.TEMPLATES.podcast=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f,g,h,i,j="",k=c.helperMissing,l=this.escapeExpression;return e.buffer.push('<div class="podcast">\n    <img class="cover-image" '),g={src:b},h={src:"ID"},i={hash:{src:"coverImageURL"},contexts:[],types:[],hashContexts:g,hashTypes:h,data:e},e.buffer.push(l((f=c["bind-attr"]||b["bind-attr"],f?f.call(b,i):k.call(b,"bind-attr",i)))),e.buffer.push("\n                             "),g={alt:b},h={alt:"ID"},i={hash:{alt:"title"},contexts:[],types:[],hashContexts:g,hashTypes:h,data:e},e.buffer.push(l((f=c["bind-attr"]||b["bind-attr"],f?f.call(b,i):k.call(b,"bind-attr",i)))),e.buffer.push(">\n\n    <p>"),h={},g={},e.buffer.push(l(c._triageMustache.call(b,"description",{hash:{},contexts:[b],types:["ID"],hashContexts:g,hashTypes:h,data:e}))),e.buffer.push("</p>\n\n    <button "),h={},g={},e.buffer.push(l(c.action.call(b,"delete",{hash:{},contexts:[b],types:["ID"],hashContexts:g,hashTypes:h,data:e}))),e.buffer.push(">Unsubscribe</button>\n    "),e.buffer.push("\n</div>\n\n<hr/>\n\n"),h={},g={},i={hash:{},contexts:[b,b],types:["ID","ID"],hashContexts:g,hashTypes:h,data:e},e.buffer.push(l((f=c.render||b.render,f?f.call(b,"episodes","episodes",i):k.call(b,"render","episodes","episodes",i)))),e.buffer.push("\n\n"),h={},g={},e.buffer.push(l(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:g,hashTypes:h,data:e}))),e.buffer.push("\n"),j}),Ember.TEMPLATES["podcast/new"]=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f,g,h,i,j="",k=c.helperMissing,l=this.escapeExpression;return e.buffer.push("<h2>Add Podcast RSS</h2>\n\n"),g={type:b,value:b,placeholder:b},h={type:"STRING",value:"ID",placeholder:"STRING"},i={hash:{type:"url",value:"rssURL",placeholder:"Podcast URL"},contexts:[],types:[],hashContexts:g,hashTypes:h,data:e},e.buffer.push(l((f=c.input||b.input,f?f.call(b,i):k.call(b,"input",i)))),e.buffer.push("\n<button "),h={},g={},e.buffer.push(l(c.action.call(b,"create",{hash:{},contexts:[b],types:["ID"],hashContexts:g,hashTypes:h,data:e}))),e.buffer.push('>Add</button>\n\n<h2>New to Podcasts?</h2>\n<h3>Check out our recommendations:</h3>\n\n<img alt="The Cracked Podcast" class="cover cover-image"\n     '),h={},g={},e.buffer.push(l(c.action.call(b,"create","http://rss.earwolf.com/the-cracked-podcast",{hash:{},contexts:[b,b],types:["ID","STRING"],hashContexts:g,hashTypes:h,data:e}))),e.buffer.push('\n     src="http://cdn.earwolf.com/wp-content/uploads/2013/08/EAR_CrackedPodcast_1600x1600_Cover_Final.jpg">\n'),j}),Ember.TEMPLATES.podcasts=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f,h="";return b.buffer.push('\n  <ul class="my-podcasts">\n    '),e={content:a,tagName:a,className:a},f={content:"ID",tagName:"ID",className:"STRING"},d=c.each.call(a,{hash:{content:"controller",tagName:"ul",className:"my-podcasts"},inverse:s.noop,fn:s.program(2,g,b),contexts:[],types:[],hashContexts:e,hashTypes:f,data:b}),(d||0===d)&&b.buffer.push(d),b.buffer.push("\n  </ul>\n"),h}function g(a,b){var d,e,f,g,i,j="";return b.buffer.push("\n      <li>\n        "),f={"class":a},g={"class":"STRING"},i={hash:{"class":"cover"},inverse:s.noop,fn:s.program(3,h,b),contexts:[a,a],types:["STRING","ID"],hashContexts:f,hashTypes:g,data:b},d=c["link-to"]||a["link-to"],e=d?d.call(a,"podcast","",i):q.call(a,"link-to","podcast","",i),(e||0===e)&&b.buffer.push(e),b.buffer.push("\n      </li>\n    "),j}function h(a,b){var d,e,f,g="";return b.buffer.push("\n          "),e={},f={},d=c["if"].call(a,"coverImage",{hash:{},inverse:s.program(6,j,b),fn:s.program(4,i,b),contexts:[a],types:["ID"],hashContexts:f,hashTypes:e,data:b}),(d||0===d)&&b.buffer.push(d),b.buffer.push("\n        "),g}function i(a,b){var d,e,f,g,h="";return b.buffer.push("\n            <img "),e={src:a},f={src:"ID"},g={hash:{src:"coverImage"},contexts:[],types:[],hashContexts:e,hashTypes:f,data:b},b.buffer.push(r((d=c["bind-attr"]||a["bind-attr"],d?d.call(a,g):q.call(a,"bind-attr",g)))),b.buffer.push(" "),e={alt:a},f={alt:"ID"},g={hash:{alt:"title"},contexts:[],types:[],hashContexts:e,hashTypes:f,data:b},b.buffer.push(r((d=c["bind-attr"]||a["bind-attr"],d?d.call(a,g):q.call(a,"bind-attr",g)))),b.buffer.push(">\n          "),h}function j(a,b){var d,e,f="";return b.buffer.push('\n            <span class="no-cover">'),d={},e={},b.buffer.push(r(c._triageMustache.call(a,"title",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push("</span>\n          "),f}function k(a,b){var d,e,f,g,h,i="";return b.buffer.push('\n  <div class="center">\n    <h2>No podcasts found.</h2>\n    <p>\n      Want to '),f={},g={},h={hash:{},inverse:s.noop,fn:s.program(9,l,b),contexts:[a],types:["STRING"],hashContexts:g,hashTypes:f,data:b},d=c["link-to"]||a["link-to"],e=d?d.call(a,"podcast.new",h):q.call(a,"link-to","podcast.new",h),(e||0===e)&&b.buffer.push(e),b.buffer.push("\n    </p>\n  </div>\n"),i}function l(a,b){b.buffer.push("add one?")}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var m,n,o,p="",q=c.helperMissing,r=this.escapeExpression,s=this;return n={},o={},m=c["if"].call(b,"controller",{hash:{},inverse:s.program(8,k,e),fn:s.program(1,f,e),contexts:[b],types:["ID"],hashContexts:o,hashTypes:n,data:e}),(m||0===m)&&e.buffer.push(m),e.buffer.push("\n\n"),n={},o={},e.buffer.push(r(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:o,hashTypes:n,data:e}))),e.buffer.push("\n"),p}),Ember.TEMPLATES["components/fxos-actionmenu"]=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f,i="";return b.buffer.push("\n            "),e={},f={},d=c["if"].call(a,"actionButton.disabled",{hash:{},inverse:n.program(4,h,b),fn:n.program(2,g,b),contexts:[a],types:["ID"],hashContexts:f,hashTypes:e,data:b}),(d||0===d)&&b.buffer.push(d),b.buffer.push("\n        "),i}function g(a,b){var d,e,f="";return b.buffer.push("\n                <button disabled "),d={},e={},b.buffer.push(m(c.action.call(a,"fxosActionMenuActions",{hash:{},contexts:[a],types:["STRING"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push(">\n                    "),d={},e={},b.buffer.push(m(c._triageMustache.call(a,"actionButton.buttonName",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push("\n                </button>\n            "),f}function h(a,b){var d,e,f="";return b.buffer.push("\n                <button "),d={},e={},b.buffer.push(m(c.action.call(a,"fxosActionMenuActions",{hash:{},contexts:[a],types:["STRING"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push(">\n                    "),d={},e={},b.buffer.push(m(c._triageMustache.call(a,"actionButton.buttonName",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push("\n                </button>\n            "),f}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var i,j,k,l="",m=this.escapeExpression,n=this;return e.buffer.push('<link href="/bower_components/building-blocks/style/action_menu.css" rel="stylesheet" type="text/css">\n\n<form role="dialog" data-type="action">\n    <header>'),j={},k={},e.buffer.push(m(c._triageMustache.call(b,"title",{hash:{},contexts:[b],types:["ID"],hashContexts:k,hashTypes:j,data:e}))),e.buffer.push("</header>\n    <menu>\n        "),j={},k={},i=c.each.call(b,"actionButton","in","actionMenuButtonMapping",{hash:{},inverse:n.noop,fn:n.program(1,f,e),contexts:[b,b,b],types:["ID","ID","ID"],hashContexts:k,hashTypes:j,data:e}),(i||0===i)&&e.buffer.push(i),e.buffer.push("\n        <button "),j={},k={},e.buffer.push(m(c.action.call(b,"cancelAction",{hash:{},contexts:[b],types:["STRING"],hashContexts:k,hashTypes:j,data:e}))),e.buffer.push(">Cancel</button>\n    </menu>\n</form>"),l}),Ember.TEMPLATES["components/fxos-button"]=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f,g,h="";return b.buffer.push("\n    <button disabled "),e={"class":a},f={"class":"STRING"},g={hash:{"class":"cls"},contexts:[],types:[],hashContexts:e,hashTypes:f,data:b},b.buffer.push(m((d=c["bind-attr"]||a["bind-attr"],d?d.call(a,g):l.call(a,"bind-attr",g)))),b.buffer.push(">"),f={},e={},b.buffer.push(m(c._triageMustache.call(a,"text",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:f,data:b}))),b.buffer.push("</button>\n"),h}function g(a,b){var d,e,f,g,h="";return b.buffer.push("\n    <button "),e={"class":a},f={"class":"STRING"},g={hash:{"class":"cls"},contexts:[],types:[],hashContexts:e,hashTypes:f,data:b},b.buffer.push(m((d=c["bind-attr"]||a["bind-attr"],d?d.call(a,g):l.call(a,"bind-attr",g)))),b.buffer.push(">"),f={},e={},b.buffer.push(m(c._triageMustache.call(a,"text",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:f,data:b}))),b.buffer.push("</button>\n"),h}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var h,i,j,k="",l=c.helperMissing,m=this.escapeExpression,n=this;return e.buffer.push('<link href="/bower_components/building-blocks/style/buttons.css" rel="stylesheet" type="text/css">\n\n'),i={},j={},h=c["if"].call(b,"disabled",{hash:{},inverse:n.program(3,g,e),fn:n.program(1,f,e),contexts:[b],types:["ID"],hashContexts:j,hashTypes:i,data:e}),(h||0===h)&&e.buffer.push(h),e.buffer.push("\n"),k}),function(){window.HighFidelity=Ember.Application.create({LOG_TRANSITIONS:!0})}(),function(){!function(){"use strict";function a(a){if(a.isPackaged=!1,window.navigator.mozApps){var b=window.navigator.mozApps.getSelf();b.addEventListener("success",function(){b.result&&b.result.manifest&&"privileged"===b.result.manifest.type&&(a.isPackaged=!0,a._permissions=b.result.manifest.permissions,jQuery.ajaxSettings.xhr=function(){try{return new XMLHttpRequest({mozSystem:!0})}catch(a){console.error(a)}})})}else console.debug("Open Web Apps not supported")}HighFidelity.MozApps={checkIfPackaged:a}}()}(),function(){!function(){"use strict";function a(a,c){return new Promise(function(d,e){var f=HighFidelity.isPackaged?"":"&callback=?";$.ajax({url:"https://ajax.googleapis.com/ajax/services/feed/load?v=1.0"+f+"&num="+b+"&output=json_xml&q="+encodeURIComponent(a),dataType:"json",success:function(a,b){if(!a||!a.responseData)return console.error("Bad response",a),e(b);var f=new DOMParser,g=a.responseData.xmlString,h=f.parseFromString(g,"text/xml");c&&c(h),d(h)},error:function(a){e(a)}})})}var b=1e3;HighFidelity.RSS={get:a}}()}(),function(){!function(){"use strict";function a(a){if(isNaN(a))return"--:--";var b=parseInt(a/3600,10)%24,c=parseInt(a/60,10)%60,d=parseInt(a%60,10),e=(0!==b?b+":":"")+(10>c?"0"+c:c)+":"+(10>d?"0"+d:d);return e}function b(a){return a||(a=new Date),a instanceof Date!=!0&&(a=new Date(a)),Math.round(a.getTime()/1e3)}HighFidelity.formatTime=a,HighFidelity.timestamp=b}()}(),function(){HighFidelity.MozApps.checkIfPackaged(HighFidelity)}(),function(){Ember.Handlebars.registerHelper("t",function(a,b){var c=b.hash,d=this;return Object.keys(c).forEach(function(a){c[a]=Ember.Handlebars.get(d,c[a],b)}),I18n.t(a,c)})}(),function(){I18n.translations={en:{app:{title:"Podcasts"},episode:{episodes:"Episodes"},tabs:{myPodcasts:"My Podcasts",popular:"Popular",search:"Search"},welcome:"Welcome to Rec Room!"},fr:{app:{title:"Podcasts"},episode:{episodes:"Episodes"},tabs:{myPodcasts:"mon podcasts",popular:"populaire",search:"recherche"},welcome:"Bievenue à Rec Room !"}}}(),function(){HighFidelity.EpisodeController=Ember.ObjectController.extend({})}(),function(){HighFidelity.EpisodesController=Ember.ArrayController.extend({needs:["player"],sortAscending:!1,sortProperties:["datePublished"],actions:{setEpisode:function(a){this.get("controllers.player").send("setEpisode",a)}}})}(),function(){HighFidelity.PlayerController=Ember.ObjectController.extend({_hasAudio:function(){this.set("isPopulated",!!this.get("model").get("id"))}.observes("model"),isPopulated:!1,progressBar:{max:0,value:0},setToPlayAfterLoaded:!1,timeElapsed:"--:--",timeRemaining:"--:--",timeTotal:"--:--",actions:{pause:function(a){clearTimeout(this._saveInBackgroundTimeout),clearTimeout(this._timeUpdateTimeout),$("#audio-player")[0].pause(),a.set("playbackPosition",$("#audio-player")[0].currentTime),a.set("isPlaying",!1),a.save()},play:function(a){$("#audio-player")[0].play(),a.set("isPlaying",!0)},setEpisode:function(a){this.set("model",a),this.get("model").get("audioFile")?this.set("audio",null):(this.set("audio",this.get("model").get("audioURL")),this.playAfterSet())}},playAfterSet:function(){var a=$("#audio-player")[0],b=this;$(a).attr("src",this.get("audio")),$(a).bind("canplay",function(){$(this).unbind("canplay"),b.get("model").get("playbackPosition")&&(a.currentTime=b.get("model").get("playbackPosition")),b.updateTime(),b.set("timeTotal",HighFidelity.formatTime(a.duration)),b.send("play",b.get("model"))}),this._saveInBackgroundTimeout=setTimeout(function(){b._saveInBackground()},1e4),b.updateTime()},updateTime:function(){var a=$("#audio-player")[0],b=this;this.set("timeElapsed",HighFidelity.formatTime(a.currentTime)),this.set("timeRemaining",HighFidelity.formatTime(a.duration-a.currentTime)),this.set("progressBar.max",a.duration),this.set("progressBar.value",a.currentTime),this._timeUpdateTimeout=setTimeout(function(){b.updateTime()},1e3)},_saveInBackground:function(){var a=$("#audio-player")[0],b=this;this.get("model").set("playbackPosition",a.currentTime),this.get("model").save(),this._saveInBackgroundTimeout=setTimeout(function(){b._saveInBackground()},1e4)}})}(),function(){HighFidelity.PodcastController=Ember.ObjectController.extend({actions:{"delete":function(){this.get("model").destroyRecord(),this.transitionToRoute("podcasts")},update:function(){this.get("model").update()}}})}(),function(){HighFidelity.PodcastNewController=Ember.ObjectController.extend({rssURL:"http://atp.fm/episodes?format=rss",actions:{create:function(a){a&&this.set("rssURL",a);var b=this;console.debug("Find podcast with rssURL:",this.get("rssURL"));this.store.find("podcast",{rssURL:this.get("rssURL")}).then(function(a){console.info("Podcast already exists",a.objectAt(0)),b.transitionToRoute("podcast",a.objectAt(0))},function(){console.info("Creating new podcast.");var a=b.store.createRecord("podcast",{rssURL:b.get("rssURL")});a.update().then(function(){b.transitionToRoute("podcast",a)})})}}})}(),function(){HighFidelity.PodcastsController=Ember.ArrayController.extend({sortProperties:["title"]})}(),function(){HighFidelity.ApplicationSerializer=DS.IndexedDBSerializer.extend(),HighFidelity.ApplicationAdapter=DS.IndexedDBAdapter.extend({databaseName:"hifi",version:1,migrations:function(){this.addModel("podcast"),this.addModel("episode")}})}(),function(){HighFidelity.Episode=DS.Model.extend({podcast:DS.belongsTo("podcast",{async:!0}),name:DS.attr("string"),audioURL:DS.attr("string"),audioLength:DS.attr("number"),playbackPosition:DS.attr("number"),playCount:DS.attr("number"),audioFile:DS.attr("string"),guid:DS.attr("string"),datePublished:DS.attr("number"),isPlaying:!1,isDownloaded:function(){return null!==this.get("audioFile")&&void 0!==this.get("audioFile")}.property("audioFile"),isNew:function(){return!this.get("playbackPosition")&&!this.get("playCount")}.property("playbackPosition","playCount")}),HighFidelity.Episode.reopen({attributes:function(){var a=this;return Ember.keys(this.get("data")).map(function(b){return Ember.Object.create({model:a,key:b,valueBinding:"  model."+b})})}.property()}),HighFidelity.Episode.FIXTURES=[{id:0,audioURL:"http://traffic.libsyn.com/atpfm/atp68.mp3",datePublished:1401828879,guid:"513abd71e4b0fe58c655c105:513abd71e4b0fe58c655c111:538e35b2e4b07a3ec5184bf4",name:"68: Siracusa Waited Impatiently For This",playbackPosition:15.05034}]}(),function(){HighFidelity.Podcast=DS.Model.extend({episodes:DS.hasMany("episode",{async:!0}),title:DS.attr("string"),description:DS.attr("string"),rssURL:DS.attr("string"),lastUpdated:DS.attr("number"),lastPlayed:DS.attr("number"),coverImageBlob:DS.attr("string"),coverImageURL:DS.attr("string"),coverImage:function(){return this.get("coverImageBlob")?null:this.get("coverImageURL")?this.get("coverImageURL"):null}.property("coverImageBlob","coverImageURL"),destroyRecord:function(){return this.get("episodes").forEach(function(a){a.destroyRecord()}),this._super()},getCoverImage:function(){if(!this.get("coverImageURL"))return void console.debug("No coverImageURL found; skipping.");var a=this,b=new XMLHttpRequest({mozSystem:!0});b.open("GET",this.get("coverImageURL"),!0),b.responseType="arraybuffer",b.addEventListener("load",function(){a.set("coverImageBlob",b.response),a.save()});try{b.send(null)}catch(c){console.error(c)}},update:function(){var a=this;return console.info("Updating podcast:"+this.get("id")),new Promise(function(b){a.set("lastUpdated",HighFidelity.timestamp()),HighFidelity.RSS.get(a.get("rssURL")).then(function(c){var d=$(c),e=d.find("channel"),f=d.find("item"),g=!1;return d.length&&d.find("item").length?(a.set("title",e.find("title").eq(0).text()),a.set("description",e.find("description").eq(0).text()),a.set("coverImageURL",e.find("itunes\\:image").attr("href")),void a.get("episodes").then(function(c){var d=0;f.each(function(e,h){var i=$(h).find("guid").text();if(!c.filterBy("guid",i).length){var j=a.get("coverImageURL"),k=$(h).find("itunes\\:image").attr("href");0===e&&k&&a.set("coverImageURL",k),!j||j!==a.get("coverImageURL");var l=a.store.createRecord("episode",{guid:i,audioURL:$(h).find("enclosure").attr("url"),datePublished:HighFidelity.timestamp($(h).find("pubDate").text()),name:$(h).find("title").text(),podcast:a});l.save(),c.pushObject(l),d++,f.length===e+1&&(console.info("Updated podcast:"+a.get("id"),d+" new episodes."),g=!0,a.save().then(b))}}),d||f.length||g||(console.info("Updated podcast:"+a.get("id"),d+" new episodes."),a.save().then(b))})):void window.alert("Error downloading podcast feed.")},function(b){console.error("Could not download podcast",b),a.destroyRecord()})})},_autoUpdate:function(){this.get("lastUpdated")+3600<HighFidelity.timestamp()&&(console.debug("Auto update for:"+this.get("title")),this.update())}.observes("lastUpdated").on("init")}),HighFidelity.Podcast.FIXTURES=[{id:0,title:"Accidental Tech Podcast",rssURL:"http://atp.fm/episodes?format=rss",lastUpdated:234,lastPlayed:200,coverImageURL:"http://static.squarespace.com/static/513abd71e4b0fe58c655c105/t/52c45a37e4b0a77a5034aa84/1388599866232/1500w/Artwork.jpg",episodes:[0]},{id:1,title:"The Cracked Podcast",rssURL:"http://rss.earwolf.com/the-cracked-podcast",lastUpdated:247724,lastPlayed:24742,coverImageURL:"http://cdn.earwolf.com/wp-content/uploads/2013/08/EAR_CrackedPodcast_1600x1600_Cover_Final.jpg",episodes:[]}]}(),function(){HighFidelity.IndexRoute=Ember.Route.extend({redirect:function(){this.transitionTo("podcasts")}})}(),function(){HighFidelity.EpisodeRoute=Ember.Route.extend({model:function(a){return this.get("store").find("episode",a.episode_id)}})}(),function(){HighFidelity.EpisodesRoute=Ember.Route.extend({model:function(){return this.get("store").find("episode")}})}(),function(){HighFidelity.PodcastNewRoute=Ember.Route.extend({})}(),function(){HighFidelity.PodcastRoute=Ember.Route.extend({model:function(a){return this.get("store").find("podcast",a.podcast_id)},renderTemplate:function(){this.render("header-actions/podcast",{outlet:"headerAction"}),this.render("podcast")}})}(),function(){HighFidelity.PodcastsRoute=Ember.Route.extend({model:function(){return this.get("store").find("podcast")},renderTemplate:function(){this.render("header-actions/podcasts",{outlet:"headerAction"}),this.render("podcasts")}})}(),function(){HighFidelity.EpisodeEditView=Ember.View.extend({})}(),function(){HighFidelity.EpisodeView=Ember.View.extend({})}(),function(){HighFidelity.EpisodesView=Ember.View.extend({})}(),function(){HighFidelity.PlayerView=Ember.View.extend()}(),function(){HighFidelity.PodcastNewView=Ember.View.extend({})}(),function(){HighFidelity.PodcastView=Ember.View.extend({})}(),function(){HighFidelity.PodcastsView=Ember.View.extend({})}(),function(){HighFidelity.ProgressBarView=Ember.View.extend({eventManager:Ember.Object.create({mouseDown:function(a){console.log(a,this)},mouseMove:function(a){console.log(a,this)},mouseUp:function(a){console.log(a,this)}})})}(),function(){HighFidelity.Router.map(function(){this.resource("podcasts",function(){}),this.resource("podcast.new",{path:"/podcast/new"}),this.resource("podcast",{path:"/podcast/:podcast_id"},function(){this.route("edit")}),this.resource("episode",{path:"/episode/:episode_id"})})}();