import React from "react";
const Comentario = ({data:{Usuario, Post, Like, Fecha, id },sumarLike,}) => {
    return (
    <article>
        <strong>{Usuario} dijo: </strong>
        <p>{Post}</p>
        <em>{Like}Likes - {Fecha}</em>
        <button onClick={() => sumarLike(id)}>Like</button>
    </article>
    );
};
export default Comentario;