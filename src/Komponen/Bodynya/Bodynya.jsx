import React from "react";
import './Bodynya.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import login from './Image/login.svg';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

// import * as Validator from 'validatorjs';



export default class Bodynya extends React.Component {
    state = {
        field:
        {email: '',
        password: ''},
        
        errors: {
            email: '',
            password: ''

        }
    }

    formOnValidation = (name,value) => {
        //if email !value return email harus di isi
        
        if(!value){
         return 'Mohon di isi !' 
        }
        if (name === 'email'){
            if(!value.includes('@')){
                return 'Email tidak valid !'
            }
        }if (name === 'password'){
            if(value.length <= 5){
                return 'Password harus lebih dari 5 karakter !'
            }
        }
          return false
 
 
 
     }




    formOnchange = (event) =>{
        const {field,errors} = this.state
        const {value,name} = event.target
        const error = this.formOnValidation(name,value)
        this.setState({
            field: {...field,[name]:value},
            errors: {...errors,[name]:error}

        })
        
        

    }


    formOnSubmitValidator = () => {
        const{field}= this.state
        const names = Object.keys(field)
        const errors = {}
        names.forEach((name)=> {
            const value = field[name]
            const error = this.formOnValidation(name,value)
            errors[name] = error
            
        })
        return errors
    }


    formOnSubmit = (event) => {
        event.preventDefault()
        const validasi = this.formOnSubmitValidator()
        const isError = Object.values(validasi).some((item)=> item !== false)

        if(isError){
            this.setState({
                errors: validasi
            })

            return

        }
        
        const {field} = this.state
        console.log(validasi ,field)
        //munculkan alert berhasil login
        alert('Selamat!!! Login Anda Berhasil')



    }
    

    

    

           
  render() {
    // console.log('Render')
    const {field,errors} = this.state
    
    return (
      <div className="Base container-fluid p-5  text-white" style={{ backgroundColor: '#212529' }}>
        <div className="py-5 text-center p-5">
            <div className="p-5 ini">
                <Container fluid  className="p-5 text-center">
                    <Card className="cardini" style={{ width: '550px' ,height: '700px' } } border="info">
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
                            <Form onSubmit={this.formOnSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail "  >
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control name="email"  type="email" placeholder="Enter email" className="text-white mb-3" style={{ backgroundColor: '#ff000000' }}
                                    value = {field.email}
                                    onChange={this.formOnchange} 
                                    />
                                    <p className="logError">{errors.email}</p>
                                    
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control name="password"  type="password" placeholder="Password" className="text-white mb-3" style={{ backgroundColor: '#ff000000' }}
                                    value = {field.password} 
                                    onChange={this.formOnchange}
                                    />
                                    
                                    <p className="logError">{errors.password}</p>
                                </Form.Group>
                                
                                <Button variant="primary" type="submit" className="loginHandle mt-3">
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