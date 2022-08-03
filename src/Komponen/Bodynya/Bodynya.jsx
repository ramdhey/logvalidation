import React from "react";
import './Bodynya.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import login from './Image/login.svg';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

import * as Validator from 'validatorjs';

const Input = ({ label,type,name,onChange }) => {
    return(
        <div>
            <label>{label}:</label>
            <br />
            <input type={type} name={name} onChange={e=>onChange(e.target.value)}/>
            <br />
        </div>
    )
}

const ShowError = ({ error }) => {
    return(
        <ul style={{color: 'red',marginleft:'-20px'}}>
            {
                error.map((error,index)=><li key={index}>{error}</li>)
            }

        </ul>
    )
}

export default class Bodynya extends React.Component {
    state = {
        email: '',
        password: '',
        error: []
    }

    hanldeLogin = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        
        let data = { email,password};
          
          let rules = {
            email: 'required|email',
            password: 'min:8|required'
          };

        let validation = new Validator(data, rules);
        validation.passes();
        //jika validasi sesuai rules maka alert sukses dan kembali ke halaman login
        if(validation.fails()){
            alert('Login Sukses');
            this.props.history.push('/');
        }
        //jika tidak sesuai rules maka alert gagal dan tampilkan error
        else{
            alert('Login Gagal');
            this.setState({error:
                [alert(...validation.errors.get('email')),
                alert(...validation.errors.get('password'))]
            })
        }
           }
  render() {
    return (
      <div className="Base container-fluid p-5  text-white" style={{ backgroundColor: '#212529' }}>
        <div className="py-5 text-center p-5">
            <div className="p-5 ini">
                <Container fluid  className="p-5 text-center">
                    <Card className="cardini" style={{ width: '550px' ,height: '500px' } } border="info">
                        <Card.Body>
                            <Card.Title>
                                <img
                                    src={login}
                                    width='100'
                                    alt=''
                                    loading='lazy'
                                    />{' '}
                            </Card.Title>
                            <Card.Title className="mt-3 mb-5">
                                <h3>Login Page</h3>
                            </Card.Title>
                            <Form onSubmit={this.hanldeLogin}>
                                <Form.Group className="mb-3" controlId="formBasicEmail "  >
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" className="text-white mb-3" style={{ backgroundColor: '#ff000000' }} 
                                        onChange={value=>this.setState({email: value})} />
                                    
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" className="text-white mb-3" style={{ backgroundColor: '#ff000000' }} 
                                        onChange={value=>this.setState({password: value})}/>
                                </Form.Group>
                                
                                <Button variant="primary" type="submit" className="loginHandle">
                                    Login
                                </Button>
                            </Form>
                            
                            
                        </Card.Body>
                    </Card>


                </Container>
                
            </div>
        
        </div>
        
      </div>
    );
  }
}