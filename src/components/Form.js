import React,{useState, useEffect} from 'react';
import Axios from 'axios'
import {userData,tabData} from '../ActionCreator/action'
import {connect} from 'react-redux'

function Form({userData}) {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [criteria, setCriteria] = useState("")
    const [value, setValue] = useState("")
    const [everyday, setEveryday] = useState("yes")

    

    function submitForm(e) {
        e.preventDefault();
        // console.log(name,email,criteria,value,everyday)
        userData(name,email,criteria,value,everyday)
        

        setName("")
        setCriteria("")
        setValue("")
        setEveryday("")
        setEmail("")

    }


    return (
        <>

            <form onSubmit={submitForm}>
                <div className="mt-4"><b>Create Alert</b></div>
                <input className="form-control mt-5 no-border" value={name} onChange={e => setName(e.target.value)} placeholder="Name"
                    type="text" required />
                <div class="form-group mt-2 no-border">
                    <label for="sel1">Criteria</label>
                    <select value={criteria} onChange={e => setCriteria(e.target.value)} class="form-control" id="sel1">
                        <option>Greater</option>
                        <option>Less</option>

                    </select>
                </div>
                <input className="form-control mt-2 no-border"t value={value} onChange={e => setValue(e.target.value)} placeholder="Value"
                    type="text" required />
                <div className="form-control mt-3 no-border" class="custom-control custom-switch">
                    <input value={everyday} onChange={e => setEveryday(e.target.value)} type="checkbox" class="custom-control-input" id="customSwitch1" />
                    <label class="custom-control-label" for="customSwitch1">Everyday</label>
                </div>
                <input className="form-control mt-2 no-border" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"
                    type="email" required />

                <button type="submit" className="btn btn-success btn-lg btn-block mt-2 mb-3">Submit</button>

            </form>




        </>
    );
}

export default connect(null,{userData})(Form)