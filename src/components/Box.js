function Box({ value,index,boxClick}) {
    return (
        <div onClick={()=>{
            boxClick(index)
        }} style={{
            width: '100px',
            height: '100px',
            display: 'flex',
            background: '#3333330F',
            fontSize:'30px',
            fontWeight:'bold',
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <p>{value}</p>
        </div>
    )
}

export default Box