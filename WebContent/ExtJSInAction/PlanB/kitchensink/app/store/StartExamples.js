Ext.define('KitchenSink.store.StartExamples', {
    extend: 'Ext.data.TreeStore',

    root: {
        expanded: true,
        children: [
            
            {
                text: 'Tabs',
                expanded: true,
                children: [
                    { leaf: true, text: 'Basic Tabs' },
                    { leaf: true, text: 'Framed Tabs' },
                    { leaf: true, text: 'Icon Tabs' },
                    { leaf: true, text: 'Titled Tab Panels' }
                ]
            },
            {
                text: 'Toolbars',
                expanded: true,
                children: [
                    { leaf: true, text: 'Basic Toolbar' },
                    { leaf: true, text: 'Docked Toolbar' }
                ]
            }
           
        ]
    }
});
