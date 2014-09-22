Ext.define('KitchenSink.view.examples.grids.BasicGrid', {
    extend: 'Ext.panel.Panel',
    xtype: 'BasicGrid',
    requires: [
        'Ext.grid.Panel',
        'KitchenSink.store.Restaurants',
        'KitchenSink.view.examples.grids.BasicGridForm'
    ],
    
    layout: {
         type: 'vbox',
         align : 'stretch'
        
    },
    
    items: [
        {
           xtype : 'examples.grids.BasicGridForm',
           height: 150
           
        },
        {
            xtype: 'grid',
            
            layout:{
           	    type: 'fit'
           	},
            //flex: 1,
            width : 500,
            title: 'Restaurants',
            frame: true,
            
            store: 'Restaurants',
            
            columns: [
                { text: 'Name', flex: 1, dataIndex: 'name' },
                { text: 'Cuisine', flex: 1, dataIndex: 'cuisine' }
            ]
        }
    ]
});
