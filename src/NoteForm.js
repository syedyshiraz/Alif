import React from 'react'
import './NoteForm.css'

const NoteForm = () => {
    return (
        <div class="NoteForm">
          <div class="form-actions">
            <button type="button">
              <i class="fa fa-trash-o"></i>
            </button>
          </div>
          <form>
            <p>
              <input
                type="text"
                name="title"
                placeholder="Title your code"
              />
            </p>
            <textarea name="body">
            </textarea>
          </form>
        </div>
            
    )
}

export default NoteForm