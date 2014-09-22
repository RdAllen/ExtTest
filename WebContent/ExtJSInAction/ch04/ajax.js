Ext.onReady(function() {
    
	
Ext.define('MyApp.model.Invoice',{
    extend : 'Ext.data.Model', // Step 1
    idProperty : 'idInvoice',//Step 2
    fields : [ // Step 3
         {name:'IdInvoice'},
         {name:'taxId'},
         {name:'dateIssued',type:'date',dateFormat:'Y-m-d h:i:s'},
         {name:'name'},
         {name:'address'}
    ]
});


/*Ext.define("MyApp.store.Invoice",{
    extend : 'Ext.data.Store',
    model : 'MyApp.model.Invoice',
    
    proxy : {
          type:'ajax',
          url: 'data.json',
          reader : {
	          type : 'json',
	          root : 'data'
          }
    }

});*/

Ext.define("MyApp.store.Invoice",{
    extend : 'Ext.data.Store',
    //model : 'MyApp.model.Invoice',
    idProperty : 'IdIvoice',
    fields : [
        {name:'idInvoice',mapping:'@id'},
        {name:'taxId'},
        {name:'dateIssued',type:'data',dateFormat : 'Y-m-d h:i:s' ,mapping: 'date'},
        {name:'name',mapping:'client'},
        {name:'address',type:'string','mapping:'addr'},
    ]
    
    proxy : {
          type:'ajax',
          url: 'data1.xml',
          reader : {
	          type : 'xml',
	          root : 'data', // to mapping the xml root 
	          record : 'invoice' // to mapping the xml node 
          }
    }

});

var store = Ext.create("MyApp.store.Invoice");
    
store.load(function(){
        store.each(function (record){
        console.log(record.get("name"));	
    })	

});

console.log(store.count());



    
});