Ext.define('App.view.FilesTreePanel',{
    extend: 'Ext.tree.Panel',
    xtype: 'filestreepanel',
    store:'Files',
    columns: [
        {
           xtype : 'treecolumn',
           text:'File name',
           flex: 1,
           sortable: true,
           dataIndex: 'name'
        },{
           text:'Owner',
           flex: 1,
           dataIndex: 'owner'
        },{
           text: 'Cretion date',
           flex: 1,
           dataIndex: 'created_at'
        },{
           text:'Size',
           flex: 1,
           dataIndex: 'size',
           renderer: function (v){
               return v? v+'KB':'--';
           }
        }
    ]
})