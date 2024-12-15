import React from 'react';

const User = () => {
    return (
        <div className="container mt-4">
            <div className="row md-5 p-4 bg-success rounded-1 align-items-start">

                {/* Título y Tabla de Mi Perfil */}
                <div className="col-12 col-md-6 mb-4">
                    <div className="row">
                        {/* Título "Mi perfil" */}
                        <div className="col-12 d-flex align-items-center">
                            <h4 className="user-title adlam-display-regular">Mi perfil</h4>
                            <h6 className="ms-2 fa-solid fa-pencil mt-2"></h6>
                        </div>
                    </div>
                    {/* Tabla de Mi Perfil */}
                    <div className="card shadow-sm p-4 rounded-5">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="nombre" className="form-label">Nombre</label>
                                <input type="text" id="nombre" className="form-control" placeholder="Nombre de usuario" disabled />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" id="email" className="form-control" placeholder="Ingresa tu email" readOnly />
                            </div>
                            <div className="mb-3">
                                <a className="text-primary nunito">Cambiar contraseña</a>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="current-password" className="form-label">Contraseña actual</label>
                                <input type="password" id="current-password" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="new-password" className="form-label">Nueva contraseña</label>
                                <input type="password" id="new-password" className="form-control" />
                            </div>
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <button type="submit" className="btn btn-primary rounded-pill btnStart">Guardar</button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Título y Tabla de Mis Publicaciones */}
                <div className="col-12 col-md-6 mb-4">
                    <div className="row">
                        {/* Título "Mis publicaciones" */}
                        <div className="col-12">
                            <h4 className="user-title adlam-display-regular">Mis publicaciones</h4>
                        </div>
                    </div>
                    {/* Tabla de Mis Publicaciones */}
                    <div className="card shadow-sm p-4 rounded-5">
                        <ul className="list-group">
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Mascota encontrada: OS...
                                <span>
                                    <i className="fa-solid fa-pencil me-2"></i>
                                    <i className="fa-regular fa-trash-can"></i>
                                </span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Mascota perdida: Canela
                                <span>
                                    <i className="fa-solid fa-pencil me-2"></i>
                                    <i className="fa-regular fa-eye-slash"></i>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default User;
