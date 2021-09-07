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

const sumarLike = async(id) => {
    let comentariosRemotos = database.collection("Post");
    
    let comentarioLikeado = comentariosRemotos.doc(id);

    let likesAnteriores = await comentarioLikeado
    .get()
    .then((res) => res.data().Like);

    comentarioLikeado.update({
        Like: likesAnteriores + 1
    })
    .then(() => obtenerComentarios())
    .catch((err) => alert("Error: ",err));
};

const borrarTodos = async() => {

    let comentariosRemotos = database.collection("Post");

    const query = await comentariosRemotos.get();
    const batch = database.batch();
    query.docs.forEach((Comentario) => batch.delete(Comentario.ref));
    batch.commit();

    alert("Post eliminado")
    obtenerComentarios();
};

    return (
        <div>
            <Agregar agregarComentario={agregarComentario} />
            <section>
                {comentarios.map((item) => (
                    <Comentario data= {item} key={item.id} sumarLike={sumarLike} />
                ))}
            </section>
            <button onClick={borrarTodos}>Borrar Todos</button>
        </div>
    );
};

export default Container;