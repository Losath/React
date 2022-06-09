import React from react

const SegundoComponente = () => {
    return(
        <form>
            <label>
                Email:
                <input type="text"/>
            </label>
            <label style={{display: "block"}}>
                Senha:
                <input type="text" />
            </label>
            <input type="button" value="Entrar" onClick={(e) => handleLogin(e)}/>
        </form>
    )
}

export default SegundoComponente