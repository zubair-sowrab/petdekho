export const filterData = [ {name:"Bike",image:require('../../assets/Car.jpg'), id:"0"},
                            {name:"Car",image:require("../../assets/RIDE.jpg"),id:"2"},
                            {name:"Large",image:require("../../assets/SUV.png"),id:"3"}
                          
                           ];


export const rideData =[
    {street:"32 Olivia Rd",area:"Klipfontein 83-Ir,Boksburg",id:"0"},
    {street:"Hughes Industrial Park",area:"Hughes,Boksburg",id:"1"},
    {street:"32 Olivia Road",area:" East Rand,Ekurhuleni,Gauteng,1459",id:"2"},
    {street:"Total Boksburg",area:"35 Atlas Rd,Anderbolt,Boksburg",id:"3"},
    {street:"179 8th Ave",area:"Bezuidenhout Valley,Johannesburg",id:"4"},
];

export const carTypeData =[
    {title:"Popular",
     data:[
    {name:"Car",group :2, price:7,image: require('../../assets/Car.png'),note:"Affordable.compact rides",promotion:5 ,time:"20:19",id:"0"},
    {name:"Bike",group :3, price:5.5,image: require('../../assets/bike.png'),note:"Affordable everyday trips",promotion:0,time:"20:20", id:"1"},
    {name:"SUV", group:0, price:12.6,image: require('../../assets/SUV.png'),note:"Send and receive packages",promotion:10,time:"20:33", id:"2"}
     ]
    },

  

  

];

 export const requestData = [{
    name:"For Me",id:0
},
{
    name:"For Someone",id:1
}

]

export const rideOptions = [{name:"Personal",icon:"account", id:"0"},
{name:"Business",icon:"briefcase", id:"1"},  

];

export const paymentOptions = [{image:require('../../assets/visaIcon.png'),text:"Visa ...0476"},
                                {image:require('../../assets/cashIcon.png'),text:"Cash"}]

export const availableServices = ["Car","Bike","SUV"]

export const carsAround = [{latitude:-26.207487,longitude:28.236226},
    {latitude:-26.202616,longitude:28.227718},
    {latitude:-26.202424,longitude:28.236612},
    {latitude:-26.208565,longitude:28.237191},
    {latitude:-26.203598,longitude:28.239509},
]