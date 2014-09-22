Ext.define("MyApp.store.Actors",{
    extend: 'Ext.data.Store',
    model: 'MyApp.model.Actor',
    
    /*****  读取数据 *****/
    proxy: {
       type: 'ajax',
       url: '/serviceside/actors.json',
       reader:{
           type: 'json',
           root:'data'
       },
       autoLoad: true
    }
    
    
})