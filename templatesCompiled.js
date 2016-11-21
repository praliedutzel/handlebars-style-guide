(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['content'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <section id=\""
    + alias4(((helper = (helper = helpers.sectionIdentifier || (depth0 != null ? depth0.sectionIdentifier : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sectionIdentifier","hash":{},"data":data}) : helper)))
    + "\">\r\n                <a href=\"#"
    + alias4(((helper = (helper = helpers.sectionIdentifier || (depth0 != null ? depth0.sectionIdentifier : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sectionIdentifier","hash":{},"data":data}) : helper)))
    + "\" class=\"section-link\">#</a>\r\n                <h2 class=\"style-headline\">"
    + alias4(((helper = (helper = helpers.sectionName || (depth0 != null ? depth0.sectionName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sectionName","hash":{},"data":data}) : helper)))
    + " <span class=\"style-badge "
    + alias4(((helper = (helper = helpers.sectionBadge || (depth0 != null ? depth0.sectionBadge : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sectionBadge","hash":{},"data":data}) : helper)))
    + "\">Status: "
    + alias4(((helper = (helper = helpers.sectionStatus || (depth0 != null ? depth0.sectionStatus : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sectionStatus","hash":{},"data":data}) : helper)))
    + "</span></h2>\r\n\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.snippets : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </section>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "                    <p>"
    + ((stack1 = ((helper = (helper = helpers.snippetDescription || (depth0 != null ? depth0.snippetDescription : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"snippetDescription","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\r\n\r\n"
    + ((stack1 = (helpers.match || (depth0 && depth0.match) || alias2).call(alias1,(depth0 != null ? depth0.snippetLanguage : depth0),"JavaScript || SCSS",{"name":"match","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "                        <pre><code class=\"language-"
    + alias3((helpers.toLowerCase || (depth0 && depth0.toLowerCase) || alias2).call(alias1,(depth0 != null ? depth0.snippetLanguage : depth0),{"name":"toLowerCase","hash":{},"data":data}))
    + "\">\r\n                            "
    + alias3(((helper = (helper = helpers.snippetCode || (depth0 != null ? depth0.snippetCode : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"snippetCode","hash":{},"data":data}) : helper)))
    + "\r\n                        </code></pre>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                        <pre data-language=\""
    + alias4(((helper = (helper = helpers.snippetLanguage || (depth0 != null ? depth0.snippetLanguage : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"snippetLanguage","hash":{},"data":data}) : helper)))
    + "\"><code class=\"language-markup\">\r\n                            "
    + alias4(((helper = (helper = helpers.snippetCode || (depth0 != null ? depth0.snippetCode : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"snippetCode","hash":{},"data":data}) : helper)))
    + "\r\n                        </code></pre>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<!-- STYLE GUIDE CONTENT TEMPLATE -->\r\n\r\n<main class=\"style-wrapper\">\r\n    <header class=\"style-masthead\">\r\n        <div class=\"style-breadcrumbs\">\r\n            "
    + alias4(((helper = (helper = helpers.category || (depth0 != null ? depth0.category : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"category","hash":{},"data":data}) : helper)))
    + "\r\n        </div>\r\n\r\n        <h1 class=\"style-name\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\r\n    </header>\r\n\r\n    <article class=\"style-content\">\r\n        <p class=\"style-description\">"
    + ((stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\r\n\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.sections : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </article>\r\n</main>";
},"useData":true});
templates['nav'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <li><a href=\""
    + alias4(((helper = (helper = helpers.navLink || (depth0 != null ? depth0.navLink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"navLink","hash":{},"data":data}) : helper)))
    + "\" class=\"style-menu-item "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.navSubMenu : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">"
    + alias4(((helper = (helper = helpers.navTitle || (depth0 != null ? depth0.navTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"navTitle","hash":{},"data":data}) : helper)))
    + "</a>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.navSubMenu : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </li>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "style-menu-has-submenu";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    <ul class=\"style-submenu\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.navSubMenu : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    </ul>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                            <li><a href=\""
    + alias4(((helper = (helper = helpers.subMenuLink || (depth0 != null ? depth0.subMenuLink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"subMenuLink","hash":{},"data":data}) : helper)))
    + "\" class=\"style-menu-item\">"
    + alias4(((helper = (helper = helpers.subMenuTitle || (depth0 != null ? depth0.subMenuTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"subMenuTitle","hash":{},"data":data}) : helper)))
    + "</a></li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<!-- STYLE GUIDE NAVIGATION TEMPLATE -->\r\n\r\n<nav class=\"style-menu\">\r\n    <header class=\"style-menu-header\">\r\n        <!--\r\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 221 62.58\" class=\"style-menu-logo\">\r\n            <title>Logo</title>\r\n            <path />\r\n        </svg>\r\n        -->\r\n        <span class=\"style-menu-title\">Style Guide</span>\r\n    </header>\r\n    <ul>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.navItems : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\r\n</nav>\r\n\r\n<button type=\"button\" class=\"style-menu-button\">Open Menu</button>";
},"useData":true});
})();