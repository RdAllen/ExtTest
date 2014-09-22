Ext.define('App.store.Files',{
    extend: 'Ext.data.TreeStore',
    proxy: {
       type: 'ajax',
       url:'data/files.json'
    }
})