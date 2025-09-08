export const Card = ({children} : {children : React.ReactNode}) => {
    const cardStyle = {
        padding : "100px",
        margin : "10px",
        border : "1px solid #ddd",
        display : "flex",
        juntifyContent : "center",
        alignItems : "center"
    }

    return <div style={cardStyle}>{children}</div>
}