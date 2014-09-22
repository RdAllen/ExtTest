Ext.define('KitchenSink.view.List', {
    extend: 'Ext.tree.Panel',
    xtype: 'exampleList',
    
    requires: [
        'KitchenSink.store.Examples',
        'KitchenSink.view.examples.Example',
        'KitchenSink.view.examples.PanelExample',
        'KitchenSink.view.examples.forms.Contact',
        'KitchenSink.view.examples.forms.Login',
        'KitchenSink.view.examples.forms.Register',
        'KitchenSink.view.examples.grids.BasicGrid',
        'KitchenSink.view.examples.grids.GroupedGrid',
        'KitchenSink.view.examples.grids.GroupedHeaderGrid',
        'KitchenSink.view.examples.grids.LockedGrid'
    ],
    
    title: 'Examples',
    rootVisible: false,
	
	cls: 'examples-list',
    
    lines: false,
    useArrows: true,
    
    store: 'Examples'
});
