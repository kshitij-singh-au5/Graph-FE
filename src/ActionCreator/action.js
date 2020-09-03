import axios from 'axios'

export const tabData = () => {
    let data = axios.get("http://localhost:5000/users")
    return (dispatch)=> {
        data.then( (res)=> {console.log(res.data)
            dispatch({
                type: 'get-data',
                payload: res.data
            })
        }
        )
    }
}

export const graphData = () => {
    let data = axios.get("http://localhost:5000/users/graph")
    return (dispatch)=> {
        data.then( (res)=> {console.log(res.data)
            dispatch({
                type: 'get-graph',
                payload: res.data
            })
        }
        )
    }
}

export const userData = (name,email,criteria,value,everyday) => {
    let data = axios.post("http://localhost:5000/users",{name,email,criteria,value,everyday})
    return (dispatch)=> {
        data.then( (res)=> {console.log(res.data)
            dispatch({
                type: 'submit-data'
                
            })
        }
        )
    }
}


export const delData = (id) => {console.log(id)
    const data = axios.delete(`http://localhost:5000/users/${id}`)
    return (dispatch)=> {
        data.then( (res)=> {
            dispatch({
                type: 'user-delete',
                payload: res.data
            })
        }
        )
    }
}

// "name":name,
//         "criteria":criteria,
//         "value":value, 
//         "everyday":everyday,
//         "email":email