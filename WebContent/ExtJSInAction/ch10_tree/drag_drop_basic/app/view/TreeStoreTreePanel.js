Ext.define('App.view.TreeStoreTreePanel',{
    extend: 'Ext.tree.Panel',
    xtype: 'treestorepanel',
    store: 'Files',
    rootVisible: false,
    viewConfig: {
        plugins: {
           ptype: 'treeviewdragdrop'
        }
    }
})