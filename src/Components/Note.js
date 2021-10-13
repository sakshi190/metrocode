// const makePayment= async(e)=>{
//     e.preventDefault()
//         try{
//             var amount= totalAmount;
//             var name= "raj"
//             var phone = "9876543210";
//             var email= "h@h.com";
            

//             var params= {
//                 name: name,
//                 email: email,
//                 amount: amount,
//                 phone: phone

//             }
//             var  url= "http://localhost:4000/paynow";
//             var request={
//                 url:url,
//                 params:params,
//                 method: "post"
//             }
//             console.log("req",request)
//             const response= await axios(request)
//             const processParams= await response.data;
//             console.log(processParams)

//         var detailss={
//         action:"https://securegw-stage.paytm.in/order/process",
//         params:processParams
//     }
//     console.log("params==",params)
//          post(detailss)
//         }catch (error){

//         }
// }

//     const makePayment= async()=>{
//     const res= await fetch('http://localhost:4000/paynow',{
//         method: 'post',
//         headers:{
//             'content-type': "application/json "
            
//         },
//         body: JSON.stringify({
//             amount: totalAmount,
//             name: "kiran",
//             email: "hari63@gmail.com",
//             phone: "985432387"
//         })
        
        
//     })
    
//     console.log("response--",res)

// }



// function makePayment(){
//     // creates entity
// fetch("http://localhost:4000/paynow", {
//     "method": "POST",
//     "headers": {
//       "content-type": "application/json",
//       "accept": "application/json"
//     },
//     "body": JSON.stringify({
//         amount: totalAmount,
//             name: "ravi",
//             email: "hareeshpb63@gmail.com",
//             phone: "23329889"
      
//     })
//   })
//   .then(response => response.json())
//   .then(response => {
//     console.log(response)
//   })
//   .catch(err => {
//     console.log(err);
//   });

// }




// if (sourceValue && destinationValue) {
        //     var diff = (destinationValue - sourceValue);
        //     if (diff < 0) {
        //         diff = diff * (-1);
        //     }
        //     var temp = (diff - 1);
        //     var temp1 = (temp * 5);
        //     total = (temp1 + 10);
        //     settotalAmount(total);
        //     console.log("total=", total)
        //     return total;

        // } else {
        //     console.log("Error. select Again");

        