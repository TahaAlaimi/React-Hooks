function Filter({searchTitle, setSearchTitle, minRate, setMinRate}) {
    return (
        <div style={{ marginBottom: '20px', textAlign: 'center' }}>
            <input
                type="text"
                placeholder="Search by title"
                value={searchTitle}
                onChange={e => setSearchTitle(e.target.value)}
                style={{ marginRight: '10px', padding: '5px' }}
            />
            <input
                type="number"
                min="0"
                max="5"
                step="0.5"
                placeholder="Rating"
                value={minRate}
                onChange={e => setMinRate(e.target.value)}
                style={{ padding: '5px', width: '80px' }}
            />
        </div>
    );
}

export default Filter;