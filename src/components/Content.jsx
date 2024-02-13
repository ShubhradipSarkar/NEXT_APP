import axios from 'axios';
import React from 'react'

function Content({historyId}) {
    console.log(historyId);
    const content = async() => {
        try {
            const data = await axios.put("/api/users/history_each",{
                _id: historyId,
            })
            console.log(data);
        } catch (error) {
            
        }
    }
  return (
    <div>Content</div>
  )
}

export default Content