import React from 'react'
import Sidebar from './Sidebar'
import NoteForm from './NoteForm'
import NoteList from './NoteList'

class Main extends React.Component {
    render() {
        return (
            <div 
                className="Main"
                style={style}
            >
                <Sidebar/>
                <NoteList/>
                <NoteForm/>
            </div>
        )
        
    }
    
}
const style = {
    display: 'flex',
    height: '100vh',
    msFlexAlign: 'stretch',
    alignItems: 'stretch',
}

export default Main