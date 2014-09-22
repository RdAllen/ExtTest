Ext.define('KitchenSink.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: [
        'Ext.layout.container.Border',
        'Ext.layout.container.HBox',
        'Ext.layout.container.VBox',
        'KitchenSink.view.List',
        'KitchenSink.view.ChangeModule'
    ],
    
    layout: 'border',
    
    items: [
        {
            region: 'north',
            xtype : 'pageHeader'
        },
        
        {
            region: 'center',
            
            layout: {
                type : 'hbox',
                align: 'stretch'
            },
            
            items: [
                {
                    layout: {
                	    type: 'vbox',
                	    align: 'stretch'
                    },
                    id: 'listPanel',
                    width: 200,
                    //bodyPadding: 5,
                    items:[
                       {
                       	   //这里是tree的切换页面 
                    	   //xtype: 'exampleList' ,
                    	   itemId: 'maintabs',
                    	   flex : 1,
                    	   border: 0
                       },
                       {
                    	   xtype: 'ChangeModule',
                    	   height: 120,
                    	   itemId: 'changeModule',
                    	   border: false
                       }
                    ]
                	
                    
                },
                
                {
                    cls: 'x-example-panel',/**  数据显示页面  **/
                    flex: 1,
                    title: '&nbsp;',
                    id   : 'examplePanel',
                    xtype: 'tabpanel',
                    bodyPadding: 0
                }
            ]
        },
        {
            xtype: 'pageHeader',
            region: 'south',
            height: 13
        }
    ]
});
