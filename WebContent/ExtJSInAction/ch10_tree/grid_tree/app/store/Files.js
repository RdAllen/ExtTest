Ext.define('App.store.Files',{
    extend: 'Ext.data.TreeStore',
    requires: 'App.model.File',
    model:'App.model.File',
    proxy: {
       type: 'ajax',
       url:'data/files.json'
    }
})