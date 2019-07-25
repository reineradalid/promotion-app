
export function getRecord() {

  // fetch('http://172.104.62.175:1338/leads/classes/MLBB', {
  //   headers: {
  //     'Content-Type': 'aplication/json',
  //     'X-Parse-Application-Id': 'PARSE17210462175'
  //   }
  // })
  // .then(res => res.json() )
  // .then((result) => {
  //     return 'YEASSIR';
  //   },
  //   (error) => {
  //     console.log(error);
  //   }
  // )

  return fetch('http://172.104.62.175:1338/leads/classes/MLBB',{

    headers: {
          'Content-Type': 'aplication/json',
          'X-Parse-Application-Id': 'PARSE17210462175'
        }
    })
     .then((data)=>data.json())
     .then((res)=>res)

}

export function testing(){
  return 'YEAH'
}

