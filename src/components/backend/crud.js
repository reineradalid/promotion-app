
module.exports = {

    getRecord: function(){
        

        //   fetch("http://172.104.62.175:1338/leads/classes/MLBB", )
        //   .then(res => res.json())
        //   .then(
        //     (result) => {
        //       console.log(result);
        //     },
        //     (error) => {
              
        //     }
        //   )


        fetch('http://172.104.62.175:1338/leads/classes/MLBB', {
            method: 'GET',
            headers: {
              'Content-Type': 'aplication/json',
              'X-Parse-Application-Id': 'PARSE17210462175'
            }
          })
          .then(res => res.json())
          .then(
                (result) => {
                  console.log(result);
                },
                (error) => {
                  
                }
          )


    },
 
    setRecord: function(){
        alert('Hi');
    }
 
 }

