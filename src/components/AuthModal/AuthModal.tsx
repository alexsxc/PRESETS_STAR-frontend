import React, { useState } from 'react'
import './AuthModal.css'

interface AuthModalProps {
    isOpen: boolean
    onClose: () => void
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) {
        return null
    }

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <button className="close-button" onClick={onClose}>X</button>
                <h2>Login / Register</h2>
                <form>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AuthModal
