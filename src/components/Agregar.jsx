import react from "react";

const Agregar = ({ agregarComentario }) => {
    const manejarSubmit = (ev) => {
        ev.preventDefault();

        let Usuario = ev.target.Usuario.value;
        let Post = ev.target.Post.value;

        agregarComentario(Usuario, Post);

    };
    return(
        <form>
            <label>Usuario:</label>
            <imput type="text" placeholder="Ingresa tu nombre" id="Usuario" />
            <label>Post:</label>
            <textarea placeholder="Ingresa tu Comentario" id="Post" />
            <button type="submit">Postear</button>
        </form>
    );
};

export default Agregar;