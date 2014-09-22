Ext.define("KitchenSink.view.examples.grids.BasicGridInfos",{
    extend: 'Ext.grid.Panel',
    xtype: 'BasicGridInfos',
    alias:'widget.examplesGridsBasicGridInfos',
    requires	: [
		'Ext.view.TableChunker',
		'Ext.selection.RowModel',
		'Ext.grid.column.Column'
	],
    
    border		: false,
    selModel: { selType: 'checkboxmodel' },   //选择框
    
    initComponent: function() {
        var me = this;
        
        me.store = me.bulidStore();
        
        
        me.columns = me.buildColumns();
        
        me.dockedItems = me.buildDockedItems();
        
        me.callParent();
        
        me.store.load();
    },
    buildColumns: function (){
       return [
             {xtype: 'rownumberer'},
            {text: 'id' ,dataIndex: 'actorId',flex: 1},
            {text: '姓', dataIndex: 'firstName',flex: 1},
            {text: '名', dataIndex: 'lastName',flex: 1},
            {text: '日期',dataIndex: 'lastUpdate',flex: 1},
            {text: '名', dataIndex: 'phone',flex: 1}
       ]
    },
    
    bulidStore:function(){
        return Ext.create('KitchenSink.store.Actors');
    },
    buildDockedItems: function (){
        return [{
           xtype: 'pagingtoolbar',
           dock: 'bottom',
           store: this.store,
           displayInfo: true
        },{
            xtype : 'toolbar',
		    docked: 'top',
		    itemId: 'toolbar',
		    items:[
		        {text:'添加',iconCls:'table_add' ,action:'add',itemId:'add'},  
                {id:'del',text:'删除',iconCls:'table_remove',action:'remove'},  
                {text:'修改',iconCls:'table_edit'},  
                {text:'查看',iconCls:'table_comm'},  
                {id:'selection',text:'selection',iconCls:'table_comm'} 
		    
		    ]
        }
        ];
    }
	
})