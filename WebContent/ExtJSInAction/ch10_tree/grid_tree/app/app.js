Ext.Loader.setConfig({
	enabled:true
});
Ext.application({
    name: 'App',

	requires:['App.view.FilesTreePanel'], 
	stores:['Files'],// we import our Files store
	
    launch: function() {
     	Ext.create('Ext.Window',{
			width:630,
			height:318,
			title:'Ext TreePanel',
			autoScroll:true,
			frame:false,
			layout:'fit',
			items:[
			{
				xtype:'filestreepanel' 
			}
			]
		}).show();
		this.getFilesStore().load(); // load the TreeStore
    }
});