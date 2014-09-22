Ext.onReady(function() {
    /*var panel = Ext.create("Ext.panel.Panel",{
         title : "First panel",
         width : 400,
         height : 250,
         renderTo : Ext.getBody()
    });	*/
	
	/*Ext.Msg.alert("Alert","We're ready to go!");*/
	
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

var invoice = Ext.create("MyApp.model.Invoice",{
      taxId : '12345',
      dateIssued : '2012-01-25 11:55:21',
      name : 'Mr. Doe',
      address : '123 ST 987 LA. USA'
   });

var name = invoice.get('name');
//Modifying one field
 invoice.set('name','Mr. Smith');
 console.log('Old name:',name);
 console.log('New name:',invoice.get('name'));
//Setting manvoiy values
invoice.set({
  taxId : 54321,
   address : '10th ST, McAllen TX'
});


Ext.define("MyApp.store.Invoice",{
    extend : 'Ext.data.Store',
    model : 'MyApp.model.Invoice'

});

var store = Ext.create("MyApp.store.Invoice");

console.log(store.count());

var invoice1 = Ext.create("MyApp.model.Invoice",{
	taxId : '12345',
    dateIssued : '2012-01-25 11:55:21',
    name : '111',
    address : '123 ST 987 LA. USA'	

});

store.add(invoice1);

console.log(store.count());

var model2 = Ext.create("MyApp.model.Invoice",{
	taxId : '12345',
    dateIssued : '2012-01-25 11:55:21',
    name : '2222',
    address : '123 ST 987 LA. USA'	

});

var model3 = Ext.create("MyApp.model.Invoice",{
	taxId : '12345',
    dateIssued : '2012-01-25 11:55:21',
    name : '3333',
    address : '123 ST 987 LA. USA'	

});

store.add(model2);
store.add(model3);

console.log(store.count());
store.insert(0,{
	taxId : '12345',
    dateIssued : '2012-01-25 11:55:21',
    name : '4444',
   address : '123 ST 987 LA. USA'   	

})

store.each(function(record, index){
     console.log(index, record.get('name'));	

})

var list = store.getRange(1, 3) ;
Ext.each(list , function (record, index ){
	console.log(index, record.get('name'));	

});


    
});