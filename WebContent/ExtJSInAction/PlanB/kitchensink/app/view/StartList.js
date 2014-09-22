Ext.define('KitchenSink.view.StartList', {
    extend: 'Ext.tree.Panel',
    xtype: 'startList',
    
    requires: [
        'KitchenSink.store.Examples',
        'KitchenSink.view.examples.Example',
        'KitchenSink.view.examples.PanelExample',
        'KitchenSink.view.examples.tabs.BasicTabs',
        'KitchenSink.view.examples.tabs.FramedTabs',
        'KitchenSink.view.examples.tabs.IconTabs',
        'KitchenSink.view.examples.tabs.TitledTabPanels',
        'KitchenSink.view.examples.toolbars.BasicToolbar',
        'KitchenSink.view.examples.toolbars.DockedToolbar',
        'KitchenSink.view.examples.grids.BasicGridInfos'
    ],
    
    title: 'Examples',
    rootVisible: false,
	
	cls: 'examples-list',
    
    lines: false,
    useArrows: true,
    
    store: 'StartExamples'
});
