Ext.define('MyApp.view.clients.MainContainer', {
    extend: 'Ext.container.Container',
    alias : 'widget.clients.main',
    
    requires: [
        'Ext.layout.container.Border',
        'Ext.resizer.BorderSplitterTracker'
    ],
    
    layout: 'border',
    
    initComponent: function (){
    	
    	me.items = [{
    	    xtype : 'clients.grid',
            region: 'center'
    	   },{
    	      xtype : 'clients.form',
              width : 300,
              region: 'east',
              split : true,
              collapsible : true
    	   }
    	];
    	
    	me.callParent();
    }
})