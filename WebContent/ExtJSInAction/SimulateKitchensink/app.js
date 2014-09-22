Ext.Loader.setConfig({enabled:true}); 
Ext.application({
    name: 'KitchenSink',

    autoCreateViewport: true,
    
    requires: [
        'Ext.window.MessageBox'
    ],

    controllers: [
        'Main'
    ],
    
    launch: function(){
    	console.log('app-----------');
        if (!Ext.isWebKit) {
            Ext.MessageBox.alert('WebKit Only', 'This example is currently only supported in WebKit browsers');
        }
    }
});
