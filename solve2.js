

function sendNotification(email) {
   
    if(email.indexOf("@") ===-1){
        return 'Invalid Input'
    }
   else{
    const parts=email.split("@")
   const userName=parts[0]
   const domainName=parts[1]
   const massage=userName + ' sent you an email from ' +domainName;
   return massage;
   }
   

    }
    console.log(sendNotification('mosiur.34@gmail.com'))