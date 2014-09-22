Ext.define("KitchenSink.model.Actor",{
   extend: 'Ext.data.Model',
   
   //idProperty:'actorId',
   fields:[
      {name: 'actorId',type: 'long'},'firstName','lastName'  ,
      'lastUpdate' ,'phone'
   ]
})