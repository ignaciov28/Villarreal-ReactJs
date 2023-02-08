const viewport = {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
}

export const styles = {
    container:{
        display: viewport.width > 500 ? "flex" : "none",
        flexDirection: "row",
        justifyContent: "space-between",
        alingItems: "center",
        width: "100%",
        backgroundColor: "black",
    },
    img: {
        marginTop: 20,
        marginLeft: 20,
        width: 100,
        height: 20,
    },

    h1: {
        color: "white",
        fontSize: 20,
        marginTop: 20,       
    }
}