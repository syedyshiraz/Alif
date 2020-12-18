import React from 'react'
import './NoteList.css'

const NoteList = () => {
    return (
      <div class="NoteList">
      <h3><bold>Project Alif</bold></h3>
      <ul id="notes">
        <a class="active">
          <li>
            <div class="note">
              <div class="note-title">
                Todo
              </div>
              <div class="note-body">
                <p>
                  Add input and output textarea here.<br/>
                  Input can be given and output can be generated here...
                </p>
              </div>
            </div>
          </li>
        </a>
      </ul>
    </div>
    )

}

export default NoteList