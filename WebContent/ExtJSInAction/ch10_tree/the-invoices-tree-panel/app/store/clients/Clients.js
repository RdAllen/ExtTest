Ext.define('MyApp.store.clients.Clients',{
    extend: 'Ext.data.Store',
    alias: 'store.clients',
    model : 'MyApp.model.clients.Client',
    
    
    proxy: {
       type: 'ajax',
       url: 'serverside/clients/list.json',
       reader: {
           type: 'json',
           root: 'data'
       }
    }
})