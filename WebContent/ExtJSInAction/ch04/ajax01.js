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


Ext.define("MyApp.store.Invoice",{
    extend : 'Ext.data.Store',
    model : 'MyApp.model.Invoice',
    
    proxy : {
          type:'ajax',
          //url: 'data.json',
          reader : {
	          type : 'json',
	          root : 'data'
          },
          api : {
        	  create : 'save',
        	  read : 'data.json',
        	  update : 'update',
        	  destory : 'destory'
          },
          writer : {
        	  type : 'json',
        	  allowSingle : false
          }
    }

});

var store = Ext.create("MyApp.store.Invoice");
   store.load({
        callback : function (){
            var model1 = Ext.create("MyApp.model.Invoice",{
            	 taxId : '000000',
                 dateIssued : '2012-01-25 11:55:21',
                 name : '4444',
                 address : '123 ST 987 LA. USA' 
            });
            
            var model2= Ext.create("MyApp.model.Invoice",{
            	 taxId : '11111',
                 dateIssued : '2012-01-25 11:55:21',
                 name : '222',
                 address : '123 ST 987 LA. USA' 
            });
            
            store.add([model1,model2]);
            
            store.removeAt(0);
            
            store.sync();
            
        }
    });
});