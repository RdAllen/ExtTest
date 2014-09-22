Ext.define("MyApp.model.Actor",{
   extend: 'Ext.data.Model',
   
   idProperty:'actorId',
   fields:[
      {name: 'actorId',type: 'long'},'firstName','lastName'  ,
      {name: 'lastUpdate',type: 'date' ,format: 'Y-m-d h:i:s'} ,'phone'
   ]
})