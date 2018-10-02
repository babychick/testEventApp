const GET_USER = 'GET_USER';

export getData =function (data) {
    return{
        type: 'GET_USER',
        payload: data
    }
}

export function fetchGetData(){
    return fetch('http://localhost:3000/user/5baf3d648d9ccd3b309ab2c7')
        .then((response) => response.json())
        .then((responseJson) =>{
            dispatch(getData(responseJson))
        });
        .catch((err)=>{
            
        })
}
