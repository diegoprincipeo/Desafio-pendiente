import React from "react";
const Comentario = ({data:{Usuario, Post, Like, Fecha, id}}) => {
    return (
    <article>
        <strong>{Usuario} dijo: </strong>
        <p>{Post}</p>
        <em>{Like}Likes - {Fecha}</em>
        <button>Like</button>
    </article>
    );
};
export default Comentario;