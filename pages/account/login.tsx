import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import PocketBase from 'pocketbase'
import { FormEvent, useContext, useEffect, useState } from 'react';
import { Alert, Button, Col, Form, Input, Row, Typography } from 'antd';
import PocketbaseContext from '../../modules/PocketbaseContext';

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginData, setLoginData] = useState<String>();
  const [loginError, setLoginError] = useState<String>();
  const pocketbase = useContext(PocketbaseContext);

  const onLogin = (e) => {

    pocketbase.collection('users').authWithPassword(username, password)
      .then(value => setLoginData(value.token))
      .catch(error => setLoginError(error.message));

  }
  const onUsernameChange = (e: FormEvent) => setUsername(e.target.value);
  const onPasswordChange = (e: FormEvent) => setPassword(e.target.value);

  return (<>
    <Row justify="center" align="middle">
      <Col>
        {loginData != undefined && <Alert message={loginData} type='info' />}
        {loginError != undefined && <Alert message={loginError} type='error' />}
        <Typography.Title level={1}>Sign in to App</Typography.Title>
        <Form onFinish={onLogin}>
          <Form.Item label="Username" name="username"><Input onInput={onUsernameChange} placeholder="johny@appleseed.net" /></Form.Item>
          <Form.Item label="Password" name="password"><Input onInput={onPasswordChange} type="password"/></Form.Item>
          <Form.Item><Button type="primary" htmlType='submit'>Sign In</Button></Form.Item>
          
        </Form>
      </Col>


    </Row>


  </>)
}
