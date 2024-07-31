import './App.css';
import React, { Component } from 'react';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import db from '../firebase';
import Grid from './Grid';
import Form from './Form';

class App extends Component {
    constructor(props) {
        super(props);
        this.updateData = this.updateData.bind(this);
        this.deleteData = this.deleteData.bind(this);
        this.state = {
            contacts: []
        }
    }

    async updateData() {
        const contacts = await getDocs(collection(db, "contacts"));
        const contactsFinal = contacts.docs.map(doc => ({...doc.data(), id: doc.id}));
        this.setState({
            contacts: contactsFinal
        })
    }

    async deleteData(docId) {
        await deleteDoc(doc(db, "contacts", docId));
    }

    componentDidMount() {
        this.updateData();
    }

    render() {
        return (
            <div>
                <div className='navbar-fixed'>
                    <nav className='blue lighten-2'>
                        <div className='nav-wrapper'>
                            <a href='/' className='brand-logo center'>Contacts</a>
                        </div>
                    </nav>
                </div>
                <div>
                    <Form />
                    <Grid items={this.state.contacts} deleteData={this.deleteData}/>
                </div>
            </div>
        );
    }
}

export default App;
