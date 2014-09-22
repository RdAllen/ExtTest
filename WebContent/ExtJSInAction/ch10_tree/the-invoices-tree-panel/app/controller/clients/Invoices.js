Ext.define('MyApp.controller.clients.Invoices', {
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
    
    openModule : function (){
        console.log('Open the module now!');
    } 
})