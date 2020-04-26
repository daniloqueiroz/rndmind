var yaml = require('yaml-front-matter');

hexo.extend.filter.register('before_post_render', function(data) {
    var page_tags = yaml.loadFront(data.raw).page_tags;
    if (page_tags){
        data.page_tags = page_tags;
    } else {
        data.page_tags = [];
    }
    return data;
});