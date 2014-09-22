Ext.define('KitchenSink.view.List', {
    extend: 'Ext.tree.Panel',
    xtype: 'exampleList',
    
    requires: [
        'KitchenSink.store.Examples',
        'KitchenSink.view.examples.Example',
        'KitchenSink.view.examples.PanelExample'
       
    ],
    
    title: 'Examples',
    rootVisible: false,
	
	cls: 'examples-list',
    
    lines: false,
    useArrows: true,
    
    store: 'Examples'
});
