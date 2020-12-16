import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import quill from './quill.svg'
import newIco from './new.png'
import newHover from './new-hover.png'

const Sidebar = () => {
        return (
            <nav
                className={css(styles.sidebar)}>
                <div
                    className={css(styles.logo)}>
                    <img src={quill} className={css(styles.logoImg)} alt="Alif" />
                </div>
                <a 
                    className={css(styles.newNote)} 
                    href="/notes">
                    <img
                        className={css(styles.sideImage)}  
                        src={newHover} 
                        alt="New note" />
                    <img 
                        className={css(styles.sideImage, styles.newNoteImgHover)}
                        src={newIco} 
                        alt="New note" />
                </a>
                <div className={css(styles.Info)}>
                    <button className={css(styles.infoButton)}>
                    <i className={`far fa-lightbulb ${css(styles.fontawe)}`}></i>
                    </button>
                </div>
            </nav>
        )
}

const styles = StyleSheet.create({
    sidebar: {
        width: '6rem',
        backgroundColor: '#1E1E1E',
        padding: '0.5rem 0', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
    },
    logo: {
        fontFamily: "Fauna One",
        color: '#666',
        fontSize: '3rem',
    },
    logoImg: {
        width: '3rem',
        paddingLeft: '4px',
    },
    newNote: {
        marginTop: '2rem',
        position: 'relative',
        width: '40px',
    },
    newNoteImgHover:{
        ':hover': {
            opacity: 0
        },
    },

    sideButton: {
        backgroundColor: 'transparent',
        border: '0',
        color: '#008BF8',
        cursor: 'pointer',
    },
    sideImage: {
        position: 'absolute',
        left: '0',
        width: '100%',
        transition: 'opacity 0.30s ease-in-out',
    },
    Info: {
        position: 'absolute',
        bottom: '1rem',
        backgroundColor: 'transparent'
    },
    infoButton: {
        outline: 'none',
        backgroundColor: 'transparent',
        color: 'white'
    },
    fontawe: {
        fontSize: '2rem',
    }
})

export default Sidebar