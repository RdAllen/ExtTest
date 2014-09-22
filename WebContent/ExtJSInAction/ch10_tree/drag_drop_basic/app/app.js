Ext.Loader.setConfig({
	enabled:true
});
Ext.application({
    name: 'App',

	requires:['App.view.BasicTreePanel','App.view.TreeStoreTreePanel'], 
	stores:['Files'],// we import our Files store
	
    launch: function() {
     	Ext.create('Ext.Window',{
			width:630,
			height:318,
			title:'Ext TreePanel',
			autoScroll:true,
			frame:false,
			//layout:'fit',
			layout: {
			    type: 'hbox',
			    align:'stretch'
			},
			defaults:{
                flex: 1			
			},
			items:[
			{
				xtype:'treestorepanel' 
			},
			{
			   xtype: 'treepanel',
			   viewConfig: {
			       plugins: {
			          ptype: 'treeviewdragdrop'
			       }
			   },
			   root:{
			       text: 'Application',
			       expanded: true
			   }
			}]
		}).show();
		this.getFilesStore().load(); // load the TreeStore
    }
});