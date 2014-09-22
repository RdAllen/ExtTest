Ext.define('KitchenSink.controller.GridPanelCon', {
    extend: 'Ext.app.Controller',
    
    models:[
       'Actor'
    ],
    stores: [
        'Actors'
    ],

    views: [
        'examples.grids.BasicGrid',
        'examples.grids.BasicGridInfos',
        'examples.grids.EditWindow'
    ],

    refs: [
        {
            ref: 'gridInfos',
            selector: '#examplePanel panel[itemId=basicGrid] gridpanel[itemId=gridInfos]'
        }
       
    ],
    
    init:function (){
       this.control({
       	   //选择 员工下面的toolbar 
          /* '#examplePanel tab[itemid=basicGrid] panel[itemid=gridInfos] toolbar[itemid=toolbar-1061] button[itemid=add]'*/
         /* 'gridInfos button[itemId=add]'*/
         '#examplePanel panel[itemId=basicGrid] gridpanel[itemId=gridInfos]  toolbar[itemId=toolbar] button[action=add]':{
           	   //Ext.Msg.alert("heh");
               click : this.addData
          },
           
         '#examplePanel panel[itemId=basicGrid] gridpanel[itemId=gridInfos]':{
         	itemdblclick : this.modify
         }  
       })
    },
    
    addData: function(){
    	Ext.Msg.alert("Add Data function");
    	var editwin =Ext.create("KitchenSink.view.examples.grids.EditWindow",{title: 'add actor'});
    	
    	
    },
    modify: function(view, rec, item, index, e){
       // Ext.Msg.alert("Modify Data function");
        
        var editwin =Ext.create("KitchenSink.view.examples.grids.EditWindow",{title: 'Edit actor'});
        
        editwin.down('form').loadRecord(rec); 
        
    }

})