export const getUsers = async () => {
  let object = {
    picture: {},
    name: {},
    email: {},
    phone: {},
  };
  try {
    let response = await fetch(
      'https://randomuser.me/api/?inc=picture,name,email,cell'
    );
    let responseJson = await response.json();
    object.picture = responseJson.results[0].picture.medium;
    object.name = responseJson.results[0].name.first;
    object.email = responseJson.results[0].email;
    object.phone = responseJson.results[0].picture.cell;
    return object;
  } catch (error) {
    console.error(error);
  }
};
