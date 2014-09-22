Ext.define('App.model.File',{
    extend: 'Ext.data.Model',
    fields:[
        {name: 'name',type:'string'},
        {name: 'owner',type:'string'},
        {name: 'created_at',type:'date',dateFormat:'m/d/Y'},
        {name: 'size',type:'string'}
    ]
})