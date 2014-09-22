Ext.define('MyApp.controller.main.Main', {
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
    	maintabs = Ext.ComponentQuery.query('#maintabs')[0]; //Step 1
    	
    	Ext.Msg.wait('Loading...');
    	
        Ext.require(menuoption.controller,function(){
            Ext.Msg.hide();
            
            var controller = me.application.controllers.get(menuoption.controller);
            
            if(!controller){
                controller = Ext.create(menuoption.controller,{
                    id: menuoption.controller,
                    application: me.application
                });
                //创建 
                controller.container = me.createContainer(menuoption);
                
                maintabs.add(controller.container);
                controller.addContent();
                
                me.application.controllers.add(controller);
                controller.init(me.application);
                controller.onLaunch(me.application);
                
                
            }else{
                if(controller.container.isDestroyed){
                    controller.container = me.createContainer(menuoption);
                    maintabs.add(controller.container);
                    controller.addContent();
                }
            }
            
            maintabs.show();
            maintabs.setActiveTab(controller.container);
            
            
        });
    }, 

    createContainer:function (menuoption){
         return Ext.widget({
             xtype: 'container',
             title : menuoption.text,
             iconCls: menuoption.iconCls,
             closable: true,
             layout: 'fit'
         })
    }
})