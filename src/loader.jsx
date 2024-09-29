const Loader = () => {
    return (
        <>

            <div style={{
                width: '100%',
                height: '100vh',
                position: 'fixed',
                top: 0,
                left: 0,
                display: 'flex',
                placeContent: 'center',
                placeItems: 'center',
                backgroundColor: '#fff',

            }}>
                <i className="fa-solid fa-spinner fa-3x fa-spin"></i>
            </div>

        </>
    )
}

export default Loader