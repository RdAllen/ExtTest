Ext.Loader.setConfig({enabled:true});
Ext.application({
    name: 'KitchenSink',

    autoCreateViewport: true,
    
    requires: [
        'Ext.window.MessageBox'
    ],

    controllers: [
        'Main',
        'WorkSpaceChange',
        'GridPanelCon',
        'EditWindowCon'
    ],
    
    launch: function(){
        //if (!Ext.isWebKit) {
        //    Ext.MessageBox.alert('WebKit Only', 'This example is currently only supported in WebKit browsers');
        //}
    }
});
