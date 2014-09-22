Ext.define('MyApp.view.clients.ClientsGrid',{
    extend: 'Ext.grid.Panel',
    alias : 'widget.clients.grid',
    
    requires: [
        'Ext.view.TableChunker',
        'Ext.selection.RowModel',
        'Ext.grid.column.Column'
    ],
    border: false,
    initComponent: function (){
        var me = this;
        
        me.store = me.buildStore();
        me.columns = me.buildColumns();
        
        
        me.callParent();
        
        me.stroe.load();
    },
    
    buildColumns: function (){
        return [
            {text:'Name',dataIndex: 'name',flex: 1},
            {text:'Contact',dataIndex: 'contact',flex: 1},
            {text:'Address',dataIndex: 'address',flex: 1},
            {text:'Phone',dataIndex: 'phone'}
        ]
    },
    buildStore: function (){
        return Ext.create('MyApp.store.clients.Clients');
    }
    
})