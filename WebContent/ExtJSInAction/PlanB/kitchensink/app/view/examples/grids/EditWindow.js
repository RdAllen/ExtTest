Ext.define("KitchenSink.view.examples.grids.EditWindow",{
   extend: 'Ext.window.Window',
   
   titel: 'Edit Widow',
   layout: 'fit',
   autoShow : true,  
   shadow : true,  
   modal : true, // 遮罩，  
   toFrontOnShow : true, 
   id:'editform',
   defaults	: {
		xtype	: 'textfield'
	},
   
   initComponent : function() {
      var me = this;
      
      me.items = me.buildItems();
      me.buttons = me.buildButtons();
      
      me.callParent(arguments);
   },
   
   buildItems: function (){
       return [
          {
              xtype: 'form',
              items:[
                 {xtype:'textfield', name:'actorId' ,fieldLabel: 'id'},
                 {xtype:'textfield',name:'firstName' ,fieldLabel: 'firstName'},
                 {xtype:'textfield',name:'lastName' ,fieldLabel: 'lastName'},
                 {xtype:'datefield', name:'lastUpdate' ,fieldLabel: 'lastUpdate'},
                 {xtype:'textfield',name:'phone' ,fieldLabel: 'phone'}
              ]
          }
       ]
   },
   
   buildButtons:function (){
   
      return [
          {text: 'save',action: 'save',action:'new' ,itemId: 'save' },
          {text: 'close',action: 'close',action:'close'}
      ];
   }
	
})