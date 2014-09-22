Ext.define('App.view.UsersView',{
    extend: 'Ext.view.View',
    xtype:  'usersview',
    store: 'Users',
    emptyText: 'No users available',
    itemSelector: 'div.selector',
    tpl: [
       '<tpl = ".">',
          '<div class = "selector">{firstName} {lastName}</div>',
       '</tpl>'
    ].join(''),
    
    listerers: {
        itemclick: function (view, rec, item, index, event, opts){
            Ext.Msg.alert('Ext JS ',rec.get('firstName')+ 'has benn selected')
        }
    }
})