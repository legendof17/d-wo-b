import { Component } from 'react'
import Data from './data'

export class Database extends Component {
    
    constructor(params) {
        super(params)
        this.state = {
            data : '',
            database : []
        }
    }

    async componentDidMount() {
        var text = await atob(Data())
        this.setState({data: JSON.parse(text)})
        console.log(this.state.data['name'])
    }
    
    render() {
        return (
            <div>
                <h1>This is Example Database</h1>
                {JSON.stringify(this.state.data)}
            </div>
            )
        }
    }

export default Database
