import React, { useState, useEffect } from 'react';
import { tabData,delData } from '../ActionCreator/action';
import {connect} from 'react-redux';

function Tables({tableData,tabData,count}) {
    console.log(count)
    // let [tableData, setTableData] = useState([])
    useEffect(() => {
        tabData()
    },[count])


    const deleteElem = async (id)=> {console.log(id)
        await delData(id) 
            // setTableData(res.data)
            tabData()
        
    }
    

    

    return (
        <div style={{height:"30vh",overflowY:"auto"}}>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Criteria</th>
                    <th scope="col">Value</th>
                    <th scope="col">Email</th>
                    <th scope="col">Active Days</th>

                    <th scope="col">Actions</th>


                </tr>
            </thead>
            <tbody>
                {tableData && 
                tableData.map((ele, index) => {

                    return(
                    <tr key={index}>
                        
                        <td>{ele.name}</td>
                        <td>{ele.criteria}</td>
                        <td>{ele.value}</td>
                        <td>{ele.email}</td>
                        <td>{ele.everyday}</td>
                        <td><button className="btn" onClick={()=> deleteElem(ele._id)}><i class="fa fa-trash-o"></i></button></td>
                    </tr>
                )
                })
                }
            </tbody>
        </table>
        </div>

    )
}

const mapStateToProps = (state)=> {console.log(state)
    return {
        tableData: state.tableData,
        count: state.count
    }
}
export default connect(mapStateToProps, {tabData})(Tables)