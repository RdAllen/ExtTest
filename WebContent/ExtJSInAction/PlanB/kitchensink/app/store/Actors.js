Ext.define("KitchenSink.store.Actors",{
    extend: 'Ext.data.Store',
    model: 'KitchenSink.model.Actor',
    
    pageSize: 5,  
    
    /*****  读取数据 *****/
    proxy: {
       type: 'ajax',
       url: '../../PlanB/kitchensink/serviceside/Query.jsp',
       reader:{
           type: 'json',
           root:'data'
       }
    }
})