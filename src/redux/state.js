function appReducer(state = { tableData: [],count: 0, graphsData: [] }, action) {
    let stateCopy = JSON.parse(JSON.stringify(state))
    console.log(action)
    switch (action.type) {
        case "get-data":
            console.log(action.payload)
            stateCopy.tableData = action.payload
            return stateCopy
        case "submit-data":
            // console.log(action.payload)
            stateCopy.count += 1
            console.log("hey")
            return stateCopy
        case "user-delete":

            return stateCopy

        case "get-graph":
            stateCopy.graphsData = action.payload
            return stateCopy
        default:
            return stateCopy
    }
}

export default appReducer;