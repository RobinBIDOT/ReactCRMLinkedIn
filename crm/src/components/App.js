import './App.css';
import React, { Component } from 'react';
import { collection, onSnapshot, doc, deleteDoc } from 'firebase/firestore';
import { db } from './firebase';
import Grid from './Grid';
import Form from './Form';
import Footer from './Footer';

class App extends Component {
    constructor(props) {
        super(props);
        this.updateData = this.updateData.bind(this);
        this.deleteData = this.deleteData.bind(this);
        this.state = {
            contacts: []
        };
    }

    componentDidMount() {
        this.updateData();
    }

    updateData() {
        const contactsCollection = collection(db, "contacts");
        onSnapshot(contactsCollection, (snapshot) => {
            const contacts = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            this.setState({ contacts });
        });
    }

    async deleteData(docId) {
        await deleteDoc(doc(db, "contacts", docId));
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
                    <Grid items={this.state.contacts} deleteData={this.deleteData} />
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
