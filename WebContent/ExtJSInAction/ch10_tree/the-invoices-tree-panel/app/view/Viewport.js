Ext.define('MyApp.view.ViewPort',{
    extend: 'Ext.container.Viewport',
    layout: 'fit',
    requires	: [
		'Ext.tab.Panel',
		'Ext.window.MessageBox'
    ],
    
    initComponent: function (){
        var me = this;
        me.items = me.buildItems;
        
        me.callParent();
    },
    buildItems:function (){
        return [{
            xtype: 'panel',
            layout: 'fit',
            dockedItems :[{
                text: 'Start',
                iconCls: 'home-icon16',
                menu: [
                    {text: 'Clients',iconCls:'clients-icon16'},
                    {text: 'Clients',iconCls:'invoices-icon16'},
                    {text: 'Clients',iconCls:'categories-icon16'}
                ]
            },{xtype: 'tbfill'},{
               text: 'Home',
               iconCls: 'home-icon16'
            }],
            items: {
               xtype: 'tabpanel',
               iconCls: 'home-icon16',
               border: false,
               hidden: true
            }
         
        }]
    }
})