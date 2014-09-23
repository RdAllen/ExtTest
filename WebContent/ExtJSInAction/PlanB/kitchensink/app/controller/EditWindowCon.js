Ext.define("KitchenSink.controller.EditWindowCon",{
     extend: 'Ext.app.Controller',
     models:[
       'Actor'
    ],
     
     stores: [
       'Actors'
    ],

    views: [
       'examples.grids.EditWindow'
    ],

    refs: [
        {
           ref : 'editForm',
		   selector	: 'window form'
        }
    ],
    
    init: function() {
    	var me = this;
    	
    	//Ext.Msg.alert("Alert","EditWindowCon");
        this.control({
             "#save":{
                     click: me.save
             }
             
        })
    },
    
    save: function(){
    	Ext.Msg.alert("Edit From");
		var form = this.getEditForm();//this.container.down('form');
		

		Ext.Ajax.request({
			url : '../../PlanB/kitchensink/serviceside/Modify.jsp',
			params : form.getForm().getValues(),
			success: function(response,options){
				var data = Ext.decode(response.responseText);
				
				Ext.Msg.alert('Alert',data.message);
				
			}
		});
	}
	
})