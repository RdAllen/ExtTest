Ext.define('KitchenSink.controller.WorkSpaceChange', {
    extend: 'Ext.app.Controller',
    
    stores: [
        'Examples',
        'Companies',
        'Restaurants',
        'States',
        'TreeStore',
        'StartExamples'
    ],

    views: [
        'Viewport',
        'Header',
        'List',
        'StartList'
    ],
    
    refs:[
       {
           ref:'treeList',
           selector:'viewport panel[itemId=maintabs] '
        },
        {
            ref: 'examplePanel',
            selector: '#examplePanel'
        }
    ],
    
    init: function() {
    	var me = this;
    	
        this.control({
        	"viewport ChangeModule button[itemId=andoridbutton] ":{
        	   click: me.changToStatrModule
        	},
        	"viewport ChangeModule button[itemId=sybanbutton] ":{
        	   click: me.changToSybanModule
        	},
        	"viewport ChangeModule button[itemId=iphonebutton] ":{
        	   click: me.changToIphoneModule
        	}
            
        })
    },
    
    changToStatrModule : function(){
    	var me = this;
    	this.iconCls ='';
    	
        var  treePanel = this.getTreeList();
        var  examplePanel = this.getExamplePanel();
        
        examplePanel.removeAll(); 
        treePanel.removeAll();
        
        treePanel.add({
			xtype : 'startList',
			itemId: 'exampleList',
			border: 0
        })
    },
    changToSybanModule:function(){
        var  treePanel = this.getTreeList();
        var  examplePanel = this.getExamplePanel();
        
        examplePanel.removeAll(); 
        
        treePanel.removeAll();
        
        treePanel.add({
			xtype : 'exampleList',
			itemId: 'exampleList',
			border: 0
        })
    }
    
})