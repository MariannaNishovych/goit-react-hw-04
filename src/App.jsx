import { useState, useEffect } from 'react'
import { getImages } from './components/services/api'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'

function App() {

    const [searchQuery, setSearchQuery] = useState('');

const handleSubmit = (query) => {
    setSearchQuery(query);
}
return (
    <div>
        <SearchBar onSubmit={handleSubmit}/>
    </div>
)


}

export default App
