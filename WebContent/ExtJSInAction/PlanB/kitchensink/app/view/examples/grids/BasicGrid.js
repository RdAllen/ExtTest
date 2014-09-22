Ext.define('KitchenSink.view.examples.grids.BasicGrid', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.grid.Panel',
        'KitchenSink.store.Actors',
        'KitchenSink.view.examples.grids.BasicGridForm',
        'KitchenSink.view.examples.grids.BasicGridInfos'
    ],
    
    layout: {
         type: 'vbox',
         align : 'stretch'
    },
    
    itemId: 'basicGrid',
    items: [
        {
           xtype : 'examples.grids.BasicGridForm',
           height: 150
           
        },
        {
            xtype: 'BasicGridInfos',
            layout:{
           	    type: 'fit'
            },
            itemId:'gridInfos',
            flex: 1
        }
    ]
});
