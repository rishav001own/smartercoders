var txt=require('./foodyo_output.json');
txt=JSON.stringify(txt);
var obj= JSON.parse(txt);
 obj.body.Recommendations.map(data=>{console.log("RestaurantName=",data.RestaurantName)})
 obj.body.Recommendations.map(data=>{data.menu.map(dataa=>{if(dataa.type === "sectionheader" ){ 
     dataa.children.map(dt=>{if(dt.type=='item' && dt.selected == '1'){console.log("childname:",dt.name)
    dt.children.map(da=>{if (da.selected == '1'){console.log("child : 1=",da.name)}
da.children.map(daa=>{if(daa.selected =='1'){console.log("child : 2=",daa.name)}
daa.children.map(daaa=>{if(daaa.selected =='1'){console.log("Child : 3=",daaa.name)}
daaa.children.map(daaaa=>{if(daaaa.selected == '1'){console.log("child : 4 =",daaaa.name)}
daaaa.children.map(daaaaa=>{if(daaaaa.selected =='1'){console.log("child :5 =",daaaaa.name)}
daaaaa.children.map(daaaaaa=>{if(daaaaaa.selected =='1'){console.log("child : 6=",daaaaaa.name)}
daaaaaa.children.map(daaaaaaa=>{console.log(daaaaaaa)})}
)})})
})})})}})
 }})})