export const getPokes = async (pokemon) => {
  try {
      let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      const RESPONSE = await fetch(url)
      return RESPONSE.json()
      // return fetch(url)
      // .then(x=> x.json())
      // .then(response =>{
      //   let typeCombined="";
      //   for (const i in response.types) {
      //     if(typeCombined!="")typeCombined+="/"
      //     typeCombined+=response.types[i].type.name
      //   }
      //   return {"name" : response.name,
      //     "weight": response.weight,
      //           "type":typeCombined,
      //           "sprite":response.sprites.front_default};
      // })
  } catch (error) {
      console.log("error: ", error )

  }
}    
