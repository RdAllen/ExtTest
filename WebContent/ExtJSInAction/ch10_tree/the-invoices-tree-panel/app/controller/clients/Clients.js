Ext.define('MyApp.controller.clients.Clients', {
    extend      : 'Ext.app.Controller',
    models : [ //Step 1
      'clients.Client'
    ], 
    stores: [
      'clients.Clients'
    ],
    view:[
      'clients.ClientForm',
      'clients.ClientGrid',
      'clients.MainContainer'
    ],    

    init: function (){
        var me = this;
        me.control({
        	'#maintabs #clientmain grid' :{
        	    itemdbclick: me.loadForm;
            }
        });
        
        
    },
    
    loadForm: function (grid,record,item,index,event,ops){
	    var form = this.container.down('form');
	    form.getForm().loadRecord(record);
       	
    }
})