Ext.define('MyApp.view.BasicPanel',{
    extend: 'Ext.grid.Panel',
    width: 780,
    height: 180,
    store: 'MyApp.model.Actor',
    
    columns: [
       {name: 'id' ,dataIndex: 'actorId'},
       {name: '名', dataIndex: 'firstName'},
       {name: '姓', dataIndex: 'lastName'},
       {name: '名', dataIndex: 'lastUpdate'},
       {name: '名', dataIndex: 'phone'}
    ]
	
})