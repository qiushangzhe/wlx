var fs = require('fs');
var path = require('path');
var src = path.join(__dirname,'src','pages');



function a(name){
    fs.mkdir(path.join(src,name));
    fs.writeFile(path.join(src,name,name+'.vue'),`<template src="./${name}.html"></template>
    <script src="./${name}.js"></script>
    <style src="./${name}.less" lang="less"></style>`);
    fs.writeFile(path.join(src,name,name+'.less'),`.${name}{\n}`);
    fs.writeFile(path.join(src,name,name+'.js'),`export default {
    name: '${name}',
    data() {
        return {

        }
    },
    methods: {

    },
    components: {

    }
}
`);
    fs.writeFile(path.join(src,name,name+'.html'),`<div class="${name}">\n\n</div>`);
}

a('contactUs')
