import { query } from '@firebase/firestore';
import React, { useState, useEffect } from 'react';

import { database } from '../firebase/firebase';
import Comentario from './Comentario';

const Container = () => {
    const [comentarios, setComentarios] = useState([]);

    const obtenerComentarios = async () => {
        let comentariosRemotos = database.collection("Post");

        let comentariosFetcheados = await comentariosRemotos
        .get()
        .then((query)  => 
            query.docs.map((item)  => ({ ...item.data(), id: item.id }))
            );
        setComentarios(comentariosFetcheados);
    };

useEffect(() => {
    obtenerComentarios();
},[]);

const agregarComentario = (Usuario, Post) => {
    let comentarioNuevo = {
        Usuario: Usuario,
        Post: Post,
        Like: 1,
        Fecha: new Date ().toString(),
    };
    let comentariosRemotos = database.collection("Post");
    comentariosRemotos
    .add(comentarioNuevo)
    .then(() => alert("Post Agregado"))
    .catch((err) => alert("Error: ", err))
    .finally(() => obtenerComentarios());
};

    return (
        <div>
            <Agregar agregarComentario={agregarComentario} />
            <section>
                {comentarios.map((item) => (
                    <Comentario data= {item} key={item.id} />
                ))}
            </section>
        </div>
    );
};

export default Container;