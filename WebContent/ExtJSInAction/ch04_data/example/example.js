Ext.onReady(function (){
    Ext.Ajax.request({
        url: 'serverside/data.json',
        success: function (response, options){
            var data = Ext.encode(response.responseText);
            Ext.Msg.alert("Message", data.msg);
        },
        failure: function (response, options){}
     
    })
    
    console.log('Next line ...........');
    
    Ext.Ajax.request({
       url: 'serverside/data.xml',
       success:function (response, options){
          var xml = response.responseXML,
          node = xml.getElementsByTagName('msg')[0];
          
          Ext.Msg.alert("Title" ,node.firstChild.value);
       
       },
       failure: function (response, options){}
    })
})