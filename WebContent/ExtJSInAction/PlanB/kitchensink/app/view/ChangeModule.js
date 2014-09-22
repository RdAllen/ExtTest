Ext.define('KitchenSink.view.ChangeModule', {
    extend: 'Ext.panel.Panel',
    xtype: 'ChangeModule',
    layout: {
       type: 'vbox',
       align:'stretch'
    },
    
    items: [
       {
          xtype: 'button',
          text: 'Andorid',
          scale:'large',
          itemId:'andoridbutton',
          
          iconCls: 'new-icon32'
       },
       {
          xtype: 'button',
          text: 'Syban',
          scale:'large',
          itemId:'sybanbutton',
          iconCls: 'new-icon32'
       },
       {
          xtype: 'button',
          text: 'IPhone',
          scale:'large',
          itemId:'iphonebutton',
          iconCls: 'new-icon32'
       }
    ]
})