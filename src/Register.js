import React from 'react';
import './register.css';

class Register extends React.Component {
    render() {

        return (
            <div className="container">
                <form className="form-group" onSubmit={this.handleSubmit}>
                    <fieldset className="">
                        <h1>Registrar un Chef</h1>
                        <div className="form-row">

                            <div className="form-group col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                <label className="" htmlFor="inlineFormInputGroup">Nombre</label>
                                <input onChange={this.handleInput} id="personName" name="personName" className="form-control mb-2" type="text" placeholder="Nombre" required></input>
                            </div>

                            <div className="form-group col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                                <label className="" htmlFor="inlineFormInputGroup">Teléfono</label>
                                <input onChange={this.handleInput} id="personPhone" name="personPhone" className="form-control mb-2" type="tel" placeholder="Teléfono" required></input>
                            </div>

                            <div className="form-group col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                                <label className="" htmlFor="inlineFormInputGroup">Email</label>
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">@</div>
                                    </div>
                                    <input onChange={this.handleInput} id="personEmail" name="personEmail" type="text" className="form-control" placeholder="Email"></input>
                                </div>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <label htmlFor="exampleFormControlFile1">Foto</label>
                                <input onChange={this.handleInput} id="" name="" type="file" className="form-control-file mb-2"></input>
                            </div>

                            <div className="form-group col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                                <label className="" htmlFor="inlineFormInputGroup">Sexo</label><br></br>
                                <div className="form-check-inline">
                                    <input onChange={this.handleInput} id="sex-female" name="sex" className="form-check-input" type="radio" value="hembra"></input>
                                    <label className="form-check-label" htmlFor="adio-btn-sexo"> Hembra</label>
                                </div>

                                <div className="form-check-inline">
                                    <input onChange={this.handleInput} id="sex-male" name="sex" className="form-check-input" type="radio" value="macho"></input>
                                    <label className="form-check-label" htmlFor="radio-btn-sexo"> Macho</label>
                                </div>
                            </div>

                            <div className="form-group col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                                <label className="" htmlFor="inlineFormInputGroup">Fecha de Nacimiento</label>
                                <input onChange={this.handleInput} id="birthdate" name="birthdate" className="form-control mb-2" type="date" placeholder="Fecha de Nacimiento"></input>
                            </div>
                        </div>

                        <div className="form-group col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                            <label className="" htmlFor="inlineFormInputGroup">Raza</label>
                            <select onChange={this.handleInput} id="" name="" className="form-control mb-2">
                                <option value="">Opcion 1</option>
                                <optgroup label="">
                                    <option value="1">1</option>
                                </optgroup>
                                <optgroup label="2">
                                    <option value="2">2</option>

                                </optgroup>
                            </select>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                <label className="" htmlFor="inlineFormInputGroup">Descripción</label>
                                <textarea onChange={this.handleInput} id="description" name="description" className="form-control mb-2"
                                    placeholder="Contanos algunas de tus especialidades"></textarea>
                            </div>
                        </div>

                    </fieldset>

                    <fieldset className="fieldset-buttons">
                        <div className="form-group col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <button type="submit" className="btn btn-primary mb-2">Registrar</button>
                            <button type="submit" className="btn btn-secondary mb-2">Vuelvo más tarde</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default Register;
