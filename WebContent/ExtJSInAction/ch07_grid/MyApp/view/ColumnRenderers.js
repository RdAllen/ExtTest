Ext.define('MyApp.view.ColumnRenderers',{
    extend: 'Ext.grid.Panel',
    width: 780,
    height: 180,
    title: 'Clients', 
    
    initComponent: function (){
        var me = this ;
        me.createModel();
        me.columns = me.bulidColumns();
        me.store = me.bulidStore();
        
        this.callParent(arguments);
    },
    
    createModel  : function (){
    	/**Client Model **/
       Ext.define('Client',{
    	   extend : 'Ext.data.Model',
	       fields : [
	           'name', 'lastname' , 'email', 'country',
	           {name:'client', type:'int'},
	           {name:'age', type:'int' },
	           {name:'active', type:'boolean' },
	           {name:'amount', type:'float' },
	          'paydate'
	      ]
       });
    },
    bulidStore : function (){
     return Ext.create('Ext.data.Store',{
        model :'Client',
        data  :[
         
         {
           client:1,
           name:'David',
           lastname:'Lee', age:24,
           email:'david@email.com',
           country:'China',
           paydate:'08/08/2012',
           amount:120.5,
           active:true
        },{
          client:2,
          name:'Lisa',
          lastname:'Brown',
          age:25,
          email:'lisa@email.com',
          country:'Australia',
          paydate:'08/08/2012',
          amount:120.5, active:false
        },{
          client:3,
          name:'Armando',
          lastname:'Gonzalez',
          age:30,
          email:'armando@email.com',
          country:'Mexico',
          paydate:'08/28/2012',
          amount:120.5,
          active:true
       },{
         client:4,
         name:'Mike',
         lastname:'Chang',
         age:27,
         email:'mike@email.com',
         country:'Japan',
         paydate:'08/08/2012',
         amount:120.5,
         active:false
       },{
        client:5,
        name:'Kevin',
        lastname:'Smith',
        age:28,
        email:'kevin@email.com',
        country:'Usa',
        paydate:'08/08/2012',
        amount:120.5, active:true
       }] 
     });
    },
    bulidColumns: function (){
        return [
            {
               xtype:'rownumberer'
            },
            {
                text: 'Name',
                width: 150,
                xtype: 'templatecolumn',
                dataIndex: 'name',
                tpl : '<b>{name} {lastname}</b> (age: {age}) </br>{email}'
            },
            {
                text: 'Country',
                width: 80,
                dataIndex: 'country',
                renderer: function (v){
                    return '<img src="images/' + v.toLowerCase() + '.png">';
                }
            },
            {
                text: 'Age',
                width: 40,
                dataIndex: 'age'
            },
            {
                text: 'Active?',
                //xtype: 'booleancolumn',
                width: 80,
                dataIndex: 'active',
                trueText: 'YES',
                falseText: 'NO',
                renderer: function (v,m){
                    var color = v? 'red' :'green';
                    v = v? 'YES':'NO';
                    m.style = 'color: '+color;
                    return v;
                }
            },
            {
                text: 'Total',
                xtype: 'numbercolumn',
                width: 100,
                dataIndex: 'amount',
                rendere: function (v){
                    return Ext.util.Format.usMoney(v);
                }
            },
            {
                text: 'Pay Date',
                xtype:'datecolumn',
                width: 80,
                dataIndex: 'paydate',
                format: 'm-d-Y'
            },{
              xtype : 'actioncolumn' ,
              width : 40,
              items : [
                   {
                       icon :  'images/pencil.png',
                       handler: function (){
                          alert("edit");
                       }
                   },{
                       icon :  'images/cross.png',
                       handler: function (){
                          alert("delete");
                       }
                   }
              ]
            }
        ];
    }
	
})