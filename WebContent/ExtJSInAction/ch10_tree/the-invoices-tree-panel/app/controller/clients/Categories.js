Ext.define('MyApp.controller.clients.Categories', {
    extend      : 'Ext.app.Controller',
    
    init: function (){
        var me = this;
        
        me.control({
            'toolbar[itemId=mainmenu] button[itemId=startbutton] menuitem':{
                click: me.openModule
            }
            
        })
        
        console.log("Initailizing a  controller....");
    },
    
    openModule : function (menuoption){
	    var me = this,
	    maintabs = Ext.ComponentQuery.query('#maintabs')[0];
	    Ext.Msg.Wait('Loading .....');
	    Ext.require(menuoption.controller,function(){
	    	Ext.Msg.hide();
	    	console.log('Open the module now!');	
	    })
        
    } 
})