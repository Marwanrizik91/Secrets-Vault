import React from 'react'

export default function AddSecretForm() {
    return (
        <div className="popup-feed-add" id="addFeedForm">
            <form>
                <label>Whats your secret?</label>
                <input type="text" required />
                <button>Share</button>
            </form>
        </div>
    )
}
