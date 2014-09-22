Ext.define('KitchenSink.store.Examples', {
    extend: 'Ext.data.TreeStore',

    root: {
        expanded: true,
        children: [
            {
                text: 'Grids',
                expanded: true,
                children: [
                    { leaf: true, text: 'Basic Grid' },
                    { leaf: true, text: 'Grouped Grid' },
                    { leaf: true, text: 'Locked Grid' },
                    { leaf: true, text: 'Grouped Header Grid' }
                ]
            },
            {
                text: 'Forms',
                expanded: true,
                children: [
                    { leaf: true, text: 'Login' },
                    { leaf: true, text: 'Contact' },
                    { leaf: true, text: 'Register' }
                ]
            }
           
        ]
    }
});
