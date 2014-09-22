Ext.define('MyApp.view.Viewport',{
    extend : 'Ext.container.Viewport',
    layout : 'fit',
    //AppName.view.Viewport 
    requires: [
        'Ext.tab.Panel',
        'Ext.window.MessageBox'
    ],
    
    initComponent: function (){
        var me = this ;
        me.items = [{
            xtype: 'panel',
            dockedItems: [{
                xtype: 'toolbar',
                docked: 'top',
                itemId :'mainmenu',
                items :[{
                    text: 'Start',
                    iconCls : 'home-icon16',
                    itemId :'startbutton',
                    menu: [
                        {text: 'Client',iconCls: 'clients-icon16',controller:'MyApp.controller.clients.Clients'},
                        {text: 'Invoices',iconCls: 'invoices-icon16',controller:'MyApp.controller.clients.Invoices'},
                        {text: 'Categories',iconCls: 'categories-icon16',controller:'MyApp.controller.clients.Categories'}
                    ]
                    },{
                     xtype: 'tbfill'
                    }, {
                     text: 'John Doe',
                     icon :'receources/images/user_suit.png'
                }]
            }],
            
            items: {
                xtype: 'tabpanel',
                itemId: 'maintabs',
                border: false,
                hidden: true
            }
        }]
        
      
        
        me.callParent();
    }
})