Ext.define("KitchenSink.controller.EditWindowCon",{
     extend: 'Ext.app.Controller',
     stores: [
       
    ],

    views: [
      
    ],

    refs: [
        {
           ref			: 'editForm',
		   selector	: '#editform'
        }
    ],
    init: function() {
    	var me = this;
    	
        this.control({
             '#editform button[action=save]' :{
                  click : me.save
             }      
        })
    },
    
    save: function(){
    	Ext.Msg.alert("Edit From");
		var form = this.getClientForm();//this.container.down('form');

		Ext.Ajax.request({
			url : 'serverside/clients/save',
			params : form.getForm().getValues(),
			success: function(response,options){
				var data = Ext.decode(response.responseText);
				
				Ext.Msg.alert('Alert',data.message);
			}
		});
	}
	
})