Ext.define('MyApp.view.BasicGridPanel',{
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
                text: 'Name',
                width: 100,
                dataIndex: 'name'
            },
            {
                text: 'Lastname',
                width: 100,
                dataIndex: 'lastname'
            },
            {
                text: 'email',
                width: 100,
                dataIndex: 'email'
            },
            {
                text: 'Country',
                width: 100,
                dataIndex: 'country'
            },
            {
                text: 'Client',
                width: 100,
                dataIndex: 'client'
            },
            {
                text: 'Age',
                width: 100,
                dataIndex: 'age'
            },
            {
                text: 'Active?',
                width: 100,
                dataIndex: 'active'
            },
            {
                text: 'Total',
                width: 100,
                dataIndex: 'amount'
            },
            {
                text: 'Paydate',
                width: 100,
                dataIndex: 'paydate'
            }
        ];
    }
	
})